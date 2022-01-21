

const salary:number=100;

export const sum=(salary:number,a:number)=>salary+a
export const mult=(salary:number,a:number)=>salary*a
export const sub=(salary:number,a:number)=>salary-a
export const div=(salary:number,a:number)=>salary / a


export type ActionType={
    type:"sum"|"mult"|"sub"|"div"
    payload:number
}

export const salareReducer=(salary:number,action:ActionType)=>{
    switch (action.type){
        case "sum":
            return salary+action.payload && salary+action.payload

        case "mult":
            return salary*action.payload&& salary*action.payload

        case "sub":
            return salary-action.payload&& salary-action.payload

        case "div":
            return salary/action.payload&& salary/action.payload

        default: return salary

    }

}

var user={
    name:"Sergey",
    age:43
}