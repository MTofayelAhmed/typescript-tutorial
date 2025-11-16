class Person {
    getSleep (){
        console.log(`i am a normal person. I sleep for 8 hours`)
    }
}

class Student extends Person{
    getSleep(){
        console.log(`i am a student . i sleep 7 hours`)
    }
}

class NextLevelDeveloper extends Person{
    getSleep() {
       console.log(`i am a next level developer . i sleep for 6 hours`) 
    }
}
const getSleepingHour = (param: Person)=> {
  
}


const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()
getSleepingHour(person1)