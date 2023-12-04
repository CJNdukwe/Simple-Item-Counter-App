let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

const increment = () => {
     count += 1
     countEl.textContent = count
}

const save = () => {
     let currentCount = count + " - "
     saveEl.textContent += currentCount
     countEl.textContent = 0
     count = 0
}
// // //document.getElementById("count-el").innerText = 5

// // // let firstBatch = 5
// // // let secondBatch = 16
// // // let count = firstBatch + secondBatch
// // // console.log(count)
// // let myAge = 30

// // let humanDogRatio = 7

// // let myDogAge = myAge * humanDogRatio

// // console.log(myDogAge)

// // let count = 5

// // count = count + 1 

// let bonusPoints = 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints);

// const increment = () => {
//      console.log("the button was clicked")
// }


// const countDown = () => {
//      console.log(5)
//      console.log(4)
//      console.log(3)
//      console.log(2)
//      console.log(1)
// }
// countDown() 

// const logger = () => {
//      console.log(42)
// }

// logger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// const lapSum = () => {
//      totalLaps = lap1 + lap2 + lap3
//      console.log(totalLaps)
// }
// lapSum()

// let lapCompleted = 0

// const lapIncrease = () => {
//      lapCompleted = lapCompleted + 1
// }

// lapIncrease()
// lapIncrease()

// console.log(lapCompleted)

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// const increment = () => {
//      count = count + 1
//      countEl.innerText = count
//      console.log(count)
// }



// save()

// let saveEl = document.getElementById("save-el")

// const saved = () => {
//      let currentCount = count + " - "
//      saveEl.innerText = currentCount
//      console.log(currentCount)
// }

// saved()

// let username = "Dandy"

// let inbox = "You have three new notifications"

// console.log(inbox + ", " + username + "!")

// let messageToUser = inbox + ", " + username + "!"

// console.log(messageToUser)


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Ghost"

// let greeting = "Hi, welcome back, "


// welcomeEl.innerText = greeting + name

// // name = name + "🖐🏾"

// welcomeEl.innerText += "🖐🏾"