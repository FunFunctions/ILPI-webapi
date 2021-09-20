import { Test, TestingModule } from '@nestjs/testing';
import { LegalGuardiansController } from './legal-guardians.controller';
import { LegalGuardiansService } from './legal-guardians.service';

describe('LegalGuardiansController', () => {
  let controller: LegalGuardiansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegalGuardiansController],
      providers: [LegalGuardiansService],
    }).compile();

    controller = module.get<LegalGuardiansController>(LegalGuardiansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
