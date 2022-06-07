function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#CF9F1F'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#712F19'
    } else {
        // Boa noite!
        document.body.style.background = '#072C46'
        img.src = 'fotonoite.png'
    }
}

