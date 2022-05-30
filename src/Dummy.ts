export const primeFactors = (input: number) => {
    let num = 2;
    let ans = []
    if(input === 1) {
        return [1];
    }else{
        while(input%num === 0){
            ans.push(num);
            input = input/num;
            if(input === 1){
                break;
            }
            while (input % num !== 0) {
              num++;
            }
        }
        return ans;
    }
}
