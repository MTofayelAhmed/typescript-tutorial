class Counter {
 static count: number = 0;
  static  increment (){
     return   Counter.count = Counter.count+ 1
    };
  static  decrement (){
      return  Counter.count = Counter.count -1
    }

}

// const instance1 = new Counter

// instance1.increment()
// const instance2 = new Counter

// instance2.increment()

// when we use static word . we dont need to create instances to increment or decrement .  we can directly do that 

console.log(Counter.increment())