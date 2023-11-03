
console.log("------------------ejercicio 1------------------------");
//ejercicio 1//
let miNombre = "Marcela"
console.log("el primer nombre es " + miNombre);

console.log("------------------ejercicio 2------------------------");
//ejercicio 2//
let miApellido = "Arciniegas"
console.log("el primer apellido es " + miApellido);

console.log("------------------ejercicio 3------------------------");
//ejercicio 3//
let miEdad = 29
console.log("mi edad es " + miEdad);

console.log("------------------ejercicio 4------------------------");
//ejercicio 4//
let miMascota = "Tor"
console.log("el nombre de mi mascota es " + miMascota);

console.log("------------------ejercicio 5------------------------");
//ejercicio 5//
let edadMascota = 10
console.log("la edad de mi mascota es " + edadMascota);

console.log("------------------ejercicio 7------------------------");
//ejercicio 7//
let nombreCompleto = miNombre + " " + miApellido
console.log("mi nombre completo es " + nombreCompleto);

console.log("------------------ejercicio 8------------------------");
//ejercicio 8//
let textoPresentacion = {
    nombre: miNombre,
    apellido: miApellido,
    edad: miEdad,
    nombre_mascota: miMascota,
    edad_mascota: edadMascota
}
console.log(textoPresentacion);

console.log("------------------ejercicio 9------------------------");
//ejercicio 9//
let sumaEdades = miEdad + edadMascota
console.log("la suma de mi edad y la de mi mascota da " + sumaEdades);
let restaEdaddes = miEdad - edadMascota
console.log(" la resta de mi edad y la de mi mascota da " + restaEdaddes);
let multiplicacionEdaddes = miEdad * edadMascota
console.log(" la multiplicacion de mi edad y la de mi mascota da " + multiplicacionEdaddes);
let divisionEdaddes = miEdad / edadMascota
console.log(" la division de mi edad y la de mi mascota da " + divisionEdaddes);

console.log("------------------ejercicio 10------------------------");
//ejercicio 10//
let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
let edad = prompt("ingrese su edad")
let mascota = prompt("ingrese el nombre de su mascota")
let edad_mascota = prompt("ingrese la edad de su mascota")
let nombreCompletoingresado = nombre + " " + apellido
console.log("su nombre completo es " + nombreCompletoingresado);
let textoPresentacioningresado = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    nombre_mascota: mascota,
    edad_mascota: edad_mascota
}
console.log(textoPresentacioningresado);
let sumaEdadesingresado = edad + edad_mascota
console.log("la suma de su edad y la de su mascota da " + sumaEdadesingresado);
let restaEdadesingresado = edad - edad_mascota
console.log("la resta de su edad y la de su mascota da " + restaEdadesingresado);
let multiplicacionEdadesingresado = edad * edad_mascota
console.log("la multiplicacion de su edad y la de su mascota da " + multiplicacionEdadesingresado);
let divisionEdadesingresado = edad + edad_mascota
console.log("la division de su edad y la de su mascota da " + divisionEdadesingresado);

console.log("------------------ejercicio 11------------------------");
//ejercicio 11//
let estudiante = {
    nombreEstudiante: "david",
    apellidoEstudiante: "perez",
    edadEstudiante: 15,
    materiaPreferdida: "matematicas",
    nombreTutor: "claudia Restrepo"
}
console.table(estudiante);

console.log("------------------ejercicio 12------------------------");
//ejercicio 12//
let MascotaInfo = {
    nombreMascotaInfo: "tor",
    tipodeMascotaInfo: "tortuga",
    edaddeMascotaInfo: 15,
    EsTerrestreInfo: true,
    EsHerbivoro: true
}
console.table(MascotaInfo);

console.log("------------------ejercicio 13------------------------");
//ejercicio 13//
const frutas = ["manzana", "pera", "banano", "lulo", "sandia"];
console.log(frutas);

console.log("------------------ejercicio 14------------------------");
//ejercicio 14//
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log("------------------ejercicio 15------------------------");
//ejercicio 15//
const familia = [
    {nombre:"juan", edad:15},
    {nombre:"cris", edad: 6}, 
    {nombre:"carlos", edad:7},
    {nombre: "amparo", edad:8},
    {nombre: "alejo", edad:96}
];
console.log(familia);

console.log("------------------ejercicio 16------------------------");
//ejercicio 16//
let textoAleatorio = frutas[2] + " " + numeros[4] + " " + familia[5]
console.log(textoAleatorio);

console.log("------------------ejercicio 17------------------------");
//ejercicio 17//
let edadMia = prompt("ingrese su edad")
console.log("su edad es= " + edadMia);
let edadCompañero = prompt("ingrese la edad de su compañero")
console.log("la edad de su compañero es= " + edadCompañero);
let edadesIguales =  edadMia == edadCompañero
let soyMayor = edadMia > edadCompañero
let soyMenor = edadMia < edadCompañero
console.log("Mi edad es igual a la de mi compañero: " + edadesIguales );
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor );
console.log("Mi edad es menor a la de mi compañero: " + soyMenor );

console.log("------------------ejercicio 18------------------------");
//ejercicio 18//
let mi_edad = prompt("mi edad es ")
let edadMayor = 18
if (mi_edad >= edadMayor) {
    console.log("soy mayor de edad y mi edad es " + mi_edad);
} else {
    console.log("UD NO ES MAYOR DE EDAD");
}

console.log("------------------ejercicio 19------------------------");
//ejercicio 19//
let edadJuego = prompt("ingrese su edad ")
let estaturaJuego = prompt("ingrese su estatura en centimetros ")
let puedeSubiredad = 6
let puedeSubirestatura = 120

if (edadJuego > puedeSubiredad && estaturaJuego >120) {
    console.log("UD SI PUEDE SUBIR AL JUEGO");
} else {
    alert("UD PUEDE SUBIR AL JUEGO")
}

console.log("------------------ejercicio 20------------------------");
//ejercicio 20//
let pase = prompt("INGRESE POR FAVOR SI SU PASE ES VIP, NORMAL O LIMITADO")
let saldo = prompt("INGRESE POR FAVOR SU SALDO DISPONIBLE")
let puedepasarpase = "VIP"
let puedepasarsaldo = 1000
if (pase == puedepasarpase && saldo > puedepasarsaldo) {
    console.log("LA PERSONA PUEDE PASAR Y SU SALDO ES " + saldo);
} else {
    console.log("LA PERSONA NO PUEDE PASAR");
}
