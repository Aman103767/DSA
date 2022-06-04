var arr =[39,27,11,4,24,32,32,1];
var top = -1;
var stk = [];
var ans = []
for(var i= 0;i<arr.length;i++){
while(top != -1&&stk[top]<= arr[i]){
     stk.pop();
     top--;
}if(top == -1){
    ans.push(-1)
}else{
    ans.push(stk[top])
}
top++
stk.push(arr[i]);

}
console.log(stk)