let balance = 300;
let withdaw = 300;

if (balance < withdaw) {
  console.log("Sorry buddy, you cant withdraw");
} else if (balance > withdaw) {
  console.log("Success");
  balance -= withdaw;
  console.log(balance);
} else {
  console.log("Need a float balnce");
}