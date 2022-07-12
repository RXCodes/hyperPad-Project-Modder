# Brief Overview
The code editor uses native javascript as the primary programming language, so *all syntax* will follow the **javascript programming language**.
This documentation will review the additional capabilities and functionalities of using code in the editor of a hyperPad project.

# The Behaviors
`behaviors` **{Object}** <br>
Example Usage: **behaviors.search.objectOf("Empty-1").isRoot().log();**

## Selecting Behaviors and Performing Operations on them
- `.search`: Searches for behaviors to execute tasks on.

  **Scope Methods**: Multiple scope functions can be chained to limit queries.
  - `.withName(behaviorName)`: Limits results to a behavior with the name provided - must be exact match.
    - `behaviorName` **"STRING"** - The alias / set name of the behavior. *(Set Label3, If30, Started Touching4, etc.)*
  - `.includesName(behaviorName)`: Limits results to behaviors including the name provided.
    - `behaviorName` **"STRING"** - The alias / set name of the behavior. *(Set Label3, If30, Started Touching4, etc.)*
  - `.categoryOf(category)`: Limits results to behaviors within a category.
    - `category` **"STRING"** - The behavior category. *(eg. Input, Logic, Custom, etc.)*
  - `.notCategoryOf(category)`: Limits results to behaviors outside of the specific category.
    - `category` **"STRING"** - The behavior category. *(eg. Input, Logic, Custom, etc.)*
  - `.typeOf(behaviorType)`: Limits results to behaviors of a certain type.
    - `behaviorType` **"STRING"** - The type of behavior. *(Add Values, Started Touching, etc.)*
  - `.notTypeOf(behaviorType)`: Limits results to behaviors that are not a certain type.
    - `behaviorType` **"STRING"** - The type of behavior. *(Add Values, Started Touching, etc.)*
  - `.objectOf(objectName)`: Limits results to behaviors within the object specified.
    - `objectName` **"STRING"** - The name of the object. *(Helvetica-1, Empty-5, My Object, etc.)*
  - `.notObjectOf(objectName)`: Limits results to behaviors that are not in the object specified.
    - `objectName` **"STRING"** - The name of the object. *(Helvetica-1, Empty-5, My Object, etc.)*
  - `.isEnabled()`: Limits results to behaviors that are enabled.
  - `.isDisabled()`: Limits results to behaviors that are disabled.
  - `.includeChildren()`: Includes all children of the behavior(s) in the result.
  - `.withZPK(zpkNumber)`: Limits results to a behavior with the same ZPK identifier.
    - `zpkNumber` **(NUMBER)** - A unique integer that all behaviors have. *(5, 24, 20)*
  - `.isRoot()`: Limits results to behaviors that are not connected from the top. These behaviors execute on start.
  - `.isNotRoot()`: Limits results to behaviors that are connected from the top.

  **Action Methods**: Execute operations on the behaviors from the resulting search.
  - `.list()`: Returns an array of behavior names of the result.
  - `.listInternal()`: Returns an dictionary of behavior names with their corresponding internal data as the value.
  - `.log()`: Logs the behavior names of the result to the console.
  - `.logInternal()`: Logs the behaviors' internal data to the console.
  - `.copy(alias)`: Copies behaviors from the result to an alias.
    - `alias` **"STRING"** - The alias to save the behaviors to - The alias is like the storage location of the behaviors.
  - `.paste(alias)`: Replaces the behaviors from the result to the copied behavior tree.
    - `alias` **"STRING"** - The alias to load the behaviors from - The alias is like the storage location of the behaviors.
  - `.enable()`: Enables the behaviors in the result.
  - `.disable()`: Disables the behaviors in the result.
  - `.destroy()`: Deletes the behaviors in the result.

## Copying and Pasting Behaviors
- `.copy(objectName, alias)`: Copies all of an object's behaviors to a specified alias. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to copy behaviors from.
  - `alias` **"STRING"** - The alias to save the behaviors to - The alias is like the storage location of the behavior.

- `.paste(objectName, alias)`: Pastes behaviors copied to an alias in an object. Returns true if successful.
  - `objectName` **"STRING"** - The name of the object to paste behaviors in.
  - `alias` **"STRING"** - The alias to load the behaviors from - Use the same alias to load the same behaviors.
