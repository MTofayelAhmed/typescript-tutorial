class Counter {
 static   count: number = 0;
    increment (){
        Counter.count = Counter.count+ 1
    };
    decrement (){
        Counter.count = Counter.count -1
    }

}

const instance1 = new Counter

instance1.increment()
const instance2 = new Counter

instance2.increment()