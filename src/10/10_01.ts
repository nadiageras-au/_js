export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithLaptopAndBooksType = UserWithLaptopType & {
    books: string[]
}
export type CompanyType = {
    id: number
    title: string
}
export type UserWithCompany = UserWithLaptopType &{
    companies: CompanyType[]
}
export function makeHairstyle(u: UserType, power: number) {
    const uCopy = {
        ...u,
        hair: u.hair / power
    }
    // uCopy.hair =
    return uCopy
}
export function moveUser(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        address: {...u.address, title: title}
    }
}
export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    }
}

export function addNewBooksToUser(u:UserWithLaptopAndBooksType,newBook:string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}
export function updateBookToUser(u:UserWithLaptopAndBooksType,oldBook:string,newBook:string) {
    return {
        ...u,
        books: u.books.map(el=>el===oldBook?newBook:el)
    }
}
export function deleteBookToUser(u:UserWithLaptopAndBooksType,bookForDelete:string) {
    return {
        ...u,
        books: u.books.filter(b=>b!==bookForDelete)
    }
}
export function updateCompanyTitleToUser(u:UserWithCompany,idCompany:number, newTitle:string) {
    return {
        ...u,
        companies: u.companies.map(c=>c.id===idCompany ? {...c,title:newTitle} : c)
    }
}
export const updateCompanyTitle=(companies:{[key:string]:CompanyType[]},
                                   userName:string,
                                   idCompany:number,
                                   newTitle:string) => {

        let companyCopy ={...companies}
    companyCopy[userName] = companyCopy[userName].map(c=> c.id===idCompany ? {...c, title: newTitle } : c );
        return companyCopy
}