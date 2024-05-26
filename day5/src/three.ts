/* 
class Person{
    strength:string; 
    constructor(nstrength:string = "I Can Walk"){
        this.strength = nstrength;
    }
};
 */

class Person{
    constructor(public strength:string){
        // empty
    }
};


let person1 = new Person("i can dance");
let person2 = new Person("i can sing");

console.log(person1.strength);
console.log(person2.strength);

// interface
interface IHero{
    firstname:string;
    lastname:string;
    movies:Array<string>;
    fullname():string;
}

class Hero extends Person implements IHero{
    static version:number = 1001;
    private power = 10;
    public movies: string[] = ['avengers 1','avengers 2'];
    constructor(public firstname:string, public lastname:string, hstrength?:string){
        super(hstrength || "some other strength");
    }
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    get accesspower():number{
        return this.power;
    }
    set accesspower(npower:number){
        this.power = npower;
    }
    private setBooster():void{
        this.power = this.power * this.power;
    }
  }


    var hero = new Hero("tony","stark");
    console.log(hero.fullname());
    console.log(hero.accesspower);// getter
    hero.accesspower = 20;// setter
    console.log(hero.accesspower);// getter
    console.log(Hero.version);// accessing static property
    console.log("############");
    console.log(hero.strength);// 
    
    var hero1 = new Hero("tony","stark","is invinsible");
    console.log(hero1.strength);// 