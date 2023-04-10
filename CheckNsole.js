
let A = new Array();
let i=0;
function KTsole(n)
{
   n1=n; 
   while(n>0)
   {
    A[i]=n%10; 
    if(A[i]%2==0) 
    {console.log(n + " Không phải toàn số lẻ"); return;}
    n=n/10;
    i++;
   } 
   console.log(n1 + " Toàn số lẻ");
}

KTsole(1357);
