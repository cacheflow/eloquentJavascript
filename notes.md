#Eloquent Javascript Notes
##Chapter 1 & 2 
###Ternary operators 
In JS are like if/else statements in every other language. If I write "console.log(true ? 3 : 4)" then it will give me 1 and that would be similar to the if block and in this case it was false, then I would get 4. So the middle value is chosen when something is true and the value on the right is chosen when something is false.

##Undefined values
Both undefined and null carry no values and are usually interchangeable.

##Automatic type conversion
Javascript accepts all things and when you use an operator in an expression where the types differ JS will try to convert one of their types to match one another. When something that doesn't map to a number in an obvious way, then you'll get the NaN value. Null or Undefined are only true if both sides of the expression use it. When you want to see if something has a value or not, then compare it to null like console.log(null == undefined) or console.log(null == 0) or by using !=. 
##Operators 
If you want to test if something is false, then you can use an empty string like "" or NaN or 0. You can use || as a fallback operator if the value to the left is emtpy and the same is true for && if the value to the left is false, then it will evaulate what's on the right.

##Variables 
Variables in JS are like tentacles for values. They grasp them, but don't hold on to them and can be changed at anytime. 
You can define multiple variables at once by using a comma like this var one = 1, two = 2, etc...

##Functions 
A function is a piece of a program wrapped in a value. To call a function you usually use the var that holds the function and write a parentheses after it like var() and if the function takes arguments then you pass it as a string in the parans. So for example you could call the alert function like alert() and whatever I pass as an argument will be printed to the screen. Second, functions return values. 

##Built-In Javascript functions
Calling the confirm function in JS will return a pop up window that has a Boolean of ok/cancel. Ok means true and cancel means false. 

###Prompt
The prompt function can be used to ask an open ended questions with the result being saved as a string. The isNaN function is a standard JS function that returns true only if argument passed is not a number as well.

###Number
The Number function returns NaN  when you give it a string that's not a valid number 

##Loops in JS   
###For Loops: 
The parentehsis after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by writing var, the second part is the expression that checks whether the loops must continue and lastly the final part that updates the state of the loop after every iteration.    

##Case Statements 
Case statements act as dispatchers or if/else statements that can be called via strings. Switch statements are made up of case labels inside the block opened by switch and depending on which case you enter the program will jump to that label that corresponds to the value switch was given and if one was not entered then a default one will run. After each case statement you need to break; it to signify that it's over. 

##Capitalization 
In JS the standard is to write variables in the form of camel-case which is like fooBar and you capitalize every word but the first. 

##Chapter 3: Functions 
The reason we wrap our program(s) in functions is to reduce repetititon and to isolate and associate subprograms. A function is simply a regular variable definition except that the variable's value is a function.
In JS there is really only local and global scope. When writing vars any var that is declared outside a function is considered global. However, if you write a var as 
> var local function() { x = "I am global"} 

without directly saying var within the function then you get a global function, so make sure to explicitly write var variable_name within your function(s).

##Function Declarations
Instead of writing var functionName, you can write function keyword/var which is called a function declaration and you can even call the function first and define it later because what JS does is move every function to the top of the scope and thus doesn't follow the strict top-bottom flow of control

##Closures 
A closure is a function that has access to the parent scope even after the function closes. You would use closures to call a function that generates another function or functions. 

##Functions Continued
The function keyword when you used as an expression can create a function value. When used as a statement it can be used to declare a variable and give it a function as its value