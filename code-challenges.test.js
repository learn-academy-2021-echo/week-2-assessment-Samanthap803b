// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
///describe("numDiv" , () =>{
  var num1 = 15
  // Expected output: "15 is divisible by three"
  var num2 = 0
  // Expected output: "0 is divisible by three"
  var num3 = -7
 // Expected output: "-7 is not divisible by three"
describe("numDiv" , () =>{
  it("returns a string that tells your if the argument is divisible by 3" ,() => {
 expect(numDiv(num1)).toEqual("15 is divisible by 3")
 expect(numDiv(num2)).toEqual("0 is divisible by 3")
  expect(numDiv(num3)).toEqual("-7 is not divisible by 3")
})
})

// b) Create the function that makes the test pass.
 const numDiv = (number) => {
 if(number % 3 === 0){
 return `${number} is divisible by 3`
 } else{
  return `${number} is not divisible by 3`
 }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//I start to  tell in my describe what i want nounCap is waht m going to use
describe( "nounCap", () =>{
//now i use return to say what i want my computer to do
  it("return new array with the first letter of each word  capitalized" , () =>{
    //now with expect i go more in to detail
  expect(nounCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  expect(nounCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
   })
 })

// b) Create the function that makes the test pass.
//with my same argument as before nounCap im now going to declare it
const nounCap =(array) => {
// I tell what i want in return
  return array.map((elem)=>{
   return elem.charAt(0).toUpperCase() +
   elem.slice(1);

  })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2
//first im going to describe and im going to add my argument that is that i want  the index of the first vowel of my string.

describe("vowelIndex", () =>{
  //now im going to use it to describe what i want in return
  it("return the index of the first vowel in a string",() =>{
//now i do expect and here im going to write my function what i want but with especific data tomake my computer undestand me.
    expect(vowelIndex(vowelTester1)).toEqual["1"]
    expect(vowelIndex(vowelTester2)).toEqual["0"]
    expect(vowelIndex(vowelTester3)).toEqual["2"]
  })
})

// b) Create the function that makes the test pass.

const vowelIndex =(str) =>{
 // what im going to do now is return and i want the index location for the first vowel
return str.serch(/[a.e.i.o.u]/g)
}

//I was trying something new and it didnt work and to be honest im stuck i try different ways and i cant make this pass
