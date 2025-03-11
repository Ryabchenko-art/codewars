/*Create a combat function that takes the player's current health and
the amount of damage received, and returns the player's new health.
Health can't be less than 0.
*/
function combat(health, damage) {

    return ((health - damage) && health > 0)
}

console.log(combat(100, 101))
// Write your code here//