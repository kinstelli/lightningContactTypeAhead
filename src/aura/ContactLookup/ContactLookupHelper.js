({
	setContactToSelectedOption: function(component, event)
	{
		objChosen = event.srcElement.value;
		//set textfield to picked value
		component.find("typeAheadBox").set("v.value", objChosen.Name );
		component.set("v.chosenContact", objChosen);
          
        var messageEvent = component.getEvent("pickedContact");
        messageEvent.setParams({
            "contactObject": objChosen
        });
        messageEvent.fire();
	},
	populateListOfMatchingValues : function(component, textToMatch) 
	{
		var doGetValuesFromServer = component.get("c.getContactByName"); // call Apex Class
        var lookupParams = {
        					'valueToMatch': textToMatch
        				    };
        doGetValuesFromServer.setParams(lookupParams);
        doGetValuesFromServer.setCallback(this, 
        	function setFoundValuesToOptionsList(resultSet)
            {
                var contactResults = resultSet.getReturnValue();

            	console.log("Returned from Apex with this value:");
            	console.log(contactResults);
                console.log("lenght of results: " + contactResults.length);
                component.set("v.optionsList", contactResults );
            	if(contactResults.length >= 1)
                {
                    this.showMenu(component);
                }else
                {
                     this.hideMenu(component);
                }

            });
       $A.enqueueAction(doGetValuesFromServer);	
	}
 ,hideMenu: function(component)
{
    //console.log("hiding menu");
    $A.util.addClass(component.find("optionsMenu"), 'invisible');

},showMenu: function(component)
{
    console.log("showign menu.");
    $A.util.removeClass(component.find("optionsMenu"), 'invisible');
}


})