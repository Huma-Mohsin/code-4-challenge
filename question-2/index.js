//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var friends = ["zimmal", "zarnish", "yumna", "alizeh", "zara"];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var item = friends_1[_i];
    console.log(item);
}
console.log("\n");
//or one way of loop is
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
