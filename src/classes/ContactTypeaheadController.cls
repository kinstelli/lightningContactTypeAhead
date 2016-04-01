public with sharing class ContactTypeaheadController
{

    @AuraEnabled
    public static List<Contact> getContactByName(String valueToMatch) 
    {
        List<Contact> newList = new List<sObject>();

        String dynamicQuery = 'SELECT FirstName, Lastname, Name, ID, Department, Email FROM Contact WHERE '
                            + ' (Name LIKE \'%' + String.escapeSingleQuotes(valueToMatch) + '%\' ) '
                            +' ORDER BY FirstName, LastName LIMIT 100 ';
        try
        {
            newList = Database.Query(dynamicQuery);
            System.debug('Here is the query: ' + dynamicQuery);
        }catch(QueryException qe)
        {
            //TODO: do UI understandable failure -- maybe bubble up the error -- not just show error.
            System.debug('Could not send query: ' + qe);
        }catch(Exception e)
        {
            System.debug('Unexpected error: ' + e);
        }

        //give back that list
        return newList;
    }



}