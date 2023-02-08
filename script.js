const mainBg = document.getElementById('main-page')

let pepsiRegular = document.getElementById('pepsi-regular')
let pepsiDiet = document.getElementById('pepsi-diet')
let pepsiMax = document.getElementById('pepsi-max')



pepsiRegular.addEventListener('click', () => {
    document.getElementById('pepsi').src = "./assets/pepsi001.png"
    mainBg.style.background = '#0052be'
    
})
pepsiDiet.addEventListener('click', () => {
    document.getElementById('pepsi').src = "./assets/pepsi002.png"
    mainBg.style.background = '#C9002B'

})
pepsiMax.addEventListener('click', () => {
    document.getElementById('pepsi').src = "./assets/pepsi003.png"
    mainBg.style.background = '#000000'
})


function appearP2() { 
    let loader = document.getElementById('loader');
    let page1 = document.getElementById('first-page');
    let page2 = document.getElementById('second-page');
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "-100%";
        page1.style.display = "none";
        page2.style.display = 'block';
    }, 1000)
}

function appearP1() { 
    let loader = document.getElementById('loader');
    let page1 = document.getElementById('first-page');
    let page2 = document.getElementById('second-page');
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "-100%";
        page1.style.display = "block";
        page2.style.display = 'none';
    }, 1000)
}
