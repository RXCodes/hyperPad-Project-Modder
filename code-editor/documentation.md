# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
__behaviors__ **{OBJECT}**<br>
A global object containing all methods to read and write behavior data.<br>
*Usage Example:* <br>
`behaviors.search.withName("Empty-1");`

__hyperPadBehavior__ **(CLASS)**<br>
An instance representing a behavior in the project.<br>
*Usage Example:* <br>
`behavior.moveToObject("Empty-1");` 

# The Objects
__objects__ **{OBJECT}**<br>
A global object containing all methods to read and write object data.<br>
*Usage Example:* <br>
`objects.createEmpty({x: 50, y: 100, name: "Example", width: 50, height: 50, useMeters: true});`

__hyperPadObject__ **(CLASS)**<br>
An instance of an object in the project.<br>
*Usage Example:* <br>
`object.moveBy(0, 10);`
