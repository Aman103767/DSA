function printreverse(n){

    if(n==0){
         flag =true;
        return ;
    }
   
    
     printreverse(n-1)
     console.log(n)
   
}

printreverse(5);