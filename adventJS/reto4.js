const boxes = [
    { l: 2, w: 2, h: 2 },
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
]

function fitsInOneBox(boxes) {

    // ordeno las cajas de menor a mayor según su área
    boxes.sort((a,b)=> a.l*a.w*a.h - b.l*b.w*b.h)
    
    let resultado;
    let comparando = [];
    for (let i = 0; i < boxes.length; i++) {
        
        let ant = i-1; 
        
        if(i==0) continue;
        
        (boxes[ant].l < boxes[i].l && boxes[ant].w < boxes[i].w && boxes[ant].h < boxes[i].h) 
        ? comparando.push("entra")  : comparando.push("NOentra");
            
        
        
        
    }
    if(comparando.includes("NOentra")){ resultado = false } else { resultado = true }

    
    return resultado
}

fitsInOneBox(boxes)
