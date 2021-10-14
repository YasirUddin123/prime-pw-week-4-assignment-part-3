console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// *** REQUIRED FEATURES ***

// 1 - Create a global variable named 'basket' and set it to an empty array.
        //CODE
        let basket = [];

        //COMMENT
        // I created an empty array and assigned it to the variable name basket.

// 2 - Create a function called addItem. It should:
//        -take an input parameter for a string 'item'
//        -add the new item to the global array 'basket'
//        -return ~true~ indicating the item was added

        //CODE
        function addItem(item){
          basket.push(item);
          return true;
        }

        //TEST
        console.log('*****Testing addItem Function!*****');
        console.log(`I have to make pancakes, so let me grab a basket and get what I need. ${basket}`);
        console.log(addItem(' pancake mix'));
        console.log(addItem(' syrup'));
        console.log(addItem(' chocolate chips'));
        console.log(addItem(' eggs'));
        console.log(`Now I have four items in my basket which are:${basket}`);

        //COMMENTS
        // I created the function + tested different parameters on the console

// 3 - Create a function called listItems. It should:
//        -loop over the items in the 'basket' array
//        -console.log each individual item on a new line

        //CODE
        function listItems(){
            for(let i = 0; i < basket.length; i++){
                console.log(basket[i]);
            }
        }

        //TEST
        console.log("*****Here's my list*****");
        console.log(listItems());

        //COMMENTS
        // listItems function doesn't take any arguments.
        // I tested this with using return on the console.
        // return prevents looping through the whole array. it only lists the
        // first array element.

// 4 - Create a function called empty. It should:
//        -reset the basket to an empty array

        //CODE
        function empty(){
          basket = [];
          return basket;
        }


        //TEST
        console.log('*****Emptying the cart*****');
        console.log("I bought my ingredients and put them in my car.");
        console.log(empty());
        console.log("Perfect. I'm going to return the basket and I'm ready to go home to make my pancakes!!");

        //COMMENTS
        // empty function doesn't take any arguments.
        // I tested this on the console.
        // I tried 'let basket  = [];' inside of the function
        // but it didn't work because I already defined basket earlier.
        // then I experienced how local and global variables work by testing


// MORE TESTING
        console.log("*****TESTING MY CODE*****");
        console.log(`Oh no, I forgot the vegetable oil!!`);
        console.log("Let me grab a new basket. I realized I also need milk and paper towels.");
        console.log(addItem(' vegetable oil'));
        console.log(addItem(' milk'));
        console.log(addItem(' paper towels'));
        console.log(`Let me double check I have everything: ${basket}`);
        console.log("Great! Now I'm sure I can go home! Let me put these in the car");
        console.log(empty());
        console.log("I'll return the basket and head home now!");
