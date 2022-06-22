# Udacity Image Processing API

An image processing API that resizes and saves images to user specifications when visiting a URL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### **Prerequisites**

To use this project must install [Node.js](https://nodejs.org/en/)

### **Installing**

To download the project app

```bash
git clone https://github.com/MohamedShehata15/Image-Processing-API.git
cd Image-Processing-API
```

install all project dependencies with

```bash
npm install
```

> Run

To run the app

```bash
npm start
```

Open the browser at:

```
http://localhost:4000/
```

<hr>

> Test

To run test cases

```bash
npm run test

```

## Folder Structure

```bash
├── src
│   ├── controllers
│   │   └── ImageController.ts
│   ├── core
│   │   ├── Interfaces
│   │   │   ├── AppMiddleware.Interface.ts
│   │   │   └── Route.Interface.ts
│   │   └── CustomServer.ts
│   ├── Middlewares
│   │   └── QueryValidatorMiddleware.ts
│   ├── Routes
│   │   └── ImageRouter.ts
│   ├── tests
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   ├── _ImageControllerSpec.ts
│   │   └── _ImageRouterSpec.ts
│   └── main.ts
```
