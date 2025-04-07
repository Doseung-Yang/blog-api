"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const post_entity_1 = require("../posts/entities/post.entity");
const comment_entity_1 = require("../comments/entities/comment.entity");
exports.databaseConfig = {
    type: 'postgres',
    url: 'postgresql://blog_db_a912_user:Ctt1EevI7JT4iwCRn8OytHXECa5RCVle@dpg-cvpj1m3uibrs73804t10-a/blog_db_a912',
    entities: [post_entity_1.Post, comment_entity_1.Comment],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false,
    },
};
//# sourceMappingURL=database.config.js.map