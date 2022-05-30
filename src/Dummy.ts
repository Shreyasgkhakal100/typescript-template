export const primeFactors = (input: number) => {
    let ans = [];
    if(input === 1) {
        return [1];
    }
    if(input%3 === 0){
        ans.push(3);
        input = input/3;
    }
    if(input%2 === 0){
        ans.push(2);
        input = input/2;
    }
    if(input !== 1){
        ans.push(input);
    }
    return ans;
}
