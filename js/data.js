const spantext = document.getElementById("span-text");


const escribirtexto = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont ++
        if (cont === arrayCaracteres.length){
            cont = 0
            etiqueta.innerHTML = ''
        }
    },tiempo)
}

escribirtexto("I'm a front-end developer.   ",100, spantext);



