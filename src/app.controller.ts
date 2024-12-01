import {
  Controller,
  Get,
  Render,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AuthHomeExceptionFilter } from './common/filters/auth-exceptions.filter';

@Controller()
export class AppController {
  @Get('/')
  @Render('home')
  homeVoid() {
    return {};
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @UseFilters(AuthHomeExceptionFilter)
  @Render('home')
  getHome(@Request() req) {
    return { user: req.user };
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
