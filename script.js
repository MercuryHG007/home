// Loader
var loader = true

minimumLoading = () => {
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    document.getElementById('loading').classList.add('removeLoader')
  }, 1000)
}

removeLoader = () => {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'
    loader = false
  }, 2000)
}

window.onload = (event) => {
  minimumLoading()
  removeLoader()
  document.body.style.overflow = 'scroll'
}
// --------------------------------------------------------------------------------

// Handling Pop-Up On Mobile View
var modal = document.getElementById('popup')
var btn = document.getElementById('btn')
var span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.classList.add('show')
  document.body.style.overflow = 'hidden'
}

span.onclick = function () {
  modal.classList.remove('show')
  document.body.style.overflow = 'scroll'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('show')
    document.body.style.overflow = 'scroll'
  }
}
//---------------------------------------------------------------------------------

// to top button
var totopbutton = document.getElementById("ToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    totopbutton.style.visibility = "visible";
  } else {
    totopbutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//-----------------------------------------------------------------------------------

// increase the height of message box automatically
$('textarea')
  .each(function () {
    this.setAttribute(
      'style',
      'height:' + this.scrollHeight + 'px;overflow-y:hidden;'
    )
  })
  .on('input', function () {
    this.style.height = 'auto'
    this.style.height = this.scrollHeight + 'px'
  })
// --------------------------------------------------------------------------------

// hide the url from showing
$(function () {
  $('a').each(function (index, element) {
    var href = $(this).attr('href')
    $(this).attr('hiddenhref', href)
    $(this).removeAttr('href')
  })
  $('.social-icons a, .resume, .pLinks').click(function () {
    url = $(this).attr('hiddenhref')
    window.open(url, '_blank')
  })
  $('.modal-container a, .nav-menu a , .otherLinks').click(function () {
    url = $(this).attr('hiddenhref')
    window.location.href = url
  })
})
// --------------------------------------------------------------------------------

//submit form
$('form').on('submit', function (e) {
  e.preventDefault()
  let name = $('#SenderName').val()
  let subject = $('#SenderSubject').val()
  let message = $('#SenderMessage')
    .val()
    .replace(/(\r\n|\n|\r)/gm, '%0D%0A')

  location.href =
    'mailto:ggharshit1@gmail.com' +
    ('?subject=' + subject) +
    ('&body=' + 'Hi Harshit, I am ' + name + ' and my message is: \n' + message)

  $('#SenderName').val('')
  $('#SenderSubject').val('')
  $('#SenderMessage').val('')
})

//auto fill skills section ----------
let skillsLoaded = false

$(window).on('scroll', function (event) {
  var scroll = $(window).scrollTop()
  if (
    scroll > 550 &&
    scroll < 1000 &&
    loader === false &&
    skillsLoaded === false
  ) {
    skillsLoaded = true
    $('.f85').addClass('eighty-five-percent')
    $('.f80').addClass('eighty-percent')
    $('.f75').addClass('seventy-five-percent')
    $('.f70').addClass('seventy-percent')
    $('.f65').addClass('sixty-five-percent')
    $('.f60').addClass('sixty-percent')
  }

  if (
    scroll > 2500 &&
    scroll < 3000 &&
    loader === false &&
    laptopOn === false
  ) {
    turnOnLaptop()
  }
})

$('.skillsLoading').on('click', function () {
  if (skillsLoaded === false) {
    setTimeout(() => {
      $('.f85').addClass('eighty-five-percent')
      $('.f80').addClass('eighty-percent')
      $('.f75').addClass('seventy-five-percent')
      $('.f70').addClass('seventy-percent')
      $('.f65').addClass('sixty-five-percent')
      $('.f60').addClass('sixty-percent')
      skillsLoaded = true
    }, 500)
  }
})

// ----------------------------------------------------------------------
// projects
var projects = [ 'health-prediction', 'flying-bee' , 'ipod', 'netflix']
let pid = 0
var laptopOn = false

let position = document
  .getElementsByClassName('display')[0]
  .getBoundingClientRect()

$('.project').each(function () {
  const self = this

  $(self).on('click', function () {
    loadNewVideo(self)
    removePreviousProperty()
    addnewProperty($(this).children()[1], self)
  })
})

const loadNewVideo = (self) => {
  let index = parseInt($(self).attr('data-id'))
  if (pid === index) return
  else pid = index
  let video = document.getElementById('player')
  let source = document.getElementById('source')

  video.pause()
  source.removeAttribute('src')
  source.setAttribute('src', `projects/${projects[index]}.mp4`)
  video.load()
}

const addnewProperty = (children, self) => {
  $(children).removeClass('none')
  $(self).addClass('left-border')
}

const removePreviousProperty = () => {
  $('.visit').addClass('none')
  $('.project').removeClass('left-border')
}

const turnOnLaptop = () => {
  laptopOn = true
  setTimeout(() => {
    $('.screen').addClass('fadeIn')
    setTimeout(() => {
      $('.icon').addClass('bounce')
      setTimeout(() => {
        $('.browser-container').addClass('b-fadeIn')
        $('.browser-container').removeClass('none')
        $('.project:first-child a').removeClass('none')
        $('.project:first-child').addClass('left-border')
      }, 1200)
    }, 1000)
  }, 1000)
}

setTimeout(() => {
  if (position.top > 0 && position.top < 200) {
    turnOnLaptop()
  }
}, 5000)
