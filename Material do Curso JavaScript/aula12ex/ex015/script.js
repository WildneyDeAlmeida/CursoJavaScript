function verificar(){
    var data = new Date()
    var ano = data.getFullYear()  // fullYear significa que irá pegar o ano com 4 digitos (2022).
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebemenino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovemhomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adultohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-velhohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebemenina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovemmulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adultamulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-velhamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)      // add a imagem após a resposta
    }
}