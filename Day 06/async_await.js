function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

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
            const watering = true;

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
        const trashing = true;

        if(trashing){
            resolve("You take out the trash");
        }
        else{
            reject("You DIDN'T take out the trash");
        }
    })
}

async function allChores(){
    try {
        const walkdog = await walkDog()
        console.log(walkdog);

        const waterin = await watering()
        console.log(waterin);

        const trash = await take_out_trash()
        console.log(trash);

        console.log("You completed the all the chores");
    } catch (error) {
        console.log(error);
    }
    
}

allChores()