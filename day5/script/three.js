"use strict";
/*
class Person{
    strength:string;
    constructor(nstrength:string = "I Can Walk"){
        this.strength = nstrength;
    }
};
 */
class Person {
    constructor(strength) {
        this.strength = strength;
        // empty
    }
}
;
let person1 = new Person("i can dance");
let person2 = new Person("i can sing");
console.log(person1.strength);
console.log(person2.strength);
class Hero extends Person {
    constructor(firstname, lastname, hstrength) {
        super(hstrength || "some other strength");
        this.firstname = firstname;
        this.lastname = lastname;
        this.power = 10;
        this.movies = ['avengers 1', 'avengers 2'];
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get accesspower() {
        return this.power;
    }
    set accesspower(npower) {
        this.power = npower;
    }
    setBooster() {
        this.power = this.power * this.power;
    }
}
Hero.version = 1001;
var hero = new Hero("tony", "stark");
console.log(hero.fullname());
console.log(hero.accesspower); // getter
hero.accesspower = 20; // setter
console.log(hero.accesspower); // getter
console.log(Hero.version); // accessing static property
console.log("############");
console.log(hero.strength); // 
var hero1 = new Hero("tony", "stark", "is invinsible");
console.log(hero1.strength); // 
