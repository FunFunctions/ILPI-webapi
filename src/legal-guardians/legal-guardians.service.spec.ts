import { Test, TestingModule } from '@nestjs/testing';
import { LegalGuardiansService } from './legal-guardians.service';

describe('LegalGuardiansService', () => {
  let service: LegalGuardiansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegalGuardiansService],
    }).compile();

    service = module.get<LegalGuardiansService>(LegalGuardiansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
