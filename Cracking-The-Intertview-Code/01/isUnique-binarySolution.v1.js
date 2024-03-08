// 'checked solution'

function isUnique(str) {
    if (str.length > 128) {
        return false;
    }
    let checker = 0;
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      
      if ((checker & (1 << charCode)) > 0) {
        return false;
      }  
      checker |= (1 << charCode);
    }
  
    return true;
  }
  

  console.log(isUnique("hello"));
  console.log(isUnique("arara"));
  console.log(isUnique("abcdef"));

  // This solutions presentes a O(n) time complexity limited to 128 and a
  // O(1) space complexity.