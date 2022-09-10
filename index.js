function oddOrEven(int){
    let basamakT=0
    while(int!==0){
        basamakT=basamakT+(int%10);
        int=Math.floor(int/10);
     }

     if(basamakT%2==0){
         alert("this number is even");
     }else{
         alert("this number is odd");
     }
     
     console.log(basamakT);

}


oddOrEven(34);
oddOrEven(15);
oddOrEven(23);

