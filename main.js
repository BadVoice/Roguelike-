const game = () => {
    let lvl = 3
    let HP = 3
    let damage = 1
    let lvlCounter = 1

    while (HP > 0) {
        let randomValue = Math.floor(Math.random() * lvl)
        console.log(randomValue)
        let answer = +prompt(` Lvl ${lvlCounter}  уагадайте число от 1 до ${lvl} ${'❤'.repeat(HP)}`)

        if (randomValue !== answer) {
            HP = HP - damage
        } else {
            alert('Ygadal')
            lvlCounter++
            lvl++
            HP = 3
        }

        if (HP === 0) {
            alert('Закончились жизни')

        }

        if (lvlCounter === 6) {
            alert('Прошел игру')
            return true
        }
    }
}

game()