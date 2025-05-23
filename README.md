# Bun-Elysia-Swagger API

This repository contains a RESTful API built with Bun, Elysia, and Prisma. It serves as a demonstration of how to integrate these technologies to create a modern, type-safe backend application.

## Technologies Used

- **[Bun](https://bun.sh/)**: A fast JavaScript runtime, package manager, and bundler
- **[Elysia](https://elysiajs.com/)**: A TypeScript framework for building web applications
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript
- **[Swagger](https://swagger.io/)**: API documentation tool via @elysiajs/swagger

## Project Structure

```
bun-elysia-swagger/
├── prisma/
│   └── schema.prisma    # Database schema definition
├── src/
│   └── server.ts        # Main server application
├── .gitignore
├── bun.lockb
├── package.json
├── README.md
└── tsconfig.json
```

## Features

- RESTful API endpoints for user management
- Swagger documentation for API exploration
- PostgreSQL database integration via Prisma
- Type-safe API development with TypeScript

## API Endpoints

| Method | Endpoint    | Description                 | Request Body                                | Response                      |
|--------|-------------|-----------------------------|---------------------------------------------|-------------------------------|
| GET    | /           | Hello world endpoint        | -                                           | "Hello Elysia"                |
| GET    | /user       | Get all users               | -                                           | Array of user objects         |
| GET    | /user/:id   | Get user by ID              | -                                           | User object or error message  |
| POST   | /user       | Create a new user           | `{ name: string, email: string }`           | Success or error message      |

## Database Schema

The application uses a PostgreSQL database with the following schema:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bun-elysia-swagger
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

4. Run database migrations:
   ```bash
   bunx prisma migrate dev --name init
   ```

5. Start the server:
   ```bash
   bun run src/server.ts
   ```

6. Access the API documentation:
   Open your browser and navigate to `http://localhost:3000/docs`

## Development

### Adding New Endpoints

To add new endpoints, follow the pattern in `server.ts`. Elysia uses a chainable API for defining routes:

```typescript
app.group("", { detail: { tags: ["YourTag"] } }, (app) =>
  app.get("/your-endpoint", async ({ set }) => {
    // Your handler logic here
  })
);
```

### Database Operations

The project uses Prisma Client for database operations. Example:

```typescript
// Create a new record
await prisma.user.create({ data: { name: "John", email: "john@example.com" } });

// Query records
const users = await prisma.user.findMany();
```

## API Documentation

The API documentation is automatically generated using Swagger and is available at `/docs` when the server is running.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Elysia Documentation](https://elysiajs.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Bun Documentation](https://bun.sh/docs)