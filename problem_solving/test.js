function findOppositeNumber (n,input){
    let output;
    if (input < n/2){
        output = n/2 + input;
    } else {
        output = input - n/2;
    }
    // console.log (output);
    return output;
}

let case1 = findOppositeNumber (10,2);
let case2 = findOppositeNumber (10,6);

function merge2String (s1,s2) {
    let out = ``;
    for (let i=0; (i < s1.length)||(i < s2.length); i++){
        console.log (i);
        out = out+s1.charAt(i)+s2.charAt(i);
    }
    console.log (out);
    return out;
}

let _case1 = merge2String (`abcde`,`123`);