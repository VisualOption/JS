// function task1(age_1 = 17, age_2 = 18, age_3 = 61){
//     if (age_1 < age_2){
//         console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
//     }
//     else if ((age_1 >= age_2) && (age_1 < age_3)){
//         console.log("Welcome  !")
//     } 
//     else if (age_1 > age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else {
//         console.log("Technical work")
//     }
// }
// task1()



// function task1(age_1 = "17", age_2 = "18", age_3 = "61"){
//     if (typeof(age_1 && age_2 && age_3) == 'number'){
//         if (age_1 < age_2){
//             console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
//         }
//         else if ((age_1 >= age_2) && (age_1 < age_3)){
//             console.log("Welcome  !")
//         } 
//         else if (age_1 > age_3){
//             console.log("Keep calm and look Culture channel")
//         }
//         else {
//             console.log("Technical work")
//         }  
//     }
//    else {
//     console.log("Error")
//     // alert("Error")
//    }
// }
// task1()


// function task1(age_1 = "17", age_2 = "18", age_3 = "61"){
//     if (typeof(age_1 && age_2 && age_3) !== 'number'){
//         let new_age_1 = parseInt(age_1)
//         let new_age_2 = parseInt(age_2)
//         let new_age_3 = parseInt(age_3)
//         if (new_age_1 < new_age_2){
//             console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
//         }
//         else if ((new_age_1 >= new_age_2) && (new_age_1 < new_age_3)){
//             console.log("Welcome  !")
//         } 
//         else if (new_age_1 > new_age_3){
//             console.log("Keep calm and look Culture channel")
//         }
//         else {
//             console.log("Technical work")
//         }
//     }
//    else {
//     console.log("Error")
//     // alert("Error")
//    }
// }
// task1()


const age2 = 18
const age3 = 60

const checkAge = function(age){
    if (age && !isNaN(age)){
        if (age <age2){
            console.log("You don’t have access cause your age is " + age + " It’s less then ")
        }
        else if (age >= age2 && age < age3){
            console.log("Welcome  !")
        }
        else if (age > age3){
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    }
    else console.log("Not an integer value")
}

let a = prompt("Enter your age")

checkAge(a)
// checkAge(17)

// function task1(age_1 = prompt('Enter 1st age', 17)){
//     if (typeof(age_1 && age_2 && age_3) !== 'number'){
//         let new_age_1 = parseInt(age_1)
//         let new_age_2 = parseInt(age_2)
//         let new_age_3 = parseInt(age_3)
//         if (new_age_1 < new_age_2){
//             console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
//         }
//         else if ((new_age_1 >= new_age_2) && (new_age_1 < new_age_3)){
//             console.log("Welcome  !")
//         } 
//         else if (new_age_1 > new_age_3){
//             console.log("Keep calm and look Culture channel")
//         }
//         else {
//             console.log("Technical work")
//         }
//     }
//    else {
//     console.log("Error")
//     // alert("Error")
//    }
// }
// task1()
