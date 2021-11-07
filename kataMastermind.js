const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


  const gameColors = ['red', 'pink', 'blue', 'white', 'green', 'black', 'purple', 'yellow']; //8

  let argsColors = []; //5
  let codeToCrack = []

  function initGame(){
      for (let index = 0; index < 5; index++) {
        codeToCrack.push(gameColors[Math.floor(Math.random() * gameColors.length)])
        }
      console.log(codeToCrack, 'code to crack')
      userTurn()
  }

  function userTurn() {
    console.log(`Your turn :`)
    questionsCount = 0;

    const question1 = () => {
      return new Promise((resolve, reject) => {
        rl.question('1rst color : ', (colorChoosed)=>{
          if (colorChoosed!== undefined && gameColors.includes(colorChoosed)) {
            console.log('valid color')
            argsColors.push(colorChoosed)
          }else{
            console.log(`invalid`)
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
            console.log(`invalid`)
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
            console.log(`invalid`)
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
            console.log(`invalid`)
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
            console.log(`invalid`)
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

      rl.close()
      console.log(argsColors)
      iaTurn(argsColors)
    }

    main()

  }

  function iaTurn(argsColors){
    
    if (argsColors === codeToCrack) {
      console.log("I lost.. snif.. but I’ll get you next time !!! \n")
    }else{
      for (let index = 0; index < argsColors.length; index++) {
        if (argsColors[index] === codeToCrack[index]) {
          console.log(`${index} - la couleur n°${argsColors[index]} est bien placée !`)
        }else if (codeToCrack.includes(argsColors[index])) {
          console.log(`${index} - la couleur ${argsColors[index]} est présente dans le code mais pas à la bonne place.`)
        } else {
          console.log(`${index} - la couleur ${argsColors[index]} n'est pas du tout présente.`)
        }
        
      }
      console.log("Too bad... Try a new line of colors\n")
      userTurn()
    }
  }


    initGame()