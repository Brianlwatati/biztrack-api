# Prisma Set Up

## Installing Dependancies

- npm install prisma --save-dev
- npm install @prisma/client @prisma/adapter-pg pg

## Initialize Prisma

- npx prisma init

This creates a new prisma directory with the following contents:

schema.prisma: Specifies your database connection and contains the database schema
prisma.config.ts: A configuration file for your projects
.env: A dotenv file, typically used to store your database credentials in a group of environment variables

## Set the generator output path

set up the generator output path and configure the database connections

## Set up your models that will be used to create tables

## Create and run your migration

With your Prisma models in place, you can generate your SQL migration files and run them against the database. Run the following commands in your terminal:

- npx prisma migrate dev --name init

## Generate Prisma Client

Once installed, you can run the generate command to generate the types and Client needed for your project. If any changes are made to your schema, you will need to rerun the generate command to keep those types in sync.

- npx prisma generate
