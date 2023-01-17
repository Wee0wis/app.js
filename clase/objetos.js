const persona = {
    nombre: 'emmanuel',
    edad: 20,
    genero: 'masculino',
    colorpelo: 'castaño',
    colorojos: 'verdes',
    nacionalidad: 'Mexicana',
    trabajo: 'decorador',
    email: 'emma@gmail.com',
}
/* const nombre = persona.nombre;
const edad = persona.edad;
const colorpelo = persona.colorpelo;
const colorojos = persona.colorojos;
const nacionalidad = persona.nacionalidad;
const trabajo = persona.trabajo;
const email = persona.email; */

const {nombre,edad,genero,colorpelo,colorojos,nacionalidad,trabajo,email} = persona;

console.log(`hola mi nombre es ${nombre} tengo la edad de ${edad} años mi genero es ${genero} mi cabello es de color ${colorpelo} 
al igual que mis ojos son de color ${colorojos} mi nacionalidad es ${nacionalidad} trabajo como ${trabajo} y si les interea saber algo de mi pueden mandarme un mensaje a mi correo ${email}`)