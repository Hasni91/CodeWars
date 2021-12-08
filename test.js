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
    console.log("res est",res);
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