function print(n){
    if(n==1 || n==0){
        return 1;
    }
  
    return print(n-1)+ print(n-2);
}
console.log(print(4));