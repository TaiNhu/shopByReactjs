export default function sum(){
    var prices = document.querySelectorAll(".cart--info-item>strong")
    prices = [...prices]
    prices = prices.map((v) => {
        return parseInt(v.textContent.substring(1))
    })
    var amounts = document.querySelectorAll(".cart--info-item>.number>span")
    amounts = [...amounts]
    amounts = amounts.map((v) => parseInt(v.innerText))
    var totalOne = []
    for(var i = 0; i < prices.length; i++){
        totalOne.push(prices[i] * amounts[i])
    }
    var sum = 0
    for(var i = 0; i < totalOne.length; i++){
        sum += totalOne[i]
    }
    return sum
}
