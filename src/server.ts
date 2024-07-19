import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = new Elysia().use(
  swagger({
    path: "/docs",
    documentation: {
      tags: [
        { name: "App", description: "General endpoints" },
        { name: "Auth", description: "Authentication endpoints" },
      ],
    },
  }),
);

app.group("", { detail: { tags: ["App"] } }, (app) => app.get("/", () => "Hello Elysia"));

app.group("", { detail: { tags: ["Auth"] } }, (app) =>
  app.get("/user", async ({ set }) => {
    try {
      await prisma.$connect();
      const users = await prisma.user.findMany();
      await prisma.$disconnect();

      set.status = 200;
      return users;
    } catch (err) {
      set.status = 500;
      return `Error retriving users: ${err}`;
    }
  }),
);

app.group("", { detail: { tags: ["Auth"] } }, (app) =>
  app.get("/user/:id", async ({ params, set }) => {
    try {
      await prisma.$connect();
      const user = await prisma.user.findUnique({ where: { id: Number(params.id) } });
      await prisma.$disconnect();

      if (user) {
        set.status = 200;
        return user;
      }

      set.status = 404;
      return `User with ID ${params.id} not found`;
    } catch (err) {
      set.status = 500;
      return `Error retriving users: ${err}`;
    }
  }),
);

app.group("", { detail: { tags: ["Auth"] } }, (app) =>
  app.post(
    "/user",
    async ({ body, set }) => {
      try {
        await prisma.$connect();
        await prisma.user.create({ data: { name: body.name, email: body.email } });
        await prisma.$disconnect();

        set.status = 201;
        return `User created successfully`;
      } catch (err) {
        set.status = 400;
        return `Error creating user: ${err}`;
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 3, maxLength: 12 }),
        email: t.String({ minLength: 5, maxLength: 35 }),
      }),
    },
  ),
);

app.listen(3000, () => {
  console.log("🦊 Elysia is running at http://localhost:3000");
});
