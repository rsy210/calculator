function sidebar() 
{ 
var L=document.getElementById("mainContainer"); // 变量：L代表 id="left" 的标记 
var R=document.getElementById("right"); // 变量：R代表 id="right" 的标记 
if (L.className=="cssCalculatorOuter") // 判断：如果 id="left" 的class值 等于left的话，将执行下面{}里面的内容 
    { 
        L.className="left1"; // 给 id="left" 的标记 加上class：left1 
        R.className=" "; // id="right" 的标记 加上class：空格，也就是消除class 
    } 
else // 判断：如果 id="left" 的class值 不等于left的话，将执行下面{}里面的内容 
    { 
        L.className="cssCalculatorOuter"; // 给 id="left" 的标记 加上class：left 
        R.className="right"; // 给 id="right" 的标记 加上class：right 
    } 
} 