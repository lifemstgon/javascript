function course()
{
    console.log("hi, welcome to javascript class");
}

course()
course()
course()
course()

function books()
{
    console.log("english");
}
books()


function city()
{
    console.log("nagpur","chandrapur","gao");
}
city()


function courseid()
{
    console.log(101);
}
courseid()
courseid()

function phone(brand)
{
    console.log(brand);
}

phone("iphone");
phone("vivo");
phone("mi");
phone("realme");

function students(mark)
{
    console.log(mark);
}
students(100);
students(80);
students(50);
students(70);

function students(name,city,mark)
{
    console.log(name,city,mark);
}
students("arun","nagpur",90);
students("aru","nagpur",80);

//arrow function
let location = (street) => {
    console.log(street);
}
location("porur");
location("tambaram");

let place = (chandrapur) => {
    console.log(chandrapur);
}
place("indira nagar");
place("gol bazar");
place("krishna nagar");

let year = (months,date) => {
    console.log(months,date);
}
year("march",23);
year("jun",12);
year("july",);

let laptop = (brand,price,colour) =>{
    console.log(brand,price,colour);
}
laptop("hp",75000,"black");
laptop("dell",70000,"silver");

let book = (subject,price,pages) =>{
    console.log(subject,price,pages);
}
book("english",350,200);
book("marathi",250,300);

function welcome()
{
    console.log("Hello, Welcome to Javascript!");
}
welcome()

function name(friendname)
{
    console.log(friendname);
}
name("Rohan")

function totalmark(english,marathi,maths)
{
    console.log(english + marathi + maths);
}
totalmark(50,70,80);


let product = (vivo,mi) => {
    console.log(vivo -  mi);
}
product(30,10)

let value = (charger,headphone) =>{
    console.log(charger + headphone);
}
value(10,15)