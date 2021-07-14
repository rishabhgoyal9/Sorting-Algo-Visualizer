function Quick(){
    c_delay=0;
    quick_sort(0,array_size-1);
    enable_buttons();
}
function quick_partition (start, end){
    // i : before i all are smaller than pivot
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"ffff3f");//yellow Color update
        for(var j =start + 1; j <= end ; j++ ){
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv){
                div_update(divs[j],div_sizes[j],"ffff3f");//yellow Color update
                div_update(divs[i],div_sizes[i],"bf0603");//Color update
                div_update(divs[j],div_sizes[j],"bf0603");//Color update
                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;
                div_update(divs[i],div_sizes[i],"bf0603");//Height update
                div_update(divs[j],div_sizes[j],"bf0603");//Height update
                div_update(divs[i],div_sizes[i],"03045e");//Height update
                div_update(divs[j],div_sizes[j],"#03045e");//Height update
                i += 1;
            }
    }

    // now
    //  i    => is at first bigger value than pivot
    // start => pivot is on start

    div_update(divs[start],div_sizes[start],"bf0603");//Color update
    div_update(divs[i-1],div_sizes[i-1],"bf0603");//Color update

    // swap start with i-1

    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;
    div_update(divs[start],div_sizes[start],"bf0603");//Height update
    div_update(divs[i-1],div_sizes[i-1],"bf0603");//Height update
    for(var t=start;t<=i;t++){
        div_update(divs[t],div_sizes[t],"#0f4c5c");//Color update
    }
    return i-1;//return the position of the pivot
}
function quick_sort (start, end ){
    if( start < end ){
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }