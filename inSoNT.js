function checkNT(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        // document.write(n + " là số nguyên tố <br/>");
        return true;
    }
    else{
        // document.write(n + " không phải là số nguyên tố <br/>");
        return false;
    }
}

function inSoNT(n)
{
    console.log('Số nguyên tố từ 1 đến ' + n);
    for (let i=0;i<n;i++)
    { 
        if(checkNT(i))
        console.log(i);
        // console.log('Là số nguyên tố');
    }
}

inSoNT(20);
