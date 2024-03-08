function isUnique(str) {
    const hashMap = {}
    for (const letter of str) {
        if (hashMap[letter]) {
            hashMap[letter] += 1
            continue
        } 
        hashMap[letter] = 1
        continue
    }
    console.log(hashMap)
    const theresSomeDuplicate = Object.values(hashMap).filter(value => value > 1).length === 0
    return theresSomeDuplicate
}

console.log({teste: isUnique('teste')})
console.log({oi: isUnique('oi')})
console.log({true: isUnique('true')})
console.log({done: isUnique('done')})
console.log({arara: isUnique('arara')})
console.log({repeticao: isUnique('repeat')})

// this solution has a O(n) time complexity to iterate every character and build the hashmap
// and a O(m) space complexity, where m, in the worst case will be equal n