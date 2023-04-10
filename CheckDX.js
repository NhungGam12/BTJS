let n=1, i=0;
let A1 = new Array();
let A2 = new Array();
function CheckDX(n)
{
    let n1=String(n);
    console.log("Số :" + n1 + " có chiều dài: " + n1.length);

    while(n>0 && i<n1.length/2)
    {
        A[i]=n%10;n=n/10;i++;
    }
}


CheckDX(123321);