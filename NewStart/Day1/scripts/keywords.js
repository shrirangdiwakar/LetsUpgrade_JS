var name='Shrirang Diwakar';
alert("Check the console for differences between them")
console.log("%c Lets use var keyword to declare a variable name",'background: #111; color:yellow');
console.log("Using var keyword name: ",name);

console.log("%c Lets redeclare the variable name",'background: #111; color:yellow');
var name = "redeclared"
console.log("name: ",name)
console.log("%c Success",'background: #000; color:green');
console.log("We can also update variable if declared using var");

try {
    console.log("%c Lets use let keyword to redeclare a variable name in global scope",'background: #111; color:yellow');
    let name = 'Change';
    throw error;
} catch (error) {
    console.error("This error occurred if we try to redeclare same variable name in global scope ->:",error);
}
console.log("The above error occurred because we were redeclaring variable using let");
console.log("%c Lets try to use let keyword in a block {} for redeclaring variable",'background: #111; color:yellow');


{
let name = 'Successfully changed';
console.log("Using let keyword name: ",name);
console.log("%c Success",'background: #000; color: green');
console.log("We can update (not redeclare) variable if declared using var");
}

console.log("%c We're out of block now, lets check what value is stored in name",'background: #111; color:yellow');
console.log("name: ",name)
console.log("This means that outside let block, global value declared by var is accessed");

console.log("%c Lets use const keyword to declare a variable city",'background: #111; color:yellow');
const city = 'Pune';

console.log("city: ",city);

console.log("%c Now Lets use const keyword to redeclare the variable city",'background: #111; color:yellow');

try {
    const city = 'Mumbai';
    throw error;
} catch (error) {
    console.error("This error occurred if we try to redeclare const variable ->:",error);
}

console.log("%c Now Lets try to update variable city",'background: #111; color:yellow');

try {
    city = 'Mumbai';
    throw error;
} catch (error) {
    console.error("This error occurred if we try to update const variable ->:",error);
}