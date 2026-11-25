let mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 50000,
    ram: "8GB",
    storage: "256GB"
};

console.log(mobile);

console.log(mobile.brand);
console.log(mobile.price);

mobile.price = 55000;
mobile.ram = "12GB";
mobile.color = "Black";

console.log(mobile);

delete mobile.storage;

console.log(mobile);


let employee = {
    name: "Bala",
    id: 101,
    department: "IT",
    salary: 35000
};

console.log(employee);

console.log(employee.name);
console.log(employee.salary);

employee.salary = 40000;

employee.experience = 2;

console.log(employee);

delete employee.department;

console.log(employee);


class Student
{
    constructor(name, age, course)
    {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.course);
    }
}

let student1 = new Student("Bala", 22, "JavaScript");
let student2 = new Student("Ravi", 25, "Python");
let student3 = new Student("Priya", 23, "Testing");

student1.display();
student2.display();
student3.display();


class Mobile
{
    constructor(brand, model, price, storage)
    {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.storage = storage;
    }

    display()
    {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.price);
        console.log(this.storage);
    }
}

let mobile1 = new Mobile("Samsung", "Galaxy S24", 50000, "256GB");
let mobile2 = new Mobile("Apple", "iPhone 16", 70000, "128GB");
let mobile3 = new Mobile("Vivo", "Vivo V30", 30000, "256GB");

mobile1.display();
mobile2.display();
mobile3.display();