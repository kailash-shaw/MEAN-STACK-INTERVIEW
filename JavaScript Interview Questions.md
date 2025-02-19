What difference between **null**, **empty** and **undefine** in
javascript?

**1. undefined**

-   **Meaning**: A variable is declared but **not assigned a value**, or
    a property/array index doesn't exist.

-   **Type**: typeof undefined → \"undefined\".

-   **Usage**:

> **javascript**
>
> let x; // x is undefined
>
> let obj = {};
>
> obj.prop; // undefined (property doesn't exist)
>
> function foo() {}
>
> foo(); // returns undefined

**2. null**

-   **Meaning**: **Intentional absence of any object value**. It's
    explicitly assigned to signify \"no value.\"

-   **Type**: typeof null → \"object\" (a historical quirk in
    JavaScript).

-   **Usage**:

> **javascript**
>
> let y = null; // y is explicitly set to \"no value\"
>
> // Often used to reset/clear object references:
>
> let data = fetchData(); // Suppose data is an object
>
> data = null; // Clear the reference when no longer needed

**3. \"Empty\"**

-   **Not a JavaScript keyword**. Refers to **primitives or data
    structures with no content**:

    -   **Empty string**: \"\" (a string with zero length).

    -   **Empty array**: \[\] (an array with length === 0).

    -   **Empty object**: {} (an object with no properties).

-   **Usage**:

> **javascript**
>
> let str = \"\"; // Empty string
>
> let arr = \[\]; // Empty array
>
> let obj = {}; // Empty object
>
> if (str === \"\") { /\* handle empty string \*/ }
>
> if (arr.length === 0) { /\* handle empty array \*/ }
>
> if (Object.keys(obj).length === 0) { /\* handle empty object \*/ }

**Key Differences**

  --------------------------------------------------------------------------------
  **Value**   **Type**        **Intent**                   **Example**
  ----------- --------------- ---------------------------- -----------------------
  undefined   \"undefined\"   Uninitialized/missing value. let
                                                           x; → x is undefined.

  null        \"object\"      Explicit \"no value\" for    let y = null; →
                              objects.                     intentional.

  \"Empty\"   Varies          A valid value with no        \"\", \[\], {}.
                              content.                     
  --------------------------------------------------------------------------------

**Coercion and Equality**

-   **Falsy Values**: All are falsy in boolean contexts (if (!x) passes
    for null, undefined, \"\", 0, etc.).

-   **Equality Checks**:

> **javascript**
>
> null == undefined; // true (due to type coercion)
>
> null === undefined; // false (different types)
>
> \"\" == 0; // true (coercion: \"\" → 0)
>
> \"\" === 0; // false (string vs. number)

**When to Use Each**

-   Use **undefined** when a variable/property is unintentionally
    missing.

-   Use **null** to explicitly indicate \"no value\" (e.g., clearing an
    object reference).

-   Use \"empty\" values (**\"\"**, \[\], \`{}\*\*) to represent valid
    data with no content (e.g., initializing a form field).

**2. What are the scopes of a variable in JavaScript?**

In JavaScript, the scope of a variable determines where it can be
accessed or modified within the code. There are three main types of
variable scopes:

**1. Global Scope**

-   A variable declared outside of any function or block has a global
    scope.

-   It can be accessed and modified from anywhere in the code, including
    inside functions and blocks.

-   Example:

> **javascript**
>
> let globalVar = \"I am global\";
>
> function example() {
>
> console.log(globalVar); // Accessible here
>
> }
>
> example();
>
> console.log(globalVar); // Accessible here too

**2. Function Scope (Local Scope)**

-   Variables declared inside a function using var, let, or const are
    function-scoped.

-   They can only be accessed within the function where they are
    declared.

-   Example:

> **javascript**
>
> function example() {
>
> let localVar = \"I am local\";
>
> console.log(localVar); // Accessible here
>
> }
>
> example();
>
> console.log(localVar); // Error: localVar is not defined

**3. Block Scope**

-   Variables declared with let or const inside a block (e.g.,
    inside {} for if, for, while, etc.) are block-scoped.

-   They can only be accessed within the block where they are declared.

-   Example:

> **javascript**
>
> if (true) {
>
> let blockVar = \"I am block-scoped\";
>
> console.log(blockVar); // Accessible here
>
> }
>
> console.log(blockVar); // Error: blockVar is not defined

**Key Differences:**

-   **var**: Function-scoped, not block-scoped. If declared inside a
    block, it is accessible outside the block but within the function.

-   **let and const**: Block-scoped. They are only accessible within the
    block they are declared in.

**Example Demonstrating Scopes:**

**Javascript**

let globalVar = \"Global\";

function myFunction() {

let functionVar = \"Function\";

if (true) {

let blockVar = \"Block\";

console.log(globalVar); // Accessible

console.log(functionVar); // Accessible

console.log(blockVar); // Accessible

}

console.log(globalVar); // Accessible

console.log(functionVar); // Accessible

console.log(blockVar); // Error: blockVar is not defined

}

console.log(globalVar); // Accessible

console.log(functionVar); // Error: functionVar is not defined

console.log(blockVar); // Error: blockVar is not defined

**Summary:**

-   **Global Scope**: Accessible everywhere.

-   **Function Scope**: Accessible only within the function.

-   **Block Scope**: Accessible only within the block
    (for let and const).

**3. What is the difference between Function declaration and Function
expression?**

In JavaScript, **function declaration** and **function expression** are
two ways to define functions, but they differ in syntax, behavior, and
usage. Here\'s a detailed comparison:

**1. Syntax**

-   **Function Declaration**:

> javascript
>
> function myFunction() {
>
> console.log(\"Function Declaration\");
>
> }

-   The function is declared using the function keyword followed by the
    function name.

```{=html}
<!-- -->
```
-   **Function Expression**:

> javascript
>
> const myFunction = function() {
>
> console.log(\"Function Expression\");
>
> };

-   The function is assigned to a variable or constant. It can be named
    or anonymous.

**2. Hoisting**

-   **Function Declaration**:

    -   Function declarations are **hoisted** to the top of their scope.

    -   This means you can call the function before it is declared in
        the code.

> javascript
>
> myFunction(); // Works fine
>
> function myFunction() {
>
> console.log(\"Function Declaration\");
>
> }

-   **Function Expression**:

    -   Function expressions are **not hoisted**.

    -   You cannot call the function before it is defined.

> javascript
>
> myFunction(); // Error: myFunction is not defined
>
> const myFunction = function() {
>
> console.log(\"Function Expression\");
>
> };

**3. Anonymous vs Named Functions**

-   **Function Declaration**:

    -   Always has a name (cannot be anonymous).

-   **Function Expression**:

    -   Can be **anonymous** (no name) or **named**.

> javascript
>
> // Anonymous function expression
>
> const myFunction = function() {
>
> console.log(\"Anonymous Function Expression\");
>
> };
>
> // Named function expression
>
> const myFunction = function namedFunction() {
>
> console.log(\"Named Function Expression\");
>
> };

**4. Usage in Callbacks and Higher-Order Functions**

-   **Function Declaration**:

    -   Typically used for standalone functions that need to be reused.

-   **Function Expression**:

    -   Often used for **callbacks** or **inline functions**.

> javascript
>
> setTimeout(function() {
>
> console.log(\"Function Expression as Callback\");
>
> }, 1000);

**5. Scope and Context**

-   **Function Declaration**:

    -   Always belongs to the scope in which it is declared.

-   **Function Expression**:

    -   Can be assigned to a variable, making it part of the variable\'s
        scope.

    -   Useful for creating **closures** or **IIFE (Immediately Invoked
        Function Expressions)**.

> javascript
>
> (function() {
>
> console.log(\"IIFE\");
>
> })();

**6. Example Comparison**

**javascript**

// Function Declaration

function add(a, b) {

return a + b;

}

// Function Expression

const add = function(a, b) {

return a + b;

};

**Summary of Differences:**

  -----------------------------------------------------------------------
  **Feature**     **Function Declaration**   **Function Expression**
  --------------- -------------------------- ----------------------------
  **Syntax**      function name() {}         const name = function() {}

  **Hoisting**    Hoisted (can be called     Not hoisted (must be defined
                  before declaration)        before calling)

  **Anonymous     Not allowed                Allowed
  Functions**                                

  **Usage**       Standalone functions       Callbacks, closures, IIFEs

  **Scope**       Belongs to the enclosing   Belongs to the variable\'s
                  scope                      scope
  -----------------------------------------------------------------------

**When to Use Which?**

-   Use **function declarations** when you need a reusable function that
    should be hoisted.

-   Use **function expressions** for flexibility, such as passing
    functions as arguments or creating IIFEs.

**4. what are difference between cookies and session in JavaScript?**

In JavaScript, cookies and sessions are both used to store data on the
client side, but they serve different purposes and have distinct
characteristics. Here\'s a breakdown of the differences:

**1. Storage Location**

-   **Cookies**: Stored directly on the client\'s browser as small text
    files. They are sent back and forth between the client and server
    with every HTTP request.

-   **Sessions**: Data is stored on the server, and only a session
    identifier (session ID) is stored on the client (usually in a
    cookie). The session data itself resides on the server.

**2. Lifetime**

-   **Cookies**: Can have a specific expiration date set by the
    developer. They can persist even after the browser is closed
    (persistent cookies) or expire when the browser is closed (session
    cookies).

-   **Sessions**: Typically last until the user closes the browser or
    the session times out on the server. Session data is usually
    temporary and tied to the user\'s browsing session.

**3. Data Capacity**

-   **Cookies**: Limited to about 4KB of data per cookie.

-   **Sessions**: Can store much larger amounts of data since the data
    is stored on the server.

**4. Security**

-   **Cookies**: Less secure because they are stored on the client side
    and can be manipulated by the user or intercepted during
    transmission. However, they can be made more secure by using
    the HttpOnly and Secure flags.

-   **Sessions**: More secure because the actual data is stored on the
    server. Only the session ID is exposed to the client, reducing the
    risk of data tampering.

**5. Usage**

-   **Cookies**: Often used for storing small amounts of data that need
    to persist across multiple sessions, such as user preferences or
    tracking information.

-   **Sessions**: Used for storing temporary data that is only needed
    during a single browsing session, such as user login information or
    shopping cart contents.

**6. Accessibility**

-   **Cookies**: Can be accessed by both the client-side (JavaScript)
    and server-side code.

-   **Sessions**: Typically accessed only by server-side code. The
    client-side only has access to the session ID, not the actual
    session data.

**7. Performance**

-   **Cookies**: Can impact performance if too many cookies are sent
    with every HTTP request, increasing the size of the request headers.

-   **Sessions**: Generally more efficient for storing larger amounts of
    data since only the session ID is sent with each request.

**Example of Cookies in JavaScript:**

**javascript**

// Setting a cookie

document.cookie = \"username=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00
UTC; path=/\";

// Reading a cookie

console.log(document.cookie);

**Example of Sessions in JavaScript (using a server-side language like
Node.js with Express):**

**javascript**

const express = require(\'express\');

const session = require(\'express-session\');

const app = express();

app.use(session({

secret: \'your-secret-key\',

resave: false,

saveUninitialized: true,

cookie: { secure: false } // Set to true if using HTTPS

}));

app.get(\'/\', (req, res) =\> {

req.session.username = \'JohnDoe\'; // Setting session data

res.send(\'Session data set\');

});

app.get(\'/get-session\', (req, res) =\> {

res.send(\`Username: \${req.session.username}\`); // Accessing session
data

});

app.listen(3000, () =\> {

console.log(\'Server running on port 3000\');

});

In summary, cookies are best for small, persistent data that needs to be
accessible on both the client and server, while sessions are better for
larger, temporary data that should remain secure and server-side.

**5. What is the difference between Session storage and Local storage?**

sessionStorage and localStorage are two web storage APIs in JavaScript
that allow you to store data on the client side. While they are similar
in many ways, they have key differences in terms
of **lifetime**, **scope**, and **use cases**. Here\'s a detailed
comparison:

**1. Lifetime**

-   **sessionStorage**:

    -   Data persists only for the duration of the **page session**.

    -   Data is cleared when the **tab or browser is closed**.

    -   Refreshing the page does not clear the data, but opening a new
        tab or window creates a new session.

-   **localStorage**:

    -   Data persists **indefinitely**, even after the browser is closed
        and reopened.

    -   Data is only cleared when explicitly deleted by the user (via
        browser settings) or programmatically via JavaScript.

**2. Scope**

-   **sessionStorage**:

    -   Data is **scoped to the current tab or window**. Each tab or
        window has its own separate sessionStorage.

    -   Data is not shared across tabs or windows, even if they are
        accessing the same website.

-   **localStorage**:

    -   Data is **shared across all tabs and windows** from the same
        origin (same protocol, domain, and port).

    -   Changes in one tab are reflected in all other tabs/windows
        accessing the same website.

**3. Storage Limit**

-   Both sessionStorage and localStorage have the same storage limit,
    which is typically **5-10 MB per origin** (depending on the
    browser).

-   This is significantly larger than cookies (which are limited to
    about 4 KB).

**4. Use Cases**

-   **sessionStorage**:

    -   Ideal for storing temporary data that is only needed during a
        single session.

    -   Examples: Form data that should persist during page refreshes,
        temporary user preferences, or data that should not be shared
        across tabs.

-   **localStorage**:

    -   Ideal for storing data that needs to persist across sessions and
        browser restarts.

    -   Examples: User preferences, cached data, or authentication
        tokens (though sensitive data should be handled carefully).

**5. Accessibility**

-   Both sessionStorage and localStorage are accessible only on
    the **client side** (via JavaScript).

-   They are not sent to the server with every HTTP request (unlike
    cookies).

**6. API Methods**

Both sessionStorage and localStorage use the same API methods:

-   **setItem(key, value)**: Stores a key-value pair.

-   **getItem(key)**: Retrieves the value for a given key.

-   **removeItem(key)**: Removes the key-value pair.

-   **clear()**: Clears all stored data.

-   **key(index)**: Returns the key at the specified index.

-   **length**: Returns the number of items stored.

**Example of sessionStorage:**

**javascript**

// Storing data

sessionStorage.setItem(\'username\', \'JohnDoe\');

// Retrieving data

const username = sessionStorage.getItem(\'username\');

console.log(username); // Output: JohnDoe

// Clearing data for a specific key

sessionStorage.removeItem(\'username\');

// Clearing all data

sessionStorage.clear();

**Example of localStorage:**

**javascript**

// Storing data

localStorage.setItem(\'theme\', \'dark\');

// Retrieving data

const theme = localStorage.getItem(\'theme\');

console.log(theme); // Output: dark

// Clearing data for a specific key

localStorage.removeItem(\'theme\');

// Clearing all data

localStorage.clear();

**Key Differences Summary:**

  -------------------------------------------------------------------------------
  **Feature**         **sessionStorage**               **localStorage**
  ------------------- -------------------------------- --------------------------
  **Lifetime**        Cleared when the tab/browser is  Persists indefinitely
                      closed                           

  **Scope**           Tab-specific                     Shared across all
                                                       tabs/windows

  **Use Case**        Temporary session data           Persistent data across
                                                       sessions

  **Storage Limit**   \~5-10 MB per origin             \~5-10 MB per origin

  **Accessibility**   Client-side only                 Client-side only
  -------------------------------------------------------------------------------

**When to Use Which?**

-   Use **sessionStorage** for data that should only exist during a
    single browsing session (e.g., form data, temporary settings).

-   Use **localStorage** for data that needs to persist across sessions
    (e.g., user preferences, cached data).

Both are powerful tools for client-side storage, but choosing the right
one depends on your specific use case.

**6. What is the difference between Closures, Bind, Call and Apply?**

Closures, bind, call, and apply are all concepts in JavaScript, but they
serve different purposes and are used in different contexts. Here\'s a
breakdown of each:

**1. Closures**

A closure is a function that retains access to its lexical scope, even
when the function is executed outside that scope. In other words, a
closure allows a function to \"remember\" the environment in which it
was created.

**Example:**

**javascript**

function outerFunction() {

let outerVariable = \'I am outside!\';

function innerFunction() {

console.log(outerVariable); // Accessing outerVariable from the outer
scope

}

return innerFunction;

}

const closureExample = outerFunction();

closureExample(); // Logs: \"I am outside!\"

In this example, innerFunction is a closure because it retains access
to outerVariable even after outerFunction has finished executing.

**2. bind**

The bind method creates a new function that, when called, has
its this keyword set to the provided value, with a given sequence of
arguments preceding any provided when the new function is called.

**Example:**

**javascript**

const person = {

name: \'Alice\',

greet: function() {

console.log(\`Hello, my name is \${this.name}\`);

}

};

const greetAlice = person.greet.bind(person);

greetAlice(); // Logs: \"Hello, my name is Alice\"

In this example, bind is used to create a new
function greetAlice where this is bound to the person object.

**3. call**

The call method calls a function with a given this value and arguments
provided individually.

**Example:**

**javascript**

const person = {

name: \'Bob\'

};

function greet(greeting) {

console.log(\`\${greeting}, my name is \${this.name}\`);

}

greet.call(person, \'Hi\'); // Logs: \"Hi, my name is Bob\"

Here, call is used to invoke the greet function with this set to
the person object and the argument \'Hi\'.

**4. apply**

The apply method is similar to call, but it takes arguments as an array
(or an array-like object).

**Example:**

**javascript**

const person = {

name: \'Charlie\'

};

function greet(greeting, punctuation) {

console.log(\`\${greeting}, my name is \${this.name}\${punctuation}\`);

}

greet.apply(person, \[\'Hello\', \'!\'\]); // Logs: \"Hello, my name is
Charlie!\"

In this example, apply is used to invoke the greet function
with this set to the person object and the arguments \[\'Hello\',
\'!\'\].

**Summary of Differences:**

-   **Closures**: A function that retains access to its lexical scope.

-   **bind**: Creates a new function with a specific this value and
    optional arguments.

-   **call**: Calls a function with a specific this value and individual
    arguments.

-   **apply**: Calls a function with a specific this value and arguments
    provided as an array.

Each of these concepts is useful in different scenarios, and
understanding them can help you write more flexible and powerful
JavaScript code.

**7. What is the difference between of var, let, and const?**

Here\'s a comparison of **var**, **let**, and **const** in JavaScript,
presented in a tabular format:

  -----------------------------------------------------------------------------------
  **Feature**          **var**                **let**             **const**
  -------------------- ---------------------- ------------------- -------------------
  **Scope**            Function-scoped or     Block-scoped        Block-scoped
                       globally scoped if     (inside curly       (inside curly
                       declared outside any   braces {}).         braces {}).
                       function.                                  

  **Hoisting**         **Hoisted** to the top **Hoisted**, but    **Hoisted**, but
                       of its scope, but not  not initialized     not initialized
                       initialized (undefined (temporary dead     (temporary dead
                       until assigned).       zone until          zone until
                                              assignment).        assignment).

  **Re-assignable**    Yes, can be            Yes, can be         No, cannot be
                       reassigned.            reassigned.         reassigned after
                                                                  initialization.

  **Redeclarable**     Yes, can be redeclared No, cannot be       No, cannot be
                       within the same scope. redeclared within   redeclared within
                                              the same scope.     the same scope.

  **Initialization**   Can be declared        Must be initialized Must be initialized
                       without initialization when declared, but  at the time of
                       (undefined by          can be reassigned.  declaration.
                       default).                                  

  **Global Object**    When declared          Does not become a   Does not become a
                       globally, it becomes a property of the     property of the
                       property of the window global object when  global object when
                       (in browsers) or       declared globally.  declared globally.
                       global (in Node.js).                       

  **Example**          js var x = 5; x = 10;  js let x = 5; x =   js const x = 5; x =
                       console.log(x);        10; console.log(x); 10; // Error!
                                                                  Cannot reassign.

  **Use Case**         Suitable for variables Ideal for variables Best for constants
                       that are meant to be   that are            that should not
                       used across functions  block-scoped, e.g., change after being
                       or in the global       inside loops or     initialized.
                       context.               conditionals.       
  -----------------------------------------------------------------------------------

**Key Differences:**

1.  **Scope**:

    -   var: Function-scoped or globally scoped.

    -   let and const: Block-scoped (limited to the block, statement, or
        expression where they are declared).

2.  **Hoisting**:

    -   var is hoisted to the top of its scope, but the variable is
        initialized as undefined.

    -   let and const are hoisted but remain in a \"temporal dead zone\"
        until they are initialized.

3.  **Re-assignment and Redeclaration**:

    -   var: Can be reassigned and redeclared within the same scope.

    -   let: Can be reassigned but **cannot** be redeclared in the same
        scope.

    -   const: Cannot be reassigned or redeclared after initialization.

4.  **Global Object**:

    -   A var declared globally becomes a property of the global object
        (e.g., window in browsers).

    -   let and const do **not** become properties of the global object
        when declared globally.

**Summary:**

-   **var** is outdated and should be avoided in modern JavaScript in
    favor of let and const for better scoping and to avoid bugs.

-   **let** is used for variables that may change during execution.

-   **const** is used for variables that are meant to stay constant and
    not reassigned after initialization.

**8. What is the hoisting, strict, this and Yield Operator in
javaScript?**

Let\'s break down each of the terms you\'ve asked about in JavaScript:

### 1. **Hoisting**

Hoisting is a JavaScript behavior where variable and function
declarations are moved (or \"hoisted\") to the top of their containing
scope during the compile phase before the code has been executed. This
means you can refer to variables and functions before they are declared
in the code.

#### Variables:

-   **var** declarations are hoisted and initialized to undefined.

-   **let** and **const** declarations are hoisted, but they are not
    initialized and remain in a \"temporal dead zone\" until they are
    assigned a value.

Example:

console.log(x); // undefined, not a ReferenceError

var x = 5;

console.log(y); // ReferenceError: Cannot access \'y\' before
initialization

let y = 10;

#### Functions:

-   Function declarations are hoisted fully, so you can call them before
    their definition in the code.

Example:

foo(); // Works because the function is hoisted

function foo() {

console.log(\"Hello, World!\");

}

But **function expressions** (i.e., assigning a function to a variable)
are not hoisted the same way:

bar(); // TypeError: bar is not a function

var bar = function() {

console.log(\"Hello!\");

};

### 2. **Strict Mode**

Strict mode in JavaScript is a way to opt-in to a stricter version of
JavaScript. It makes it easier to write secure JavaScript by throwing
more errors and forbidding certain language features that are considered
problematic.

To enable strict mode, you simply add \"use strict\"; at the beginning
of a JavaScript file or a function.

Example:

\"use strict\";

x = 10; // ReferenceError: x is not defined because strict mode does not
allow implicit global variables

In strict mode:

-   Assigning a value to an undeclared variable throws an error.

-   You cannot use delete on variables, functions, or objects with
    certain names.

-   eval and with have stricter limitations.

-   this will be undefined in functions, instead of referring to the
    global object.

### 3. this **Keyword**

The this keyword refers to the context in which a function is called.
Its value depends on how the function is called. It is used to access
properties or methods of the object that \"owns\" the code.

-   In a **regular function** call (not bound), this will refer to the
    global object (in non-strict mode) or undefined (in strict mode).

-   In an **object method**, this refers to the object that owns the
    method.

-   In **arrow functions**, this is lexically inherited from the
    surrounding context.

Examples:

function normalFunction() {

console.log(this); // In non-strict mode, this will be the global object
(Window in browsers)

}

const person = {

name: \"Alice\",

greet: function() {

console.log(this.name); // \'this\' refers to the person object

}

};

person.greet(); // Logs \"Alice\"

const arrowFunction = () =\> {

console.log(this); // In an arrow function, \'this\' is inherited from
the outer context

};

arrowFunction(); // \'this\' here refers to the surrounding context, not
the global object

### 4. yield **Operator or** generator functions

The yield operator is used within a generator function to pause the
function\'s execution and return a value. It is used in combination with
the **generator function** syntax (function\*). When the generator
function is called, it returns an iterator, and each time yield is
encountered, it yields a value back to the caller.

You can resume the generator\'s execution by calling .next() on the
iterator.

Example:

function\* generatorFunction() {

yield 1;

yield 2;

yield 3;

}

const generator = generatorFunction();

console.log(generator.next()); // { value: 1, done: false }

console.log(generator.next()); // { value: 2, done: false }

console.log(generator.next()); // { value: 3, done: false }

console.log(generator.next()); // { value: undefined, done: true }

In this example:

-   yield 1 pauses the function and returns the value 1.

-   .next() resumes execution from where the last yield was called.

-   The generator function continues until there are no more yield
    statements.

### Summary:

-   **Hoisting**: Variable and function declarations are moved to the
    top of their scope during the compile phase.

-   **Strict Mode**: A stricter version of JavaScript that throws more
    errors and prevents certain language behaviors.

-   **this**: Refers to the context of a function call, which can vary
    depending on how the function is invoked.

-   **yield**: Used to pause and resume the execution of a generator
    function, returning values one at a time.

**9. What is Object Protection Methods and prototype in javascript?**

### **Object Protection Methods in JavaScript:**

In JavaScript, object protection refers to mechanisms that help
safeguard the properties and behavior of an object, preventing
accidental or intentional changes. These methods are used to protect an
object\'s data and ensure its integrity. Here are some common object
protection techniques:

1.  **Object.freeze()**:

    -   This method prevents the modification of an object\'s
        properties. Once an object is frozen, its properties can\'t be
        added, deleted, or modified.

    -   It also prevents the object\'s prototype from being changed.

    -   However, **nested objects** are not deeply frozen unless
        explicitly done.

> javascript
>
> CopyEdit

const person = {

name: \'Alice\',

age: 25

};

Object.freeze(person);

person.age = 30; // This will have no effect

console.log(person.age); // 25

2.  **Object.seal()**:

    -   This method prevents new properties from being added to an
        object but allows modification of existing properties.

    -   It also does not allow the deletion of existing properties.

CODE:

const car = {

model: \'Tesla\',

year: 2020

};

Object.seal(car);

car.year = 2021; // This is allowed

delete car.model; // This will not work

console.log(car); // { model: \'Tesla\', year: 2021 }

3.  **Object.preventExtensions()**:

    -   This method prevents new properties from being added to an
        object, but it doesn\'t affect the ability to modify or delete
        existing properties.

**CODE**:

const book = {

title: \'JavaScript Basics\',

author: \'John Doe\'

};

Object.preventExtensions(book);

book.title = \'Advanced JavaScript\'; // This works

book.newProp = \'Some value\'; // This will fail silently in non-strict
mode

console.log(book); // { title: \'Advanced JavaScript\', author: \'John
Doe\' }

4.  **Object.defineProperty() and Object.defineProperties()**:

    -   These methods allow you to define or modify properties with
        specific attributes such as writable, configurable, and
        enumerable.

    -   By setting writable: false, you can make a property
        non-modifiable, while setting configurable: false prevents
        further changes to the property attributes (including making the
        property read-only).

> javascript
>
> CopyEdit

const user = {};

Object.defineProperty(user, \'name\', {

value: \'Alice\',

writable: false,

configurable: false

});

user.name = \'Bob\'; // This won\'t change the value

console.log(user.name); // \'Alice\'

### **Prototype in JavaScript:**

In JavaScript, **prototype** refers to an object that is associated with
every function and object by default. It allows for inheritance, meaning
objects can share properties and methods with other objects.

Every object in JavaScript has a hidden internal property called
\[\[Prototype\]\], which points to another object. This chain of
prototypes is known as the **prototype chain**, and it is used for
property lookup when a property or method is not found on the object
itself.

#### **Key Concepts Related to Prototype:**

1.  **Prototype of Functions and Objects:**

    -   Every function in JavaScript has a prototype property. This
        prototype object is used when new objects are created from that
        function using the new keyword.

    -   Each object created from a constructor function gets a reference
        to the constructor\'s prototype property.

> Example:

**CODE:**

function Person(name) {

this.name = name;

}

const p1 = new Person(\'Alice\');

console.log(p1.\_\_proto\_\_ === Person.prototype); // true

2.  **Object.getPrototypeOf()**:

    -   This method is used to get the prototype of an object.

**CODE**:

const obj = {};

const proto = Object.getPrototypeOf(obj);

console.log(proto); // Prototype of the object, usually Object.prototype

3.  **Prototype Chain Lookup:**

    -   If you try to access a property on an object and it doesn't
        exist, JavaScript will look for that property in the object\'s
        prototype, and then the prototype's prototype, and so on.

    -   The chain continues until it reaches Object.prototype, the root
        prototype from which all objects ultimately inherit.

4.  **hasOwnProperty()**:

    -   This method checks whether a property is directly on the object
        (not inherited through the prototype chain).

**CODE:**

const obj = { name: \'Alice\' };

console.log(obj.hasOwnProperty(\'name\')); // true

console.log(obj.hasOwnProperty(\'toString\')); // false, inherited from
Object.prototype

5.  **prototype vs \_\_proto\_\_:**

    -   prototype is a property of constructor functions, while
        \_\_proto\_\_ is a property of all objects, pointing to the
        prototype object that the object inherits from.

#### **Example of Prototype Chain:**

**CODE:**

function Animal(name) {

this.name = name;

}

Animal.prototype.sayHello = function() {

console.log(\`Hello, I am a \${this.name}\`);

};

function Dog(name, breed) {

Animal.call(this, name);

this.breed = breed;

}

// Inheriting from Animal

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {

console.log(\'Woof!\');

};

const dog = new Dog(\'Max\', \'Golden Retriever\');

dog.sayHello(); // Inherited method from Animal

dog.bark(); // Method from Dog

In this example:

-   Dog.prototype = Object.create(Animal.prototype) sets up inheritance
    from Animal, meaning Dog objects can access Animal\'s methods.

-   The prototype chain allows the dog object to access methods from
    both Dog and Animal.

### Summary:

-   **Object Protection Methods** in JavaScript help to freeze or seal
    objects, preventing modification or addition of properties.

-   **Prototype** is a core feature in JavaScript that allows objects to
    inherit methods and properties from other objects, enabling a form
    of inheritance.

**10. What is the use of freeze and seal in javaScript?**

In JavaScript, both Object.freeze() and Object.seal() are methods used
to control the mutability (the ability to modify) of objects. However,
they differ in the extent of restrictions they impose. Here\'s an
explanation of each:

### 1. Object.freeze()

The Object.freeze() method **freezes an object**, making it
**immutable**. Once an object is frozen:

-   You **cannot modify its existing properties** (i.e., their values).

-   You **cannot add new properties** to the object.

-   You **cannot delete existing properties** from the object.

### Key Characteristics of Object.freeze():

-   **Shallow freeze**: Only the top-level properties are frozen. Nested
    objects are not frozen unless you explicitly freeze them as well.

-   **Immutability**: After freezing an object, it cannot be changed.

### Syntax:

**javascript**

**CopyEdit**

Object.freeze(obj);

### Example of Object.freeze():

**javascript**

**CopyEdit**

const person = {

name: \"Alice\",

age: 30

};

Object.freeze(person);

person.name = \"Bob\"; // This will not work

console.log(person.name); // \"Alice\"

person.city = \"New York\"; // This will not work

console.log(person.city); // undefined

delete person.age; // This will not work

console.log(person.age); // 30

### When to Use Object.freeze():

-   When you want to **ensure the immutability** of an object, i.e., you
    don\'t want its properties to be modified or extended.

-   Commonly used in situations where objects are treated as
    **constants** or **configuration data**.

### 2. Object.seal()

The Object.seal() method **seals an object**, meaning it **prevents the
addition or removal of properties**, but **allows the modification of
existing properties**.

In other words:

-   You **cannot add new properties** to the object.

-   You **cannot delete existing properties** from the object.

-   You **can modify** the values of existing properties.

### Key Characteristics of Object.seal():

-   **Shallow sealing**: Like Object.freeze(), Object.seal() is also
    shallow, meaning it only affects the top-level properties of the
    object, not nested objects.

-   **Modification allowed**: Unlike Object.freeze(), sealed objects
    still allow changes to the existing property values, as long as the
    properties are writable.

### Syntax:

**javascript**

**CopyEdit**

Object.seal(obj);

### Example of Object.seal():

**javascript**

**CopyEdit**

const person = {

name: \"Alice\",

age: 30

};

Object.seal(person);

person.name = \"Bob\"; // This works, as the value of the property can
still be modified

console.log(person.name); // \"Bob\"

person.city = \"New York\"; // This will not work, cannot add new
properties

console.log(person.city); // undefined

delete person.age; // This will not work, cannot delete properties

console.log(person.age); // 30

### When to Use Object.seal():

-   When you want to **prevent the addition and deletion of properties**
    but still allow modifications to the existing property values.

-   Useful when you want to **maintain the object structure** but allow
    the internal data to be modified (e.g., modifying configuration
    settings but preventing adding new fields).

### **Comparison:**

  ---------------------------------------------------------------------------
  **Feature**    **Object.freeze()**     **Object.seal()**
  -------------- ----------------------- ------------------------------------
  **Add          Not allowed             Not allowed
  properties**                           

  **Delete       Not allowed             Not allowed
  properties**                           

  **Modify       Not allowed (immutable) Allowed (mutable)
  properties**                           

  **Shallow or   Shallow (does not       Shallow (does not affect nested
  Deep**         affect nested objects)  objects)

  **Use case**   When you need to make   When you want to prevent
                 an object completely    modifications to the structure but
                 immutable               allow changes to property values
  ---------------------------------------------------------------------------

### **Which One to Use?**

-   Use **Object.freeze()** when you want to ensure that an object is
    completely **immutable** (no changes allowed to any properties).

-   Use **Object.seal()** when you want to **lock the structure** of an
    object (no new properties, no deletion of properties), but still
    allow the existing properties to be modified.

Both Object.freeze() and Object.seal() help in controlling how an object
is modified, but freeze() imposes stricter rules by making the object
completely immutable.

**11 What are the various data types that exist in JavaScript?**

### **avaScript Data Types**

In JavaScript, data types can be categorized into **primitive** and
**non-primitive** (also known as **reference**) data types. Let\'s dive
into each category.

### **1. Primitive Data Types**:

Primitive data types are **immutable** (their values cannot be changed
after creation) and are passed by **value**. There are **6 primitive
data types** in JavaScript:

1.  **Number**:

    -   Represents both integer and floating-point numbers.

    -   Special values: Infinity, -Infinity, NaN (Not a Number).

**CODE:**

let age = 25; // integer

let price = 9.99; // floating-point number

let invalid = NaN; // Not a Number

2.  **String**:

    -   Represents sequences of characters (text).

    -   Strings can be enclosed in single quotes (\'), double quotes
        (\"), or backticks (\` for template literals).

**CODE:**

let name = \'John\';

let message = \"Hello, World!\";

let greeting = \`Hello, \${name}\`; // Template literal

3.  **Boolean**:

    -   Represents a logical value that can be either true or false.

**CODE:**

let isActive = true;

let isComplete = false;

4.  **Undefined**:

    -   Represents a variable that has been declared but has not yet
        been assigned a value.

**CODE:**

let value; // \'value\' is undefined because no value is assigned

console.log(value); // undefined

5.  **Null**:

    -   Represents the intentional absence of any value or object. It is
        a special value that represents \"no value\" or \"empty\".

**CODE:**

let obj = null;

console.log(obj); // null

6.  **Symbol**:

    -   Represents a unique and immutable value, typically used as
        object property keys to avoid name clashes.

**CODE:**

const sym1 = Symbol(\'description\');

const sym2 = Symbol(\'description\');

console.log(sym1 === sym2); // false, because symbols are unique

### **2. Non-Primitive (Reference) Data Types**:

Non-primitive data types are **complex objects** that can store
collections of data or more structured information. They are **passed by
reference** (not by value), meaning when you assign a non-primitive
value to a variable, you are referencing the same object in memory.
These include **3 main types**:

1.  **Object**:

    -   Represents a collection of key-value pairs, where keys are
        strings (or Symbols) and values can be any valid JavaScript data
        type.

    -   Objects are used to store structured data, such as a person's
        information or a car's specifications.

**CODE:**

let person = {

name: \'John\',

age: 30

};

2.  **Array**:

    -   Arrays are special types of objects used to store **ordered
        collections** of values. Arrays can hold elements of any data
        type, including other arrays or objects.

**CODE:**

let numbers = \[1, 2, 3, 4\];

let mixedArray = \[10, \'hello\', true\];

3.  **Function**:

    -   Functions in JavaScript are also **objects**, and they are used
        to represent callable blocks of code that can perform operations
        or return values.

**CODE**:

function greet(name) {

return \`Hello, \${name}\`;

}

### **Characteristics of Non-Primitive (Reference) Types**:

-   **Pass by reference**: When you assign a non-primitive data type
    (like an object or array) to another variable, both variables point
    to the same object in memory. Modifying one will affect the other.

-   **Mutable**: Objects, arrays, and functions can be modified (i.e.,
    their properties or values can be changed).

### **Example of Pass by Reference (Non-Primitive Types)**:

**CODE**:

let person1 = { name: \'Alice\', age: 25 };

let person2 = person1; // person2 points to the same object as person1

person2.age = 30; // Modifying person2 also modifies person1

console.log(person1.age); // 30

console.log(person2.age); // 30

In this example, both person1 and person2 refer to the same object in
memory. Changing the age property in person2 also changes it in person1,
demonstrating how non-primitive types are passed by reference.

### **Summary of JavaScript Data Types**:

-   **Primitive Types** (immutable, passed by value):

    1.  Number

    2.  String

    3.  Boolean

    4.  Undefined

    5.  Null

    6.  Symbol

-   **Non-Primitive Types** (complex, passed by reference): 7. Object 8.
    Array 9. Function

**12 What is difference between Callbacks, callback hell,Asynchronous ,
Promises and Async/await in javascript**

The concepts you mentioned---callbacks, callback hell, asynchronous
programming, promises, and async/await---are all related to handling
asynchronous operations in JavaScript. Let me explain each one and how
they differ:

### 1. **Callbacks:**

A **callback** is a function passed into another function as an argument
to be executed later, typically once an asynchronous operation (like
reading a file, making an HTTP request, or waiting for user input) is
completed.

**Example:**

**CODE**:

function fetchData(callback) {

setTimeout(() =\> {

callback(\"Data fetched\");

}, 1000);

}

fetchData((message) =\> {

console.log(message);

});

Here, fetchData takes a callback function that gets called after 1
second with the message \"Data fetched\".

### 2. **Callback Hell:**

**Callback hell** (also known as **Pyramid of Doom**) occurs when you
nest multiple callbacks inside each other, making the code hard to read,
maintain, and debug. This happens often in asynchronous code that relies
heavily on callbacks.

**Example (Callback Hell):**

**CODE**:

fs.readFile(\'file1.txt\', (err, data1) =\> {

if (err) throw err;

fs.readFile(\'file2.txt\', (err, data2) =\> {

if (err) throw err;

fs.readFile(\'file3.txt\', (err, data3) =\> {

if (err) throw err;

// More code here\...

});

});

});

In this case, each asynchronous operation (reading files) relies on the
completion of the previous one, resulting in deeply nested code. It
becomes difficult to manage and maintain, leading to callback hell.

### 3. **Asynchronous Programming:**

**Asynchronous programming** is a method that allows a program to
perform tasks in the background without blocking the main execution
thread. This is useful when handling operations like file reading, HTTP
requests, or timers, where the program doesn\'t need to wait for one
task to complete before moving on to the next.

In JavaScript, asynchronous operations are typically handled using
callbacks, promises, or async/await.

**Example (Asynchronous Code):**

**CODE**:

console.log(\"Start\");

setTimeout(() =\> {

console.log(\"Asynchronous task finished\");

}, 1000);

console.log(\"End\");

The output would be:

sql

CopyEdit

Start

End

Asynchronous task finished

Notice that \"End\" is printed before the \"Asynchronous task finished\"
message because setTimeout is asynchronous.

### 4. **Promises:**

A **promise** is an object that represents the eventual completion (or
failure) of an asynchronous operation and its resulting value. Promises
can be in three states:

-   **Pending:** The operation is still ongoing.

-   **Fulfilled:** The operation completed successfully.

-   **Rejected:** The operation failed.

Promises allow you to avoid callback hell by chaining .then() for
successful operations and .catch() for handling errors.

**Example (Promise):**

**CODE**:

let fetchData = new Promise((resolve, reject) =\> {

setTimeout(() =\> {

resolve(\"Data fetched\");

}, 1000);

});

fetchData.then((message) =\> {

console.log(message);

}).catch((error) =\> {

console.error(error);

});

In this example, the promise is resolved after 1 second, and the then
method is used to handle the success case.

### 5. **Async/Await:**

**Async/await** is a syntax introduced in ES2017 (ES8) that allows you
to work with promises in a more synchronous-like fashion. It makes
asynchronous code easier to read and write by avoiding nested .then()
and .catch() methods.

-   **async** makes a function return a promise.

-   **await** pauses the execution of the function until the promise is
    resolved or rejected.

**Example (Async/Await):**

**CODE**:

async function fetchData() {

let response = await new Promise((resolve) =\> {

setTimeout(() =\> {

resolve(\"Data fetched\");

}, 1000);

});

console.log(response);

}

fetchData();

Here, fetchData is an asynchronous function, and await pauses its
execution until the promise is resolved, making the code look more
sequential and easier to read.

### Summary of Key Differences:

1.  **Callbacks** are simple functions passed into other functions and
    executed later, but they can lead to callback hell if nested too
    much.

2.  **Callback Hell** refers to the difficulty of managing deeply nested
    callbacks, making the code hard to read and maintain.

3.  **Asynchronous programming** enables non-blocking operations, where
    tasks run in the background, and the main thread isn't blocked.

4.  **Promises** are objects that represent the eventual result of an
    asynchronous operation and can be chained with .then() and .catch().

5.  **Async/Await** is a more modern way of handling asynchronous
    operations with promises, making the code cleaner and more readable
    by writing it in a synchronous style.

In short, async/await is considered the most readable and efficient way
to work with asynchronous code today, while promises simplify callback
usage and help avoid callback hell.

**13 what is Coercion in javascript?**

In JavaScript, **coercion** refers to the automatic or implicit
conversion of values from one data type to another. This process is
handled by JavaScript when you try to perform operations that require
different data types. It happens in two main ways:

### 1. **Implicit Coercion** (Type Conversion):

JavaScript automatically converts values to the required type without
explicitly being told to do so. For example, when you use a number with
a string or a boolean with a number, JavaScript will try to coerce one
value to make the operation work.

Example of implicit coercion:

**CODE**:

let result = \'5\' + 3;

console.log(result); // Output: \"53\" (string)

In this case, the number 3 is coerced into a string and concatenated
with \'5\', resulting in \"53\".

### 2. **Explicit Coercion** (Type Casting):

In explicit coercion, you tell JavaScript how to convert a value from
one type to another. This is done using functions like String(),
Number(), and Boolean().

Example of explicit coercion:

**CODE:**

let num = \'123\';

let convertedNum = Number(num);

console.log(convertedNum); // Output: 123 (number)

### Examples of Common Coercion in JavaScript:

1.  **String to Number**:

**CODE:**

let str = \"42\";

let num = +str; // The unary plus operator coerces string to number

console.log(num); // Output: 42 (number)

2.  **Boolean Coercion**: In JavaScript, values like 0, null, undefined,
    NaN, \"\" (empty string), and false are falsy, while all other
    values are truthy. You can use the Boolean() function to convert a
    value to its boolean equivalent.

> javascript

let truthyValue = 1;

let falsyValue = 0;

console.log(Boolean(truthyValue)); // Output: true

console.log(Boolean(falsyValue)); // Output: false

3.  **Equality Comparisons**: JavaScript uses coercion when comparing
    values with == (loose equality). For example:

**CODE:**

console.log(5 == \'5\'); // Output: true (string \'5\' coerced to
number)

console.log(0 == false); // Output: true (false coerced to 0)

> But using === (strict equality) avoids coercion:

**CODE:**

console.log(5 === \'5\'); // Output: false (no coercion occurs)

Coercion is one of the key parts of JavaScript\'s dynamic typing system,
but it can sometimes lead to unexpected results, especially with loose
equality (==), so developers often use strict equality (===) to avoid
implicit conversions.

### 13 NaN property in JavaScript

NaN property in JavaScript is the "Not-a-Number" value that is not a
legal number. 

**14 What is Passed by value and passed by reference in javascript**

In JavaScript, **passing by value** and **passing by reference** refer
to how data is passed to functions.

### 1. **Passed by Value**:

When a primitive value (like numbers, strings, booleans, undefined,
null, and symbols) is passed to a function, a copy of the value is
passed. The function works with this copy, so changes to the copy do not
affect the original value.

**Example:**

**CODE:**

function modifyValue(x) {

x = 10;

console.log(\"Inside function:\", x); // Outputs: 10

}

let num = 5;

modifyValue(num);

console.log(\"Outside function:\", num); // Outputs: 5 (original value
is unchanged)

Here, the value of num (which is 5) is copied into x inside the
function. Changing x inside the function does not affect the original
num.

### 2. **Passed by Reference**:

When an object (including arrays and functions) is passed to a function,
a reference to the original object is passed. This means that if the
object is modified within the function, the changes are reflected
outside the function as well.

**Example:**

**CODE:**

function modifyObject(obj) {

obj.name = \"Alice\";

console.log(\"Inside function:\", obj); // Outputs: { name: \"Alice\" }

}

let person = { name: \"Bob\" };

modifyObject(person);

console.log(\"Outside function:\", person); // Outputs: { name:
\"Alice\" }

In this example, person is an object. When it\'s passed to the function,
the reference to the original object is passed. Changing the object
inside the function (by setting name to \"Alice\") affects the original
object.

### Summary:

-   **Passed by value**: Copies the actual value (works with
    primitives).

-   **Passed by reference**: Copies the reference to the object, so
    changes affect the original (works with objects).

This distinction is important when working with JavaScript functions, as
it helps you understand how data is manipulated within functions.

### 15. currying in JavaScript (with examples)

In JavaScript, when a function of an argument is transformed into
functions of one or more arguments, it is called Currying.

Example:

function add (a) {

return function(b){

    return a + b;

  }

}

add(3)(4) 

### 16. What are object prototypes?

Following are the different object prototypes in JavaScript that are
used to inherit particular properties and methods from the
Object.prototype.

1.  Date objects are used to inherit properties from the Date prototype

2.  Math objects are used to inherit properties from the Math prototype

3.  Array objects are used to inherit properties from the Array
    > prototype.

**17. Rest parameter and spread operator**

In JavaScript, both the **rest parameter** and the **spread operator**
are represented by three consecutive dots (\...), but they serve
different purposes.

### **1. Rest Parameter (**\...**)**

The **rest parameter** is used in function definitions to gather all
remaining arguments passed to the function into an array. It allows you
to handle function arguments as an array, regardless of how many
arguments are passed.

#### **Usage of Rest Parameter:**

-   The rest parameter is used in function declarations.

-   It collects all remaining arguments into an array.

-   It must always be the last parameter in the function signature.

#### **Example of Rest Parameter:**

**CODE:**

function sum(\...numbers) {

return numbers.reduce((total, num) =\> total + num, 0);

}

console.log(sum(1, 2, 3)); // Outputs: 6

console.log(sum(10, 20, 30, 40)); // Outputs: 100

Here:

-   \...numbers is the rest parameter that gathers all arguments passed
    to the sum function into an array named numbers.

-   You can then use array methods like .reduce() to process these
    arguments.

### **2. Spread Operator (**\...**)**

The **spread operator** is used to unpack or spread elements of an array
or object into individual elements or properties. It is commonly used in
function calls, array literals, or object literals to \"spread\" the
contents.

#### **Usage of Spread Operator:**

-   The spread operator is used to spread the elements of an array or
    object.

-   It is used in function calls, array literals, and object literals.

#### **Example of Spread Operator:**

1.  **In Function Calls:**

You can use the spread operator to pass elements of an array as
individual arguments to a function.

javascript

CopyEdit

function multiply(a, b, c) {

return a \* b \* c;

}

const numbers = \[2, 3, 4\];

console.log(multiply(\...numbers)); // Outputs: 24

Here:

-   The spread operator \...numbers takes the array \[2, 3, 4\] and
    unpacks it so that each element is passed as a separate argument to
    the multiply function.

2.  **In Array Literals:**

You can use the spread operator to merge arrays or create copies.

**CODE:**

const arr1 = \[1, 2, 3\];

const arr2 = \[4, 5, 6\];

const combined = \[\...arr1, \...arr2\];

console.log(combined); // Outputs: \[1, 2, 3, 4, 5, 6\]

Here:

-   \...arr1 and \...arr2 unpack the arrays and combine their elements
    into a new array.

3.  **In Object Literals:**

You can use the spread operator to copy or merge objects.

**CODE:**

const person = { name: \"Alice\", age: 25 };

const address = { city: \"Wonderland\", country: \"Fictional\" };

const personWithAddress = { \...person, \...address };

console.log(personWithAddress);

// Outputs: { name: \'Alice\', age: 25, city: \'Wonderland\', country:
\'Fictional\' }

Here:

-   \...person and \...address spread the properties of both objects
    into the new personWithAddress object.

### **Key Differences Between Rest Parameter and Spread Operator:**

-   **Rest Parameter** is used to **collect multiple arguments** into a
    single array within a function.

-   **Spread Operator** is used to **spread elements** of an array or
    object into individual elements or properties.

#### **Visual Comparison:**

  -------------------------------------------------------------------------------
  **Feature**   **Rest Parameter (\...)**         **Spread Operator (\...)**
  ------------- --------------------------------- -------------------------------
  **Usage**     Used in function definitions to   Used in function calls, array
                gather arguments.                 literals, and object literals.

  **Context**   Used in functions to collect      Used to expand an array or
                extra arguments into an array.    object.

  **Example**   function foo(\...args) {}         let arr = \[\...otherArr, 4,
                                                  5\];
  -------------------------------------------------------------------------------

### **Summary:**

-   **Rest Parameter**: Collects multiple arguments into an array in
    function definitions (\...args).

-   **Spread Operator**: Spreads the elements of an array or object into
    individual elements/properties (\...array or \...object).

Both are useful tools for working with arrays, objects, and functions,
making your code more concise and easier to manage!

### 17. What is a Temporal Dead Zone?

Temporal Dead Zone is a behavior that occurs with variables declared
using let and const keywords before they are initialized.

### 18. **Prototypal vs Classical Inheritance in JavaScript**

### **Prototypal vs Classical Inheritance in JavaScript**

**Inheritance** is a fundamental concept in object-oriented programming
(OOP), and in JavaScript, there are two types of inheritance:
**Prototypal Inheritance** and **Classical Inheritance**. Let\'s break
down these two approaches and see how they differ.

### **1. Prototypal Inheritance (JavaScript's Native Model)**

In **prototypal inheritance**, objects can inherit directly from other
objects. This means that each object has a **prototype**---another
object from which it can inherit properties and methods. In JavaScript,
this model is more flexible because objects themselves can serve as
prototypes for other objects.

#### **How Prototypal Inheritance Works:**

-   Every JavaScript object has an internal property called
    \[\[Prototype\]\] (or \_\_proto\_\_ in older versions), which points
    to another object.

-   When you try to access a property or method on an object, and it
    doesn\'t exist, JavaScript looks for that property or method on the
    object\'s prototype (the parent object). This is called **prototype
    chain** lookup.

#### **Example of Prototypal Inheritance:**

**CODE:**

// Parent object

const animal = {

sound: \"generic sound\",

makeSound() {

console.log(this.sound);

}

};

// Child object inheriting from animal

const dog = Object.create(animal);

dog.sound = \"bark\";

// The dog object inherits from animal

dog.makeSound(); // Outputs: \"bark\"

Here:

-   The dog object is created using Object.create(animal), which sets
    the prototype of dog to be animal.

-   The dog object inherits the makeSound() method from animal and can
    override properties (like sound).

### **Benefits of Prototypal Inheritance:**

-   **More flexible**: Objects can be directly linked to other objects
    without needing classes or constructor functions.

-   **Dynamic inheritance**: You can change the prototype of an object
    at any time.

-   **No need for classes**: This can be a simpler model for certain
    applications.

### **2. Classical Inheritance (Class-based Model)**

In **classical inheritance**, classes (or blueprints) are used to define
objects. A class is a blueprint for creating objects that share
properties and methods. Classes are used to define constructor
functions, and objects are created using the new keyword. This model is
commonly associated with languages like Java, C++, and Python.

#### **How Classical Inheritance Works:**

-   A **class** is defined with a constructor function and methods.

-   **Child classes** inherit properties and methods from **parent
    classes** using mechanisms like extends and super.

-   Inheritance is typically defined at the class level rather than
    directly through objects.

#### **Example of Classical Inheritance:**

In modern JavaScript (ES6+), classes are used to implement classical
inheritance, using class and extends keywords.

**CODE:**

// Parent class

class Animal {

constructor() {

this.sound = \"generic sound\";

}

makeSound() {

console.log(this.sound);

}

}

// Child class inherits from Animal

class Dog extends Animal {

constructor() {

super(); // Calls the parent class\'s constructor

this.sound = \"bark\";

}

}

const dog = new Dog();

dog.makeSound(); // Outputs: \"bark\"

Here:

-   Dog is a **class** that extends Animal using the extends keyword.

-   The Dog class inherits the makeSound() method from the Animal class
    and can override properties (like sound).

-   The super() keyword calls the constructor of the parent class
    (Animal).

### **Benefits of Classical Inheritance:**

-   **Structured**: Provides a more structured way to define objects and
    inheritance, which is familiar to developers from other OOP
    languages.

-   **Easy to understand**: The class-based syntax may feel more
    intuitive, especially for people coming from languages like Java or
    C++.

-   **Inheritance hierarchy**: It establishes a clear parent-child
    hierarchy between classes.

### **Key Differences Between Prototypal and Classical Inheritance:**

  -------------------------------------------------------------------------------
  **Feature**       **Prototypal Inheritance** **Classical Inheritance**
  ----------------- -------------------------- ----------------------------------
  **Inheritance     Objects inherit directly   Classes define blueprints for
  Model**           from other objects.        creating objects.

  **Syntax**        Objects and prototypes     class, extends, super.
                    (Object.create(),          
                    \_\_proto\_\_).            

  **Flexibility**   More flexible and dynamic. Less flexible, inheritance is
                    You can change prototypes  fixed at design time.
                    at runtime.                

  **Object          Objects can be created     Objects are created via classes
  Creation**        without needing a          and constructors.
                    constructor function.      

  **Prototype       Inheritance is based on    Inheritance is through class
  Chain**           the prototype chain of     hierarchy and method overriding.
                    objects.                   

  **Popular Use     Used extensively in        Used in traditional OOP languages
  Cases**           JavaScript and functional  (Java, C++), also in JavaScript
                    programming.               ES6+ for class-based syntax.
  -------------------------------------------------------------------------------

### **Which One to Use?**

-   **Prototypal Inheritance**:

    -   More flexible and dynamic.

    -   Preferred in JavaScript since it's the language's native model
        for inheritance.

    -   Works great for functional and object-based approaches.

-   **Classical Inheritance**:

    -   Offers a more structured, familiar approach, especially for
        developers coming from class-based OOP languages.

    -   In JavaScript, ES6 classes are syntactic sugar over prototypal
        inheritance, so both models ultimately rely on prototypes under
        the hood.

In summary, JavaScript uses **prototypal inheritance** under the hood,
even when you use the class syntax (which is just syntactic sugar).
Whether to use the class-based model or the prototypal model depends on
the style you prefer and the needs of your application.

**19. Differentiate between .foreach() and .map() and
Array.prototype.map() and Array.prototype.filter() using javascript.**

In JavaScript, .forEach(), .map(), Array.prototype.map(), and
Array.prototype.filter() are all array methods that help with iteration
or transformation of elements. However, they have distinct differences
in terms of functionality, behavior, and use cases. Here\'s a breakdown:

### 1. .forEach() **vs** .map()

#### .forEach():

-   **Purpose**: Executes a provided function once for each element in
    an array.

-   **Return Value**: Always returns undefined. It is not intended to
    create a new array but to perform side effects.

-   **Mutates the Original Array**: It doesn\'t directly mutate the
    array, but the function inside .forEach() can mutate elements if you
    do so.

-   **Use Case**: When you need to perform an action for each element
    without creating a new array.

**Example**:

CODE:

let arr = \[1, 2, 3, 4\];

arr.forEach(num =\> {

console.log(num \* 2); // Prints each number multiplied by 2

});

#### .map():

-   **Purpose**: Creates a new array populated with the results of
    calling a provided function on every element in the calling array.

-   **Return Value**: Returns a new array with transformed values based
    on the function.

-   **Mutates the Original Array**: It does not mutate the original
    array. Instead, it produces a new array.

-   **Use Case**: When you need to transform each element in an array
    and return a new array.

**Example**:

**CODE**:

let arr = \[1, 2, 3, 4\];

let newArr = arr.map(num =\> num \* 2); // Returns a new array with
transformed values

console.log(newArr); // \[2, 4, 6, 8\]

### 2. Array.prototype.map() **vs** Array.prototype.filter()

#### Array.prototype.map():

-   **Purpose**: Transforms each element of the array according to the
    provided function and returns a new array with the transformed
    elements.

-   **Return Value**: Returns a new array with the same length as the
    original array, but each element is transformed.

-   **Use Case**: When you want to modify or transform the elements of
    an array.

**Example**:

**CODE**:

let arr = \[1, 2, 3, 4\];

let doubled = arr.map(x =\> x \* 2);

console.log(doubled); // \[2, 4, 6, 8\]

#### Array.prototype.filter():

-   **Purpose**: Creates a new array with all elements that pass the
    test implemented by the provided function (i.e., filters out
    elements).

-   **Return Value**: Returns a new array with only the elements that
    pass the provided condition. The size of the resulting array may be
    smaller or equal to the original array.

-   **Use Case**: When you need to filter out elements based on a
    certain condition.

**Example**:

**CODE**:

let arr = \[1, 2, 3, 4\];

let evenNumbers = arr.filter(x =\> x % 2 === 0); // Filters out even
numbers

console.log(evenNumbers); // \[2, 4\]

### Summary of Key Differences

  -----------------------------------------------------------------------------------------
  **Method**                 **Purpose**      **Return    **Modifies    **Use Case**
                                              Value**     Original      
                                                          Array?**      
  -------------------------- ---------------- ----------- ------------- -------------------
  .forEach()                 Executes a       undefined   No (but can   Side effects (e.g.,
                             function on each             mutate        logging, modifying
                             element                      elements      variables)
                                                          inside)       

  .map()                     Transforms       A new array No            Transforming data
                             elements and                               (e.g., scaling,
                             returns a new                              modifying values)
                             array                                      

  Array.prototype.map()      Same as .map()   A new array No            Same as .map(),
                                                                        used for array
                                                                        transformations

  Array.prototype.filter()   Filters elements A new array No            Filtering data
                             based on a                                 (e.g., selecting
                             condition                                  even numbers)
  -----------------------------------------------------------------------------------------

### When to use:

-   Use .forEach() when you need to perform an action but don\'t need to
    return a new array (e.g., logging, updating external variables).

-   Use .map() when you want to transform the items of an array into a
    new array of the same size.

-   Use .filter() when you need to create a new array by selecting only
    the elements that meet a condition (i.e., removing certain items).

Each method serves a different purpose depending on your needs.

### 20. What is an Immediately Invoked Function in JavaScript?

An **Immediately Invoked Function Expression (IIFE)** is a function in
JavaScript that is defined and executed right away. It is a common
JavaScript pattern that helps in creating a private scope and avoiding
polluting the global scope with unnecessary variables.

### Key Characteristics of an IIFE:

1.  **Immediately Invoked**: As the name suggests, the function is
    executed immediately after it is defined.

2.  **Function Expression**: The function is written as an expression,
    not a declaration. This means it is enclosed in parentheses () to
    ensure that the function is treated as an expression and can be
    invoked right after.

3.  **Creates a Private Scope**: It creates its own local scope, so
    variables inside the function do not interfere with the global
    scope.

### Syntax of an IIFE:

**CODE**:

(function() {

// Code inside this function is scoped locally

console.log(\'This function runs immediately!\');

})();

### Breakdown of the Syntax:

-   The function is wrapped in parentheses () to make it a function
    **expression** (rather than a declaration).

-   The function is immediately invoked by adding () after the closing
    parenthesis of the function expression.

### Example of IIFE:

**CODE**:

(function() {

var message = \"Hello from IIFE!\";

console.log(message);

})();

### Explanation:

-   The function is executed immediately after it is defined.

-   The variable message is scoped within the IIFE and will not be
    accessible outside of it.

### Variations of IIFE:

1.  **With Parameters**: You can also pass parameters to an IIFE if
    needed:

**CODE**

(function(name) {

console.log(\'Hello, \' + name);

})(\'John\');

2.  **With Arrow Functions** (ES6+): With the advent of arrow functions,
    you can use IIFE with arrow function syntax as well:

**CODE**

(() =\> {

console.log(\'Hello from IIFE with arrow function!\');

})();

### Use Cases for IIFE:

-   **Avoid Global Scope Pollution**: IIFEs help avoid polluting the
    global namespace by encapsulating variables within the function
    scope.

-   **Module Pattern**: IIFEs are commonly used in the module pattern,
    where you create a self-contained module that exposes only the
    necessary functions or variables.

-   **Private Variables**: You can use IIFE to create private variables
    and methods that are not accessible outside of the function.

### Example with Private Variables:

**CODE:**

var counter = (function() {

var count = 0; // Private variable

return {

increment: function() {

count++;

console.log(count);

},

decrement: function() {

count\--;

console.log(count);

}

};

})();

counter.increment(); // 1

counter.increment(); // 2

counter.decrement(); // 1

// count is not accessible directly outside the IIFE

In this example, the count variable is private and cannot be accessed
directly from the outside, but the increment and decrement methods can
interact with it.

### Summary:

An IIFE is a powerful JavaScript pattern that allows you to execute a
function immediately after it is defined, creating a private scope to
avoid global variable conflicts and other side effects. It is commonly
used for data encapsulation and to avoid polluting the global scope.

### 

**21. What is the difference between exec () and test () methods in
javascript?**

const str = \"hello world\";

const resultExec = regex.exec(str);

console.log(resultExec);

// \[\"world\", index: 6, input: \"hello world\", groups: undefined\]

In this example:

-   The test() method only tells you whether the word \"world\" exists
    in the string (true or false).

-   The exec() method returns an array with details about the match,
    including the matched string (\"world\"), the index at which it
    starts (6), and the original string (\"hello world\").

### When to Use:

-   **Use test()** when you simply want to check if a pattern exists in
    a string.

-   **Use exec()** when you need more detailed information about the
    match (such as the position of the match, or multiple matches in the
    string using a global regular expression).

### Additional Notes:

-   exec() is more useful when you\'re working with global (g) regular
    expressions, as it can retrieve all matches when invoked repeatedly
    on the same string.

**CODE**

const regex = /hello/g;

const str = \"hello world, hello again\";

let match;

while ((match = regex.exec(str)) !== null) {

console.log(match.index); // logs the index of each match

console.log(match\[0\]); // logs the matched string \"hello\"

}

In summary:

-   **test()** is for a quick, boolean check to see if a pattern exists.

-   **exec()** gives you more detailed information about the match,
    including the matched string, its index, and the entire match
    context.

### 22. What is recursion in a programming language?

**Recursion** in programming is a technique where a function calls
itself in order to solve a problem. The problem is broken down into
smaller, more manageable subproblems, and the function continues to call
itself with these smaller subproblems until it reaches a **base case**.
The base case is the condition that stops the recursion and begins the
process of returning values back up the recursive call stack.

### Key Concepts of Recursion:

1.  **Base Case**: A condition that stops the recursion. Without a base
    case, recursion would continue indefinitely and lead to a stack
    overflow error.

2.  **Recursive Case**: The part of the function that calls itself with
    a new argument or a simpler version of the problem.

### How Recursion Works:

-   A function calls itself with modified arguments.

-   It works by dividing a problem into smaller subproblems, each of
    which is similar to the original.

-   Once the smallest possible subproblem is reached (the base case),
    the function stops calling itself and starts returning values.

### Example: Factorial Function (A Classic Recursion Example)

The factorial of a number nnn (denoted as n!n!n!) is the product of all
positive integers less than or equal to nnn. It is defined as:

-   0!=10! = 10!=1 (Base case)

-   n!=n×(n−1)!n! = n \\times (n-1)!n!=n×(n−1)! for n\>0n \> 0n\>0
    (Recursive case)

Here's how to compute factorial using recursion:

**CODE:**

function factorial(n) {

// Base case: if n is 0 or 1, return 1

if (n \<= 1) {

return 1;

} else {

// Recursive case: n! = n \* (n-1)!

return n \* factorial(n - 1);

}

}

console.log(factorial(5)); // Output: 120

### Breakdown:

-   For factorial(5), it calls factorial(4), which calls factorial(3),
    and so on.

-   This continues until it reaches the base case, factorial(1), which
    returns 1.

-   Then, the results are multiplied together as the recursive calls
    return and resolve:

> matlab
>
> CopyEdit

factorial(5) = 5 \* factorial(4)

factorial(4) = 4 \* factorial(3)

factorial(3) = 3 \* factorial(2)

factorial(2) = 2 \* factorial(1)

factorial(1) = 1

### Advantages of Recursion:

-   **Simpler Code**: Recursion can simplify code, especially for
    problems that can be divided into similar subproblems (e.g., tree
    traversal, factorial, Fibonacci series).

-   **Natural Fit for Certain Problems**: Problems like tree traversal,
    depth-first search, and certain mathematical problems are easier to
    solve recursively.

### Disadvantages of Recursion:

-   **Memory Usage**: Recursion uses the call stack, so each function
    call takes up memory. If the recursion depth is too large, it may
    lead to a **stack overflow** error.

-   **Performance Issues**: Recursive solutions can be less efficient
    due to the overhead of function calls and can be slower if not
    implemented with optimization techniques like **memoization**.

### Example: Fibonacci Sequence

The Fibonacci sequence is another common example to demonstrate
recursion. The Fibonacci sequence is defined as:

-   F(0)=0F(0) = 0F(0)=0

-   F(1)=1F(1) = 1F(1)=1

-   F(n)=F(n−1)+F(n−2)F(n) = F(n-1) + F(n-2)F(n)=F(n−1)+F(n−2) for n\>1n
    \> 1n\>1

Here's the recursive implementation of the Fibonacci sequence:

**CODE:**

function fibonacci(n) {

if (n \<= 1) {

return n;

} else {

return fibonacci(n - 1) + fibonacci(n - 2);

}

}

console.log(fibonacci(5)); // Output: 5 (Fibonacci sequence: 0, 1, 1, 2,
3, 5)

In this case, the function calls itself with n-1 and n-2 until the base
case (n \<= 1) is reached.

### Tail Recursion:

Tail recursion is a special form of recursion where the recursive call
is the last operation in the function. In such cases, the compiler or
interpreter can optimize the function call to avoid adding a new stack
frame for each call (called **tail call optimization**, or TCO).

For example, here is a tail-recursive version of the factorial function:

**CODE:**

function factorial(n, accumulator = 1) {

if (n \<= 1) {

return accumulator;

} else {

return factorial(n - 1, n \* accumulator); // Tail recursion

}

}

console.log(factorial(5)); // Output: 120

### Summary:

-   **Recursion** is when a function calls itself to solve a problem.

-   It is used for problems that can be broken down into smaller
    subproblems.

-   It requires a **base case** to stop the recursion and return the
    result.

-   Recursion is elegant for certain problems, but it can lead to high
    memory usage and stack overflow errors if not handled carefully
    (especially for deep recursions).
