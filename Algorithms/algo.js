const tower_of_hanoi= `function Hanoi(n, from, to , via)
{
  if (n==0) return;

  Hanoi(n-1, from, via , to);

  moveDisk(from,to);

  // callStack.push([from,to]); // save parameters to callStack array
  
  Hanoi(n-1, via, to , from);
}
  var callcallStack;   

function executeHanoi()
{ //  Some initialization code goes here
 
  callStack=[];  // callStack array is global

  Hanoi(diskCount, 0,2,1);
    
  moveDisk();  // moveDisk takes its parameters from callStack
}

function moveDisk()
{  if (callStack.length==0) return; 

   var param = callStack.shift(); // Get call parameters from callStack
   // Note: throughout the code, I use fromBar, toBar to refer to towers
   fromBar = param[0];
   toBar = param[1];
   // find top element in fromBar
   var elem = document.getElementById(barsInfo[fromBar].disks.pop());  
    
   moveInfo = { elem: elem,
                fromBar: fromBar,
                toBar: toBar,
                whichPos: "top", // element position property for movement
                dir: -1,  // 1 or -1
                state: "up", // move upward
                endPos:60    // end position (in pixels) for move upward
             } 

   myTimer = setInterval(animateMove,speed); // Start animation
}`;

const Sorting=`function merge(arr , l , r , m){
        let left_ind=m-l-1;
        let left_ind=r-m;

        let l1=new Array[left_ind];
        let r1=new Array[right_ind];

        for(let i=0;i<left_ind;i++){
            l1[i]=arr[l+1];
        }
        
        for(let i=0;i<right_ind;i++){
            r1[i]=arr[m + 1 + j];
        }

        let i=0;
        let j=0;
        let k=0;

        while(i < left_ind && j < right_ind){
            if(l1[i] <= r1[j]){
                arr[k] = l1[i];
                i++;
            }
            else{
                arr[k] = r1[j];
                j++;
            }
            k++;
        }
        
        while(i<n1){
            arr[k]=l1[i];
            i++;
            k++;
        }
        while(i<n1){
            arr[k]=r1[j];
            j++;
            k++;
        }
    }
    
    function mergeSort(arr , l , r){
        if(l>=r) return;

        let mid=l+ parseInt((r-l)/2);
        mergeSort(arr , l , mid)
        mergeSort(arr , mid+1 , r)
        merge(arr, l , r , m)

    }   

    let a=[674,738,34,3,1,5,2,5,4];
    mergeSort(a , 0 , a.legth-1);

    console.log("new Array: ", a);
}`

module.exports = {
    tower_of_hanoi,
    Sorting
}