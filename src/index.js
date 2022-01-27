module.exports = function check(str, bracketsConfig) {
    


    let openings= Array.from(new Map( bracketsConfig).keys());
    let closings = Array.from(new Map( bracketsConfig).values());
    let arr = str.split('');
    let stack = [];
    let twins = [];
    openings.forEach((item) => closings.includes(item) ? twins.push(item) : item);
    let twinsCounter = {};
    let unicIndicador;

    if(openings.includes(arr[arr.length-1]) && !twins.includes(arr[arr.length-1]))
        return false;
    
    for(let i = 0; i < arr.length; i++) {
        if(twins.includes(arr[i]) ) { 

            if(twinsCounter[arr[i]])
                twinsCounter[arr[i]] += 1;
            else
                twinsCounter[arr[i]] = 1;

            unicIndicador = false;
        }
        else
            unicIndicador = true;

        if(closings.indexOf(arr[i]) === -1 || (twinsCounter[arr[i]]%2 !== 0 && unicIndicador!==true)) {
            stack.push(arr[i])
        }  else if( closings.indexOf(arr[i]) !== openings.indexOf(stack.pop()) ){
                 return false;
            }
        }
    
    
    return true;
}
