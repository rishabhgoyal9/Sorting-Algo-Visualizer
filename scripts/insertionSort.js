function Insertion(){
    c_delay=0;
    for(var i=0;i<array_size-1;i++){
        div_update(divs[i],div_sizes[i],"ffff3f");//Color yellow update
    
        for( var j = i ; j>=0 ; j-- ){
            if(div_sizes[j]>div_sizes[j+1]){

                // swapping j with j+1

                div_update(divs[j],div_sizes[j],"#bf0603");//red color
                div_update(divs[j+1],div_sizes[j+1],"#bf0603");///red
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                div_update(divs[j],div_sizes[j],"#03045e");//blue
                div_update(divs[j+1],div_sizes[j+1],"#03045e");//blue

            }else{
                break;
            }
        }
        for(var t=0;t<i;t++){
            div_update(divs[t],div_sizes[t],"0f4c5c");//Color dark grey blue update
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"0f4c5c");//Color dark grey blue update
    enable_buttons();
}