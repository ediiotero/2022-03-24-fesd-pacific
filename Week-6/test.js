let expect = require("chai").expect;

function doSomething(x,y) {
  if (typeof x !== "string") throw new Error("x must be a string");
  return x + y;
}

describe("myFunctions", () => {
  describe("#doSomething", () => {
    it ("should concatenate", () => {
      let x = doSomething("Hello", 5);
      expect(x).to.equal("Hello5");
    });
    it ("should throw error if not string", () => {
      expect(() => {
        doSomething(5, 5);
      }).to.throw(Error);
    });
  });
});


function isTheSame(input1,input2) {
  return input1 === input2
}

describe('isTheSame', () => {
  it('should return true is both inputs are the same', () => {
    const result = isTheSame(1,1);
    expect(result).to.be.true;
  })
  it('should return false if inputs are not the same', () => {
    const result = isTheSame('hello', 'helloi')
    expect(result).to.be.false;
  })
})

function getSum(a,b) {
  return a + b;
}

describe('getSum', () => {
  it('should return the sum of two inputs', () => {
    const sum = getSum(1,1)
    expect(sum).to.be.equal(2)
  })
})

const nameAry = ['tom', 'jerry']
describe('name array', () => {
  it('should have a length of 2', () => {
    expect(nameAry).to.have.lengthOf(2)
  })
})