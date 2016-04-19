public with sharing class ContactTypeaheadController
{

    @AuraEnabled
    public static List<Contact> getContactByName(String valueToMatch) 
    {
        List<Contact> newList = new List<sObject>();

        //SELECT FirstName, Lastname, Name, ID, Department, Email FROM Contact WHERE
        String dynamicQuery = 'SELECT PrimaryFirstName__c, PrimaryLastName__c, Name, DirectoryWorkPhone__c, Department, Email, Title, IsFaculty__c, IsFullTimeFaculty__c, IsSeniorSchoolStaff__c, IsSchoolStaff__c, IsActiveContractor__c FROM Contact  '
                            + ' WHERE (Name LIKE \'%' + String.escapeSingleQuotes(valueToMatch) + '%\' ) '
                            + ' AND IsActiveEmployee__c = true '
                            + ' ORDER BY PrimaryFirstName__c, PrimaryLastName__c LIMIT 100 ';
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