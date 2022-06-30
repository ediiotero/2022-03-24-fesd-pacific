const players = ['Bob', 'Maria', 'John', 'Isabella', 'Edwin', 'Richard', 'Lisa']
const positions = ['center', 'point guard', 'small forward', 'power forward', 'shooting guard']

const teams = [];

positions.forEach(position => {
    console.log(position)
    players.map(player => teams.push({player,position}) )
})

// console.log(teams.length)
// console.log(players.splice(6,1))

function shuffle(array) {
    const teamOne = []
    const teamTwo = []

    while(array.length >0) {
        const random1 = Math.floor(Math.random() * array.length)
        const getItem1 = array.splice(random1,1)
        const random2 = Math.floor(Math.random() * array.length)
        const getItem2 = array.splice(random2,1)
        teamOne.push(getItem1)
        teamTwo.push(getItem2)
    }

    return [teamOne.flat(), teamTwo.flat()];
}

console.log(shuffle(teams))