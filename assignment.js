//Here I am gonna convert feet to Mile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var array = [1000, 5000, 50000, 70000, 80000];
var result = feetToMile(array[3]);  // you can add arrays values like 0,1,2,3,4 here
console.log(result);

// Here I am gonna Calculate Wood for chair, table, Wood

function woodCalculator(chair, table, bed){
    var chairNumber = chair *1;
    var tableNumber = table * 3;
    var bedNumber = bed * 5;
    var totalWood = chairNumber + tableNumber + bedNumber;
    return totalWood;
}
var woodResult = woodCalculator(12, 5, 3); //ADD three values to calculate Wood numbers
console.log(woodResult);


//Here I am gonna define tiny friend name

function tinyFriend(names){
    var smallest = names[0].length;
    for(var i = 0 ; i < names.length; i++){
        var currentNumber = names[i].length;
        if( currentNumber < smallest){
            smallest = currentNumber
        }
    }
    return smallest;
}
var result = tinyFriend(['Alve', 'Sojun', 'Jadeed', 'Ema']);
console.log(result);
