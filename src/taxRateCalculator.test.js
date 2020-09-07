import { calculateTaxRate, adjustIncome } from "./taxRateCalculator.js"

//adjustIncome
test("individual, income 100_000", () => {
    expect(adjustIncome(100_000, 'individual')).toEqual(87800);
})

test("head, income 100_000", () => {
    expect(adjustIncome(100_000, 'head')).toEqual(81650);
})

test("joint, income 100_000", () => {
    expect(adjustIncome(100_000, 'joint')).toEqual(75600);
})

test("invalid, income 100_000", () => {
    expect(() => {
        adjustIncome(100_000, 'invalid')
    }).toThrow('Not a valid status');
})


//calculateTaxRate
test("income 9_999", () => {
    expect(calculateTaxRate(9_999)).toBeCloseTo(65.9934);
});

test("income 10_000", () => {
    expect(calculateTaxRate(10_000)).toBeCloseTo(66);
});

test("income 40_000", () => {
    expect(calculateTaxRate(40_000)).toBeCloseTo(363);
});

test("income 59_999", () => {
    expect(calculateTaxRate(59_999)).toBeCloseTo(576.9893);
});

test("income 60_000", () => {
    expect(calculateTaxRate(60_000)).toBeCloseTo(577);
});

test("income 349_999", () => {
    expect(calculateTaxRate(349_999)).toBeCloseTo(4636.986);
})

test("income 350_000", () => {
    expect(calculateTaxRate(350_000)).toBeCloseTo(4637);
})

test("income 500_00", () => {
    expect(calculateTaxRate(500_000)).toBeCloseTo(6797);
})

test("income 999_999", () => {
    expect(calculateTaxRate(999_999)).toBeCloseTo(13996.9856);
})

test("income 1_000_000", () => {
    expect(calculateTaxRate(1_000_000)).toBeCloseTo(13_997);
})