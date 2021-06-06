export {}

const array = [33, 'semmi', { nev: 'béla' }, true]

const array1: object[] = [{ name: 'test1' }, { name: 'test2' }]

type Object = {
    name: string
    age: number
    isOpen: boolean
}

let object: Object = {
    name: 'semmi',
    age: 33,
    isOpen: false
}

// Functions & types

function add(a: number, b: number) {
    return a + b
}

function print1(value: any) {
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array]
}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)
