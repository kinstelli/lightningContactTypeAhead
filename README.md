
This is a-very-much-in-progress attempt to create a ui:inputText typeahead component.

Proof-of-concept here, but hopefully will do the following:

1. Definitively find out if anyone else had already done / is doing this ;)

and then...

2. Extend ui:inputText, in order to inherit its classes and events
3. Configure for searching on various fields and sObjects, instead of hardcoding to Contact.Name and Contact
4. Deal with issues related to searching partial text on 'Name' field, since record may include a last name.