function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados em tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade <= 10) {
             /* Criança */
                img.setAttribute('src', './img/foto-bebe-homem.png')
             } else if (idade <= 18) {
                /* Jovem */
                img.setAttribute('src', './img/foto-jovem-homem.png')

             } else if (idade <= 60) {
                 /* Adulto */
                 img.setAttribute('src', './img/foto-adulto-homem.png')
             } else {
                 /* Idoso */
                 img.setAttribute('src', './img/foto-idoso-homem.png')
             }
            } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade <= 10) {
                /* Criança */
                img.setAttribute('src', './img/foto-bebe-mulher.png')
                } else if (idade <= 18) {
                   /* Jovem */
                img.setAttribute('src', './img/foto-jovem-mulher.png')
                } else if (idade <= 60 ) {
                    /* Adulto */
                img.setAttribute('src', './img/foto-adulto-mulher.png')
                } else {
                    /* Idoso */
                img.setAttribute('src', './img/foto-idoso-mulher.png')
                }
        }
        if (idade > 120) {
            alert('[ERRO] Mundialmente ninguém que nasceu neste ano está vivo !')
        } else {
        res.style.textAlign = 'center'
        res.innerHTML = `Indentificamos ${genero} de ${idade} anos de idade.`
        res.appendChild(img)
        }
    }
}