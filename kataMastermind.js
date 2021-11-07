const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const gameColors = ['red', 'yellow', 'blue', 'orange', 'vert', 'white', 'purple', 'pink']; //8
let codeToCrack = []
let isAssistedMode = false
let isCheatMode = false

  function initGame(){
    for (let index = 0; index < 5; index++) {
      codeToCrack.push(gameColors[Math.floor(Math.random() * gameColors.length)])
    }

    rl.question(`Do you want 'normal', 'assisted ', 'cheat' mode game or consult the game's 'principle' : `, (answer)=>{
      
      if (answer === `principle`) {
        console.log("\n")

        console.log(`- - - - - Welcome to my 'Mastermind Game' - - - - -\n`)
        console.log(`The goal of the game is to guess, by successive deductions, the color and position of the 5 pieces chosen beforehand by a very advanced artificial intelligence borrowed from NASA.\n`)
        console.log(`The pieces can be of 8 colors: 'red', 'yellow', 'blue', 'orange', 'green', 'white', 'purple', 'pink'.\n`)
        console.log(`The game is presented in the form of a dialogue box between you and the advanced ia. This one will allow you to give a succession of colors.\n`)
        console.log(`There are also several game modes:\n`)
        console.log(`- one called 'normal' in which the ia too strong gives you a written and visual summary of your deduction of the previous turn.\n`)
        console.log(`- an assisted one in which the invincible ia gives a more detailed summary.\n`)
        console.log(`- and a cheat mode which allows you to see directly the color sequence chosen by the unbeatable ia.\n`)
        console.log(`!!! Good luck and have fun !!!\n`)

        rl.question(`Do you want to return to the previous menu ? ('Yes')`, (answerToPrinciple)=>{
          if (answerToPrinciple === 'Yes' || 'yes' ) {
            initGame()
          }
        })

      }else if (answer === `cheat`) {
        isCheatMode = true
        userTurn()
      }else if ( answer === `assisted`){
        isAssistedMode = true
        userTurn()
      }else{
        userTurn()
      }
    })
  }

  function userTurn() {
    let argsColors = [];
    `${isCheatMode ? console.log(`Code to crack ► ► ►`, codeToCrack, ) : ''}`
    console.log("\n")
    console.log(`Your turn :`)

    const question1 = () => {
      return new Promise((resolve, reject) => {
        rl.question(`1rst color : `, (colorChoosed)=>{
          if (colorChoosed!== undefined && gameColors.includes(colorChoosed)) {
            argsColors.push(colorChoosed)
          }else{
            console.log(`Error: Please enter a valid input`)
            userTurn()
          }
          resolve()
        });
      })
    }

    const question2 = () => {
      return new Promise((resolve, reject) => {
        rl.question(`2nd color : `, (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            argsColors.push(colorChoosed)
          }else{
            console.log(`Error: Please enter a valid input`)
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question3 = () => {
      return new Promise((resolve, reject) => {
        rl.question(`3rd color : `, (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            argsColors.push(colorChoosed)
          }else{
            console.log(`Error: Please enter a valid input`)
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question4 = () => {
      return new Promise((resolve, reject) => {
        rl.question(`4th color : `, (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            argsColors.push(colorChoosed)
          }else{
            console.log(`Error: Please enter a valid input`)
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question5 = () => {
      return new Promise((resolve, reject) => {
        rl.question(`5th color : `, (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            argsColors.push(colorChoosed)
          }else{
            console.log(`Error: Please enter a valid input`)
            userTurn()          
          }
          resolve()
        });
      });
    }

    const main = async () => {
      await question1()
      await question2()
      await question3()
      await question4()
      await question5()
      iaTurn(argsColors)
    }
    main()
  }

  function iaTurn(argsColors){
    let outputViewArr = []
    let goodPlaceCount = 0
    let existCount = 0
    let dontExistCount = 0
    console.log("\n")
    for (let index = 0; index < argsColors.length; index++) {
      if (argsColors[index] === codeToCrack[index]) {
        `${isAssistedMode ? console.log(`${index + 1} - la couleur ${argsColors[index]} est bien placée !`) : ''}`
        goodPlaceCount ++
        outputViewArr.push('√')
      }else if (codeToCrack.includes(argsColors[index])) {
        `${isAssistedMode ? console.log(`${index + 1} - la couleur ${argsColors[index]} est présente dans le code mais pas à la bonne place.`) : ''}`
        existCount ++
        outputViewArr.push('≈')
      } else {
        `${isAssistedMode ? console.log(`${index + 1} - la couleur ${argsColors[index]} n'est pas du tout présente.`) : ''}`
        dontExistCount ++
        outputViewArr.push('X')
      }
    }
    if (goodPlaceCount === 5) {
      isAssistedMode = false
      isCheatMode = false
      console.log(`\n`)
      console.log(`I lost.. You're the best... snif.. =( But I’ll get you next time !!! \n`)
      rl.question(`Do you want to play another game ? ('Yes')`, (answerToPrinciple)=>{
        if (answerToPrinciple === 'Yes' || 'yes' ) {
          initGame()
        }
      })
   
    }
    console.log(`\n`)
    console.log(`Couleurs bien placées : ${goodPlaceCount}`)
    console.log(`Couleurs mal placées : ${existCount}`)
    console.log(`Couleurs inexistantes : ${dontExistCount}`)
    console.log(`The overview of the last round : ${outputViewArr}\n`)
    console.log("▼ ▼ ▼ Too bad... Try a new line of colors ▼ ▼ ▼\n")
    userTurn()
  }
  initGame()