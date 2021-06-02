//Event loop,

const Uno=()=>{
    console.log("I am One");
}

const Dos=()=>{
    setTimeout(()=>{
        console.log("HEY BUDDY!");
    },3000);
    console.log("I am Two");
}

const Tres=()=>{
    console.log("I am Three");
}

Uno();
Dos();
Tres();
