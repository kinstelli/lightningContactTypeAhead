({
	setContactToSelectedOption: function(component, event)
	{
		objChosen = event.srcElement.value;
		//set textfield to picked value
		component.find("typeAheadBox").set("v.value", objChosen.FirstName + ' ' + objChosen.LastName);
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
            	//console.log("Returned from Apex with this value:");
            	//console.log(resultSet.getReturnValue());
                component.set("v.optionsList", resultSet.getReturnValue());
            	this.showMenu(component);
            });
       $A.enqueueAction(doGetValuesFromServer);	
	}
 ,hideMenu: function(component)
{
    //console.log("hiding menu");
    $A.util.addClass(component.find("optionsMenu"), 'invisible');

},showMenu: function(component)
{
    $A.util.removeClass(component.find("optionsMenu"), 'invisible');
}


})