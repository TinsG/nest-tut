import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class UserController {

    @Get()
    getUsers(): object {
        return { name: 'tinsae', email: 'tins@gmail.com' };
    }

    @Get('/:userId')
    getUser(@Param() params: { userId: number }): object {
        return params;
    }

    @Post()
    addUsers(@Req() users: Request) {
        return users.body;
    }
}