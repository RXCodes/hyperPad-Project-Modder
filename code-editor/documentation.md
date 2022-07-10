# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
`behaviors` **{Object}**
- `.search`: Searches for behaviors to execute tasks on. Returns an array of behavior class instances for each iteration.
  - `.withName(objectName)`: Limits results to objects with the name provided - must be exact match.
    - `objectName` **"STRING"** - The name of the object to search for.
- `.copy(objectName, alias)`: Copies all of an object's behaviors to a specified alias. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to copy behaviors from.
  - `alias` **"STRING"** - The alias to save the behaviors to - The alias is like the storage location of the behavior.
- `.paste(objectName, alias)`: Pastes behaviors copied to an alias in an object. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to paste behaviors in.
  - `alias` **"STRING"** - The alias to load the behaviors from - Use the same alias to load the same behaviors.
- `.create`: Creates a behavior using properties provided. Returns true if successful.
