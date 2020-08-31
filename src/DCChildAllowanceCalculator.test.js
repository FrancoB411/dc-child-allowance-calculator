import {
    calculate,
    calculateChildAllowance,
    calculateNetChange,
} from "./DCChildAllowanceCalculator.js";



// calculate
const specs = [
    {
        status: 'head',
        children: 5,
        income: 20_000,
        timeFrame: "biweekly",
        expected: -691.89 
    }, {
        status: 'joint',
        children: 8,
        income: 200_000,
        timeFrame: 'biweekly',
        expected: -1023.25
    },
    {
        status: 'joint',
        children: 1,
        income: 1_000_000,
        timeFrame: 'biweekly',
        expected: 386.37
    },
    {
        status: 'joint',
        children: 1,
        income: 1_000_000,
        timeFrame: 'monthly',
        expected: 837.14 
    },
    {
        status: 'joint',
        children: 1,
        income: 1_000_000,
        timeFrame: 'yearly',
        expected: 10045.64
    },
    {
        status: 'individual',
        children: 0,
        income: 50_000,
        timeFrame: 'biweekly',
        expected: 13.1238
    },
    {
        status: 'individual',
        children: 0,
        income: 50_000,
        timeFrame: 'daily',
        expected: 0.935
    }
];

for (let spec of specs) {
    test(`${spec.status}, ${spec.children}, ${spec.income}, ${spec.timeFrame}`,
        () => { expect(calculate(spec)).toBeCloseTo(spec.expected); });
} 



// childAllowance
const maxChildren = 12;

for (let i = 0; i <= maxChildren; i++) {
    test(`#{i} children`, () => {
        const expectedAllowance = 12 * 300 * i;
        expect(calculateChildAllowance(i)).toEqual(expectedAllowance);
    });
}



// calculateNetChange
test("$300 child allowance with $10_000 tax", () => {
    const allowance = calculateChildAllowance(1);
    expect(calculateNetChange(3600, 5000)).toEqual(-1400)
});


