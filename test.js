function getCount(str){
        var str = str.split(" ");
        var count = 0;
        var res;
        for (var i = 0; i < str.length ; i++) {
            if(str[i].length < count){
                res = str[i].length;
            }
            count = str[i].length
        }
        console.log(res);
        return res;

}
//   getCount("hasni cava ou 1ddd saleme");

function isPangram(string){
    var alpabet = "a b c d e f g h i g k l m n e p q r s t v w x y z";
    var alp = alpabet.split(" ");
    var noUppercase = string.toLowerCase()
    str = noUppercase.split(" ");
    var res;
    for(var i = 0; i < alp.length ; i++){
        console.log(alp[i]);
        if(alp[i] == str[i]){
            res = true;
        }else{
            res = false;
        }
    }
    // console.log("res est",res);
    return res;
}
// isPangram("The quick brown fox jumps over the lazy dogt");

function sumTwoSmallestNumbers(numbers) {
    let first = Math.min(...numbers);
    let tab = []
    for(var i = 0; i < numbers.length ; i++){
        if(numbers[i] != first){
            tab.push(numbers[i]);
        }
    }
    let second = Math.min(...tab);
    let res = first + second;
    return res;
}
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]);

function getCount(str) {
    var vowelsCount = 0;
    let tab = str.split('');
    for(let i = 0; i < tab.length ; i++){
        if(tab[i] == "a" || tab[i] == "e" || tab[i] == "i" || tab[i] == "u" || tab[i] == "o"){
            vowelsCount++;
        }
    }
    return vowelsCount;
}
// getCount("Hasni Fodeilla le bg");

function add(num1, num2) {

    let first_tab = num1.toString().split('');
    let second_tab = num2.toString().split('');

    let taille = Math.max(first_tab.length,second_tab.length);
    let res = []
    let test = 0;
    if(first_tab.length < second_tab.length){
        test = second_tab.length - first_tab.length;
    }else{
        test = first_tab.length - second_tab.length;
    }
    for(var i = 0; i < test; i++){
        if(second_tab.length < first_tab.length){
            second_tab.unshift("0");
        }else{
            first_tab.unshift("0");
        }
        
    }
    for(let i = 0; i < taille; i++){
        res.push(parseInt(first_tab[i]) + parseInt(second_tab[i]))
    }

    console.log( parseInt(res.join('')) );
}

// add(1,30);

function squareDigits(nb){

    let res = "";

    if(typeof(nb) == "number"){
        let str  = nb.toString();
        let tab = str.split("");
        for(var i = 0; i < tab.length; i++){
            res += tab[i] * tab[i];
        }
    }
    return parseInt(res) ;
}
// squareDigits(9119);

function filter_list(l) {
    let res = [];
    for(let i = 0; i < l.length; i++){
        if(typeof(l[i]) == "number"){
            res = [...res,l[i]];
        }
    }
    return res;
}
// filter_list([10,20,'30',"coucou",34]);

function explode(arg){
    let str = "";
    if(Array.isArray(arg)){
        for(let i = 0 ; i < arg.length; i++){
            for(let j = 0; j < arg[i].length; j++){
                for(let k = 0 ; k < parseInt(arg[i][j]); k++){
                    str += arg[i][j];
                }
            }
        }
    }else{
        for(let i = 0 ; i < arg.length; i++){
            for(let j = 0 ; j < parseInt(arg[i]); j++){
                str += arg[i];
            }
        }
    }
    return str;
}
// console.log(explode(["312", "333122"]));
// console.log(explode("3100002"));

function solution(number){
    let res = 0;
    for(let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0 ){
            res += i;
        }
    }
    return res;
}
// solution(23);

function isPangram(str){
    
    let tab = [];
    let alpabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    let newAlpha = alpabet.replace(/\s/g, '');
    let newStr = str.toLowerCase();
    newStr = newStr.replace(/\s/g, '');

    for(let i = 0; i < newStr.length; i++){
        
        for(let j = 0; j < newAlpha.length; j++){
            if(newStr[i] === newAlpha[j]){
                tab = [...tab,newStr[i]];
            }
        }
    }
    let res = tab.filter((item, index) => tab.indexOf(item) === index);

    if(res.length === 26)
        return true;
    else{
        return false;
    }
}
// isPangram("The quick brown fox jumps over the lazy dog");
function isValidIP(str){
    let regex = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm;
    return regex.test(str);
}
// console.log(isValidIP("1.2.3.4\n"));

function accum(str){
	newStr = "";
    for(let i = 0; i < str.length; i++){
        for(let j = 0 ; j <= i; j++){
            if(j == 0){
                newStr += str[i].toUpperCase();
            }else{
                newStr += str[i].toLowerCase() ;
            }
            if(j === i){
                newStr += "-" ;
            }
        }
    }
    return newStr.slice(0, -1);
}
// console.log(accum("ZpglnRxqenU"));

function unusedDigits(arg) {
    let str_nb = "0123456789";
    console.log(str_nb.indexOf("toto"));
    for(let i = 0; i<arg.length; i++){
        for(let j = 0; j < arg[i].toString().length; j++){
            console.log(arg[i][j]);
        }
    }
}
// unusedDigits([12, 34, 56, 78]);

function anagrams(str, tab) {

    for(let i = 0; i < tab.length; i++){
        if(str.length == tab[i].length){
            for(let j = 0; j < tab.length; j++){
                console.log(tab[i][j]);
            }
        }
    }
}
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

function isPrime(nbr){
    
    if(nbr < 0) return false;
    for(var i = 2; i < nbr; i++)
    if(nbr%i === 0) return false;
  return nbr > 1;
}
// console.log(isPrime(-3));
