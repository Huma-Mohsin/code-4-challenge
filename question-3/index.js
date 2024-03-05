//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var friend_name = ["Hira", "Mahi", "zeba", "laiba"];
friend_name.forEach(function (friend_name) {
    console.log("hello ".concat(friend_name, ",How are you?"));
});
