function Merge(){
    c_delay=0;
    merge_sort(0,array_size-1);
    enable_buttons();
}
function merge_2_sorted_array(start,mid,end){
    // so we use 2 Pointer Technique 
    // 1st pointer on 1st sorted array at start
    // 2nd pointer on 2nd sorted array at mid+1
    // these are not 2 seperate array , just single array
    // we virtually treat as 2 seperate arrays
    var p=start,q=mid+1;

    var Arr=[],k=0;  // final resultant array for ans

    for(var i=start; i<=end; i++){
        if(p>mid){ // 1st array finished , so put value from 2nd array
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"bf0603");//red Color update
        }
        else if(q>end){ // 2nd array finished , so put value from 1st array
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"bf0603");//red Color update
        }
        else if(div_sizes[p]<div_sizes[q]){  // value at p is smaller so put that
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"bf0603");//red Color update
        }
        else{  // value at q is smaller so put that
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"bf0603");// red Color update
        }
    }

    // update UI ( div heights ) with help of resultant array
    for(var t=0;t<k;t++){  
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"0f4c5c");//dark grey blue Color update
    }
}

function merge_sort(start,end){
    if(start < end){
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"ffff3f");//yellow Color update
        merge_sort(start,mid);
        merge_sort(mid+1,end);
        merge_2_sorted_array(start,mid,end);
    }
}
