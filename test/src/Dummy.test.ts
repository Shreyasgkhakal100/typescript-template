import { primeFactors } from '../../src/Dummy'

describe("Dummy Test", () => {
    it("should return 1 for 1", () => {
        const dummyOutputReturned = primeFactors(1)
        expect(dummyOutputReturned).toBe(1)
    })
    it("should return 2 for 2", () => {
      const dummyOutputReturned = primeFactors(2);
      expect(dummyOutputReturned).toBe(2);
    });
})