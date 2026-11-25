let promise = new Promise((resolve, reject)=>{
    let age = 26;
    if(age >= 18)
    {
        resolve("can able to vote");
    }
    else
    {
        reject("cannot able to vote");
    }
})

.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


let city = new Promise((resolve,reject)=>{
    let cityName = "chandrapur";
    if(cityName === "chandrapur")
    {
        resolve("both are same city");
    }
    else
    {
        reject("both are not same city");
    }
})

.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
})


const laptop = new Promise((resolve,reject)=>{
    let laptop_model = "hp";
    if(laptop_model === "dell")
    {
        resolve("both are same laptop");
    }
    else
    {
        reject("both are not same laptop");
    }
})
.then((laptop)=>{
    console.log(laptop);
})
.catch((error)=>{
    console.log(error);
})


const phone = new Promise((resolve,reject)=>{
    let phone_model = "iphone 16";
    if(phone_model === "iphone 16")
    {
        resolve("both are same phone");
    }
    else
    {
        reject("both are not same phone");
    }
})

const mark = new Promise((resolve,reject)=>{
    let score = 87;
    if(score >= 75)
    {
        resolve("you are pass");
    }
    else
    {
        reject("you are fail");
    }

})

const fruit = new Promise((resolve,reject)=>{
    let fruit_name = "apple";
    if(fruit_name==="apple")
    {
        resolve("healty");
    }
    else
    {
        reject("unhealty");
    }
})

Promise.all([phone,mark,fruit])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })