const selectio_Sort=`// Function to swap values 
function swap(arr,xp,yp){ 
	[arr[xp],arr[yp]] = [ arr[yp],arr[xp]] 
} 


function selectionSort(arr){ 

	// To get length of array 
	let n = arr.length; 
	
	// Variable to store index of smallest value 
	let min; 
	
	// variables to iterate the array 
	let i , j; 
	
	for( i = 0; i < n-1;++i){ 
		min = i; 
		for(j = i+1; j < n; j++){ 
			if(arr[j]<arr[min]) min = j; 
		} 
		
		// Swap if both index are different 
		if(min!=i) 
		swap(arr,min,i); 
	} 
} 

// Input array 
const arr = [64, 25, 12, 22, 11]; 

// Display input array 
console.log( "Original array: "+ arr) 

// Sort array using custom selection sort function 
selectionSort(arr); 

// Display output 
console.log("After sorting: " +arr);

}`

const bubble_sort=`// Bubble sort Implementation using JavaScript

// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Now pass this array to the bblSort() function
bblSort(arr);
`
const Insertion_sort=`// Function to implement insertion sort 
function InsertionSort(arr) { 

	// Getting the array length 
	let n = arr.length; 
	
	// To store value temporarily 
	let key; 
	
	// For iterations 
	let i, j; 
	
	// Iterate array in forward direction 
	for (i = 0; i < n ; ++i) { 
		key = arr[i]; 
		j = i - 1; 
		
		// Iterate and swap elements in backward direction 
		// till number is greater then the key 
		for (j; j >= 0, arr[j]>key; --j){ 
			arr[j+1]=arr[j]; 
		} 
		// Swap the key to right position 
		arr[j+1]=key; 
	} 
} 

// Input array 
const arr = [64, 25, 12, 22, 11]; 

// Display Input array 
console.log("Original array: " + arr); 

// Sort using function 
InsertionSort(arr); 

// Display the output array after sorting 
console.log("After sorting: " + arr);
`

module.exports={
    bubble_sort,
    selectio_Sort,
    Insertion_sort
}