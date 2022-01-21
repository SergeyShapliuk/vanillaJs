import {
    addCompanies,
    changeUserWithBooks, CompanyType,
    makeHairStyle,
    makeUserWithBooks,
    makeUserWithLaptop, removeBooks, updateCompanies, UserCompanyType,
    UserType,
    UserWithBooksType,
    userWithLaptopType
} from "./10";






test("reference type test",()=>{
    let user:UserType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov"
        }
    }
    const awesomeUser=makeHairStyle(user,2)
    expect(user.hair).toBe(43)
    expect(awesomeUser.hair).toBe(21.5)
})

test("reference type test",()=>{
    let user:userWithLaptopType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov",
            house:12
        },
        laptop:{
            title: "ZenBook"
        }

    }
    const moveUser=makeUserWithLaptop(user,"Minsk")

expect(user.address.city).toBe("Minsk")
expect(user.address.city).toBe("Borisov")


})
test("reference type tests",()=>{
    let user:UserWithBooksType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov",
            house:12
        },
        laptop:{
            title: "ZenBook"
        },
        books:["ts","react","css"]

    }
    const moveUser=makeUserWithBooks(user,"js")

expect(moveUser.books[3]).toBe("js")
expect(user.books.length).toBe(3)
expect(moveUser.books.length).toBe(4)



})
test("reference type books",()=>{
    let user:UserWithBooksType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov",
            house:12
        },
        laptop:{
            title: "ZenBook"
        },
        books:["ts","react","css"]

    }
    const moveUser=changeUserWithBooks(user,"ts","js")

expect(moveUser.books[0]).toBe("js")
expect(user.books.length).toBe(3)
expect(moveUser.books.length).toBe(3)
expect(moveUser.books).toEqual(["js","react","css"])



})
test("remove  books",()=>{
    let user:UserWithBooksType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov",
            house:12
        },
        laptop:{
            title: "ZenBook"
        },
        books:["ts","react","css"]

    }
    const moveUser=removeBooks(user,"ts")

expect(moveUser.books[0]).toBe("react")
expect(user.books.length).toBe(3)
expect(moveUser.books.length).toBe(2)
expect(moveUser.books).toEqual(["react","css"])



})
test("add companies",()=>{
    let user:UserWithBooksType&UserCompanyType={
        name:"Sergey",
        hair:43,
        address:{
            city:"Borisov",
            house:12
        },
        laptop:{
            title: "ZenBook"
        },
        books:["ts","react","css"],
        companies:[{id:1,title:"EpamS"},{id:2,title:"It-incubator"}]

    }
    const addCompany=addCompanies(user,1,"Epam")



// expect(addCompany.companies).toBe(user.companies)
expect(addCompany.companies).toEqual([{id:1,title:"Epam"},{id:2,title:"It-incubator"}])
// expect(user.companies).toBe([{id:1,title:"Epam"},{id:2,title:"It-incubator"}])
// expect(addCompany.companies).toBe([{id:1,title:"Epam"},{id:2,title:"It-incubator"}])



})
test("update companies",()=>{
    let companies={
        "Sergey":[{id:1,title:"EpamS"},{id:2,title:"It-incubator"}],
        "Alex":[{id:1,title:"Epam"}]

    }
    const updateCompany=updateCompanies(companies,"Sergey",1,"Epam")



expect(updateCompany["Sergey"]).not.toBe(companies["Sergey"])



})