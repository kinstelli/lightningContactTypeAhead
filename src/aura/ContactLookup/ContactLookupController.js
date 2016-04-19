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
	},
	handleClearErrors: function(component, event, helper)
	{
		debugger;
		console.log("Handling clearing of errors: ", event);

		//propagate this down into the contained ui:inputText component?
		var inputFieldComponent = component.find("typeAheadBox");
		inputFieldComponent.set("v.errors", null); // Set Error
	}
	,handleValidationError: function(component, event, helper)
	{
		debugger;
		console.log("Handling validation error: ", event);
		//propagate this down into the contained ui:inputText component?
		var inputFieldComponent = component.find("typeAheadBox");
		inputFieldComponent.set("v.errors", [{message:"Required"}]); // Set Error

	},handleUnspecifiedError: function(component, event, helper)
	{
		debugger;
		var errors = event.getParam("errors");
		for (var i = 0; i < errors.length; i++)
		{
			console.log("error " + i);
		}
	}
});
