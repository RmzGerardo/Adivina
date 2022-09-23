console.log('Hola mundo');


// let nombre = 'Gerardo';
// let apellido = 'Gonzalez';
// let edad = 30;

// console.log(nombre + ' ' + apellido + ' ' + edad);

// let num1 = parseInt(prompt('Ingresa un numero'));
// let num2 = parseInt(prompt('Ingresa otro numero'));
// alert(num1+num2);

// let nombr = prompt('Cual es tu nombre?');
// alert('Hola ' + nombr)


// let texto = prompt('Escriba el usuario para ingresar');
// console.log(texto);

// if(texto === 'admin'){
//     alert('Puedes pasar a la pagina');
// } else{
//     alert('No eres usuario de aqui, largo!!');
// }


// let miedad = parseInt(prompt('¿Cual es tu edad?'));

// if(miedad >= 18){

//     alert('Bienvenido a la pagina');
// }else{
//     alert('No eres mayor de edad');
// }

// let numUsuario = parseInt(prompt('Ingresa un muero del 1 al 10'));
// let names = prompt('como te llamas');

// console.log(parseInt(numUsuario));

// console.log(numUsuario + " Es: " + typeof numUsuario);
// console.log(names);


// if((numUsuario) <= 10){
//     console.log('Genial');
//     alert('Tu numero es: ' + numUsuario + ' y tu nombre es: ' + names);
// }else{
//     console.log('No genial');
// }



// let gustos = prompt(`
//     Eliga una opcion:
//     1. Ojitos Bonitos,
//     2. LLegamos a la disco,
//     3. Instant crush
// `);

// switch(gustos){
//     case "1":
//         alert('Que buena cancion elegiste, deberias dedicarla');
//         console.log('Que buena cancion elegiste');
//     break;

//     case "2":
//         alert("La cancion mas bellakosa del mundo");
//     break;

//     case "3":
//         alert("La cancion favorita de tu novio");
//     break;
//     default:
//         alert('Elige una opcion correcta')
//         console.log('Elige una opcion correcta');
// }


let num = 0;

while (num <= 10){
    console.log(num)
    num++;
    
} 


function suma(numA,numB){
    let resultado;
    resultado = numA + numB;
    return resultado;
}

function imprimirNombre(nombre){
    console.log('Gerardo');

    return "Hola " + nombre;
}

console.log(imprimirNombre('Monica'));


console.log(suma(9,1));


// function getRandomInt(min,max){
//     return Math.floor(Math.random() * (10 - 1)) + 1;
// }
// console.log(getRandomInt)


// var x = Math.floor(Math.random()*20);

// console.log(x);


// let juegoAzar = Math.floor(Math.random() * (20 - 1)) +1;


// let usuario = parseInt(prompt('Ingresa un numero del 1 al 20 para adivinar'));
// console.log(juegoAzar);


// let vidas = 3;

// while (juegoAzar !== usuario && vidas > 0){
//     vidas--;
//     usuario = parseInt(prompt('Vuelve a intentarlo, tus vidas son: ' + vidas));
// }


let adivina = 'revolucion';

let ingresa = prompt('¿En que lugar estuvimos en nuestra primera cita?');

let vida = 2;

while(adivina !== ingresa && vida > 0){
    vida--;
    ingresa = prompt('Y segun sabes todo, piensale porque tus vidas son: ' + vida);
}

if(adivina === ingresa){
    alert('!Bien, si te acordaste¡');
}else{
    alert('Me decepcionas mucho');
}