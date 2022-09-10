function oddOrEven(int){
    let basamakT=0
    while(int!==0){
        basamakT=basamakT+(int%10);
        int=Math.floor(int/10);
     }

     if(basamakT%2==0){
         console.log(basamakT+ "This number is even");
     }else{
        console.log(basamakT+ "This number is odd");
     }
     
     

}


oddOrEven(34);
oddOrEven(15);
oddOrEven(23);

