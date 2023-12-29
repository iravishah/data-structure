// 605. Can Place Flowers

// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 
            && (flowerbed[i - 1] === 0 || flowerbed[i-1] === undefined)
            && (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)) {
                flowerbed[i] = 1
            count++;
        }
    }

    if (n > count) {
        return false
    }
    return true
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))