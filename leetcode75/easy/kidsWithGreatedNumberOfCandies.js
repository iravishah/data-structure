// 1431. Kids With the Greatest Number of Candies

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let highestNumberOfCandies = Math.max.apply(null, candies)

    return candies.map(candy => (candy + extraCandies) >= highestNumberOfCandies)
};

console.log(kidsWithCandies([12,1,12], 10))