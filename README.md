# Blog Project

This is a simple blog project built with NestJS and PostgreSQL. The project includes features for creating, updating, and managing blog posts and comments.

## Features

- **Blog Posts**: Create, update, and retrieve blog posts.
- **Comments**: Add comments to blog posts.
- **User Management**: Manage users who can create and comment on posts.
- **Date Handling**: Automatically record the creation date of posts.

## Project Structure

```
blog-project
├── src
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── config
│   │   └── database.config.ts
│   ├── posts
│   │   ├── posts.module.ts
│   │   ├── posts.controller.ts
│   │   ├── posts.service.ts
│   │   ├── dto
│   │   │   ├── create-post.dto.ts
│   │   │   └── update-post.dto.ts
│   │   ├── entities
│   │   │   └── post.entity.ts
│   │   └── interfaces
│   │       └── post.interface.ts
│   ├── comments
│   │   ├── comments.module.ts
│   │   ├── comments.controller.ts
│   │   ├── comments.service.ts
│   │   ├── dto
│   │   │   ├── create-comment.dto.ts
│   │   │   └── update-comment.dto.ts
│   │   ├── entities
│   │   │   └── comment.entity.ts
│   │   └── interfaces
│   │       └── comment.interface.ts
│   ├── users
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── dto
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   ├── entities
│   │   │   └── user.entity.ts
│   │   └── interfaces
│   │       └── user.interface.ts
│   └── common
│       ├── decorators
│       ├── filters
│       └── guards
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your PostgreSQL database and update the `.env` file with your database credentials.
4. Run the application using `npm run start`.

## License

This project is licensed under the MIT License.