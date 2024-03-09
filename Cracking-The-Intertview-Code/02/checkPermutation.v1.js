/* 
    To check string permutation the algo need to verify if both string has the same characters
    and same quantity of each character;
    eg aabb and baba;
    At first glance i think i can build 2 hash map and compare then, but it have a N time complexity
    just to build the maps and another 1/2N to compare maps and a 2N space complexity
    i can write a bad solution using for, that solution will have a N^2 time complexity
    Maybe i can use bits, no, a lot of complexity for nothing
    Try with only 1 hashmap
*/

function isPermutative(string1, string2) {

    if (string1.length !== string2.length) {
        return false;
    }

    const hashMap = {}

    for (const letter of string1) {
        if (hashMap[letter]) {
            hashMap[letter] += 1
            continue
        } 
        hashMap[letter] = 1
        continue
    }
    
    for (const letter of string2) {
        if (hashMap[letter]) {
            hashMap[letter] -= 1
            if (hashMap[letter] < 0) {
                return false
            }
            continue
        }
        return false
    }

    return true

}

console.log(isPermutative('oi', 'io'))
console.log(isPermutative('arara', 'aaarr'))
console.log(isPermutative('hello', 'hola'))

/* 
    This solutions has a O(n) time complexity and a O(c) space complexity
    where c is the unique characters of each string.
*/