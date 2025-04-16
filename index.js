/* Q1. Count Characters 

You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S. 
Note: You have to complete countCharacters function.

Example 
Sample Input 
AbaDd 
Sample Output 
1 1 

*/

function CountCharacters(S){
    let countB = [0, 0];

    for(let i = 0; i < S.length; i++){
        if(S[i] === "A"){
            countB[0]++;
        }else if(S[i] === "D"){
            countB[1]++;
        }
    }
    console.log("A : "+ countB[0] + " Time");
    console.log("B : "+countB[1] + " Time");
}

let S= "AbaDd";
CountCharacters(S);

/* Q2. Count the Heads 

Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how 
many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds 
out the count of characters that occur more than once in the string. 

Example 
Sample Input 
prepbytes 
Sample Output 
e2p2 
*/

function DuplicateCharacter(Str){
    let charcount = {}

    for(let i = 0; i < Str.length ; i++){
        let character = Str[i];
        charcount[character] = (charcount[character] || 0) +1;
    }
    for(const key in charcount){
        if(charcount[key] > 1){
            console.log('Duplicate Character :' + key + ' Count :' + charcount[key]);
        }
    }
}

let  Str = "prepbytes";
DuplicateCharacter(Str);

/* Q3. Count the Vowels 
You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
given string. 
Note: You have to complete Count_Vowel function. No need to take any input. 
  
Example 
Sample Input 
Prepbytes 
Sample Output 
2 
*/

let str1 = "Karina Sharma";
let Count_Vowel = 0;

for(let i of str1){
    if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'
        || i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U'){
            Count_Vowel++;
        }
}
console.log("Vowel in String : " + Count_Vowel + " times");

/* Q4. Concatenate the Strings 
You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
concatenation of both the given strings.    
Example 
Sample Input 
Prep bytes 
Sample Output 
Prepbytes  */

let firstName = "Prep";
let lastName = "Bytes";
let concatenate = firstName + " " + lastName;

console.log(concatenate);

/* Q5. Find Length 
You are given a string S, and your task is to return the length of the string S. 
Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input. */


function findLength(Name){
    let count = 0;
    for(let i of Name){
        count++;
    }
    return count;
}

let Name = "Karina Sharma";
console.log("Length Of String : "+ findLength(Name));

/* Q6. Find the Winner 
You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
player wins the maximum number of games or there is a draw between them. 
Note: You have to complete Game_Winner function. No need to take any input. 

Example 
Sample Input 1 
ADDAAADDDDD 
Sample Output 1 
Danish 
Sample Input 2 
ADDAAADD 
Sample Output 2 
Draw */

function Game_Winner(record){
    let Aditya = 0;
    let Danish = 0;

    for(let i of record){
        if(i == 'A'){
            Aditya++;
        }else if (i == 'D'){
            Danish++;
        }
    }
    if(Aditya > Danish){
        return "Aditya";
    }else if(Danish == Aditya){
        return "Draw";
    }else {
        return "Danish";
    }
}

let record = "ADDAAADDDAADDAAAA"
console.log("Winner is : "+Game_Winner(record));

/* Q7. Join Strings 
You are given two strings S and P, and your task is to concatenate them and return the concatenated string. 
Note: You have to complete joinStrings function. No need to take any input.
Example 
Sample Input 
PrepBytes Technologies 
Sample Output 
PrepBytesTechnologies */

function joinStrings(first , second){
    return first+second;
}
let first = "PrepBytes ";
let second = "Technologies";

console.log(joinStrings(first,second));

/* Q8 You are given a string S, Your task is to check wether the given string is a Palindrome or not. 
A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
both upppercase lowercase letters. 
Note: You have to complete Plain_Check function. No need to take any input. 
 
Example 
Sample Input 1 
Naman 
Sample Output 1 
False 
Sample Input 2 
naman 
Sample Output 2 
True */

function Plain_Check(str2){
    const lowerS = str2.toLowerCase();
    let reverseS = ' ';
 
    for(let i = lowerS.length - 1; i >= 0; i--){
     reverseS += lowerS[i];
    }
    return lowerS === reverseS ? "True" : "False";
 }
 
 let str2 = "";
 console.log(Plain_Check("Naman"));
 console.log(Plain_Check("naman"));

 /* Q9. Reverse the String 
You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
complete Reverse_String function. No need to take any input.

Example 
Sample Input 
I am Karina Sharma
Sample Output */

function reverse_String(Ks){
    let reverseS = ' ';
    for(let i = Ks.length - 1; i >= 0; i--){
        reverseS += Ks[i];
    }
    return reverseS;

}
let Ks = "I am Karina Sharma";
console.log(reverse_String(Ks));

/* Q10. Match the Strings 
You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO. 
Note: You have to complete String_Match function. No need to take any input. 

Example 
Sample Input 
Prepbytes Prepbytes 
Sample Output 
YES */

function String_Match(Sa1 , Sa2){
    if(Sa1 === Sa2){
        return "Yes";
    }else{
        return "No";
    }
}

let Sa1 = "Prepbytes";
let Sa2 = "Prepbytes";
console.log(String_Match(Sa1 , Sa2));

/* Q11 You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
Note: You have to complete Replace function. No need to take any input.
Input Format
The first and the only line of the input contains a string S.

Output Format
Return updated String S as output.

Constraints
1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.

Example
Sample Input
Hi, I am You. You Prepbytes
Sample Output
Hi, I am Prepbytes. */

function Replace() {
    let S = "Hi, I am You. You Prepbytes";
    
    const pattern = "You";
    const text = "Prepbytes";
    
    let updatedString = S.replace(pattern, text);
    
    return updatedString;
}

console.log(Replace()); 

/* Q12. Split the String
You are given a string S, Your task is to split the string with respect to spaces.
Note: You have to complete Split_the_String function. No need to take any input.
Input Format
The first and the only line of the input contains a string S.

Output Format
Return the array of splitted strings of S.

Constraints
1≤|S|≤100, where |S|denotes the length of string S.

Example
Sample Input
Prepbytes
Sample Output
2 7 */

function Split_the_String(Stri){
    return Stri.split(" ");
}

let Stri = "I am utkarsh raj";
let result = Split_the_String(Stri);
console.log(result);

/*  Q13. Count the Vowels and Consonants 
You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
consonants in the given string. 

Input Format
The first and only line of the input contains string S. 

Output Format
Return the number of Vowels and the number of Consonants in the string S in the functions.

Constraints
1≤|S|≤100, where |S|denotes the length of string S.

Example 
Sample Input 
Prepbytes 
Sample Output 
2 7 */

let str3 = "prepbytes";
let vowels = 0;
let Consonants = 0;
for(let i of str3){
    if(i == "a" || i == "e" || i == "i" || i == "o" ||i == "u"){
        vowels++;
    }else{
        Consonants++;
    }
}
console.log("Vowels in the string are: ",+ vowels);
console.log("Consonants in the string are: ",+ Consonants);


 
