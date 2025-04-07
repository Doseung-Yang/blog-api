"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const post_entity_1 = require("../posts/entities/post.entity");
let CommentsService = class CommentsService {
    constructor(commentsRepository, postsRepository) {
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
    }
    async create(createCommentDto) {
        const { postId } = createCommentDto, commentData = __rest(createCommentDto, ["postId"]);
        const post = await this.postsRepository.findOne({ where: { id: postId } });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${postId} not found`);
        }
        const comment = this.commentsRepository.create(Object.assign(Object.assign({}, commentData), { post }));
        return this.commentsRepository.save(comment);
    }
    findAll() {
        return this.commentsRepository.find({
            relations: ['post'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const comment = await this.commentsRepository.findOne({
            where: { id },
            relations: ['post'],
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return comment;
    }
    async update(id, updateCommentDto) {
        const comment = await this.findOne(id);
        this.commentsRepository.merge(comment, updateCommentDto);
        return this.commentsRepository.save(comment);
    }
    async remove(id) {
        const comment = await this.findOne(id);
        await this.commentsRepository.remove(comment);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map