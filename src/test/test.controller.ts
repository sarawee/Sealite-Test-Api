import { Controller, Get, Query } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('test')
@ApiTags('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/romantoint')
  getRomanToInt(@Query() query: { input: string }): number {
    return this.testService.romanToInt(query.input);
  }
}
