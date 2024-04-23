var today = new Date(); //Creat a new date object
var hourNow = today.getHours(); // find the current time
var greeting;

//dispaly greeting suitable for the current time
if (hourNow > 18)
{greeting = 'Good Evening';}
else if (hourNow > 12)
{
    greeting = 'Good afternoon';
}
else if (hourNow >o)
{
    greeting = 'Good Morning'
}
else {
    greeting='Welcome'
}
document.write(greeting);