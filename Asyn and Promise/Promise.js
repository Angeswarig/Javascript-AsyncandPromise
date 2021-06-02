
const Uno= () => {
    return "I am One";
};

// const Dos= async () => {    //async is like promise to do somehow in future,
//     setTimeout(() => {
//     return "I am Two";   
//     },3000);
    
// };

const Tres= () => {
    return "I am Three";
};

const Dos=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve ("I am Two");   
        },3000); 
    });
};

const callMe= async () =>{
    let ValOne=Uno();
    console.log(ValOne);
    
    let ValTwo= await Dos();
    console.log(ValTwo);
    
    let ValTres=Tres();
    console.log(ValTres);

}

callMe();

