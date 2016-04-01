({
	handleClickedOption : function(component, event, helper) {
  		console.log(event.srcElement.value );
  		helper.setContactToSelectedOption(component, event);
  		helper.hideMenu(component);
	},
	handleUpdatedText: function(component, event, helper)
	{
		var currentText = event.getSource().get("v.value");
		if (currentText.length > 2)
		{
			console.log("Doing lookup of: " + currentText);
			helper.populateListOfMatchingValues(component, currentText);
			helper.showMenu(component);
		}
		else
		{
			console.log("ignoring lookup");
			helper.hideMenu(component);
		}
	}
});
