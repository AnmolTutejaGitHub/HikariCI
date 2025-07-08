## Setting up ts server
`npm init -y`
`npm install express
npm install -D typescript ts-node @types/node @types/express`
`npx tsc --init`
### create server as -> src/server.ts
`npx tsc   # compiles TS to JS in dist/
node dist/server.js`

What is -D and if i install a package do i need to install its types ?? </br>
-D is short for --save-dev. It means you’re installing the package as a development dependency. </br>

Dev dependencies are only needed during development (not in production). </br>
They go under "devDependencies" in package.json.</br>
Do I Need to Install @types/... When Installing a Package? .</br>

It depends on the package:.</br>

Case 1: The package has built-in TypeScript types .</br>

Examples: axios, react, next, chalk, prisma.</br>

No need to install anything extra..</br>
Case 2: The package does NOT have built-in types</br>

Examples: express, cors, jsonwebtoken</br>

You need to install @types/... separately:</br>
`npm install express
npm install -D @types/express` </br>
`npm install cors
npm install -D @types/cors` </br>

### What are types packages ??
Types packages are special TypeScript packages that provide type definitions for JavaScript libraries that don’t include their own types.</br>

These packages follow the naming convention:</br>
`@types/library-name`
 Why Do We Need Them?</br>

JavaScript libraries (like express, lodash, etc.) don’t have TypeScript types by default.</br>
TypeScript needs types to provide features like:</br>
	•	Autocomplete 
	•	Error checking 
	•	IntelliSense

So, we install the types separately using @types/.... </br>
`npm install -D @types/express`


## what is npx ?
npx is a command-line tool that runs Node.js packages without installing them globally.</br>

It comes bundled with Node.js (v5.2.0 and above).</br>
Think of it like this: .</br>
	•	npm install -g xyz: installs the tool globally
	•	npx xyz: runs it temporarily, without global install


## setting up prisma
install typescript dependencies and set up them
`npm i --save-dev prisma`
`npx prisma init  --datasource-provider postgresql`
`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
`CREATE ROLE root WITH SUPERUSER LOGIN PASSWORD 'rootpassword';`
`brew install postgresql
brew services start postgresql`
`psql postgres`
`DATABASE_URL="postgresql://root:rootpassword@localhost:5432/hikariCI"`
Database name u gave must exist </br>
`psql -U root -d postgres` This is terminal command to switch to user to create database
`npx prisma migrate dev --name init` # to image changes made to prisma model to database , dev is for development</br>
--name init --> Names the migration folder init (for versioning and history) </br>
You usually use --name init for the first migration — meaning:</br>
“This is the initial structure of my database.”</br>
`npm i @prisma/client` -> to generate client 
`npx prisma generate`
 1. npm i @prisma/client
🔍 What it does:
Installs the Prisma Client library in your project.
Package:
@prisma/client is an auto-generated and type-safe query builder tailored to your Prisma schema.
You use it like this in your code:
`import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const users = await prisma.user.findMany();`
 Required because:
Without this, your app won’t be able to talk to your database using Prisma.
⚙️ 2. npx prisma generate
🔍 What it does:
Generates the actual Prisma Client code based on your schema.prisma file.
This command reads your schema.prisma and creates TypeScript/JS client code in:
`node_modules/@prisma/client/`
It also updates:
`prisma/.prisma/client/`
When to run:
	•	After installing @prisma/client
	•	After modifying schema.prisma
	•	After running a migration


## running server
`npm install -D ts-node typescript`
`npx ts-node script.ts `


`npx prisma migrate dev` ## to mignate our databse
`npx prisma generate` ## to make sure our generator works after mignation