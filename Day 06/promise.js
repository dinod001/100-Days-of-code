
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function watering(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const watering = false;

            if(watering){
                resolve("You watering the plant");
            }
            else{
                reject("You DIDN'T watering the plant");
            }
        },2500)
    })
}

function take_out_trash(){
    return new Promise((resolve,reject)=>{
        const trashing = false;

        if(trashing){
            resolve("You take out the trash");
        }
        else{
            reject("You DIDN'T take out the trash");
        }
    })
}

walkDog().then(value=>{console.log(value);return watering()})
          .then(value=>{console.log(value);return take_out_trash()})
          .then(value=>{console.log(value);return console.log("You completed the all the chores")})
          .catch((error)=>{console.log(error)})