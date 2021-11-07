const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const gameColors = ['red', 'pink', 'blue', 'white', 'green', 'black', 'purple', 'yellow']; //8
let codeToCrack = []

  function initGame(){
      for (let index = 0; index < 5; index++) {
        codeToCrack.push(gameColors[Math.floor(Math.random() * gameColors.length)])
        }
      console.log(codeToCrack, 'code to crack')
      userTurn()
  }

  function userTurn() {
    let argsColors = [];

    console.log(`Your turn :`)

    const question1 = () => {
      return new Promise((resolve, reject) => {
        rl.question('1rst color : ', (colorChoosed)=>{
          if (colorChoosed!== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log("Error: Please enter a valid input")
            userTurn()
          }
          resolve()
        });
      })
    }

    const question2 = () => {
      return new Promise((resolve, reject) => {
        rl.question('2nd color : ', (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log("Error: Please enter a valid input")
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question3 = () => {
      return new Promise((resolve, reject) => {
        rl.question('3rd color : ', (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log("Error: Please enter a valid input")
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question4 = () => {
      return new Promise((resolve, reject) => {
        rl.question('4th color : ', (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log("Error: Please enter a valid input")
            userTurn()          
          }
          resolve()
        });
      })
    }

    const question5 = () => {
      return new Promise((resolve, reject) => {
        rl.question('5th color : ', (colorChoosed)=>{
          if (colorChoosed !== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log("Error: Please enter a valid input")
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
      console.log(argsColors)
      iaTurn(argsColors)
    }
    main()
  }

  function iaTurn(argsColors){
    console.log(codeToCrack, 'codeToCrack')
    let outputViewArr = []
    let goodPlaceCount = 0
    let existCount = 0
    let notGoodPlaceCount = 0

    for (let index = 0; index < argsColors.length; index++) {

      if (argsColors[index] === codeToCrack[index]) {
        // console.log(`${index + 1} - la couleur ${argsColors[index]} est bien placée !`)
        goodPlaceCount ++
        outputViewArr.push('√')
      }else if (codeToCrack.includes(argsColors[index])) {
        // console.log(`${index + 1} - la couleur ${argsColors[index]} est présente dans le code mais pas à la bonne place.`)
        existCount ++
        outputViewArr.push('≈')
      } else {
        // console.log(`${index + 1} - la couleur ${argsColors[index]} n'est pas du tout présente.`)
        notGoodPlaceCount ++
        outputViewArr.push('X')
      }
    }

    if (goodPlaceCount === 5) {
      console.log("\n")
      return console.log("I lost.. You're the best... snif.. but I’ll get you next time !!! \n")
    }

    console.log("\n")
    console.log(`Couleurs bien placées : ${goodPlaceCount}`)
    console.log(`Couleurs mal placées : ${existCount}`)
    console.log(`Couleurs inexistantes : ${notGoodPlaceCount}`)
    console.log(`The overview of the last round : ${outputViewArr}`)
    console.log("\n")
    console.log("∇ ∇ ∇ Too bad... Try a new line of colors ∇ ∇ ∇\n")
    userTurn()
  }

  initGame()