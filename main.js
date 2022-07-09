const renderLvl = () => {
    const postValueBtn = document.querySelector('.postValueBtn')
    const input = document.querySelector('.input')
    const startRenderGame = document.querySelector('.start')
    const endRenderGame = document.querySelector('.end')
    const wrapperRenderGame = document.querySelector('.hidden')
    let getAnswer
    let randomValue

    let div = document.createElement('div')
    let divFalse = document.createElement('div')
    let divTrue = document.createElement('div')

    startRenderGame.addEventListener('click', () => {
        settingGame = {
            lvl: 3,
            lvlCounter: 1,
            HP: 3,
            min: 1
        }
        renderLvl()
    })

    endRenderGame.addEventListener('click', () => {
        div.remove()
    })

    postValueBtn.addEventListener('click', () => {
        getAnswer = +input.value
        gameScript()
        console.log(getAnswer)
        renderLvl()
    })

    let settingGame = {
        lvl: 3,
        lvlCounter: 1,
        HP: 3,
        min: 1
    }

    let getValue = { getLvl: [] }

    const renderLvl = () => {

        div.innerHTML = `
        <div>  Lvl ${settingGame.lvlCounter} угадайте от 1 до ${settingGame.lvl} ваши жизни ${'🧡'.repeat(settingGame.HP)} </div `
        wrapperRenderGame.append(div)

    }

    const renderLvlTrue = () => {
        divTrue.innerHTML = `
        <div> Вы прошли ${settingGame.lvlCounter}Lvl. Загаданное число ${settingGame.randomValue}, ваше ${settingGame.answer} </div `
            // if (answer === randomValue) {
            //     wrapperRenderGame.append(divTrue)
            // }
    }


    const renderLvlFalse = () => {
        divFalse.innerHTML = `
            <div> Вы не прошли ${settingGame.lvlCounter}Lvl. Загаданное число ${settingGame.randomValue}, ваше ${settingGame.answer} </div `
            // if (answer !== randomValue) {
            //     div.remove()
            //     wrapperRenderGame.append(divFalse)
            // }
    }


    const gameScript = () => {
        randomValue = Math.floor(Math.random() * (settingGame.min) * settingGame.lvl)
            // if (settingGame.HP > 0) {
        console.log(randomValue)
            // }
        if (randomValue !== getAnswer) {
            settingGame.HP = settingGame.HP - settingGame.damage
            alert(`Загаданное число ${randomValue}, ваше ${getAnswer}`)
        } else {
            renderLvlTrue()
            settingGame.lvlCounter++
                settingGame.lvl++
                settingGame.HP = 3
            alert(`Вы угадали загаданное число ${randomValue}, ваше ${getAnswer} `)
        }

        if (settingGame.HP === 0) {
            alert('Закончились жизни')

        }

        if (settingGame.lvlCounter === 6) {
            alert('Прошел игру')
            return true
        }

    }
    gameScript()


}
renderLvl()