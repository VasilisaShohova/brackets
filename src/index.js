module.exports = function check(str, bracketsConfig) {
  const regEx = /[()[\]{}|]/;
  if (regEx.test(str) === false) {
    return false;
  }

// const t = str.replace(/\(\)|\[\]|\{\}/g, "");
// return str == t ? !str : check(t);

let stack = [];
  let current;
  const matchLookup = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
        "|": "|", 
        
      };
                    
  for (let i = 0; i < str.length; i++) {
    current = str[i]; 
    
    if (current === '(' || current === '[' || current === "{" ) {
      stack.push(current);
      
    } else if (current === ')' || current === ']' || current === "}") {
      const lastBracket = stack.pop();
      
      if (matchLookup[lastBracket] !== current) { 
      
        return false; 
      }
    }
  }
  
  return stack.length === 0;
}
