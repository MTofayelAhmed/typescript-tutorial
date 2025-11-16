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
  param.getSleep( )
}


const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()
getSleepingHour(person1)

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  // area= pi*r*r
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  // area= height*width

  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);