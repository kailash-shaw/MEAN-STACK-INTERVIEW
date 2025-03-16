Here are the answers to the additional questions you have, with explanations and examples where applicable:

---

### 1. **What is a DDoS Attack?**

A **DDoS (Distributed Denial of Service)** attack is a cyber-attack in which multiple systems are used to flood a target server or network with an overwhelming amount of traffic, causing it to become slow or completely unavailable. The attack typically involves using a large number of compromised computers or devices, often forming a **botnet**.

#### Example:
Imagine a website receiving 10,000 requests per second from different machines to exhaust its resources. As a result, the website crashes or becomes slow for legitimate users.

---

### 2. **What is the CQRS Pattern?**

**CQRS (Command Query Responsibility Segregation)** is a design pattern that separates the reading and writing operations into two distinct models:

- **Command**: Handles operations that modify the data (e.g., create, update, delete).
- **Query**: Handles operations that retrieve data without modifying it.

By splitting these concerns, CQRS enables more efficient, scalable, and maintainable systems, especially in complex domains.

#### Example:
- **Command**: A `PlaceOrder` operation that creates an order.
- **Query**: A `GetOrderStatus` operation that retrieves the status of an order.

---

### 3. **Design Patterns (Singleton, Observable, Factory, Strategy)**

#### a) **Singleton Pattern**
The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to that instance.

**When to use**:
- When you need to control access to shared resources (e.g., a database connection).
- To prevent multiple instances of a class where only one instance is required.

**Example in TypeScript**:

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
```

#### b) **Observable Pattern**
The **Observable** pattern is used to create a subscription-based model where an object (observable) notifies its dependents (observers) of any state changes.

**When to use**:
- When you want to notify other objects of changes in state without tightly coupling the objects.
  
**Example**:

```typescript
class Observable {
  private observers: Function[] = [];

  public addObserver(observer: Function) {
    this.observers.push(observer);
  }

  public notifyObservers(data: any) {
    this.observers.forEach(observer => observer(data));
  }
}

const observable = new Observable();
observable.addObserver(data => console.log("Observer 1 received:", data));
observable.addObserver(data => console.log("Observer 2 received:", data));

observable.notifyObservers("Hello World");
```

#### c) **Factory Pattern**
The **Factory** pattern defines an interface for creating objects, but allows subclasses to alter the type of objects that will be created.

**When to use**:
- When the exact type of the object is not known until runtime.
- When you need to create objects based on certain conditions without directly calling the constructor.

**Example**:

```typescript
interface Car {
  drive(): void;
}

class Sedan implements Car {
  drive() {
    console.log("Driving a sedan!");
  }
}

class SUV implements Car {
  drive() {
    console.log("Driving an SUV!");
  }
}

class CarFactory {
  static createCar(type: string): Car {
    if (type === "sedan") {
      return new Sedan();
    } else if (type === "suv") {
      return new SUV();
    }
    throw new Error("Unknown car type");
  }
}

const myCar = CarFactory.createCar("suv");
myCar.drive();  // Output: Driving an SUV!
```

#### d) **Strategy Pattern**
The **Strategy** pattern allows an algorithm to be selected at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable.

**When to use**:
- When you have multiple algorithms for a task and need to choose one based on the situation.

**Example**:

```typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paying ${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paying ${amount} using PayPal.`);
  }
}

class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}

const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100);  // Output: Paying 100 using Credit Card.

paymentContext.executePayment(200);  // Output: Paying 200 using PayPal.
```

---

### 4. **When to Use the Singleton Pattern? Can I Get a Few Examples?**

Use the **Singleton** pattern when:
- You need to control access to a shared resource, such as a configuration object, logger, or database connection.
- You want to ensure there is only one instance of a class, especially for resource management.

#### Examples:
- **Database Connection**: Ensuring only one connection to the database.
- **Logger**: Using a single logger instance throughout the application to handle logging.
- **Configuration**: Storing configuration settings globally using a single instance.

Example in TypeScript:

```typescript
class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(message);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("This is a log message");
console.log(logger1 === logger2); // true
```

---

### 5. **What Design Pattern Do You Use for TypeScript?**

In TypeScript, you can use a variety of design patterns, just like in any object-oriented programming language. Commonly used patterns include:

- **Singleton**: To ensure a single instance.
- **Factory**: To create objects based on conditions.
- **Observer**: To notify multiple objects about changes in state.
- **Strategy**: To allow selection of algorithms at runtime.
- **Decorator**: To add new behavior to objects dynamically.
- **Facade**: To provide a simplified interface to a complex system.

---

### 6. **What is the Difference Between the Factory Pattern and the Strategy Pattern?**

- **Factory Pattern**: Used to create objects, typically based on input conditions or configuration. It abstracts the instantiation process so that clients don’t need to know about the concrete classes being created.

  **Example**: Deciding which class to instantiate based on user input (e.g., creating different types of vehicles like car, truck, bike).

- **Strategy Pattern**: Used to define a family of algorithms, encapsulate each one, and make them interchangeable. The context that uses the strategy can change the algorithm at runtime.

  **Example**: Providing different payment methods (credit card, PayPal, cash) and switching between them at runtime.

---

### 7. **What is a Circuit Breaker?**

A **Circuit Breaker** is a design pattern used in software development to detect failures and prevent the application from repeatedly trying to execute operations that are likely to fail. When a threshold of failures is reached, the circuit breaker "opens," and calls to the service are stopped for a period of time to allow it to recover. After the recovery period, it transitions back to the "closed" state and starts accepting requests again.

**When to use**: 
- When integrating with external services that might be unreliable (e.g., third-party APIs).

**Example**:
- In a microservices architecture, if one service is down, a circuit breaker can prevent the system from continuously attempting failed requests, thereby saving resources.

---

### 8. **What is the Singleton Pattern?**

The **Singleton** pattern is a creational design pattern that ensures that a class has only one instance, and provides a global point of access to that instance.

- **When to use**: When you want to ensure that a class only has one instance, especially for managing shared resources like database connections, logging, or configuration settings.

**Example**:

```typescript
class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  connect() {
    console.log("Connected to the database");
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

db1.connect();  // Output: Connected to the database
console.log(db1 === db2);  // Output: true (both references point to the same instance)
```

---

I hope these answers provide a good understanding of the design patterns and concepts you've asked about! Let me know if you need further clarification.