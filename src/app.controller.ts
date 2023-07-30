import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoValidation } from './todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('csit')
  getCsit():string{
     return 'hello csit....'
  }
  @Post('todo')
  addToo(@Body() todoBody: TodoValidation){
    return todoBody;
  };

  @Patch('todo')
  patchTodo(){
    return 'todo';
  };
  @Delete('todo')
  deleteTodo(){
    return 'todo';
  };


  
}
