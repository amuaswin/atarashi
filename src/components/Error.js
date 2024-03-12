try {
    num = prompt('Enter a number')
    if(num==='')
    throw 'cannot be empty'
    if (isNaN(num))
        throw "Enter a valid number"
    console.log(num ** 2)
}
catch(error){
console.log(error)
}
finally{
    console.log('bye')
}



//Array

let name1=["Amu","Akhil","Sam","Mru"]
let Age=[25,23,21,22]
let cities=["Karur"]

///Add in end element

// name.push('Rana')
// name.push('Krish')
// name.pop()
// name.shift()
// name.splice(1,1)
// name.splice(1,1,'Ai')
//name.splice(1,0,"Aishiteiru")
// name1.slice(1,2)
name1.reverse()


console.log(name1)

// return(
//     <>
// Array:{name}
// Array:{name}
// </>
// )
