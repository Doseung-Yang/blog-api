# Blog API Project
블로그 브로젝트 api를 위해서 개발 하였습니다.
Render를 통해서 서버 호스팅을 하고 있으며, nest로 개발하고 있습니다. 

## 프로젝트 구조

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

개선  ~ ing
## License

This project is licensed under the MIT License.
