type LocalCityType = {
    title: string
    postCode: number
    countrytitle: string
}
type AddressType = {
    streetTitle: string
    city:LocalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id:number
    name: string
    age:number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}

const student:StudentType = {
    id:1,
    "name": "Ivan",
    age: 33,
    isActive: false,
    address: {
        streetTitle: "Deb 8",
        city: {
            title: "Taree",
            postCode: 2408,
            countrytitle: "Australia"
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "React"
        }
    ]
}

console.log(student.technologies[1].title)