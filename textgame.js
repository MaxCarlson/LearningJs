//Java console text game

var user = prompt("Which is the best, food, sleep, or money?").toUpperCase(); //prompts user - upper case only 
var religious = prompt("Are you religious? True, False").toLowerCase();
var stupid = prompt("Are you stupidd? True, False");
switch(user){
    case 'FOOD':
        console.log("I knew you were gluttonous");
        if(religious && stupid){
            console.log("Sinner!");
        }else{
            console.log("I guess you're okay!");
        }
        break;
    case 'SLEEP':
        console.log("I knew you were slothful");
        if(religious || stupid){
            console.log("Sinner!");
        }else{
            console.log("I guess you're okay!");
        } 
        break;
    case 'MONEY':
        console.log("I knew you were greedy");
        if(religious || stupid){
            console.log("Sinner!");
        }else{
            console.log("I guess you're okay!");
        } 
        break;
    default:
        console.log("I'm sorry, I don't understand. Please try again.");
        break;
};