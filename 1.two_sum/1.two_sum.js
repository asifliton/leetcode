const twoSum = (nums, target) => {
    const prevNums = new Map();
    for(let numIdx = 0; numIdx < nums.length; numIdx++) {
        const matchedComplementIdx = prevNums.size > 0 ?
            prevNums.get(target - nums[numIdx]) : undefined;
        if(!isNaN(matchedComplementIdx)) {
            return [matchedComplementIdx, numIdx];
        }
        prevNums.set(nums[numIdx], numIdx);
    }
};