import { Test, TestingModule } from '@nestjs/testing';
import { CommandersController } from './commanders.controller';
import { CommandersService } from './commanders.service';

describe('CommandersController', () => {
  let controller: CommandersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandersController],
      providers: [CommandersService],
    }).compile();

    controller = module.get<CommandersController>(CommandersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
