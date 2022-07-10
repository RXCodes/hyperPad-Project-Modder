# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
`behaviors` **{OBJECT}** The object containing all methods to read and write behavior data.
*Usage Example:* `behaviors.search.withName("Empty-1");`
`hyperPadBehavior` **(CLASS)** An instance representing a behavior in the project.
*Usage Example:* `behavior.moveToObject("Empty-1");` 

# The Objects
`objects` **{OBJECT}** The object containing all methods to read and write object data.
*Usage Example:* `objects.createEmpty({x: 50, y: 100, name: "Example", width: 50, height: 50, useMeters: true});`
`hyperPadObject` **(CLASS)** An instance of an object in the project.
*Usage Example:* `object.moveBy(0, 10);`
