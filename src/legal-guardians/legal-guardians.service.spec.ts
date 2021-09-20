import { Test } from '@nestjs/testing';
import { LegalGuardiansController } from './legal-guardians.controller';
import { LegalGuardiansService } from './legal-guardians.service';

describe('LegalGuardiansController', () => {
  let legalGuardiansController: LegalGuardiansController;
  let legalGuardiansService: LegalGuardiansService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LegalGuardiansController],
      providers: [LegalGuardiansService],
    }).compile();

    legalGuardiansService = moduleRef.get<LegalGuardiansService>(
      LegalGuardiansService,
    );
    legalGuardiansController = moduleRef.get<LegalGuardiansController>(
      LegalGuardiansController,
    );
  });

  const date = new Date();

  describe('findAll', () => {
    it('should create an legalGuardians and return 201', async () => {
      const result = {
        id: 1,
        firstName: 'teste',
        lastName: 'teste2',
        isActive: true,
        birthDate: date,
      };
      jest.spyOn(legalGuardiansService, 'create').mockImplementation();

      expect(await legalGuardiansController.create(result)).toBe(result);
    });
    it('should return an array of legalGuardians', async () => {
      const result = [
        {
          id: 1,
          firstName: 'teste',
          lastName: 'teste2',
          isActive: true,
          birthDate: date,
        },
      ];
      jest.spyOn(legalGuardiansService, 'findAll').mockResolvedValue(result);

      expect(await legalGuardiansController.findAll()).toBe(result);
    });
    it('should update an legalGuardian', async () => {
      const updateQuery = '1';

      const updateData = {
        firstName: 'teste3',
      };
      jest
        .spyOn(legalGuardiansService, 'update')
        .mockResolvedValue(updateQuery);

      expect(
        await legalGuardiansController.update(updateQuery, updateData),
      ).toBe(updateQuery);
    });
    it('should find legalGuardian of id 1', async () => {
      const updateQuery = '1';
      const findData = {
        id: 1,
        firstName: 'teste',
        lastName: 'teste2',
        isActive: true,
        birthDate: date,
      };
      jest.spyOn(legalGuardiansService, 'findOne').mockResolvedValue(findData);

      expect(await legalGuardiansController.findOne(updateQuery)).toBe(
        updateQuery,
      );
    });
    it('should delete legalGuardian of id 1', async () => {
      const updateQuery = '1';

      jest.spyOn(legalGuardiansService, 'remove').mockResolvedValue();

      expect(await legalGuardiansController.remove(updateQuery)).toBe(
        updateQuery,
      );
    });
  });
});
