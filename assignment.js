// kilometer to meter convert

function kilometerToMeter(kilometer){
    let meter = kilometer / 1000; // we know that 1 kilometer = 1000 meter;
    if(kilometer < 0 ){
        return "Sorry! Distance never be negetive";
    }
    return meter;
}

let result = kilometerToMeter();
console.log(result);


// Budget calculator;

function budgetCalculator(watch, phone, laptop){
    let watchTotal = watch * 50;
    let phoneTotal = phone * 100;
    let laptopTotal = laptop * 500;

    if(watch < 0 || phone < 0 || laptop < 0){
        return "Negetive value cannot accepted";
    }
    else if(watch < -0 || phone < -0 || laptop < -0){
        return "INVALID value.";
    }

    let grandTotal = watchTotal + phoneTotal + laptopTotal;
    return grandTotal;
}

let result = budgetCalculator();
console.log(result);

// find out hotel stay cost

function hotelCost(day){
    var totalCost = 0;

    if(day <= 10){
        totalCost = day * 100;

        if(day < 0){
            return "Day count cannot be negetive.";
        }
        else if(day == 0 || day == -0){
            return 0;
        } 
    }
    else if(day <= 20){
        var firstTenDay = 10 * 100;
        var pending = day - 10;
        var secondTenDay = pending * 80;
        totalCost = firstTenDay + secondTenDay;

    }
    else{
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var pending = day - 20;
        var thirdTenDay = pending * 50;

        totalCost = firstTenDay + secondTenDay + thirdTenDay;
    }
    return totalCost;
}

var payment = hotelCost();
console.log(payment);


// find out the owner of longenst name;

function megaFriend(friends){
    var item = 0;
    var longest;

    for (var i = 0; i < friends.length; i++) {
    
        
         if (friends[i].length > item) {
            var item = friends[i].length;
            longest = friends[i];
        }
        else if (typeof friends != "undefined" && friends != null && friends.length != null && friends.length <= 0) {
            return "input does not exists"
        }
        
    }
    return longest;
}

var result = megaFriend();
console.log(result);