const renderLvl = () => {
    const postValueBtn = document.querySelector('.postValueBtn'),
        input = document.querySelector('.input'), // значение передающиеся в postValueBtn
        startRenderGame = document.querySelector('.start'),
        endRenderGame = document.querySelector('.end'),
        wrapperRenderGame = document.querySelector('.hidden')
    let answer,
        randomValue

    let lvl = 3,
        lvlCounter = 1,
        HP = 3,
        min = 1

    let div = document.createElement('div'),
        divFalse = document.createElement('div'),
        divTrue = document.createElement('div')

    postValueBtn.addEventListener('click', () => {
        answer = +input.value
        loop()
    })

    const renderLvl = () => {

        div.innerHTML = ` 
            Lvl ${lvlCounter} угдайте число 1 до ${lvl} ${'❤'.repeat(HP)}
    
        `
        if (randomValue !== answer) {
            div.remove()
            wrapperRenderGame.append(div)
        } else {
            wrapperRenderGame.append(div)
        }

        if (HP === 0) {
            div.remove()
        }
    }

    const loop = () => {
        damage = 1
        let randomValue = Math.floor(Math.random() * (min) * lvl)
        console.log(HP)

        if (HP === 0) {
            alert('Закончились жизни')
            renderLvl()
        }

        if (lvlCounter === 6) {
            alert('Прошел игру')
            return true
        }

        if (randomValue !== answer) {
            HP = HP - damage
            alert(`Загаданное число ${randomValue}, ваше ${answer}`)
            renderLvl()

        } else {
            alert(`Вы угадали загаданное число ${randomValue}, ваше ${answer} `)
            lvlCounter++
            lvl++
            HP = 3
            renderLvl()
        }
    }
}
renderLvl()