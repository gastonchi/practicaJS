const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


function distributeGifts(packOfGifts, reindeers) {
    
    const pesoGifts = packOfGifts.map((elem)  => elem.length)
    const capacidadReindeers = reindeers.map((elem)  => elem.length * 2) 
    
    const pesoTotal = pesoGifts.reduce((a,b)=> a+b)
    const capacidadTotal = capacidadReindeers.reduce((a,b)=> a+b)
    console.log(pesoTotal)
    console.log(capacidadTotal)
    const totalRegalos = parseInt(capacidadTotal/pesoTotal)
    
    return  totalRegalos
  }
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2 