
function isOldEnoughToVote(age) {
    return (age >= 18);
}

function getProperty(obj, key) {
    return obj["key"];
}

function addProperty(obj, key) {
    obj[key] = true;
}

function removeProperty(obj, key) {
    delete obj[key];
}

function isEven(num) {
    return num%2 == 0;
}

function isOdd(num) {
    return num%2 == 1;
}

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    if (str.length == 0){
        return [];
    }
    return  str.split(" ");
}

function extend(obj1, obj2) {
    for (var key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for (var key in obj){
        if (typeof obj[key] == 'string'){
            delete obj[key];
        }
    }
    return obj;
}

function getIndexOf(char, str) {
    return str.indexOf(char);
}

function keep(array, keeper) {
    var toReturn = [];
    for (var i = 0; i < array.length; i++){
        if (array[i]==keeper){
            toReturn.push(keeper);
        }
    }
    return toReturn;
}

function getLargestElementAtProperty(obj, key) {
    var toReturn;
    if (Array.isArray(obj[key])){
        var max = obj[key][0];
        for (var i = 0; i < obj[key].length; i++){
            if (obj[key][i] > max){
                max = obj[key][i];
            }
        }
        toReturn = max;
    }
    return toReturn;
}

function calculateBillTotal(preTaxAndTipAmount) {
    return preTaxAndTipAmount + preTaxAndTipAmount*.15 + (preTaxAndTipAmount)*.095;
}

function sumDigits(num) {
    var sum = 0;
    var count = num.toString().length;
    for (var i = 0; i < count; i++){
        if (num < 0 && Math.abs(num) < 10){
            sum+=num;
        }
        else{
            sum+=Math.abs(num%10);
            //return sum;
        }
        num=Math.sign(num)* Math.floor(Math.abs(num/10));
        //return num;
    }
    return sum;
}

function listAllValues(obj) {
    var toReturn = [];
    for(var key in obj){
        toReturn.push(obj[key]);
    }
    return toReturn;
}

function detectOutlierValue(string){
    var odd = 0;
    var even = 0;
    var numArr = string.split(" ");
    var outlierValue = "";
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i]%2 === 0){
            even++;
        }
        else{
            odd++;
        }
        if (even > 1){
            outlierValue = "odd";
            break;
        }
        else{
            outlierValue = "even";
        }
    }
    for (var j = 0; j < numArr.length; j++){
        if (outlierValue == "odd"){
            if (numArr[j]%2 == 1){
                return j+1;
            }
        }
        if (outlierValue == "even"){
            if (numArr[j]%2 === 0){
                return j+1;
            }
        }
    }
}

function search(array, value) {
    var minInd = 0;
    var maxInd = array.length-1;
    var midpoint;
    while(array[midpoint] != value){
        if (minInd == maxInd){
            return null;
        }
        midpoint = Math.floor((minInd+maxInd)/2);
        if (array[midpoint] < value){
            minInd = midpoint;
        } else {
            maxInd = midpoint;
        }
    }
    return midpoint;
}