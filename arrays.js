var friends = ["Bobby", "Bailey", "Bethany", "Doriana"];
var ages = [29, 21, 26, 23];
var female = [false, true, true, true];

// The .pop method will remove "Doriana" from the friends array
friends.pop();

// The .push method will add 30 to the end of the array
ages.push(30);

// The .shift method will remove the element in the first index position which would be "false"
female.shift();

// Index positions of arrays always begin with 0. For example, in the friends array above, "Bobby" is in the 0 index position
// If I were to run console.log(friends[3]) on my original array without the friends.pop(); then it would return "Doriana"
