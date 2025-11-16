class Person {
    name : string ;
    constructor(name: string){
        this.name = name 
    }
    getSleep (numOfHr: number){
        console.log(`${this.name} is sleep ${numOfHr}`)
    }
}

class Student extends Person {
    constructor(name: string){
        super(name)
    };
    getStudy (NumOfHr: number){
        console.log(`${this.name}will study ${NumOfHr} everyDay `)
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name)
    };
    takeClass (NumOfHr: number){
        console.log(`${this.name} will take ${NumOfHr} hours of class`)
    }
}

const getUserInfo = (user: Person){
    if(user)
}

const student1 = new Student("Mr. Student")
const teacher1 = new Teacher ("Mr. Teacher")

