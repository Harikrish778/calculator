// const btnClicked=(e)=>{
//     console.log(e.target.innerText)
//     console.log("hello all")
//     inp.value+=e.target.innerText
// }

// const getResult=()=>{
//     try{
//         const  result=eval(inp.value)
//         inp.value=result
//     }
//     catch{
//         inp.value="invalid expression"
//     }
// }

// const backSpace=()=>{
//     inp.value=inp.value.slice(0,(inp.value.length-1))
// }

// const clearInp=()=>{
//     inp.value=""
// }

const btnClicked=(e)=>{
    inp.value+=e.target.innerText
}

const backSpace=()=>{
    inp.value=inp.value.slice(0,inp.value.lenth-1)
}

const getResult=()=>{
    result=eval(inp.value)
    inp.value=result
}

const clearInp=()=>{
    inp.value=''
}