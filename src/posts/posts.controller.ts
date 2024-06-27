import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetPostDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts(@Query() getPostDto: GetPostDto) {
    return 'all posts';
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return `post by id ${id}`;
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return `This action removes a #${id} post`;
  }
}
