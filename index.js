// console.log('FIRST')
// setTimeout(()=>{
//   console.log('between')
// },1000)
// console.log('makes')


let p1  = new Promise((res , rej)=>{
  setTimeout(()=>{
    res('success')
  },3000)

})

async function callFun(){
  console.log('more')
  let pomOne = await p1
   console.log(pomOne)
  console.log('next')
}
callFun()

// DEEP COPY
let x = 10
let y = x
console.log(y)
x = 100
console.log(y)

// SHALLOW COPY
let arrX = [1,2,3,4,5]
let arrY = [...arrX]
console.log(arrY)
arrX.push(50)
console.log(arrY)


let xArr = [1,2,3]
let yArr = [1,2,3]

console.log([...xArr,...yArr])

let xValue = 1
// TO NUMBER
console.log(typeof parseInt( xValue))

// TO STRING
console.log(typeof  JSON.stringify(xValue))

