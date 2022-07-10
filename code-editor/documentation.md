# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
`behaviors` **{Object}**
- `.search`: Searches for behaviors to execute tasks on. Returns behavior class instances for each iteration.

  **Search Methods**
  - `.withName(behaviorName)`: Limits results to a behavior with the name provided - must be exact match.
  - `.includesName(behaviorName)`: Limits results to behaviors including the name provided.
  - `.categoryOf(category)`: Limits results to behaviors within a category. *(eg. Input, Logic, Custom, etc.)*
  - `.typeOf(behaviorType)`: Limits results to behaviors of a certain type. *(Add Values, Started Touching, etc.)*
  - `.objectOf(objectName)`: Limits results to behaviors within an object.
  - `.isEnabled()`: Limits results to behaviors that are enabled.
  - `.isDisabled()`: Limits results to behaviors that are disabled.
  - `.includeChildren()`: Includes all children of the behavior(s) in the result.
  - `.withZPK(zpkNumber)`: Limits results to a behavior with the same ZPK identifier.
  - `.isRoot()`: Limits results to behaviors that are not connected from the top.

  **Action Methods**
  - `.list()`: Returns an array of behavior names of the result.
  - `.copy(alias)`: Copies behaviors from the result to an alias.
  - `.enable()`: Enables the behaviors in the result.
  - `.disable()`: Disables the behaviors in the result.
  - `.destroy()`: Deletes the behaviors in the result.

- `.copy(objectName, alias)`: Copies all of an object's behaviors to a specified alias. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to copy behaviors from.
  - `alias` **"STRING"** - The alias to save the behaviors to - The alias is like the storage location of the behavior.

- `.paste(objectName, alias)`: Pastes behaviors copied to an alias in an object. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to paste behaviors in.
  - `alias` **"STRING"** - The alias to load the behaviors from - Use the same alias to load the same behaviors.

# Example Code
 **Manipulating Behaviors** <br>
  Get all behaviors in an object named "Empty-1" and destroy them.<br>
  `behaviors.objectOf("Empty-1").destroy();`
   
  Get all behaviors in the Custom category in the project and console log them.<br>
  `console.log(behaviors.categoryOf("Custom").list());`
  
  Get all Started Touching behaviors in an object named "Button" and disable them.<br>
  `behaviors.typeOf("Started Touching").objectOf("Button").disable();`
  
  Get the entire behavior tree under "Receive Message5" and destroy them including the parent.<br>
  `behaviors.withName("Receive Message5").includeChildren().destroy();`
  
  Get all behaviors containing "fart" in their name in an object called "Bad" and show it in the console log.<br>
  `console.log(behaviors.includesName("fart").objectOf("Bad").list());`

  Copy and paste a behavior tree from one object to another.<br>
  `behaviors.withName("Behavior Bundle3").includeChildren().copy("myTree");
  behaviors.paste("Empty-2", "myTree");`
