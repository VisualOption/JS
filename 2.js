let dog_show = true
let age = 17
let money = 900
let dog = false

if (age >=18 && money >= 1000 && dog){
    console.log("Get ticket")
}
else {
    if (age <18){
        console.log("Early")
    }
    if (money <1000){
        console.log("Keep calm and work hard")
    }
    if (!dog){
        console.log("Get a dog")
    }
}

// switch (dog_show){
//     case age >= 18:
//         console.log("Time to win")
//         break;
//     case money >= 1000:
//         console.log("Rich")
//         break;
// }

// count = 0
// while (count <10){
//     console.log(count, "Win!")
//     count++
// }

// while (count <10){
//     if (count %2 == 0){
//     console.log(count, "Even")
//     }
//     count++
// }

// for (let i = 0; i < 10; i++){
//     console.log(i, "Win!")
// }

// mm = [1,2,3,4,5,6,7,11,22,33,44,55]
// for (let i = 0; i < 10; i++){
//     console.log(mm[i], "Win!")
// }

mm = ["Alla", "Tatiana", "Mika", "Stefan", "Bob"]
for (i = 0; i < mm.length + 1; i++){
    console.log(i, mm[i], "Win!")
}