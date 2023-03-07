/*1-ci yol*/
var num=prompt("bir eded daxil edin");
var powerful=1;
var power2=2;

while (powerful<=100&&power2!=num) {
    power2*=2;
    powerful++;
}
if(num==power2){
    console.log("2-nin quvvetidi");
}
else{
    console.log("2-nin quvveti deyil");
}


/*2-ci yol */
var num2=prompt("bir eded daxil edin");
var power2_2=false;
for (var powerful2 = 1; powerful2<=100; powerful2++) {
    if(2**powerful2==num2){
        power2_2=true;
        break;
    }
}
if(power2_2){
    console.log("2-nin quvvetidi");
}
else{
    console.log("2-nin quvveti deyil");
}