import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentForPostDto } from './dto/create-comment-post.dto';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Comment } from './entities/comment.entity';

@ApiTags('Comments')
@Controller('posts/:postId/comments')
export class PostCommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiOkResponse({ description: '해당 게시글의 댓글 목록', type: [Comment] })
  findByPost(@Param('postId', ParseIntPipe) postId: number) {
    return this.commentsService.findByPost(postId);
  }

  @Post()
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiBody({ type: CreateCommentForPostDto })
  @ApiOkResponse({ description: '생성된 댓글', type: Comment })
  createForPost(@Param('postId', ParseIntPipe) postId: number, @Body() dto: CreateCommentForPostDto) {
    return this.commentsService.createForPost(postId, dto);
  }
}
