// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
 // console.log(cohort.split(""))

// a) Your answer:I think that we are going to get the words separarated so letters "E" "c" "h" "o"...
// b) Verify and explain: It was the same as I answer my return was the letters from the string.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, "LEARN Students"
// b) Verify and explain: I got undefined, now that I took more time ro read I see the reason. I think that is because in line 20 instead of name i
// was supposed to write "LEARN Student" to get that result.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 //console.log(multBy2)

// a) Your answer: I think that the result is going to be 8,10,12,14,16
// b) Verify and explain: I got it rigth I did my var numbers multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: Im going to get the odd numbers from my var 11,13,15 but I dont know if they are goong to be divided.
// b) Verify and explain: 11,13,15 this are the rumber that i got, I was rigth and now im more clear bout when they use % 2 1== 0 is just to get anything but the numbers that are even.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript", because in the console.log is enterig the var and languages and from there index 0.
// b) Verify and explain:"JavaScript"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
 //console.log(learnStudent)

// a) Your answer:I think that this is just going to add "George" to our class Learn, so insteat of "student: name" we are going to get "student: George"

// b) Verify and explain: I got rigth my variable just added to my class and my console log run the new version now with the name on it.
