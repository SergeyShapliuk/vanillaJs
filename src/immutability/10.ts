

export type UserType={
    name:string
    hair:number
    address:{city:string,house?:number}

}
export type LaptopType={
    title:string
}

export type UserWithBooksType=userWithLaptopType & {
    books:string[]
}
export type userWithLaptopType=UserType  & {
    laptop:LaptopType
}
export type CompanyType= { id:number,title:string }

export type UserCompanyType={
    companies:Array<CompanyType>

}


export function makeHairStyle(u:UserType,power:number){
    const copy={
        ...u,
        hair:u.hair/power
    }
    // copy.hair=u.hair/power
    return copy
}

export function makeUserWithLaptop(u:userWithLaptopType,city:string){
    const copy={
        ...u,
    address:{...u.address,city:city}

    }
    // copy.hair=u.hair/power
    return copy
}
export function makeUserWithBooks(u:UserWithBooksType,book:string) {
    return {
        ...u,
        books: [...u.books,
        book,book]

    }

}
export function changeUserWithBooks(u:UserWithBooksType,oldBook:string,newBook:string) {
    return {
        ...u,
        books: u.books.map(m=>m===oldBook?newBook:m)

    }

}
export function removeBooks(u:UserWithBooksType,oldBook:string) {
    return {
        ...u,
        books:u.books.filter(f=>f!==oldBook)

    }

}
export function addCompanies(u:UserWithBooksType&UserCompanyType,id:number,company:string) {
    return {
        ...u,
        companies:u.companies.map(m=>m.id===id?{...m,title:company}:m)

    }

}
export function updateCompanies(u:{[key:string]:Array<CompanyType>},userName:string,id:number,company:string) {
let copy={...u}
    copy[userName]=copy[userName].map(m=>m.id===id?{...m,title:company}:m)




return copy
    }


