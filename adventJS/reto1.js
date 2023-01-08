const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    
    const arr = gifts.map( elem =>{
        
        let ancho = elem.length
        const latIzq = "\n*";
        const latDer = "*\n";        
        let top = "**"  

        let i = 0        

        do{
            top+="*"
            i++
        }while(i<ancho)
        
        elem = top+latIzq+elem+latDer+top;
        return elem 
    })
    return arr
}
