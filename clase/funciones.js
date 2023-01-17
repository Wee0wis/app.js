const edad = prompt("ingresa tu edad");

    const verificacionEdad = (edad) => {
        if(edad > 100 || edad <= 0){
         console.log('esta edad no es correcta ingresa otra vez');
        }
        else if(edad>=18){
        console.log('eres mayor de edad');
        }else if (edad < 18){
        console.log('eres menor de edad');
        }
    }
    