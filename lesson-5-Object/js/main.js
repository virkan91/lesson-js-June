


/* task - 1*/

    // function getVoteCount(obj){
    //  return obj.upvotes - obj.downvotes
    // } 
    // console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))
    // console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))
    // console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))


/* Task - 2*/

// function volumeOfBox(obj){
//  return obj.width * obj.length * obj.height
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))



/* Task - 3*/

    // function fiftyThirtyTwenty(n){
    // return obj = {Needs: n/100*50, Wants: n/100*30, Savings: n/100*20  }
    
    // }
    // console.log(fiftyThirtyTwenty(10000))
    // console.log(fiftyThirtyTwenty(50000))
    // console.log(fiftyThirtyTwenty(13450))
//{ "Needs": 5000, "Wants": 3000, "Savings": 2000 }



/* Task - 4 */

// function relationToLuke(key){
//     let Person = {
//         "Darth vader": "father",
//         "Leia": "sister",
//         Han: "brather in Law",
//         R2D2: "droid",
//     };
//     return `Luke, I am your ${Person[key]}`
// }
// console.log(relationToLuke("Darth vader"))
// console.log(relationToLuke("Leia"))
// console.log(relationToLuke("Han"))
// console.log(relationToLuke("R2D2"))


/* Task - 5 */

// function cityFacts(obj){
//   let str = {
//    name: "Paris",
//    population: "2,140,526",
//    continent: "Europe"
//   }
//  return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
// }
// console.log(cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe"}))
// console.log(cityFacts({ name: "Tokyo", population: "13,929,286", continent: "Asia"}))


/* Task - 6*/

// function totalAmountAdjectives(obj){
//   return Object.values(obj).length;

// }
// console.log(totalAmountAdjectives({ a: "moron" }))
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }))


/* Task - 7*/


    // function nSidedShape(n) {
    //     let obj={
    // 1:"circle",
    // 2:	"semi-circle",
    // 3:	"triangle",
    // 4	:"square",
    // 5	:"pentagon",
    // 6	:"hexagon",
    // 7	:"heptagon",
    // 8	:"octagon",
    // 9	:"nonagon",
    // 10	:"decagon",
            
    //     }
    //     return obj[n]
    // }

    // console.log(nSidedShape(3))
    // console.log(nSidedShape(1))
    // console.log(nSidedShape(9))



/* Task - 8*/

// function isInRange(num , obj){ 
//     return obj.min <= num && obj.max > num; 
//   } 
//   console.log (isInRange(4, { min: 0, max: 5 })); 
//   console.log (isInRange(4, { min: 4, max: 5 })); 
//   console.log (isInRange(4, { min: 6, max: 10 }))


/* Task - 9 */ 

// function moMe(){
  
// }
// console.log(moMe({ 1: "Mommy", 2: "please", 3: "help" }))




/* Task - 13 */ 

//   function maximumScore(obj){
//     return obj.reduce((a,b)=> a+b.score, 0)
//   }
//   console.log(maximumScore([
//     { tile: "N", score: 1 }, { tile: "K", score: 5 },
//     { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
//     { tile: "A", score: 1 }, { tile: "E", score: 1 }
//     ]))
//     console.log(maximumScore([
//     { tile: "B", score: 2 }, { tile: "V", score: 4 },
//     { tile: "F", score: 4 }, { tile: "U", score: 1 }, { tile: "D", score: 2 },
//     { tile: "O", score: 1 }, { tile: "U", score: 1 }
//      ]))

/* task - 14 */

// function addName(obj, key, num){
//     obj[key] = num
//     return obj
// }
// console.log(addName({}, "Brutus", 300))



function generation(num, str){
    const m = {
        "-3"  :   "great grendfather", 
        "-2"  :   "grendfather" ,
        "-1"  :  "father" ,
        "0"  :  "me"  ,
        "1" :  "son" ,
        "2" :  "grandson" ,
        "3" :    "great son" 
    }
    const f = {
        "-3"  :  "great grendmather",
        "-2"  :  "grendmather" ,
        "-1"  :  "mather" ,
        "0"  : "me!"  ,
        "1" :  "sister", 
        "2" :   "grandsister", 
        "3" :  "great sister" 
    }
};