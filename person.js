class Person{
    constructor(name,age,place,occupation){
        this.name=name;
        this.age=age;
        this.place=place;
        this.occupation=occupation;
    }

    toString(){
        return "Name: "+this.name+"\nAge: "+this.age+"\nPlace: "+this.place+"\nOccupation: "+this.occupation;
    }
}

const p=new Person("John",23,"Delhi","Project Manager");
console.log(p.toString());