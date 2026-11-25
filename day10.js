function student(callback)
{
    console.log("you will have exam on next week");
    callback();
}

function exam()
{
    console.log("how you wrote your exam");
}

student(exam);


function result(callback)
{
    console.log("you can see your result after a week");
    callback();
}

function decleared()
{
    console.log("now you can see your result");
}

result(decleared);


function phone(model, price,callback)
{
    console.log(model);
    console.log(price);
    callback();
}

function discount()
{
    console.log("you will have 20% discount on phone");

}

phone("iphone",75000,discount);
phone("mi",35000,discount);
phone("vivo",25000,discount);

 function bill(callback)
 {
    console.log('you must pay the electricity bill');
    callback();
 }

 function amount()
 {
    console.log("you must pay 350");
 }

 bill(amount);


 function standInLine(callback)
 {
    console.log("waiting in the line to pay bill");
    callback();
 }

 function payment(callback)
 {
    console.log("payment is complete")
    callback();
 }

 function foodpreparing(callback)
 {
    console.log("food is being prepared");
    callback();

 }

 function foodreceived(callback)
 {
    console.log("food is received");
    callback();
 }

 standInLine(()=>{
    payment(()=>{
        foodpreparing(()=>{
            foodreceived(()=>{
                console.log("food is good");
            })
        })
    })
 })


 function searchproduct (callback)
 {
    console.log("searching  product to buy in amazon");
    callback();
 }

 function addtocard(callback)
 {
    console.log("adding product in card");
    callback();
 }

 function payment(callback)
 {
    console.log("payment is completed");
    callback();
 }

 function livestatus(callback)
 {
    console.log("you can track product");
    callback();
 }

 function productreceived(callback)
 {
    console.log("product is delivered to customer");
    callback();
 }

 searchproduct(()=>{
    addtocard(()=>{
        payment(()=>{
            livestatus(()=>{
                productreceived(()=>{

                })
            })
        })
    })
 })


 setTimeout(()=>{
    console.log("hello friend");
 },5000);