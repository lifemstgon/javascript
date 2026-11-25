let student = {
    name : 'prana',
    mark : 400,
    location : 'chennai'
}
console.log(student);
console.log(student.mark);

let num = {
    num1 : 20,
    num2 : 30,
    num3 : 40,
    num4 :50
}
console.log(num);
console.log(num.num1);
console.log(num['num2']);

//to change value
num.num1 = "10"
console.log(num);

let laptop = {
    model : "hp",
    price : 75000,
    year : 2026
}
console.log(laptop);
console.log(laptop.year);
console.log(laptop['model']);

laptop.model = "dell"
console.log(laptop);

delete laptop.model;
console.log(laptop);

class Mobile
{
    price()
    {
        console.log("this is price");
    }

    model()
    {
        console.log("this is model");

    }

    year()
    {
        console.log("this is year")
    }
}

let mobiledetail = new Mobile();
mobiledetail.price();
mobiledetail.model();
mobiledetail.year();

class studens 
{
    exam()
    {
        console.log("we have exam");
    }

    result()
    {
        console.log("we can see result");
    }

    pass()
    {
        console.log("we are pass");
    }

    fail()
    {
        console.log("we are fail");
    }
}

let studensdetails = new studens();
studensdetails.exam();
studensdetails.fail();
studensdetails.result();
studensdetails.pass();


class shop 
{
    constructor(fruitName,price)
    {
        this.fruitName = fruitName;
        this.price = price;
    }
    display()
    {
        console.log(this.fruitName);
        console.log(this.price);
    }
}

let fruit1 = new shop("apple", 75);
let fruit2 = new shop("mango", 80);
let fruit3 = new shop("banana");

fruit1.display();
fruit2.display();
fruit3.display();

class course
{
    constructor(courseName,day)
    {
        this.courseName = courseName;
        this.day = day
    }

    structure()
    {
        console.log(this.courseName);
        console.log(this.day);
    }

}
let coursedetail = new course("javascript",12);
let coursedetail2 = new course("playwright",14);

coursedetail.structure();
coursedetail2.structure();