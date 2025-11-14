// we will discuss condition type here 
type A = null ;
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false 


type RichPeopleVehicle = {
    bike: string;
    car: string; 
    ship: string
}


type checkVehicle <T>= T extends keyof RichPeopleVehicle ? true : false 

type HasBike = checkVehicle<"tractor">