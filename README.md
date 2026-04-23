# CS-465 Full Stack Project

Module 7 - Security Implementation

- Added login authentication
- Protected admin routes
- Implemented logout functionality
- Verified functionality with screenshots

## Module 8 – Journal Reflection

### Architecture
In this project, I worked with multiple types of frontend development approaches, including Express HTML templates, JavaScript, and a single-page application (SPA) structure. The Express HTML approach uses server-side rendering, where pages are generated on the backend and sent to the browser. This was useful for the customer-facing side because it allowed quick loading of pages without requiring complex client-side logic. On the other hand, the SPA approach relies more on JavaScript to dynamically update content without reloading the page, which creates a smoother and more interactive experience for users.

The main difference between these approaches is how content is delivered. Express HTML reloads the page for each request, while an SPA updates content dynamically through API calls. While SPAs require more setup, they improve performance and user experience once implemented.

The backend uses a NoSQL MongoDB database because it is flexible and works well with JSON data. Since the application stores travel-related data such as trips, descriptions, and images, MongoDB allows storing this information without a rigid schema. This makes it easier to scale and modify the application as needed.

---

### Functionality
JSON (JavaScript Object Notation) is different from JavaScript because it is a data format rather than a programming language. It is used to store and transfer data between the frontend and backend. In this project, JSON played a key role in connecting both parts of the application. For example, when the frontend requests trip data, the backend sends the data in JSON format, which is then displayed on the page.

During development, I refactored parts of the code to improve functionality and efficiency. One example was reducing duplicated UI structures by reusing templates for displaying trips. Instead of writing separate code for each destination, I used a consistent format that could be reused across multiple entries.

Reusable UI components improve efficiency by allowing changes to be made in one place instead of multiple locations. They also make the application easier to maintain, reduce errors, and support future scalability.

---

### Testing
Testing in a full stack application involves verifying API endpoints and ensuring proper communication between the frontend and backend. In this project, I used tools like Postman to test API methods such as GET, POST, PUT, and DELETE. Each method serves a different purpose: GET retrieves data, POST creates new data, PUT updates existing data, and DELETE removes data.

Testing became more complex after implementing security features like login authentication. Protected routes required valid credentials, which meant that testing had to include authenticated requests. This added an extra layer of complexity because endpoints could no longer be accessed without proper authorization.

Understanding methods, endpoints, and security is important for ensuring that the application functions correctly and securely. Proper testing helps identify issues early and ensures that all parts of the application work together as expected.

---

### Reflection
This course has helped me build a strong foundation in full stack development. I learned how the frontend and backend connect, how APIs function, and how to implement security features such as authentication. Before this course, I had limited experience with full stack applications, but now I understand how all the components work together.

The skills I developed, including working with MongoDB, building APIs, testing endpoints, and organizing application structure, have made me more confident and prepared for future opportunities in the technology field. I also improved my ability to troubleshoot and debug issues, which is an essential skill in software development.
Overall, this project gave me hands-on experience that I can include in my portfolio and discuss in job interviews. It represents my ability to build and secure a full stack application from start to finish.
