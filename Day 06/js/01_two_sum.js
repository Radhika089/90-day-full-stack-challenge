// Find TWO numbers inside the array that add up to 9, and tell me their positions (indexes).

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, target));

//  another way is

function twoSums(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const neededNumber = target - nums[i];

    if (seen.has(neededNumber)) {
      return [seen.get(neededNumber), i];
    }

    seen.set(nums[i], i);
  }
}
