# express5-ts-boilerplate

A minimal Express 5 API starter with TypeScript.

## Stack

- [Express 5](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) for environment validation
- [tsx](https://github.com/privatenumber/tsx) for local development

## Getting started

```bash
yarn install
yarn dev
```

The server starts on `http://localhost:3000` by default.

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `yarn dev`    | Start with hot reload          |
| `yarn build`  | Compile TypeScript to `dist/`  |
| `yarn start`  | Run the compiled app           |

## Environment variables

Create a `.env` file in the project root:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=
```

All variables have defaults, so a `.env` file is optional for local development.

## Project structure

```
src/
├── app.ts              # Express app setup
├── index.ts            # Server entry point
├── config/env.ts       # Environment config
├── middleware/         # Global middleware
└── modules/            # Feature modules (routes, controllers, services)
```

## API

| Method | Path              | Description      |
| ------ | ----------------- | ---------------- |
| GET    | `/api/users/:id`  | Get user profile |

## License

MIT
