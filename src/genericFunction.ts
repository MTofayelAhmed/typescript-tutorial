const createArrayWithString  = (value: string)=> {
    return [value]
}
const createArrayWithNumber  = (value:number )=> {
    return [value]
}
const createArrayWithObj  = (value: {id: number, name: string})=> {
    return [value]
}

const arrString = createArrayWithString("apple")
const arrNumb = createArrayWithNumber(100)
const arrObj = createArrayWithObj({id:222, name: "ajfdksajf"})


const createArrayWithGeneric = <T>(value: T)=> {
return [value]
}