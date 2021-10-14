console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// *** REQUIRED FEATURES ***

// 1 - Create a global variable named 'basket' and set it to an empty array.

        let basket = [];

        // I created an empty array and assigned it to the variable name basket.

// 2 - Create a function called addItem. It should:
//        -take an input parameter for a string 'item'
//        -add the new item to the global array 'basket'
//        -return ~true~ indicating the item was added

        function addItem(item){
          basket.push(item);
          return true;
        }

        // I created the function + tested different parameters on the console

// 3 - Create a function called listItems. It should:
//        -loop over the items in the 'basket' array
//        -console.log each individual item on a new line

        function listItems(){
            for(let i = 0; i < basket.length; i++){
                console.log(basket[i]);
            }
        }

        // listItems function doesn't take any parameters.
        // I tested this with using return on the console.
        // return prevents looping through the whole array. it only lists the
        // first array element.

// 4 - Create a function called empty. It should:
//        -reset the basket to an empty array

        create a function called empty. no arguments.
          loop through the array
          delete each array element until the array is empty
          return the updated empty basket array


        function empty(){
          let basket = [];
          return basket;
        }
