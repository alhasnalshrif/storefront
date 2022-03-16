# Storefront Backend Project

## How to setup the project

**1.** Clone the repository from [Repo](https://github.com/alhasnalshrif/storefront)

**2.** Install all project dependencies:

```
npm install
```

**3.** Create .env file with the following environment variables " Complete "

```
PG_HOST=127.0.0.1
PG_DB=store_dev
PG_USER=postgres
PG_PASSWORD=postgres
ENV=dev
BCRYPT_PASSWORD=AnyPassword
SALT_ROUNDS=10
TOKEN_SECRET=TheSecret
```

**4.** Compiling typescript code into **dist** folder:

```
npm run build
```

**5.** Install database "Docker should be installed first" using the following command"

```
docker-compose -f "docker-compose.yml" up -d --build
```

## Scripts

Run project in development mode

```
npm run watch
```

Run project in production mode

```
npm run start
```

Run Tests

```
npm run test
```

Lint and prettier

```
npm run lint
```

```
npm run prettier
```

## Create tables

```

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(20),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(100)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price integer
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id),
    order_status VARCHAR(20)
);

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id integer REFERENCES orders(id),
    product_id integer REFERENCES products(id)
);

```

## Database Information

For development and Testing
HOST 127.0.0.1
PORT 5432
USER postgres
PASSWD postgres

### DEV

DB Name: store_dev

### TEST

DB Name: store_test

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `npm` in your terminal at the project root.

## Required Technologies

Your application must make use of the following libraries:

-   Postgres for the database
-   Node/Express for the application logic
-   dotenv from npm for managing environment variables
-   db-migrate from npm for migrations
-   jsonwebtoken from npm for working with JWTs
-   jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API.

Your first task is to read the requirements and update the document with the following:

-   Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.  
    **Example**: A SHOW route: 'blogs/:id' [GET]

-   Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.  
    **Example**: You can format this however you like but these types of information should be provided
    Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape.

### 2. DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder.

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled.

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database.

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
