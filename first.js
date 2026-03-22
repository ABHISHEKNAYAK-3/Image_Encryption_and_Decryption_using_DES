console.log("ABHISHEK NAYAK");
console.log(5 === 5);  // false
//EVEN ODD 
/*let a;
a=prompt("Entera nuber");
if(a%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}
*/

///
/*function evenodd(n){
    return n%2==0? "Even" : "Odd";
}
let x;
x=prompt("Entera number");
for(i=2;i<x;i++){
    if(x%i==0){
        console.log("Not Prime");
        break;
    }
        console.log("Prime");
        break;
    
}*/

// FACTORIAL
/*function factorial(n){
    fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }return fact;
}
*/
/*
function fibonacci(n){
    let a=1,b=1;
    for(i=onabort;i<n;i++){
        console.log(a);
        let c=a+b;
        a=b;
        b=c;

    }
}

let a;
a=prompt("Entera number");
if(a%2==0){
    console.log("Even");
}
else {
    console.log("Odd");
}
*/

/*
function evenodd(n){
    if(n%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
    */
/*function isprime(n){
    if(n<=1){
        return false;
    }
    for(i=2; i<n;i++){
        if(n%i==0){
            return false;
        } 
        else{
            return true;
        }   
}}
*/
//STRING

/*function ispallindrom(str){
    let rev="";
    for(i=str.length-1; i>=0; i--){
        rev=rev+str[i];
    }
     if(rev==str){
        return "Pallindrom";
     }
    
}

function reverse( str){
    let rev="";
    for( let i=str.length-1; i>=0; i--){
        rev=rev + str[i];
    }
    return rev;
}

function countvowel(str){
    let count=0;
    let vowel="aeiou";
    for(i=0; i<str.length; i++){
        let ch=str[i].toLowerCase();;
        if(vowel.includes(ch)){
            count++;
        }
    }
    return count;
}

function remove(str){
    let removespace="";
    for(i=0;i<str.lengthj;i++){
        if(str[i]!==" "){
            removespace=removespace+str[i];
        }
    }
    return removespace;
}

function largest(arr){
    let max=arr[0];
    for( let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        
    }
    return max;
} 
function secondLargest(arr){
    let sorted=[...new Set(arr)].sort((a,b)=>b-a);
    return sorted[1];
}

function remove(arr){
    let remove=new Set(arr);
    return remove;
}
function shortass(arr){
    let ass=arr.sort((a,b)=>a-b);
    return ass;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Find the minimum element in the unsorted portion
        let minIdx = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Swap the minimum element with the first element of unsorted portion
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    
    return arr;
}


function missingnum(arr, n){
    let expectedsum=(n*(n+1))/2;
    let actualsum=0;
    for(let i=0; i<arr.length; i++){
        actualsum=actualsum+arr[i];
    }
    return expectedsum-actualsum;
}

function reversearr(arr){
    let rev="";
    for(let i=arr.length-1; i>=0; i--){
        rev=rev+arr[i];
    }
    return rev;
}
*/
//////////////////////////////////////////////////////////////////////////////////
function reversearray(arr){
    return [...arr].reverse();
}

function secondlargest(arr){
    let shoerted=[...new Set(arr)].sort((a,b)=>b-a);
    return shoerted[1];
}

function reversestr(str){
    return str.splite("").reverse().join();

}

function remove(arr){
    return [...new Set(arr)];
}

function missingnum(arr, n){
    let expectedsum=(n*(n+1)/2);
    let actual=0;
    for(let i=0;i<arr.length; i++){
        actual =actual +arr[i];
    }
    return expectedsum-actual;
}

function revstr(str){
    return str.split("").reverse().join("");
}