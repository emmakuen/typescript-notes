// Basic Types
let id: number = 5
let company: string = "Emmaku"
let isPublished: boolean = true
let x: any = "Hello"
let age: number

// Array
let ids: number[] = [1, 2, 3, 4, 5]
let things: any[]

// Tuple
let person: [number, string, boolean] = [1, "Brad", true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Bill'],
    [3, 'Bran'],
]


// Union
let product_id: string | number = 22 

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}


// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid 
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces -- can't use with primitives or unions
interface UserInterface {
    readonly id: number // can't reassign
    name: string
    age?: number // Optional
}


const user1: UserInterface = {
    id: 1,
    name: 'John'
}

type Point = number | string
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number // can't reassign
    name: string
    register(): string // Optional
}


// Classes
class Person implements PersonInterface {
    id: number   // 3 possible types are private, public (by default), protected.
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad Traversy")


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Sarah", 'Developer')
console.log(emp.register())


// Generics --- placeholder for a type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['Brad', "John", "Jill"])

