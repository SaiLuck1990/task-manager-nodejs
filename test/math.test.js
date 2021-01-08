const math = require('./math')

test('Check Tip', () => {
    const total = math.calculateTip(10,0.3)
    expect(total).toBe(3)
})

test('Check Tip for default', () => {
    const total = math.calculateTip(10)
    expect(total).toBe(5)
})