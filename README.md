# BizTrack API

Backend API for **BizTrack** --- a business activity and payments
tracking platform.

Built with **NestJS**, **Prisma**, and **PostgreSQL**, the API provides
secure authentication, multi-tenant business management, payment
tracking, and reporting capabilities.

---

## 🧱 Tech Stack

- Framework: NestJS (TypeScript)
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT (Passport)
- Validation: Zod + class-validator
- API Docs: Swagger (OpenAPI)
- Deployment: Docker-ready

---

## 📁 Project Structure

    biztrack-api/
    ├── prisma/
    │   ├── schema.prisma
    │   ├── migrations/
    │   └── seed.ts
    ├── src/
    │   ├── app.module.ts
    │   ├── main.ts
    │   ├── auth/
    │   ├── users/
    │   ├── businesses/
    │   ├── customers/
    │   ├── payments/
    │   ├── transactions/
    │   ├── reports/
    │   ├── prisma/
    │   ├── common/
    │   └── config/
    ├── test/
    ├── docker/
    ├── .env.example
    └── README.md

---

## ⚙️ Requirements

- Node.js ≥ 18
- PostgreSQL ≥ 13
- npm / pnpm / yarn

---

## 🚀 Getting Started

### Install dependencies

    npm install

### Environment variables

Create a `.env` file:

    DATABASE_URL=postgresql://user:password@localhost:5432/biztrack
    JWT_SECRET=your-secret-key
    JWT_EXPIRES_IN=1d
    PORT=3000

### Setup database

    npx prisma migrate dev
    npx prisma generate

### Start server

    npm run start:dev

---

## 📘 API Documentation

Swagger UI:

    http://localhost:3000/docs

---

## 🔐 Authentication

JWT-based authentication.

Header:

    Authorization: Bearer <token>

---

## 💰 Financial Rules

- Monetary values stored as integers (cents)
- Use DB transactions for payments
- Audit all changes

---

## 🧪 Testing

    npm run test
    npm run test:e2e

---

## 📄 License

MIT
