$('h1').css('color', 'red')

$('h2').addClass('second-title margin-50')

$('h1').text('olá')

$('button').html('<em>hey</em>')

console.log($('img').attr('src'))

$('a').attr('href', 'https://www.google.com')

$('h1').click(function () {
  $('h1').css('color', 'purple')
})

/*for (var i = 0; i < 5; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    document.querySelector('h1').style.color = 'purple'
  })
} //em JS*/

$('button').click(function () {
  $('h1').css('color', 'purple')
}) //com jQuery

$('input').keypress(function (event) {
  console.log(event.key)
}) //mostra as teclas pressionadas

$(document).keypress(function (event) {
  console.log(event.key)
}) //seleciona o documento inteiro para a função acima

$(document).keypress(function (change) {
  $('h1').text(change.key)
}) //altera o conteúdo do h1 com a tecla pressionada

$('h1').on('mouseover', function () {
  $('h1').css('color', 'purple')
})

$('h1').before('<button>New</button>')

//$('button').remove()

$('button').click(function () {
  $('h1').hide()
}) //qualquer botão clicado will hide h1

$('button').click(function () {
  $('h1').animate({ opacity: 0.1 })
})

$('button').click(function () {
  $('h1').slideUp().slideDown().animate({ opacity: 0.1 })
})
