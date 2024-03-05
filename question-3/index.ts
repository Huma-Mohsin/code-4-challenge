//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let friend_name:string[]=["Hira","Mahi","zeba","laiba"]
friend_name.forEach(friend_name => {
    console.log(`hello ${friend_name},How are you?`)
    
});