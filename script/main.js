function carregar() {
    var msn = document.querySelector('div#msn')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msn.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        foto.src = './imagem/Manha.svg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = './imagem/Tarde.svg'
        document.body.style.background = '#b9846f'
    } else {
        foto.src = './imagem/Noite.svg'
        document.body.style.background = '#515154'
    }
}
