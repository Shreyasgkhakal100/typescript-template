import { primeFactors } from '../../src/Dummy'

describe("Dummy Test", () => {
    it("should return 1 for 1", () => {
        const dummyOutputReturned = primeFactors(1)
        expect(dummyOutputReturned).toEqual([1])
    })
    it("should return 2 for 2", () => {
      const dummyOutputReturned = primeFactors(2);
      expect(dummyOutputReturned).toEqual([2]);
    });

    it("should return 3 for 3", () => {
      const dummyOutputReturned = primeFactors(3);
      expect(dummyOutputReturned).toEqual([3]);
    });

    it("should return 2 times 2 for 4", () => {
      const dummyOutputReturned = primeFactors(4);
      expect(dummyOutputReturned).toEqual([2, 2]);
    });

    it("should return 5 for 5", () => {
        const dummyOutputReturned = primeFactors(5);
        expect(dummyOutputReturned).toEqual([5]);
    })

    it("should return [3, 2] for 6", () => {
        const dummyOutputReturned = primeFactors(6);
        console.log(dummyOutputReturned)
        expect(dummyOutputReturned).toEqual([3, 2]);
    })

    it("should return [7] for 7", () => {
        const dummyOutputReturned = primeFactors(7);
        expect(dummyOutputReturned).toEqual([7]);
    })
})