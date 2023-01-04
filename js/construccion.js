alert("This site is under construction / Este sitio se encuentra en construccion");

const spanworks = document.getElementById("span-works");


const escribirworks = (text = '', tiempo = 200, etiqueta = '') => {
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

escribirworks("Some of my works.   ",100, spanworks);