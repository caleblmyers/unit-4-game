var goal = Math.floor(Math.random() * 102) + 19
var userPoints = 0
var winCount = 0
var lossCount = 0
var crystalArray = []

for (var i = 0; i < 4; i++) {
    crystalArray.push(Math.floor(Math.random() * 12) + 1)  
}

console.log(goal)
console.log(crystalArray)

function resetGame() {
    userPoints = 0
    goal = Math.floor(Math.random() * 102) + 19
    
    $("#userPoints").text(userPoints)
    $("#goal").text(goal)
    
    crystalArray = []
    for (var i = 0; i < 4; i++) {
        crystalArray.push(Math.floor(Math.random() * 12) + 1)  
    }

    console.log(goal)
    console.log(crystalArray)
}

$("#goal").text(goal)

$(".btn-choice").on("click", function() {
    var position = $(this).attr("value")

    for (var i = 0; i < crystalArray.length; i++) {
        if (position == i) {
            userPoints += crystalArray[position]
            $("#userPoints").text(userPoints)
        }
    }

    if (userPoints === goal) {
        winCount++
        $("#winCount").text(winCount)
        
        resetGame()
    }

    if (userPoints > goal) {
        lossCount++
        $("#lossCount").text(lossCount)
        
        resetGame()
    }
})