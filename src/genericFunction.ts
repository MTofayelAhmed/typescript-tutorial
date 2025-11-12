// const createArrayWithString  = (value: string)=> {
//     return [value]
// }
// const createArrayWithNumber  = (value:number )=> {
//     return [value]
// }
// const createArrayWithObj  = (value: {id: number, name: string})=> {
//     return [value]
// }




const createArrayWithGeneric = <T>(value: T)=> {
return [value]
}

const arrString = createArrayWithGeneric("apple")
const arrNumb = createArrayWithGeneric(100)
const arrObj = createArrayWithGeneric({id:222, name: "ajfdksajf"})


// tuple 
const createArrayWithTuple = (param1: string, param2: number)=> {
    return [param1, param2]
}


const tupleArr = createArrayWithTuple("ahmed", 222)


const createArrayTupleWithGeneric =<X, Y> (param1: X, param2: Y)=> {
    return [param1, param2]
}

const res1 = createArrayTupleWithGeneric("stong", true)