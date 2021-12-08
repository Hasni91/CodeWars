var validator = require('validator');
var arg = process.argv;
var array = [
    "hasni-fodeilla99@hotmaail.com",
    "hasni","test-test@hotmail.com",
    "test@test91.fr",
    "test@test"
];

arg.forEach(value => {
    console.log(value);
});
for (let i = 0; i < arg.length; i++){
    if(arg[i] == 0 && arg[i] != 1 ){
        var res = validator.isEmail(arg[i]);
        res ? console.log(arg[i],"est un email") : console.log(arg[i],"n'est pas un email") ;
    }
}

array.forEach(value => {
    var res = validator.isEmail(value);
    res ? console.log(value,"est un email") : console.log(value,"n'est pas un email");
})

for(var i = 0; i < array.length; i++){
    var res = validator.isEmail(array[i]);
    if(res == true){
        console.log(array[i],"est un email");
    }else{
        console.log(array[i],"n'est pas un email");
    }
    
}