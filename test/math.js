const calculateTip = (total,tip = 0.5) => {
    const sum = total * tip
    return sum
}

module.exports = {
    calculateTip
}