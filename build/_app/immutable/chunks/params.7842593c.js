import{w as fe,b as de}from"./paths.ff5f90d2.js";const ue="@dark-theme",be=e=>{localStorage.setItem(ue,JSON.stringify(e))},pe=fe(!1),ae=e=>pe.update(f=>{var m;const y=typeof e=="boolean"?e:!f;return be(y),(m=document.querySelector(":root"))==null||m.setAttribute("data-theme",y?"dark":"light"),y}),Fe=()=>{const e=localStorage.getItem(ue);e?ae(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ae(!0):ae(!1)},se=e=>`${de}/logos/${e}`,t=(e,f)=>f?{dark:se(f),light:se(e)}:se(e),k={AWS:t("aws.svg"),Bootstrap:t("bootstrap.svg"),C:t("c.svg"),Cpp:t("cpp.svg"),Celery:t("celery.svg"),Django:t("django.svg"),FastApi:t("fastapi"),Flask:t("flask.svg"),Go:t("go.svg"),Kafka:t("kafka.svg"),Neo4j:t("neo4j.svg"),Nginx:t("nginx.svg"),Numpy:t("numpy.svg"),Pandas:t("pandas.svg"),RabbitMQ:t("rabbitmq.svg"),Rust:t("rust.svg","rust-dark.png"),Scrapy:t("scrapy.png"),Selenium:t("selenium.svg"),Docker:t("docker.svg"),Kubernetes:t("kubernetees.svg"),Csharp:t("csharp.svg"),Xamarin:t("xamarin.svg"),TypeScript:t("ts.png"),VueJs:t("vue.png"),ReactJs:t("react.svg"),Dart:t("dart.png"),Kotlin:t("kotlin.png"),Python:t("python.png"),NodeJs:t("node.png"),Deno:t("deno.png","deno-dark.png"),Svelte:t("svelte.png"),ExpressJs:t("express.png"),JavaScript:t("js.png"),Fastify:t("fastify.svg","fastify-dark.png"),NestJs:t("nest.svg"),Quasar:t("quasar.svg"),SolidJs:t("solid.svg"),Electron:t("electron.png"),Flutter:t("flutter.svg"),Java:t("java.png"),AdonisJs:t("adonis.png"),Android:t("android.png"),Angular:t("angular.png"),PostgreSQL:t("postgres.png"),Firebase:t("firebase.png"),Sass:t("sass.png"),Unknown:t("no-img.svg"),MongoDB:t("mongodb.svg"),Redis:t("redis.svg"),Tailwind:t("tailwind.svg"),HTML:t("html.svg"),Premiere:t("premiere.svg"),Photoshop:t("photoshop.svg"),CSS:t("css.svg"),AfterEffects:t("after-effects.svg"),Illustrator:t("illustrator.svg"),Nuxt:t("nuxt.png"),Vite:t("vite.png"),Vitest:t("vitest.svg"),Jest:t("jest.png"),Unocss:t("unocss.svg"),Ruvy:t("ruvy.svg"),Postcss:t("postcss.svg"),Spring:t("springio.svg"),MySQL:t("mysql.svg"),DasShept:t("DasShept.png"),GymKoe:t("GymKoe.png"),JUtils:t("jutils.png"),JSON:t("json.svg"),GetMad:t("getmad.png"),Yaml:t("yaml.svg"),NoRisk:t("norisk.png"),Ktor:t("ktor.svg")};let me;pe.subscribe(e=>me=e);const Be=e=>typeof e=="string"?e:me?e.dark:e.light,ye=[{degree:"Gymnasium",description:"",location:"Königsbrunn",logo:k.GymKoe,name:"",organization:"Gymnasium Königsbrunn",period:{from:new Date(2014,8,15),to:new Date},shortDescription:"",slug:"gymnasium",subjects:["Computer Science","English","Math","German","..."]},{degree:"A-Level",description:"",location:"Königsbrunn",logo:k.GymKoe,name:"",organization:"Gymnasium Königsbrunn",period:{from:new Date(2027,3)},shortDescription:"",slug:"a-level",subjects:["Java","Computer Science","Math","German","English","Economy and law"]}],ve=`# Introduction to Java

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation). It was first released in 1995 and has since become one of the most popular programming languages, particularly for building large-scale enterprise applications, web applications, and mobile applications (Android).

## Key Features of Java

- **Platform Independence:** Java programs can run on any device with a Java Virtual Machine (JVM), making it highly portable.

- **Object-Oriented:** Java follows an object-oriented programming paradigm, facilitating modular and reusable code.

- **Robust and Secure:** Java's strict compile-time and runtime checks help detect errors early, making it robust and secure.

- **Multi-threaded:** Java supports multithreading, allowing concurrent execution of multiple tasks.

- **Rich Standard Library:** Java comes with a comprehensive standard library, providing ready-to-use components for various tasks.

## Applications of Java

- **Enterprise Software:** Java's scalability and robustness make it an ideal choice for developing large-scale enterprise applications, including banking systems, customer relationship management (CRM) software, and supply chain management systems.
  
- **Web Development:** Java is widely used in web development, with frameworks like Spring and JavaServer Faces (JSF) facilitating the creation of dynamic, server-side web applications.
  
- **Mobile Development:** Android, the world's most popular mobile operating system, relies heavily on Java for app development, leveraging libraries like Android SDK and Android NDK.
  
- **Big Data and IoT:** Java's performance and scalability make it well-suited for handling big data processing and analysis tasks, as well as developing applications for the Internet of Things (IoT) ecosystem.

## Example Code:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\``,ke=`# Introduction to C++

C++ is a high-level, general-purpose programming language developed by Bjarne Stroustrup in the early 1980s as an extension of the C programming language. It combines the features of procedural, object-oriented, and generic programming paradigms, providing a powerful and flexible tool for software development.

## Key Features

- **Object-Oriented:** C++ supports object-oriented programming (OOP) concepts like classes, inheritance, polymorphism, and encapsulation, enabling developers to build modular and reusable code.
- **Efficiency:** C++ is known for its efficiency and performance, making it suitable for system-level programming, game development, and other performance-critical applications.
- **Standard Library:** C++ comes with a rich standard library that provides a wide range of functions and data structures, allowing developers to accomplish various tasks without reinventing the wheel.
- **Compatibility:** C++ is highly compatible with C code, allowing seamless integration of C libraries and codebases.
- **Flexibility:** C++ offers features like templates and operator overloading, providing flexibility in programming and allowing developers to write generic code that works with different data types.

## Applications of C++

C++ is widely used across various domains, including:

- **System Programming:** C++ is commonly used for system programming tasks like developing operating systems, device drivers, and embedded systems.
- **Game Development:** Many popular game engines, such as Unreal Engine and Unity, are written in C++. Game developers often use C++ for its performance and control over system resources.
- **Application Software:** C++ is used to build desktop applications, productivity tools, and software applications that require high performance and efficiency.
- **Finance:** C++ is prevalent in the finance industry for developing trading platforms, risk management systems, and high-frequency trading algorithms.
- **Graphics and Animation:** C++ is used for graphics programming, including 2D and 3D graphics rendering, animation, and visualization.

## Example Code

\`\`\`c
#include <iostream>

// A simple C++ program that prints "Hello, World!" to the console
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\``,we=`# Introduction to Kotlin

Kotlin is a modern, statically typed programming language developed by JetBrains, initially released in 2011. It is designed to be fully interoperable with Java while offering a more concise syntax, improved null safety, and enhanced developer productivity. Kotlin has gained significant popularity, particularly in the Android development community, due to its seamless integration with existing Java codebases and its ability to address many of Java's pain points.

## Key Features

- **Conciseness:** Kotlin reduces boilerplate code compared to Java, resulting in cleaner and more readable code.
- **Null Safety:** Kotlin provides built-in null safety features, such as nullable and non-nullable types, to prevent null pointer exceptions at compile time.
- **Interoperability:** Kotlin is fully interoperable with Java, allowing developers to leverage existing Java libraries and frameworks seamlessly.
- **Functional Programming Support:** Kotlin supports functional programming paradigms, including higher-order functions, lambda expressions, and immutability, facilitating the development of concise and expressive code.
- **Coroutines:** Kotlin introduces coroutines, which are lightweight threads that enable asynchronous and non-blocking programming, simplifying concurrency management.

## Applications of Kotlin

Kotlin is versatile and can be used across various domains, including:

- **Android App Development:** Kotlin is officially supported for Android app development by Google. Many developers prefer Kotlin over Java for building Android apps due to its modern features and improved syntax.
- **Backend Development:** Kotlin can be used for server-side development using frameworks like Spring Boot, Ktor, and Micronaut. It provides an alternative to Java for building web applications, RESTful APIs, and microservices.
- **Desktop Applications:** Kotlin supports desktop application development using frameworks like JavaFX and TornadoFX, enabling developers to build cross-platform desktop applications.
- **Data Science:** Kotlin is gaining traction in the data science community, with libraries like KotlinDL for deep learning and Kotlin Statistics for statistical analysis.
- **Multiplatform Development:** Kotlin Multiplatform allows developers to share code between different platforms, such as Android, iOS, web, and backend, using a single codebase.

## Example Code

\`\`\`kotlin
// A simple Kotlin program that prints "Hello, World!" to the console
fun main() {
    println("Hello, World!")
}
`,Se=`# Introduction to Spring

Spring is a powerful and widely used open-source framework for building enterprise-level Java applications. It provides comprehensive infrastructure support and simplifies the development of Java applications by offering a cohesive programming and configuration model. Originally developed by Rod Johnson in 2002, Spring has evolved into a robust ecosystem of tools and libraries that address various aspects of modern application development.

## Key Features

- **Inversion of Control (IoC) Container:** Spring's IoC container manages the instantiation, configuration, and lifecycle of application objects, allowing developers to focus on business logic rather than managing object creation and dependency injection manually.
- **Aspect-Oriented Programming (AOP):** Spring supports AOP, enabling developers to modularize cross-cutting concerns such as logging, security, and transaction management, and apply them declaratively across the application.
- **Spring Boot:** Spring Boot provides a convention-over-configuration approach for building standalone, production-ready Spring-based applications with minimal setup. It simplifies dependency management, auto-configuration, and embedded server deployment.
- **Spring Data:** Spring Data simplifies data access by providing consistent APIs and abstractions for working with relational databases, NoSQL databases, and other data sources. It offers features like repositories, query methods, and declarative transactions.
- **Spring Security:** Spring Security provides comprehensive security features for Java applications, including authentication, authorization, session management, and protection against common security threats.
- **Spring MVC:** Spring MVC (Model-View-Controller) is a web framework that facilitates the development of web applications by providing a model for building robust and flexible web architectures.

## Applications of Spring

Spring is widely used in various domains, including:

- **Enterprise Applications:** Spring is well-suited for building enterprise-scale applications, including customer relationship management (CRM) systems, enterprise resource planning (ERP) software, and supply chain management (SCM) solutions.
- **Web Applications:** Spring MVC and Spring Boot are commonly used for developing web applications, RESTful APIs, and microservices.
- **Integration Projects:** Spring Integration provides support for enterprise integration patterns (EIPs) and facilitates the development of message-driven applications and integration projects.
- **Batch Processing:** Spring Batch simplifies the development of batch processing applications by providing reusable components for reading, processing, and writing large volumes of data.
- **Cloud-Native Development:** Spring Cloud offers a set of tools and libraries for building cloud-native applications and microservices-based architectures.

## Example Code

\`\`\`java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello, World!";
    }
}
`,Me=`# Introduction to Ktor

Ktor is a modern asynchronous web framework for building asynchronous servers, clients, and web applications in Kotlin. Developed by JetBrains, the same company behind Kotlin, Ktor is designed to be simple, lightweight, and highly extensible. It provides a flexible and intuitive API that leverages Kotlin's language features to streamline web development.

## Key Features

- **Asynchronous:** Ktor is built from the ground up with asynchronous programming in mind, allowing developers to handle high-concurrency scenarios efficiently.
- **Type-Safe Builders:** Ktor utilizes Kotlin's DSL (Domain-Specific Language) capabilities to provide type-safe builders for defining routing, handling requests, and configuring server features.
- **Modular Design:** Ktor follows a modular design approach, allowing developers to include only the components they need. It provides a set of core modules along with optional features like authentication, templating engines, and serialization.
- **Embedded Server:** Ktor includes an embedded server, making it easy to run web applications locally during development without the need for external web servers.
- **Extensibility:** Ktor is highly extensible, allowing developers to create custom features, middleware, and plugins to enhance functionality and integrate with third-party libraries.

## Applications of Ktor

Ktor is suitable for a wide range of web development scenarios, including:

- **RESTful APIs:** Ktor is well-suited for building RESTful APIs and web services due to its lightweight and asynchronous nature. It provides built-in support for handling HTTP requests, routing, and serialization.
- **Microservices:** Ktor's modular design and lightweight footprint make it an excellent choice for developing microservices-based architectures. It allows developers to create standalone services that communicate over HTTP or other protocols.
- **Web Applications:** Ktor can be used to build server-rendered web applications, including single-page applications (SPAs) and traditional multi-page applications. It provides support for serving static files, handling form submissions, and integrating with frontend frameworks like React and Angular.
- **Backend Services:** Ktor can serve as the backend for various types of applications, including mobile apps, desktop apps, and IoT (Internet of Things) devices. It enables developers to build scalable and responsive backend services that communicate with frontend clients over HTTP or WebSockets.

## Example Code

\`\`\`kotlin
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    val server = embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.respondText("Hello, World!")
            }
        }
    }
    server.start(wait = true)
}
\`\`\``,Ce=`# Introduction to PostgreSQL

PostgreSQL, often referred to as Postgres, is a powerful open-source relational database management system (RDBMS) known for its reliability, robustness, and advanced features. Developed by the PostgreSQL Global Development Group, PostgreSQL has been actively developed and maintained since the early 1990s. It is highly extensible and follows strict SQL standards, making it a popular choice for a wide range of applications.

## Key Features

- **ACID Compliance:** PostgreSQL adheres to the principles of Atomicity, Consistency, Isolation, and Durability (ACID), ensuring transactional integrity and data consistency.
- **Advanced Data Types:** PostgreSQL supports a wide range of data types, including primitive types, composite types, arrays, JSON, XML, and user-defined types.
- **Extensibility:** PostgreSQL offers a rich set of features for extending its functionality, including user-defined functions (UDFs), stored procedures, triggers, and custom data types.
- **Concurrency Control:** PostgreSQL provides robust concurrency control mechanisms, such as multi-version concurrency control (MVCC), to ensure high levels of concurrency and scalability.
- **Replication and High Availability:** PostgreSQL supports various replication methods, including streaming replication, logical replication, and synchronous replication, to achieve high availability and data redundancy.
- **Full Text Search:** PostgreSQL includes built-in support for full-text search, enabling efficient searching and indexing of textual data.
- **Geospatial Capabilities:** PostgreSQL has extensive support for geospatial data types and functions, making it suitable for geographic information system (GIS) applications.
- **Security:** PostgreSQL offers advanced security features, including role-based access control (RBAC), SSL/TLS encryption, and data masking, to protect sensitive data.

## Applications of PostgreSQL

PostgreSQL is widely used in various domains and applications, including:

- **Web Applications:** PostgreSQL is commonly used as the backend database for web applications, content management systems (CMS), and e-commerce platforms due to its reliability and scalability.
- **Data Warehousing:** PostgreSQL is suitable for data warehousing and business intelligence (BI) applications, offering features like partitioning, parallel query processing, and support for large datasets.
- **GIS and Spatial Data Analysis:** PostgreSQL's geospatial capabilities make it a popular choice for GIS applications, spatial data analysis, and location-based services.
- **Financial Services:** PostgreSQL is used in the financial industry for managing transactional data, risk analysis, and compliance reporting.
- **Healthcare:** PostgreSQL is utilized in healthcare systems for storing electronic medical records (EMR), patient data, and medical imaging.
- **IoT (Internet of Things):** PostgreSQL is employed in IoT applications for collecting, storing, and analyzing sensor data from connected devices.

## Example Code

\`\`\`sql
-- Create a table to store employee information
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    salary NUMERIC(10, 2)
);

-- Insert data into the employees table
INSERT INTO employees (name, department, salary) VALUES
('John Doe', 'Engineering', 75000.00),
('Jane Smith', 'Marketing', 60000.00),
('Alice Johnson', 'Finance', 80000.00);

-- Retrieve employee records
SELECT * FROM employees;
\`\`\``,De=`# Introduction to MySQL

MySQL is an open-source relational database management system (RDBMS) developed by Oracle Corporation. It is one of the most widely used database systems in the world, known for its reliability, performance, and ease of use. MySQL is particularly popular among web developers and is commonly used as the backend database for web applications, content management systems (CMS), and e-commerce platforms.

## Key Features

- **Ease of Use:** MySQL is known for its simplicity and ease of use, making it accessible to both beginners and experienced database administrators.
- **Performance:** MySQL is optimized for performance, providing efficient storage and retrieval of data, as well as support for indexing, caching, and query optimization.
- **Scalability:** MySQL is designed to scale seamlessly from small, single-server deployments to large, distributed architectures, making it suitable for a wide range of applications.
- **Reliability:** MySQL is highly reliable and robust, offering features like data replication, failover, and backup and recovery to ensure data integrity and availability.
- **Security:** MySQL provides comprehensive security features, including access control, encryption, and auditing, to protect sensitive data from unauthorized access and breaches.
- **Flexibility:** MySQL supports a wide range of data types, storage engines, and programming interfaces, allowing developers to choose the best tools and technologies for their specific requirements.
- **Community Support:** MySQL has a large and active community of users, developers, and contributors who provide support, documentation, and resources for troubleshooting and optimization.

## Applications of MySQL

MySQL is used in various domains and applications, including:

- **Web Applications:** MySQL is commonly used as the backend database for web applications, including blogs, forums, social networking sites, and online stores.
- **Content Management Systems (CMS):** Many popular CMS platforms, such as WordPress, Joomla, and Drupal, use MySQL as their default database engine for storing website content and user data.
- **E-commerce Platforms:** MySQL powers numerous e-commerce platforms and online marketplaces, handling product catalogs, customer orders, and transactional data.
- **Business Intelligence (BI):** MySQL is used for data warehousing, analytics, and reporting in business intelligence applications, providing insights into key performance indicators (KPIs) and business metrics.
- **Data Logging and Analytics:** MySQL is utilized for logging and analyzing data from various sources, including web servers, applications, and IoT devices, to track trends, detect anomalies, and make data-driven decisions.
- **Online Gaming:** MySQL is employed in online gaming platforms and multiplayer games for storing player profiles, game progress, and leaderboard rankings.

## Example Code

\`\`\`sql
-- Create a table to store customer information
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

-- Insert data into the customers table
INSERT INTO customers (name, email, age) VALUES
('John Doe', 'john@example.com', 30),
('Jane Smith', 'jane@example.com', 25),
('Alice Johnson', 'alice@example.com', 35);

-- Retrieve customer records
SELECT * FROM customers;
\`\`\``,Ae=`# Introduction to MongoDB

MongoDB is a popular open-source NoSQL database management system designed for scalability, flexibility, and performance. Developed by MongoDB Inc., MongoDB stores data in a flexible, JSON-like format known as BSON (Binary JSON), making it well-suited for storing unstructured or semi-structured data. MongoDB's document-oriented architecture and distributed data model make it an ideal choice for modern, data-intensive applications.

## Key Features

- **Document-Oriented:** MongoDB stores data in flexible, JSON-like documents, allowing developers to represent complex hierarchical data structures without the need for complex joins or schemas.
- **Scalability:** MongoDB is designed to scale horizontally across multiple servers and clusters, enabling seamless scalability as application demand grows.
- **High Availability:** MongoDB provides built-in replication and automated failover features to ensure high availability and data redundancy, minimizing downtime and data loss.
- **Query Language:** MongoDB supports a powerful and expressive query language with support for complex queries, aggregation pipelines, and geospatial queries, enabling developers to retrieve and manipulate data efficiently.
- **Indexing:** MongoDB supports various types of indexes, including single-field, compound, geospatial, and text indexes, to optimize query performance and improve data access.
- **Flexible Schema:** MongoDB's flexible schema allows developers to evolve data models over time, accommodating changes and iterations without requiring downtime or schema migrations.
- **Rich Ecosystem:** MongoDB offers a rich ecosystem of tools, drivers, and integrations for various programming languages, frameworks, and platforms, making it easy to integrate with existing technologies and workflows.

## Applications of MongoDB

MongoDB is used in a wide range of applications and industries, including:

- **Content Management:** MongoDB is used in content management systems (CMS), digital asset management (DAM) systems, and content repositories for storing and managing multimedia content, articles, and documents.
- **E-commerce:** MongoDB powers e-commerce platforms, online marketplaces, and retail applications, handling product catalogs, customer profiles, and transactional data.
- **Social Networking:** MongoDB is utilized in social networking sites, messaging platforms, and collaborative applications for storing user profiles, messages, and activity feeds.
- **IoT (Internet of Things):** MongoDB is employed in IoT applications for collecting, storing, and analyzing sensor data from connected devices, enabling real-time monitoring, analysis, and decision-making.
- **Real-time Analytics:** MongoDB is used for real-time analytics, event processing, and log management, providing insights into user behavior, system performance, and business metrics.
- **Gaming:** MongoDB is employed in online gaming platforms and multiplayer games for storing player profiles, game progress, and leaderboards, supporting millions of concurrent users and massive multiplayer environments.

## Example Code

\`\`\`javascript
// Connect to MongoDB server
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mydatabase";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
    }
    console.log("Connected to MongoDB");

    // Get reference to the database
    const db = client.db("mydatabase");

    // Insert a document into the collection
    db.collection("customers").insertOne({
        name: "John Doe",
        email: "john@example.com",
        age: 30
    }, (err, result) => {
        if (err) {
            console.error("Error inserting document:", err);
            return;
        }
        console.log("Document inserted:", result.insertedId);
    });

    // Query documents from the collection
    db.collection("customers").find({}).toArray((err, documents) => {
        if (err) {
            console.error("Error querying documents:", err);
            return;
        }
        console.log("Documents queried:", documents);
    });

    // Close the MongoDB connection
    client.close();
});
\`\`\``,xe=`# Introduction to Redis

Redis is an open-source, in-memory data structure store known for its speed, simplicity, and versatility. Originally developed by Salvatore Sanfilippo, Redis is often referred to as a "data structure server" because it supports various data structures such as strings, lists, sets, hashes, and sorted sets, which can be manipulated using a rich set of commands. Redis is commonly used for caching, real-time analytics, session management, pub/sub messaging, and other use cases that require fast and efficient data storage and retrieval.

## Key Features

- **In-Memory Data Store:** Redis stores data in memory, making it extremely fast for read and write operations. It also supports optional persistence mechanisms for durability.
- **Data Structures:** Redis supports a wide range of data structures, including strings, lists, sets, sorted sets, hashes, bitmaps, and geospatial indexes, allowing for versatile data modeling and manipulation.
- **Atomic Operations:** Redis provides atomic operations on individual data structures, ensuring data consistency and integrity in multi-threaded or distributed environments.
- **Pub/Sub Messaging:** Redis supports publish/subscribe messaging, allowing clients to publish messages to channels and subscribe to receive messages from channels, facilitating real-time communication and event-driven architectures.
- **Transactions:** Redis supports transactions, allowing multiple commands to be executed atomically as a single unit of work, ensuring consistency across operations.
- **Replication and High Availability:** Redis supports master-slave replication and automatic failover mechanisms to ensure high availability and data redundancy.
- **Lua Scripting:** Redis allows developers to execute Lua scripts on the server side, enabling complex data processing and manipulation without round-trips to the client.
- **Cluster Support:** Redis Cluster provides horizontal scalability and fault tolerance by partitioning data across multiple nodes in a distributed cluster.

## Applications of Redis

Redis is used in a wide range of applications and industries, including:

- **Caching:** Redis is commonly used as a cache to store frequently accessed data in memory, reducing latency and improving application performance.
- **Session Management:** Redis is used for storing session data in web applications, enabling fast and scalable session management across distributed environments.
- **Real-Time Analytics:** Redis is utilized for real-time analytics, counting, and aggregation of events and metrics, providing insights into user behavior and system performance.
- **Message Queues:** Redis' pub/sub messaging capabilities make it suitable for building message queues, event buses, and real-time notification systems, facilitating asynchronous communication between components.
- **Leaderboards and Counters:** Redis is used for building leaderboards, counters, and ranking systems in gaming, social networking, and online competitions, enabling fast and efficient updates and queries.
- **Geospatial Applications:** Redis' geospatial indexes and commands are used in location-based services, mapping applications, and geographic information systems (GIS) for spatial data storage and queries.

## Example Code

Below is an example of using Redis with Node.js to store and retrieve data:

\`\`\`javascript
const redis = require("redis");
const client = redis.createClient();

// Set a key-value pair
client.set("name", "John Doe", (err, reply) => {
    if (err) {
        console.error("Error setting key:", err);
        return;
    }
    console.log("Key set successfully:", reply);
});

// Get a value by key
client.get("name", (err, value) => {
    if (err) {
        console.error("Error getting value:", err);
        return;
    }
    console.log("Value retrieved:", value);
});

// Increment a counter
client.incr("counter", (err, newValue) => {
    if (err) {
        console.error("Error incrementing counter:", err);
        return;
    }
    console.log("Counter incremented, new value:", newValue);
});

// Close the Redis connection
client.quit();
\`\`\``,Le=`# Introduction to JSON

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is widely used for transmitting data between a server and a web application, as well as for storing configuration data and exchanging data between different programming languages and systems.

## Key Features

- **Human Readable:** JSON data is presented in a format that is easy for humans to read and write, using a combination of key-value pairs and arrays.
- **Lightweight:** JSON is a lightweight format, making it efficient for transmitting data over networks and storing data in files.
- **Language Independent:** JSON is independent of programming languages, making it easy to use with any programming language and platform that supports text-based data exchange.
- **Hierarchical Structure:** JSON supports hierarchical data structures, allowing complex data to be represented in a nested format with objects and arrays.
- **Self-Describing:** JSON data is self-describing, meaning that it includes metadata that describes the structure and type of the data, making it easy to interpret and validate.
- **Support for Basic Data Types:** JSON supports basic data types such as strings, numbers, booleans, arrays, and objects, as well as null values.
- **Extensibility:** JSON is extensible, allowing developers to define custom data types and structures using conventions such as JSON Schema.

## Applications of JSON

JSON is used in a wide range of applications and scenarios, including:

- **Web APIs:** JSON is commonly used for transmitting data between a web server and a client application in the form of API responses.
- **Configuration Files:** JSON is used for storing configuration data in applications, such as settings, preferences, and options.
- **Data Exchange:** JSON is used for exchanging data between different systems and platforms, such as between a web application and a database, or between microservices in a distributed system.
- **Serialization:** JSON is used for serializing objects into a string format for storage or transmission, and deserializing JSON strings back into objects.
- **Interoperability:** JSON is used for interoperability between different programming languages and systems, enabling data exchange between systems built with different technologies.
- **Data Storage:** JSON is used for storing data in NoSQL databases, document-oriented databases, and other data storage systems that support JSON as a data format.

## Example Code

\`\`\`json
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "is_active": true,
  "roles": ["admin", "developer"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "postal_code": "12345"
  }
}
\`\`\``,$e=`# Introduction to YAML

YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files, data exchange, and defining data structures. YAML's simplicity and readability make it popular among developers for various tasks, including configuration management, data representation, and configuration as code.

## Key Features

- **Human Readable:** YAML is designed to be easy for humans to read and write, with a syntax that resembles natural language and uses indentation to represent data hierarchy.
- **Concise Syntax:** YAML uses a concise syntax, with minimal punctuation and explicit structure, making it easy to understand and maintain.
- **Support for Complex Data Types:** YAML supports a wide range of data types, including strings, numbers, booleans, arrays, objects, and nested structures, making it suitable for representing complex data.
- **Language Agnostic:** YAML is language agnostic, meaning it can be used with any programming language or platform that supports text-based data exchange.
- **Extensible:** YAML is extensible, allowing developers to define custom data types, structures, and schemas using YAML's flexible syntax.
- **Comments:** YAML supports comments, allowing developers to add explanatory notes and annotations to their YAML files.
- **Data Serialization:** YAML can be used for serializing and deserializing data objects into a text-based format, making it suitable for data exchange and storage.

## Applications of YAML

YAML is used in a variety of applications and scenarios, including:

- **Configuration Files:** YAML is commonly used for defining configuration settings, options, and parameters in applications, tools, and frameworks.
- **Infrastructure as Code:** YAML is used for defining infrastructure configurations, deployment templates, and configuration management in infrastructure as code (IaC) tools like Ansible, Kubernetes, and Terraform.
- **Data Representation:** YAML is used for representing structured data, such as JSON-like data structures, configuration data, and data exchange formats.
- **Documentation:** YAML is used for writing structured documentation, such as API specifications, data schemas, and documentation templates.
- **Testing:** YAML is used for defining test cases, test data, and test configurations in software testing frameworks and testing automation tools.
- **Data Transformation:** YAML is used for data transformation, conversion, and manipulation tasks, such as transforming data between different formats and structures.

## Example Code

\`\`\`yaml
# Example YAML configuration file
server:
  host: example.com
  port: 8080
  ssl: true

database:
  name: mydb
  user: admin
  password: secret123

logging:
  level: debug
  file: /var/log/myapp.log
\`\`\``,O=e=>e,ge=[O({slug:"java",color:"orange",description:ve,logo:k.Java,name:"Java"}),O({slug:"c++",color:"blue",description:ke,logo:k.Cpp,name:"C++"}),O({slug:"kotlin",color:"purple",description:we,logo:k.Kotlin,name:"Kotlin"}),O({slug:"spring",color:"green",description:Se,logo:k.Spring,name:"Spring"}),O({slug:"ktor",color:"hopbush",description:Me,logo:k.Ktor,name:"Ktor"}),O({slug:"postgres",color:"steelblue",description:Ce,logo:k.PostgreSQL,name:"PostgeSQL"}),O({slug:"mysql",color:"astral",description:De,logo:k.MySQL,name:"MySQL"}),O({slug:"mongodb",color:"limegreen",description:Ae,logo:k.MongoDB,name:"MongoDB"}),O({slug:"redis",color:"red",description:xe,logo:k.Redis,name:"Redis"}),O({slug:"json",color:"grey",description:Le,logo:k.JSON,name:"JSON"}),O({slug:"yaml",color:"black",description:$e,logo:k.Yaml,name:"Yaml"})],W=(...e)=>ge.filter(f=>e.includes(f.slug));var R=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(R||{}),oe=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(oe||{});const Te=[{slug:"dasshept",company:"Self-employed",description:"Custom Minecraft Solutions for everyone.",contract:oe.SelfEmployed,type:"Software Development",location:"Home",period:{from:new Date(2022,1)},skills:W("java","spring","postgres"),name:"Backend Developer",color:"red",links:[{to:"https://dasshept.de",label:"Website",newTab:!0}],logo:k.DasShept,shortDescription:""},{slug:"norisk",company:"Norisk",description:"Currently, there is no set release date. For updates on the current state of the client, check out their discord or NoRisk's YouTube channel.",contract:oe.Freelance,type:"Software Development",location:"Home",period:{from:new Date(2023,5,3),to:new Date(2024,0,5)},skills:W("kotlin","java","ktor","json"),name:"Software Developer",color:"blue",links:[{to:"https://github.com/NoriskClient",label:"GitHub"},{to:"https://norisk.gg",label:"Website"}],logo:k.NoRisk,shortDescription:"Minecraft PvP Client"}],Ee="JUtils is an easy to use challenge plugin for Minecraft: Java Edition. They include numerous fun and difficult challenges, as well as many settings for a maximum gaming experience. A scripting system is planned for the future, so you can create your own challenges.",Ie=`Need Next-Level AntiCheat? Then it's time to get GetMad! Is's a powerful high performance AntiCheat with lots of checks and has its own Admin-Control-Panel. 

-----

GetMad is a next level AntiCheat plugin for Spigot. It stands out for its excellent scaffold, fly and speed checks. However, all other checks should not be ignored... Due to its high precision, false bans are almost impossible.

# Configs

checks.yml
\`\`\`yaml
# GetMad checks configuration file
# Checks that have multiple modules need to be disabled on a per-module basis
# If you have a false positive and can't determine what subcheck it's from,
# enable debug-mode in config.yml and compare the results against the commented values
# Flight check settings
# Checks if a player moves wrongly in the air
flight:
  # Checks for prolonged air movement
  # Debugs as 'tried to fly on the Y-axis' or 'had too little Y dropoff'
  airFlight:
    # Should this part of the check be enabled?
    enabled: true
    # How many milliseconds to account for block placement
    # Increase this if you get false positives when building a tower
    accountForBlockPlacement: 1200
    # How many milliseconds to account for TPS drops
    # Increase this if you get false positives when building a tower during TPS drops
    accountForTpsDrops: 250
    # How many milliseconds to account for teleports
    # Increase this is you debug 'had too little Y dropoff' after teleports
    accountForTeleports: 400
  # Checks for climbing behaviour in air
  # Debugs as 'tried to climb air'
  airClimb:
    # Should this part of the check be enabled?
    enabled: true
    # How many milliseconds to account for teleports
    # Increase this is you debug 'tried to climb air' after teleports
    accountForTeleports: 300
  # Checks if a player is faking it's ground status to fly
  # Debugs as 'faked ground to fly'
  groundFlight:
    # Should this part of the check be enabled?
    enabled: true
  # Checks if a player ignores gravity
  # Debugs as 'ignored gravity'
  gravity:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum offset between predicted and actual gravity
    maxOffset: 0.005
    # How many milliseconds to account for teleports
    # Increase this is you debug 'ignored gravity' after teleports
    accountForTeleports: 300
    # Amount of illegal moves before flagging
    vlBeforeFlag: 5
# ElytraFly check settings
# Checks for illegal upward elytra movement
elytrafly:
  # Should this check be enabled?
  enabled: true
# Speed check settings
# Checks if a player moves too fast
speed:
  # Checks movement speed in the air
  # Debugs as 'moved too fast in air'
  airSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Base unadjusted air speed limit
    baseLimit: 0.03125
    # Prediction multiplier for custom walk speeds
    walkSpeedMultiplier: 1.4
  # Checks movement acceleration in the air
  # Debugs as 'exceeded acceleration limits'
  airAcceleration:
    # Should this part of the check be enabled?
    enabled: true
    # Base unadjusted air acceleration limit
    baseLimit: 0.3725
    # Limit multiplier for custom walk speeds
    walkSpeedMultiplier: 1.4
  # Checks movement acceleration in the air
  # Debugs as 'had unexpected jumping behaviour'
  jumpBehaviour:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum movement distance needed to flag
    minimumDistXZ: 0.2
  # Checks movement speed on the ground
  # Debugs as 'moved too fast on ground'
  groundSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Initial speed limit value
    initialLimit: 0.34
  # Checks movement acceleration in the air
  # Debugs as 'exceeded vertical speed limit'
  verticalSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Extra compensation when moving off a ladder up a slab
    climbableCompensation: 0.04
# Strafe check settings
# Checks if a player switches movement angle in air
strafe:
  # Should this check be enabled?
  enabled: true
  # How many milliseconds to account for teleports
  accountForTeleports: 300
  # Maximum angle change when moving in air
  maxAngleChange: 0.5
  # Minimum movement distance for the strafe check to be active
  minActivationDistance: 0.04
# WaterWalk check settings
# Checks if a player is walking on water
waterwalk:
  # Checks for vanilla water walking/jumping
  # Debugs as 'tried to walk on water'
  walk:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum xz distance before flagging
    # This combats false positives, while giving hackers not much leniency
    minimumDistXZ: 0.092
  # Checks for small hops on top of water
  # Debugs as 'tried to hop on water'
  hop:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum lunge Y motion to flag
    maxMotionY: 0.1
  # Checks for small lunges in water
  # Debugs as 'tried to lunge in water'
  lunge:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum xz distance before flagging
    # This combats false positives, while giving hackers not much leniency
    minimumDistXZ: 0.098
# FastLadder check settings
# Checks if a player moves too fast on a ladder
fastladder:
  # Should this check be enabled?
  enabled: true
  # Maximum speed a player on a ladder can travel upwards
  speedUpMax: 0.11761
  # Maximum speed a player on a ladder can travel downwards
  speedDownMax: 0.15
  # Amount of illegal ladder moves before flagging
  vlBeforeFlag: 3
# BoatFly check settings
# Checks if the player is flying in a boat
boatfly:
  # Should this check be enabled?
  enabled: true
  # Amount of in-boat airborne moments before flagging
  vlBeforeFlag: 2
# KillAura check settings
# Checks if the player uses a form of kill aura
killaura:
  # Checks reach distance in fights
  # Debugs as 'reached too far'
  reach:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum base reach distances
    baseMaxValue:
      # Maximum base reach value
      normal: 3.6
      # Maximum base reach value when a player has velocity
      velocitized: 4.0
    # Settings for lag compensation
    lagCompensation:
      # Basic extra allowed reach when a player is lagging
      lagExtraReach: 0.2
      # Extra allowed reach distance per millisecond of ping
      pingCompensation: 0.0025
    # The multiplier of extra compensation for velocity
    velocityMultiplier: 1.2
  # Checks if the target it within a players viewing angle
  # Debugs as 'tried to attack from an illegal angle'
  angle:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum difference in angle from the players view
    maxDifference: 50
    # Amount of illegally angled hits before flagging
    vlBeforeFlag: 3
  # Checks if the player has a suspicious packet order
  # Debugs as 'suspicious packet order'
  packetOrder:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum server TPS needed for the packet order subcheck to be active
    minimumTps: 17.5
    # Minimum elapsed time in milliseconds between a movement packet and a combat packet
    minElapsedTime: 5
    # Amount of suspicious combat packet situations before flagging
    vlBeforeFlag: 3
# Aimbot check settings
# Checks if the player is sending aimbot-like movements
aimbot:
  # Should this check be enabled?
  enabled: true
  # Minimum yaw difference when repeated
  minYaw: 30
  # Maximum yaw difference when repeated
  maxYaw: 355
# Criticals check settings
# Checks if the player tries to do a crit without needed conditions
criticals:
  # Should this check be enabled?
  enabled: true
# Velocity check settings
# Checks if the player ignores knockback
velocity:
  # Should this check be enabled?
  enabled: true
  # Minimum percentage of the given knockback a player has to meet
  minimumPercentage: 75
  # Amount of low-velocity moments before flagging
  vlBeforeFlag: 2
# FastPlace check settings
# Checks if the player places blocks too fast
fastplace:
  # Should this check be enabled?
  enabled: true
  # Minimum time in milliseconds between block places
  minimumTime: 50
  # Amount of fastplace-moments before flagging a survival player
  vlBeforeFlagSurvival: 3
  # Amount of fastplace-moments before flagging a creative player
  vlBeforeFlagCreative: 4
  # Amount of time in milliseconds to prevent a player from placing blocks after flagging
  blockPlacementTime: 1000
# IllegalInteract check settings
# Checks if the player is using, placing or breaking blocks from illegal angles
illegalinteract:
  # Maximum difference in angle from the players view
  maxAngleDifference: 90
  # Checks angle when breaking a block
  # Debugs as 'tried to break a block which was out of view'
  break:
    # Should this part of the check be enabled?
    enabled: true
  # Checks angle when placing a block
  # Debugs as 'tried to place a block which was out of view'
  place:
    # Should this part of the check be enabled?
    enabled: true
  # Checks angle when placing a block
  # Debugs as 'tried to interact out of range' or 'tried to interact out of view'
  interact:
    # Should this part of the check be enabled?
    enabled: true
    # Default survival interact range
    survivalRange: 5.8
    # Default creative interact range
    creativeRange: 6.8
    # Extra allowed reach distance per millisecond of ping
    pingCompensation: 0.0045
    # The multiplier of extra compensation for velocity
    velocityMultiplier: 1.5
# BadPackets check settings
# Checks for illegal packets
badpackets:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for BadPackets to be active
  minimumTps: 17.5
  # Maximum distance a player can move between packets
  maxDistance: 25.0
  # The amount of milliseconds to compensate for a teleport (50ms = 1 tick)
  teleportCompensation: 300
# MorePackets check settings
# Checks for an extra amount of packets and modified game timers
morepackets:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for MorePackets to be active
  minimumTps: 17.5
  # Maximum amount of lag compensation a player can acquire (50ms = 1 tick)
  minimumClamp: 1000
  # The amount of milliseconds offset between packets before flagging (50ms = 1 tick)
  triggerBalance: 100
  # The amount of milliseconds to compensate for a teleport (50ms = 1 tick)
  teleportCompensation: 300
  # Should MorePackets be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # Maximum ping value before MorePackets stops checking a player (-1 to disable)
  # This can easily be spoofed by clients!
  maxPing: -1
# Sneak check settings
# Checks if the player toggles sneak too fast
sneak:
  # Should this check be enabled?
  enabled: true
  # Should MorePackets be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # Minimum server TPS needed for sneak
  minimumTps: 15
  # Minimum time in milliseconds between sneak toggles
  minToggleTime: 75
# NoSlow check settings
# Checks if the player moves too fast while blocking
noslow:
  # Should this check be enabled?
  enabled: true
  # Minimum time difference in milliseconds between toggling use item state
  minimumDifference: 75
  # Minimum movement distance needed to flag
  minimumDistXZ: 0.15
  # Amount of no slowdown moments before flagging
  vlBeforeFlag: 3
# Spider check settings
# Checks if the player tries to climb a non-climbable block
spider:
  # Should this check be enabled?
  enabled: true
# NoFall check settings
# Checks if the player tries to ignore fall damage
nofall:
  # Should this check be enabled?
  enabled: true
  # Amount of moves with a modified fall distance before flagging
  vlBeforeFlag: 6
# Sprint check settings
# Checks if the player tries to sprint without the needed conditions
sprint:
  # Should this check be enabled?
  enabled: true
  # Minimum food level needed to sprint
  sprintFoodMin: 6
# FastBow check settings
# Checks if the player fires a bow too fast
fastbow:
  # Should this check be enabled?
  enabled: true
  # Maximum percent error between predicted bow force and actual bow force
  bowError: 0.25
# FastEat check settings
# Checks if the player consumes food too fast
fasteat:
  # Should this check be enabled?
  enabled: true
  # Minimum time in milliseconds it takes to consume food
  eatTimeMin: 1000
# FastHeal check settings
# Checks if the player regains health too fast
fastheal:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for FastHeal to be active
  minimumTps: 17.5
  # Should FastHeal be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # The minimum time it takes to regenerate health in milliseconds
  # Vanilla is 500, but enforcing this will cause too many false positives
  minHealTime: 475
  # Amount of milliseconds a player can heal faster per millisecond of ping
  pingCompensation: 0.25
# FastProjectile check settings
# Checks if the player fires a projectile too fast
fastprojectile:
  # Should this check be enabled?
  enabled: true
  # Number of projectiles to wait for before checking how long they took to fire off
  projectilesToWait: 10
  # The minimum time in milliseconds it should have taken for the player fire 'projectilesToWait' projectiles
  minimumTime: 1500
# ItemSpam check settings
# Checks if the player drops items too fast
itemspam:
  # Should this check be enabled?
  enabled: true
  # The number of item drops we should wait before checking if the player has used item spam
  dropsToWait: 10
  # The minimum time in milliseconds it should have taken for the player to drop items 'dropsToWait' times
  minimumTime: 800
# FastInventory check settings
# Checks if the player moves items in the inventory too fast
fastinventory:
  # Should this check be enabled?
  enabled: true
  # The number of clicks we should wait before checking if the player has used fast inventory
  clicksToWait: 10
  # The minimum time in milliseconds it should have taken for the player to click 'clicksToWait' times
  minimumTime: 50
# vClip check settings
# Checks if the player is clipping
vclip:
  # Should this check be enabled?
  enabled: true
  # Spoofs the players health so it can't be checked
healthSpoof:
  # Should this check be enabled?
  enabled: true
  # Spoofs the players so they can't get displayed by ESP
antiESP:
  # Should this check be enabled?
  enabled: true
# ChatUnicode check settings
# Checks for illegal unicode characters in the chat
chatunicode:
  # Should this check be enabled?
  enabled: true
# ChatSpam check settings
# Checks for a spam of chat messages
chatspam:
  # Should this check be enabled?
  enabled: true
  # Minimum time between chats
  timeMin: 500
  # Time in milliseconds after which repeating yourself in chat is ignored
  repeatIgnore: 600
  # Number of chat spam violations before action one (see config.yml) is executed
  levelActionOne: 5
  # Number of chat spam violations before action two (see config.yml) is executed
  levelActionTwo: 10
# CommandSpam check settings
# Checks for a spam of commands
commandspam:
  # Should this check be enabled?
  enabled: true
  # Minimum time between commands
  timeMin: 250
  # Time in milliseconds after which repeating a command is ignored
  repeatIgnore: 500
  # Number of command spam violations before action one (see config.yml) is executed
  levelActionOne: 5
  # Number of command spam violations before action two (see config.yml) is executed
  levelActionTwo: 10
\`\`\``,Pe=`A URL-shortener is a tool designed to condense long URLs into shorter, more manageable links. These abbreviated links are easier to share, especially on platforms like social media, where character limits may be restrictive. The process typically involves taking a lengthy URL and generating a unique, abbreviated code that redirects users to the original destination when clicked. URL-shorteners often offer additional features such as tracking click analytics, customizing link endings, and managing multiple shortened links within a dashboard. They serve to streamline communication, enhance user experience, and provide valuable insights into link engagement and audience behavior.


## API Reference

#### Short specific url

\`\`\`http
  POST /api/v1/add
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`url\` | \`string\` | **Required**. The url you want to short |

#### Get information about url

\`\`\`http
  GET /api/v1/about/\${uuid}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`uuid\`      | \`string\` | **Required**. UUID of url to fetch |


## Usage/Examples

Java
\`\`\`java
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.JSONObject;

private void sendRequest(String targetUrl, String urlToShorten) {
        try {
            CloseableHttpClient httpclient = HttpClients.createDefault();
            HttpPost httpPost = new HttpPost("https://" + targetUrl + ":8080/api/v1/add");
            String jsonPayload = "{\\"url\\":\\"" + urlToShorten + "\\"}";
            HttpEntity stringEntity = new StringEntity(jsonPayload, ContentType.APPLICATION_JSON);
            httpPost.setEntity(stringEntity);
            CloseableHttpResponse response = httpclient.execute(httpPost);
            HttpEntity responseEntity = response.getEntity();
            String responseBody = EntityUtils.toString(responseEntity);

            JSONObject jsonObject = new JSONObject(responseBody);
            String url = jsonObject.getString("url");
            String uuid = jsonObject.getString("uuid");
            System.out.println("Shortened URL: " + url);
            System.out.println("UUID: " + uuid);
        } catch (Exception ignored) {
        }
    }
\`\`\`

`,Re=`A Snippets Uploader is a versatile tool designed to simplify the process of sharing and managing code snippets online. It enables users to quickly upload snippets of code, ranging from small functions to larger blocks, to a centralized platform for easy access and sharing. These snippets can be annotated, tagged, and categorized for organization and searchability, allowing users to efficiently find and reuse code segments as needed. Additionally, Snippets Uploaders often offer features such as syntax highlighting, version control, and collaboration options, allowing teams to collaborate on code projects seamlessly. Whether for personal use, collaborative coding, or sharing solutions with a broader community, a Snippets Uploader provides a convenient and efficient way to manage and distribute code snippets.
## API Reference

#### Add Snippet

\`\`\`http
  POST /api/v1/snippet/create
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`content\` | \`byte[]\` | **Required**. The code snippet in bytes, serialized using Base64 |

#### Get item

\`\`\`http
  GET /api/v1/snippet/get/\${uuid}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`uuid\`      | \`string\` | **Required**. Id of snippet to fetch |
`,X=e=>`${de}/imgs/${e}`,Oe=[{slug:"jutils",color:"#5e95e3",description:Ee,shortDescription:"Minecraft challenge plugin with Backend for license generation and a sellix hook",links:[{to:"https://jutils.dasshept.de",label:"Website"}],logo:k.JUtils,name:"JUtils",period:{from:new Date(2022,2,22)},skills:W("java","spring","json","postgres"),type:"Minecraft Plugins",screenshots:[{label:"Insight",src:X("jutils-insight.png")}]},{slug:"getmad",color:"#ff3e00",description:Ie,shortDescription:"Advanced Minecraft cheat detection",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:k.GetMad,name:"GetMad",period:{from:new Date(2021,11,13)},skills:W("java","yaml"),type:"Minecraft AntiCheat"},{slug:"urlshorter",color:"#ff3e00",description:Pe,shortDescription:"URL shorting REST API",links:[{to:"https://github.com/mcshept/URLShorter",label:"GitHub"}],logo:k.Unknown,name:"URLShorter",period:{from:new Date(2023,11,28)},screenshots:[{label:"Main Page Blank",src:X("shorter-insight1.png")},{label:"About Page Blank",src:X("shorter-insight2.png")},{label:"Main Page Example",src:X("shorter-insight3.png")},{label:"About Page Example",src:X("shorter-insight4.png")}],skills:W("java","spring","json","postgres"),type:"REST API"},{slug:"snippets",color:"#9DB3C8",description:Re,shortDescription:"Snippet storing REST API",links:[{to:"https://github.com/mcshept/SnippetsUploader",label:"GitHub"}],logo:k.Unknown,name:"Snippets Uploader",period:{from:new Date(2024,0,26)},skills:W("java","spring","json","postgres"),type:"REST API"},{slug:"norisk",color:"#9DB3C8",description:"Currently, there is no set release date. For updates on the current state of the client, check out their discord or NoRisk's YouTube channel.",shortDescription:"Minecraft PvP Client",links:[{to:"https://github.com/NoriskClient",label:"GitHub"},{to:"https://norisk.gg",label:"Website"}],logo:k.NoRisk,name:"Norisk Client",period:{from:new Date(2023,5,3),to:new Date(2024,0,5)},skills:W("java","kotlin","ktor","json"),type:"Minecraft Client"}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={},Je={get exports(){return re},set exports(e){re=e}};(function(e,f){(function(y,m){e.exports=m()})(he,function(){var y=1e3,m=6e4,w=36e5,C="millisecond",D="second",J="minute",z="hour",E="day",N="week",$="month",F="quarter",T="year",I="date",B="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ie={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var a=["th","st","nd","rd"],n=o%100;return"["+o+(a[(n-20)%10]||a[n]||a[0])+"]"}},H=function(o,a,n){var r=String(o);return!r||r.length>=a?o:""+Array(a+1-r.length).join(n)+o},ee={s:H,z:function(o){var a=-o.utcOffset(),n=Math.abs(a),r=Math.floor(n/60),i=n%60;return(a<=0?"+":"-")+H(r,2,"0")+":"+H(i,2,"0")},m:function o(a,n){if(a.date()<n.date())return-o(n,a);var r=12*(n.year()-a.year())+(n.month()-a.month()),i=a.clone().add(r,$),d=n-i<0,u=a.clone().add(r+(d?-1:1),$);return+(-(r+(n-i)/(d?i-u:u-i))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:$,y:T,w:N,d:E,D:I,h:z,m:J,s:D,ms:C,Q:F}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},Y="en",g={};g[Y]=ie;var l="$isDayjsObject",s=function(o){return o instanceof S||!(!o||!o[l])},h=function o(a,n,r){var i;if(!a)return Y;if(typeof a=="string"){var d=a.toLowerCase();g[d]&&(i=d),n&&(g[d]=n,i=d);var u=a.split("-");if(!i&&u.length>1)return o(u[0])}else{var b=a.name;g[b]=a,i=b}return!r&&i&&(Y=i),i||!r&&Y},p=function(o,a){if(s(o))return o.clone();var n=typeof a=="object"?a:{};return n.date=o,n.args=arguments,new S(n)},c=ee;c.l=h,c.i=s,c.w=function(o,a){return p(o,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var S=function(){function o(n){this.$L=h(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[l]=!0}var a=o.prototype;return a.parse=function(n){this.$d=function(r){var i=r.date,d=r.utc;if(i===null)return new Date(NaN);if(c.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var u=i.match(Z);if(u){var b=u[2]-1||0,v=(u[7]||"0").substring(0,3);return d?new Date(Date.UTC(u[1],b,u[3]||1,u[4]||0,u[5]||0,u[6]||0,v)):new Date(u[1],b,u[3]||1,u[4]||0,u[5]||0,u[6]||0,v)}}return new Date(i)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return c},a.isValid=function(){return this.$d.toString()!==B},a.isSame=function(n,r){var i=p(n);return this.startOf(r)<=i&&i<=this.endOf(r)},a.isAfter=function(n,r){return p(n)<this.startOf(r)},a.isBefore=function(n,r){return this.endOf(r)<p(n)},a.$g=function(n,r,i){return c.u(n)?this[r]:this.set(i,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,r){var i=this,d=!!c.u(r)||r,u=c.p(n),b=function(G,L){var K=c.w(i.$u?Date.UTC(i.$y,L,G):new Date(i.$y,L,G),i);return d?K:K.endOf(E)},v=function(G,L){return c.w(i.toDate()[G].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(L)),i)},M=this.$W,x=this.$M,P=this.$D,V="set"+(this.$u?"UTC":"");switch(u){case T:return d?b(1,0):b(31,11);case $:return d?b(1,x):b(0,x+1);case N:var U=this.$locale().weekStart||0,q=(M<U?M+7:M)-U;return b(d?P-q:P+(6-q),x);case E:case I:return v(V+"Hours",0);case z:return v(V+"Minutes",1);case J:return v(V+"Seconds",2);case D:return v(V+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,r){var i,d=c.p(n),u="set"+(this.$u?"UTC":""),b=(i={},i[E]=u+"Date",i[I]=u+"Date",i[$]=u+"Month",i[T]=u+"FullYear",i[z]=u+"Hours",i[J]=u+"Minutes",i[D]=u+"Seconds",i[C]=u+"Milliseconds",i)[d],v=d===E?this.$D+(r-this.$W):r;if(d===$||d===T){var M=this.clone().set(I,1);M.$d[b](v),M.init(),this.$d=M.set(I,Math.min(this.$D,M.daysInMonth())).$d}else b&&this.$d[b](v);return this.init(),this},a.set=function(n,r){return this.clone().$set(n,r)},a.get=function(n){return this[c.p(n)]()},a.add=function(n,r){var i,d=this;n=Number(n);var u=c.p(r),b=function(x){var P=p(d);return c.w(P.date(P.date()+Math.round(x*n)),d)};if(u===$)return this.set($,this.$M+n);if(u===T)return this.set(T,this.$y+n);if(u===E)return b(1);if(u===N)return b(7);var v=(i={},i[J]=m,i[z]=w,i[D]=y,i)[u]||1,M=this.$d.getTime()+n*v;return c.w(M,this)},a.subtract=function(n,r){return this.add(-1*n,r)},a.format=function(n){var r=this,i=this.$locale();if(!this.isValid())return i.invalidDate||B;var d=n||"YYYY-MM-DDTHH:mm:ssZ",u=c.z(this),b=this.$H,v=this.$m,M=this.$M,x=i.weekdays,P=i.months,V=i.meridiem,U=function(L,K,_,ne){return L&&(L[K]||L(r,d))||_[K].slice(0,ne)},q=function(L){return c.s(b%12||12,L,"0")},G=V||function(L,K,_){var ne=L<12?"AM":"PM";return _?ne.toLowerCase():ne};return d.replace(j,function(L,K){return K||function(_){switch(_){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return M+1;case"MM":return c.s(M+1,2,"0");case"MMM":return U(i.monthsShort,M,P,3);case"MMMM":return U(P,M);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return U(i.weekdaysMin,r.$W,x,2);case"ddd":return U(i.weekdaysShort,r.$W,x,3);case"dddd":return x[r.$W];case"H":return String(b);case"HH":return c.s(b,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return G(b,v,!0);case"A":return G(b,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return u}return null}(L)||u.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,r,i){var d,u=this,b=c.p(r),v=p(n),M=(v.utcOffset()-this.utcOffset())*m,x=this-v,P=function(){return c.m(u,v)};switch(b){case T:d=P()/12;break;case $:d=P();break;case F:d=P()/3;break;case N:d=(x-M)/6048e5;break;case E:d=(x-M)/864e5;break;case z:d=x/w;break;case J:d=x/m;break;case D:d=x/y;break;default:d=x}return i?d:c.a(d)},a.daysInMonth=function(){return this.endOf($).$D},a.$locale=function(){return g[this.$L]},a.locale=function(n,r){if(!n)return this.$L;var i=this.clone(),d=h(n,r,!0);return d&&(i.$L=d),i},a.clone=function(){return c.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},o}(),A=S.prototype;return p.prototype=A,[["$ms",C],["$s",D],["$m",J],["$H",z],["$W",E],["$M",$],["$y",T],["$D",I]].forEach(function(o){A[o[1]]=function(a){return this.$g(a,o[0],o[1])}}),p.extend=function(o,a){return o.$i||(o(a,S,p),o.$i=!0),p},p.locale=h,p.isDayjs=s,p.unix=function(o){return p(1e3*o)},p.en=g[Y],p.Ls=g,p.p={},p})})(Je);const te=re;var le={},He={get exports(){return le},set exports(e){le=e}};(function(e,f){(function(y,m){e.exports=m()})(he,function(){var y,m,w=1e3,C=6e4,D=36e5,J=864e5,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,N=2628e6,$=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:E,months:N,days:J,hours:D,minutes:C,seconds:w,milliseconds:1,weeks:6048e5},T=function(g){return g instanceof ee},I=function(g,l,s){return new ee(g,s,l.$l)},B=function(g){return m.p(g)+"s"},Z=function(g){return g<0},j=function(g){return Z(g)?Math.ceil(g):Math.floor(g)},ie=function(g){return Math.abs(g)},H=function(g,l){return g?Z(g)?{negative:!0,format:""+ie(g)+l}:{negative:!1,format:""+g+l}:{negative:!1,format:""}},ee=function(){function g(s,h,p){var c=this;if(this.$d={},this.$l=p,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return I(s*F[B(h)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(o){c.$d[B(o)]=s[o]}),this.calMilliseconds(),this;if(typeof s=="string"){var S=s.match($);if(S){var A=S.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=A[0],this.$d.months=A[1],this.$d.weeks=A[2],this.$d.days=A[3],this.$d.hours=A[4],this.$d.minutes=A[5],this.$d.seconds=A[6],this.calMilliseconds(),this}}return this}var l=g.prototype;return l.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce(function(h,p){return h+(s.$d[p]||0)*F[p]},0)},l.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=j(s/E),s%=E,this.$d.months=j(s/N),s%=N,this.$d.days=j(s/J),s%=J,this.$d.hours=j(s/D),s%=D,this.$d.minutes=j(s/C),s%=C,this.$d.seconds=j(s/w),s%=w,this.$d.milliseconds=s},l.toISOString=function(){var s=H(this.$d.years,"Y"),h=H(this.$d.months,"M"),p=+this.$d.days||0;this.$d.weeks&&(p+=7*this.$d.weeks);var c=H(p,"D"),S=H(this.$d.hours,"H"),A=H(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=H(o,"S"),n=s.negative||h.negative||c.negative||S.negative||A.negative||a.negative,r=S.format||A.format||a.format?"T":"",i=(n?"-":"")+"P"+s.format+h.format+c.format+r+S.format+A.format+a.format;return i==="P"||i==="-P"?"P0D":i},l.toJSON=function(){return this.toISOString()},l.format=function(s){var h=s||"YYYY-MM-DDTHH:mm:ss",p={Y:this.$d.years,YY:m.s(this.$d.years,2,"0"),YYYY:m.s(this.$d.years,4,"0"),M:this.$d.months,MM:m.s(this.$d.months,2,"0"),D:this.$d.days,DD:m.s(this.$d.days,2,"0"),H:this.$d.hours,HH:m.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:m.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:m.s(this.$d.seconds,2,"0"),SSS:m.s(this.$d.milliseconds,3,"0")};return h.replace(z,function(c,S){return S||String(p[c])})},l.as=function(s){return this.$ms/F[B(s)]},l.get=function(s){var h=this.$ms,p=B(s);return p==="milliseconds"?h%=1e3:h=p==="weeks"?j(h/F[p]):this.$d[p],h||0},l.add=function(s,h,p){var c;return c=h?s*F[B(h)]:T(s)?s.$ms:I(s,this).$ms,I(this.$ms+c*(p?-1:1),this)},l.subtract=function(s,h){return this.add(s,h,!0)},l.locale=function(s){var h=this.clone();return h.$l=s,h},l.clone=function(){return I(this.$ms,this)},l.humanize=function(s){return y().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},l.valueOf=function(){return this.asMilliseconds()},l.milliseconds=function(){return this.get("milliseconds")},l.asMilliseconds=function(){return this.as("milliseconds")},l.seconds=function(){return this.get("seconds")},l.asSeconds=function(){return this.as("seconds")},l.minutes=function(){return this.get("minutes")},l.asMinutes=function(){return this.as("minutes")},l.hours=function(){return this.get("hours")},l.asHours=function(){return this.as("hours")},l.days=function(){return this.get("days")},l.asDays=function(){return this.as("days")},l.weeks=function(){return this.get("weeks")},l.asWeeks=function(){return this.as("weeks")},l.months=function(){return this.get("months")},l.asMonths=function(){return this.as("months")},l.years=function(){return this.get("years")},l.asYears=function(){return this.as("years")},g}(),Y=function(g,l,s){return g.add(l.years()*s,"y").add(l.months()*s,"M").add(l.days()*s,"d").add(l.hours()*s,"h").add(l.minutes()*s,"m").add(l.seconds()*s,"s").add(l.milliseconds()*s,"ms")};return function(g,l,s){y=s,m=s().$utils(),s.duration=function(c,S){var A=s.locale();return I(c,{$l:A},S)},s.isDuration=T;var h=l.prototype.add,p=l.prototype.subtract;l.prototype.add=function(c,S){return T(c)?Y(this,c,1):h.bind(this)(c,S)},l.prototype.subtract=function(c,S){return T(c)?Y(this,c,-1):p.bind(this)(c,S)}}})})(He);const je=le;te.extend(je);const Ye=(e,f=new Date)=>{let y=0,m=0,w=0;return f.getFullYear()!==e.getFullYear()?(w=f.getMonth(),m=(f.getFullYear()-e.getFullYear()-1)*12,y=12-e.getMonth()):y=f.getMonth()-e.getMonth(),y+m+w+1},Ke=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Qe=(e,f)=>`${e} | ${f}`;function Ue(e,f=new Date(Date.now()+1e3*60*60*24)){const y=te(e),m=te(f),w=te.duration(m.diff(y));let C=0,D="day";return w.as("days")<=7?(D="day",C=w.as("days")):w.as("months")<=1?(D="week",C=w.as("weeks")):w.as("years")<=1?(D="month",C=w.as("months")):(D="year",C=w.as("years")),C=Math.trunc(C),`${Math.trunc(C)} ${D}${C>1?"s":""}`}function Ge(e,f){const y=["logo","links","color","screenshots"];return f=f.toLowerCase(),e.filter(m=>ce(m,f,y))}function ce(e,f,y=[]){return Array.isArray(e)?e.some(m=>ce(m,f)):typeof e=="object"&&e!==null?e instanceof Date?[e.toString().toLowerCase(),e.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("en-US").toLowerCase(),e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(w=>w.includes(f)):Object.keys(e).some(m=>!y.includes(m)&&ce(e[m],f)):e.toString().toLowerCase().includes(f)}var Q=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(Q||{});const We="Maximilian Andreas Heinrich",ze=e=>`${de}/pdf/${e}`,Ve={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},qe=e=>{switch(e){case R.GitHub:return Q.GitHub;case R.Linkedin:return Q.LinkedIn;case R.StackOverflow:return Q.StackOverflow;case R.Facebook:return Q.Facebook;case R.Email:return Q.Email;case R.Twitter:return Q.Twitter;case R.Youtube:return Q.Youtube}},_e={title:"Home",name:"Maximilian",lastName:"HEINRICH",description:`I’m a back-end developer based from Germany. I can develop fast and secure backend-solutions with Java, Springboot and a database of choice.

For the last year, I have been programming backends for various applications. Be it licensing or communication systems like BeReal. Since then, I've been on a constant learning curve, and I'm always up-to-date with new techniques.`,links:[{platform:R.GitHub,link:"https://github.com/maximilianheinrich"},{platform:R.Linkedin,link:"https://www.linkedin.com/in/maxhei"},{platform:R.Twitter,link:"https://twitter.com/"},{platform:R.Email,link:"email@maximilian.is-a.dev"}]},Xe={title:"Projects",items:Oe},Ze={title:"Experiences",items:Te},en={title:"Skills",items:ge},nn={title:"Résumé",item:ze("resume.pdf")},tn={title:"Search"},an={items:ye,title:"Education"};export{an as E,_e as H,Q as I,ge as M,Ve as N,Xe as P,nn as R,tn as S,We as T,ae as a,qe as b,Ue as c,Ke as d,Ze as e,Te as f,Be as g,he as h,Ye as i,Oe as j,Ge as k,en as l,Fe as o,pe as t,Qe as u};
