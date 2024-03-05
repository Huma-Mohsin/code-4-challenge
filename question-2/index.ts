//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let friends:string[]=["zimmal","zarnish","yumna","alizeh","zara"]
for(const item of friends){
    console.log(item);
}

console.log("\n")
//or one way of loop is

for(let i=0;i<friends.length;i++){
    console.log(friends[i])
}