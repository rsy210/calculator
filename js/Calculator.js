function Calculator() {

  this.currentMode = null;


  /**
   * The classloader instance CalcTron will use to load calculator mode classes.
   */
  this.classloader = new Classloader();


  /**
   * The width of the content area of the browser window.
   */
  this.scrWidth = null;


  /**
   * The height of the content area of the browser window.
   */
  this.scrHeight = null;

this.init = function() {
	if (window.innerWidth) {
		this.scrWidth = window.innerWidth;
	} else {
		this.scrWidth = document.body.clientWidth;
	}

	if (window.innerHeight) {
		this.scrHeight = window.innerHeight;
	} else {
		this.scrHeight = document.body.clientHeight;
	}

	new Rico.Effect.Round(null, "cssCalculatorOuter");

	this.setMode("Standard");
}


this.changeModePopup = function() {
	var divWidth = 150;
	var divHeight = 150;

	var modeDiv = $("divMode");
	modeDiv.style.width = "0px";
	modeDiv.style.height = "0px";

/*	var left = this.scrWidth - divWidth;
	var top = this.scrHeight - divHeight; */

	var left = divWidth;
	var top = divHeight;


	modeDiv.style.left = left;
	modeDiv.style.top = top;

	$("divMode").style.display = "block";

	new Rico.Effect.SizeAndPosition("divMode", left, top, divWidth, divHeight, 100, 10, null)
}

this.setMode = function(inVal) {
	if (typeof inVal == "string") {
		$("divMode").style.display = "none";
		this.classloader.load(inVal);
	} else{
		if (this.classloader.verify(inVal, new Mode())) {
			this.currentMode = inVal;
			this.currentMode.init();
		} else{
			alert("Not a valid mode class");
		}
	}
}

this.sidebar = function() { 
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

}

