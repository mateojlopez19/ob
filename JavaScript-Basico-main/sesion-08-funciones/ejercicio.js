const f = function(){
    return true;
};
console.log(f());

function eject5Sec(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Hola soy una promesa');
        }, 5000)
    })
}

async function callFunction(){
    const call = await eject5Sec();
    console.log(call);
}

callFunction();

//indices
function* generator(){
    let id = 0;
    
    while(true){
        if(id === 10){
            return "Final " + id;
        }
        
        id += 2;
        yield id;
    }
}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);



