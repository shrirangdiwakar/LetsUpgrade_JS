//Console operations:

//log: log
console.group('group');
    console.log("console.group: defines a section of code, similarly this is a section")
    console.log("function console.log: This is used to Print output to the console");
//Warn
    console.warn("function console.warn: This is used to raise any warning in execution");
//Error
    console.error("function console.error: This is used to raise an error occurred in execution");
//table
    console.log("function console.table: Create a table as shown below");
    console.table({'a':1,'b':2,'c':3,'d':4});

//count
    console.log("function console.count: Used to count the number of occurrence of any value")
    for(i=0;i<6;i++)
    {
    console.count(i);
    console.log("After Second occurrence")
    console.count(i);
    }
//time and timeEnd
    console.time("time");
        console.log("function console.time: Start timer, function console.timeEnd: stop the timer");
        console.log("Specify a value as an argument and this will start a timer till console.timeEnd for that value is found");
        console.log("We are checking time");
        console.warn("This warning will increase time required");
        console.error("this error will increase the time and after this time taken will be printed");
    console.timeEnd("time");
console.groupEnd('group')
console.log('console.groupEnd: Ends the defined section, Now this is a new section')
