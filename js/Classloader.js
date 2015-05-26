function Classloader() {

	this.load = function(inClassName) {

		var scriptTag = document.createElement("script");
		scriptTag.src = "modes/" + inClassName + ".js";
		var headTag = document.getElementsByTagName("head").item(0);
		headTag.appendChild(scriptTag);

	}

	

	this.verify = function(inClass, inBaseClass) {

		var isValid = true;
		for (i in inBaseClass) {
			if (i != "resultsCurrent" && i != "resultsPrevious" &&
			 i != "resultsCurrentNegated" && i != "resultsPreviousNegated" && !inClass[i]) {
				isValid = false;
			}
		}
		return isValid;
	}
}