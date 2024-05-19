class Person{
    strength;
    constructor(nstrength = "I Can Walk"){
        this.strength = nstrength;
    }
};

let init = function(){
    console.log("log from init");
};

// export { Person as Human, init }
// export { Person, init }
export default Person;// default export
export { init } // named export