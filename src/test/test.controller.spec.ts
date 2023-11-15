import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController', () => {
  let testController: TestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService]
    }).compile();

    testController = app.get<TestController>(TestController);
  });

  describe('/test/romantoint?input=RCRZCAB', () => {
    it('input "RCRZCAB" should return 1994', () => {
      expect(testController.getRomanToInt({ input: 'RCRZCAB' })).toStrictEqual(1994);
    });
  });
});
