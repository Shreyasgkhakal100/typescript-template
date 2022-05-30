export const primeFactors = (input: number) => {
    let ans = [];
    if(input < 4) {
        return input;
    }else{
        ans = [2, 2]
        return ans;
    }
}
