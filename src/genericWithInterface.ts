interface Developer<T, V= null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  bike?: V
}

type PoorWatch = { heartRate: string; stopWatch: string };

const poorDeveloper: Developer<PoorWatch> = {
  name: "A",
  salary: 100,
  device: {
    brand: "BMW",
    model: "2015",
    releaseYear: "333",
  },
  smartWatch: {
    heartRate: "201",
    stopWatch: "ddd",
  },
};


const RichDeveloper : Developer<{
    heartRate: string;
    stopWatch: string;
    aiSupport: string
}, {
    model: string;
    brand: string

}>= {
   name: "A",
  salary: 100,
  device: {
    brand: "BMW",
    model: "2015",
    releaseYear: "333",
  },
  smartWatch: {
    heartRate: "201",
    stopWatch: "ddd",
    aiSupport: "perfect"
  }, 
  bike:{
    model: "PP",
    brand: "DD"
  }
}
