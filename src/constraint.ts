const addStudentToCourse = <T extends{id: number, name: string}>(studentInfo: T )=> {
    return {
        course: "Next Level",
        ...studentInfo

    }
}

const student1 = {
    id: 123, 
    name: "Mezba",
    hasPen: true,
}

const student2= {
    id: 123, 
    name: "Mezba",
    hasPen: true,
    isMarried: true,
    salary: 34
}

const student3 = {
    salary: 22,
    id: 222,
    name: "mezba"
}

// if we need to set some specific parameter , an object should contain to recognize as 
// a student we can use extends to that . for example , it will be really difficult to recognize student3 if it has no name and id 
const result1= addStudentToCourse(student1)
const result2= addStudentToCourse(student2)

const result3= addStudentToCourse(student3)