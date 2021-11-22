import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Post } from '@prisma/client';
import { NewPost, UpdatedPost } from 'src/graphql';


@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}
    
    // get single post 
    async post(id: string): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    }

    //get multiple post
    async posts(): Promise<Post[]> {
        return this.prisma.post.findMany({});
    }

    //create a new post
    async createPost(input: NewPost): Promise<Post> {
        return this.prisma.post.create({
            data:input,
        });
    }

    //updatePost
    async updatedPost(post: UpdatedPost): Promise<Post> {
        const {id, published, title, content } = params;
        return this.prisma.post.update({
            where: { 
                id: parseInt(id),
            },
            data: {
                ...(published && {published }),
                ...(title && {title}),
                ...(content && {content}),
            },
        });
    }
    async deletePost(id: string): Promise<Post> {
        return this.prisma.post.delete({
            where: { 
                id: parseInt(id),
            },
        });
    }
}
    