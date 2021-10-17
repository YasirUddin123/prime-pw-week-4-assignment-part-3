console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// ***** REQUIRED FEATURES *****

// 1 - Create a global variable named 'basket' and set it to an empty array.
        //CODE
        let basket = [];

        //COMMENT
        // I created an empty array and assigned it to the variable name basket.

// 2 - Create a function called addItem. It should:
//        -take an input parameter for a string 'item'
//        -add the new item to the global array 'basket'
//        -return ~true~ indicating the item was added

        //CODE ***This would run instead if I didn't update it from the stretch goal***
        // function addItem(item){  ********
        //   basket.push(item);
        //   return true;
        // }

        const maxItems = 5;

        function isFull(){
          if(basket.length < maxItems){
            return false;
          } else {
            return true;
          }
        }

        function addItem(item){
          if(isFull() === false){
            basket.push(item);
            return true;
          }
          return false
        }

        //TEST
        console.log('*****Testing addItem Function!*****');
        console.log(`I have to make pancakes, so let me grab a basket and get what I need. ${basket}`);
        console.log(addItem(' pancake mix'));
        console.log(addItem(' syrup'));
        console.log(addItem(' chocolate chips'));
        console.log(addItem(' eggs'));
        console.log(addItem(' plastic forks'));
        console.log(addItem(' zucchini'));
        console.log(`Now I have five items in my basket which are:${basket}`);
        console.log('I wanted to add zucchini, but my basket was full :(');

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

        //MORE TESTING
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

// ________________________________________________________________________

// ***** STRETCH GOALS *****

        //CODE
        console.log('*****STRETCH GOALS*****');

// 1 - Add a global const named 'maxItems' and set it to 5

        //CODE  ***Check out line #25***
        // const maxItems = 5;

        //COMMENTS
        //const creates a variable that can't be changed later in the program.
        //let creates a variable that CAN be changed later on.

// 2 - Create a function called isFull(). It should:
//      -return false if the basket contains LESS than max number of items
//      -return true otherwise (equal or more than maxItems)

        //CODE ***Check out line 27***
        // function isFull(){
        //   if(basket.length < maxItems){
        //     return false;
        //   } else {
        //     return true;
        //   }
        // }

        //TEST
        console.log("*****Let's see if our basket is full*****");
        console.log(isFull());
        console.log('false makes sense because our basket is empty. Let me add 6 items to the basket to see if it changes to true. ');
        console.log(addItem('Fruit Loops'));
        console.log(addItem('Tomatoes'));
        console.log(addItem('Peanuts'));
        console.log(addItem('Orange Juice'));
        console.log(addItem('Bread'));
        console.log(isFull());
        console.log('It changed to true! isFull function works.');
        console.log('Emptying out the basket for the next problem');
        console.log(empty());

        //COMMENTS
        //I can still keep using the functions before stretch goals since it is all in one program

// 3 - Update the required addItem function to:
//      -use the isFull function to prevent more than maxItems from being added to the basket
//      -if an item was added to the array, return true
//      -if there was no room and the item could not be added, return false

        //CODE **Check out line 35***
        // function addItem(item){
        //   if(isFull() === false){
        //     basket.push(item);
        //     return true;
        //   }
        //   return false
        // }

        //COMMENTS
        //It looks like functions can be used in conditonals. This looks super helpful
        //by using less code in a program.

// 4 - Create a function called removeItem. It should:
//      -Take an input parameter for a string item
//      -Use Array.indexOf to find the index of the first matching item in the basket.
//      -Use Array.splice to remove the first matching item from the basket.
//      -Return the item removed or null if the item was not found.

        //CODE
        function removeItem(string){
          for(let i = 0; i < basket.length; i++){
            if(basket.indexOf(string) === i){
                let removedValue = basket.splice(i, 1);
                return removedValue;
            }
          }
          return null;
        }

        //TEST
        console.log('*****Removing an Item*****');
        console.log("Let's add back the items from the last problem.");
        console.log(addItem('Fruit Loops'));
        console.log(addItem('Tomatoes'));
        console.log(addItem('Peanuts'));
        console.log(addItem('Orange Juice'));
        console.log(addItem('Bread'));
        console.log(listItems());
        console.log("Testing the function. Let's remove Orange Juice.");
        console.log(removeItem('Orange Juice'));
        console.log(listItems());
        console.log("The function worked!");

        //COMMENTS
        //on the browser console, I get 'undefined' on lines 202 and 205.
        //I think this is okay because I didn't use the return keyword in the
        //listItems function. I experimented with the function to see what would
        //happen if I used return inside the function, but it only gave me
        //one value because return is used once, the function ends.
        //But this isn't what I want since I want to list out all of the items.

//ready for submission
