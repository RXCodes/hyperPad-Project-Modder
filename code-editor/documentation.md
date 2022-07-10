# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
__behaviors__ **{OBJECT}** A global object containing all methods to read and write behavior data.<br>
*Usage Example:* 
`behaviors.search.withName("Empty-1");`

__hyperPadBehavior__ **(CLASS)** An instance representing a behavior in the project.<br>
*Usage Example:* 
`behavior.moveToObject("Empty-1");` 

# The Objects
__objects__ **{OBJECT}** A global object containing all methods to read and write object data.<br>
*Usage Example:* 
`objects.createEmpty({x: 50, y: 100, name: "Example", width: 50, height: 50, useMeters: true});`

__hyperPadObject__ **(CLASS)** An instance of an object in the project.<br>
*Usage Example:* 
`object.moveBy(0, 10);`
