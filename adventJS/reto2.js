const year = 2023
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year, holidays) {
        
    let diasTrabajoPerdidos = 0;

    holidays.forEach(value =>{
        let mesDia = value.split("/")
        let mes = mesDia[0];
        let dia = mesDia[1];

        let fecha= new Date(year,mes-1,dia);
        
        (fecha.getDay()!=6 && fecha.getDay()!=0)? diasTrabajoPerdidos++ : "";
        
        
    })

    let horasExtras = diasTrabajoPerdidos*2;
    console.log(horasExtras);
    return horasExtras
    

    
}

countHours(year,holidays)