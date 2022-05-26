// Create a function that: The idea using the stack is to traverse the string.
// From <- to -> and check if the stack is empty or if the first 
// character of the stack is not equal to the current character.
// If it is not equal, then push the current character to the stack.
// If it is equal, then pop th element from the top of the stack.

// Time complexity: O(n)
// This is because we have two loops, one for and one with while, but regarding time complexity, 
// we can sum them, so: O(n) + O(n) = O(n)

// Space complexity: O(n)
// In space complexity we create a temporalArray and one string to store the final string.
// So also we can sum them: O(n) + O(n) = O(n)


function removeAdjacentDuplicates(myWord) {

    // Temporal string to store the final string
    var wordFinalArr = [];

    for (let index = 0; index < myWord.length; index++) {

        // We check if the current character is different from the last one
        if (myWord[index] != wordFinalArr[wordFinalArr.length - 1]) {
            // If that is true, we add the current character to the string
            wordFinalArr.push(myWord[index]);
        }

        else {
            // If that is false, we remove the last character of the string
            wordFinalArr.pop();
        }

    }

    // Return empty if the last loop remove all the characters
    if (wordFinalArr.length == 0) return ""; 

    let finalWord = "";
    //Create a new string from the temporalArray
    while (wordFinalArr.length != 0) {
        finalWord = wordFinalArr[wordFinalArr.length - 1] + finalWord;
        wordFinalArr.pop();
    }
    return finalWord;

}

let myWord = "abbaca";
console.log(removeAdjacentDuplicates(myWord));