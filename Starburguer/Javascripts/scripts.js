function draw(){
    const fundo = document.getElementById('#cena')
    return  desenhar = fundo;
}

function stars(){
    let count = 150;
    let scene = document.querySelector('.scene');
    let i =0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 100 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);
        i++;
    }
}
stars();