import {
    addNewBooksToUser, CompanyType, deleteBookToUser,
    makeHairstyle,
    moveUser, updateBookToUser, updateCompanyTitle, updateCompanyTitleToUser,
    upgradeUserLaptop, UserCompany,
    UserType,
    UserWithLaptopAndBooksType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    //user = movedUser

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const copyUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('add new books to user', () => {
    let user: UserWithLaptopAndBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(copyUser)
    // expect(user.laptop).not.toBe(copyUser.laptop)
    // expect(copyUser.laptop.title).toBe('Macbook')
    expect(user.books.length).toBe(4)
    expect(copyUser.books.length).toBe(5)
})
test('update book to user', () => {
    let user: UserWithLaptopAndBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = updateBookToUser(user, 'js', 'ts');

    expect(user).not.toBe(copyUser)
    // expect(user.laptop).not.toBe(copyUser.laptop)
    // expect(copyUser.laptop.title).toBe('Macbook')
    expect(copyUser.books.length).toBe(4)
    expect(copyUser.books[2]).toBe('ts')
})
test('delete book to user', () => {
    let user: UserWithLaptopAndBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = deleteBookToUser(user, 'js');

    expect(user).not.toBe(copyUser)
    // expect(user.laptop).not.toBe(copyUser.laptop)
    // expect(copyUser.laptop.title).toBe('Macbook')
    expect(copyUser.books.length).toBe(3)
    expect(copyUser.books[2]).toBe('react')
})
test('update company Name to user', () => {
    let user: UserWithLaptopType & UserCompany= {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id:1, title:'Epan'}, {id:2, title:'Amazon'}]
    }

    const copyUser = updateCompanyTitleToUser(user,1, 'EPAM');

    expect(user).not.toBe(copyUser)
    // expect(user.laptop).not.toBe(copyUser.laptop)
    // expect(copyUser.laptop.title).toBe('Macbook')
    expect(copyUser.companies).not.toBe(user.companies)
    expect(copyUser.companies[0].title).toBe('EPAM')
})
test('update company Title in companies of user', () => {

    let companies : {[key:string]:CompanyType[]}= {
        'Dimych' : [{id:1, title:'Epan'}, {id:2, title:'Amazon'}],
        'Viktor' : [{id:2, title:'IT-INC'}, {id:2, title:'Google'}],
    }

    const copy = updateCompanyTitle(companies,'Dimych',1,'EPAM');

    expect(copy['Dimych']).not.toBe(companies['Dimych']);
    expect(companies['Viktor']).toBe(copy['Viktor']);
    expect(copy['Dimych'][0].title).toBe('EPAM')
})