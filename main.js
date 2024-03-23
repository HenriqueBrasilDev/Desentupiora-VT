time = 10000,
currentImageIndex = 0,
images = document.querySelectorAll(".carrousel img"),
maximg = images.length,

texto = document.querySelectorAll(".carrousel_texto .texto"),


imgs = document.getElementById(".depoiomentos .container"),
perfil = document.querySelectorAll(".depoimentos .depoimento"),


contmenu = 0,
idx = 0;

function imgright(){
    images[currentImageIndex].classList.remove("selected")
    texto[currentImageIndex].classList.remove("selected")
    

    currentImageIndex++
    
    if (currentImageIndex >= maximg){
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected")
    texto[currentImageIndex].classList.add("selected")
    
    document.getElementById("radio"+currentImageIndex).checked = true;

    clearInterval(intervalimg);
    start();
}

function start(){
    intervalimg = setInterval(() => { imgright() }, time);
}

window.addEventListener("load", start)

function radiocheked(){

    texto[currentImageIndex].classList.remove("selected");
    images[currentImageIndex].classList.remove("selected");

    var radioInputs = document.querySelectorAll(".container-radios input");
    var selectedRadioIndex = -1;

    for (var i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            currentImageIndex = i;
            break;
        }
    }

    console.log(currentImageIndex)
    texto[currentImageIndex].classList.add("selected")
    images[currentImageIndex].classList.add("selected")
    
    clearInterval(intervalimg)
    start()
};


// media screen celular



function carrossel_depoimentos(){

    perfil[idx].classList.remove("selected")
    idx++;

    if(idx >= perfil.length){
        idx = 0;
    }

    perfil[idx].classList.add("selected")

}

setInterval(carrossel_depoimentos, 10000);




function descer_menu(){

    const btn_ham = document.getElementById('hamburguer')
    btn_ham.classList.toggle('anime_burg')

    const fadeIn = document.querySelector('.header nav ul')
    fadeIn.classList.toggle('ativo')


    // if (menu.style.display == "block"){
        
    //     menu.style.display = "none";
    // }
    // else {
    //     menu.style.display = "block";
    // }
    
}