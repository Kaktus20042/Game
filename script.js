document.onkeydown = checkButton;

let cude = {
    x: 0,
    y: 0,
    id: 'main'
}

function checkButton(e) {
    k = e || window.event;
    if (k.keyCode === 38) {
        //key "ArrowUp"
        cude.y -=5; 
        render (cude.id, cude.x, cude.y);
    }
    else if (k.keyCode === 40) {
        //key "ArrowDown"
        cude.y +=5; 
        render (cude.id, cude.x, cude.y);
    }
    else if (k.keyCode === 37) {
        //key "ArrowLeft"
        cude.x -=5; 
        render (cude.id, cude.x, cude.y);
    }
    else if (k.keyCode === 39) {
        //key "ArrowRight"
        cude.x +=5; 
        render (cude.id, cude.x, cude.y);
    }
    console.log(k);
}
function render (id, x, y){
    document.getElementById(id).style.top = y + 'px';
    document.getElementById(id).style.left = x + 'px';
}
render (cude.id, cude.x, cude.y);