"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const post_entity_1 = require("../posts/entities/post.entity");
const comment_entity_1 = require("../comments/entities/comment.entity");
exports.databaseConfig = {
    type: 'sqlite',
    database: './blog.sqlite',
    entities: [post_entity_1.Post, comment_entity_1.Comment],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=database.config.js.map