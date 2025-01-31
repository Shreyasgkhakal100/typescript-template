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

    it("should return [2, 3] for 6", () => {
        const dummyOutputReturned = primeFactors(6);
        expect(dummyOutputReturned).toEqual([2, 3]);
    })

    it("should return [7] for 7", () => {
        const dummyOutputReturned = primeFactors(7);
        expect(dummyOutputReturned).toEqual([7]);
    })

    it("should return [2, 2, 2] for 8", () => {
        const dummyOutputReturned = primeFactors(8);
        expect(dummyOutputReturned).toEqual([2, 2, 2]);
    })

    it("should return [3, 3] for 9", () => {
        const dummyOutputReturned = primeFactors(9);
        console.log(dummyOutputReturned)
        expect(dummyOutputReturned).toEqual([3, 3]);
    })

    it("should return [2, 2, 3] for 12", () => {
        const dummyOutputReturned = primeFactors(12);
        expect(dummyOutputReturned).toEqual([2, 2, 3]);
    })

    it("should return [2, 2, 5, 5] for 100", () => {
        const dummyOutputReturned = primeFactors(100);
        expect(dummyOutputReturned).toEqual([2, 2, 5, 5]);
    })

    it("should return [2, 2, 2, 3, 3, 173] for 12456", ()=>{
        const dummyOutputReturned = primeFactors(12456);
        expect(dummyOutputReturned).toEqual([2, 2, 2, 3, 3, 173]);
    })

    it("should return 'Not Possible' for invalid input", ()=>{
        const dummyOutputReturned = primeFactors(-2);
        expect(dummyOutputReturned).toEqual('Not Possible');
    })

})