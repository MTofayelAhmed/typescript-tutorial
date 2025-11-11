// type Assertion


const kgToGramConvertor = (input: string | number): number | string | undefined=> {
    if (typeof input === "number"){
        return input * .01
    }
    else if (typeof input === "string"){
        const [value]= input.split(" ");
        return `Converted Input is: ${Number(value)}`
    }
}

const result1 = kgToGramConvertor(2) as number
console.log({result1})
const result2 = kgToGramConvertor("2 kg")
console.log({result2})

// when we can oversure  and we can able to narrowDown type we can use typeAssertion