import {ActionType, div, mult, salareReducer, sub, sum} from "./tasks";


test("sum", () => {
    const salary = 100
    const add = 20


    const result = sum(salary, add)
    const result1 = mult(salary, add)
    const result2 = sub(salary, add)
    const result3 = div(salary, add)


    expect(result).toBe(120)
    expect(result1).toBe(2000)
    expect(result2).toBe(80)
    expect(result3).toBe(5)
})

test(" sum salaryReducer",()=>{
    const salary=100
    const action:ActionType={
        type:"sum",
        payload:20
    }

    expect(salareReducer(salary,action)).toBe(120)
})
test(" mult salaryReducer",()=>{
    const salary=100
    const action:ActionType={
        type:"mult",
        payload:20
    }

    expect(salareReducer(salary,action)).toBe(2000)
})
test(" sub salaryReducer",()=>{
    const salary=100
    const action:ActionType={
        type:"sub",
        payload:20
    }

    expect(salareReducer(salary,action)).toBe(80)
})
test(" div salaryReducer",()=>{
    const salary=100
    const action:ActionType={
        type:"div",
        payload:20
    }

    expect(salareReducer(salary,action)).toBe(5)
})

function increaseAge(us:UserType){
    us.age++
}
type UserType={
    name:string
    age:number
}

test("object test",()=>{
    var user:UserType={
        name:"Sergey",
        age:43
    }
   increaseAge(user)
    expect(user.age).toBe(44)
})
test("array test",()=>{
    var user=[
        {
        name:"Sergey",
        age:43
    },{
        name:"Sergey",
        age:43
    }]
  const admins=user
    admins.push({name:"Yo",age:10})
    expect(user[2]).toEqual({name:"Yo",age:10})
})
test("array test",()=>{
    var user=
        {
        name:"Sergey",
        age:43,
            address:{
            title:"Minsk"
            }
    }
    var user2=
        {
            name:"Olha",
            age:40,
            address:user.address
        }
        user2.address.title="Kanary"
    const admins=[user,user2,{name:"yo",age: 20}]
    const user3=admins
    admins[2].name="Alex"


expect(admins[2]).toEqual({name:"Alex",age: 20})


    expect(user2.address.title).toBe("Kanary")
})