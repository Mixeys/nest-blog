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

@Controller('posts')
export class PostsController {
  @Get()
  getPosts(@Query() query: any) {
    return 'all posts';
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return `post by id ${id}`;
  }

  @Post()
  createPost(@Body() post: any) {
    return 'This action adds a new post';
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    return `This action updates a #${id} post`;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return `This action removes a #${id} post`;
  }
}
