const dia = prompt('ingresa un numero de la semana')

const verifDia = (dia) => {
    if(dia > 7 || dia < 1){
        console.log('este numero no concuerda, intenta otra vez');
    }
    else if(dia == 1){
        console.log('Lunes');
    } 
    else if (dia == 2){
        console.log('martes');
    }
    else if (dia == 3){
        console.log('miercoles');
    }
    else if (dia == 4){
        console.log('jueves');
    }
    else if (dia == 5){
        console.log('viernes');
    }
    else if (dia == 6){
        console.log('sabado');
    }
    else if (dia == 7){
        console.log('domingo');
    }
 
}
verifDia(dia);