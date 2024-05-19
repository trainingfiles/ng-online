import Vijay from "./person.js";

class Hero extends Vijay{
    static version = 1001;
    // public properties
    firstname = "default";
    lastname = "default";
    // private properties
    #power = 10;
    constructor(nfname,nlname, hstrength){
        super(hstrength);
        this.firstname = nfname;
        this.lastname = nlname;
    }
    // public method
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    // getter
    get power(){
        return this.#power;
    }
    // setter
    set power(npower){
        this.#power = npower;
    }
    // private method
    #setBooster(){
        this.power = this.power * this.power;
    }
}

export { Hero };