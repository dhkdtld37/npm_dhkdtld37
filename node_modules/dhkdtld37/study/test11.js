function calcDefaultValue(a=1, b=a==1?2:3) {
console.log(a,b);
}
calcDefaultValue(1) // 1,2;
calcDefaultValue(2) // 2,3;


