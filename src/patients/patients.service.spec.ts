import { Test } from '@nestjs/testing';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

describe('PatientsController', () => {
  let patientsController: PatientsController;
  let patientsService: PatientsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PatientsController],
      providers: [PatientsService],
    }).compile();

    patientsService = moduleRef.get<PatientsService>(PatientsService);
    patientsController = moduleRef.get<PatientsController>(PatientsController);
  });

  const date = new Date();

  describe('findAll', () => {
    it('should create an patients and return 201', async () => {
      const result = {
        id: 1,
        firstName: 'teste',
        lastName: 'teste2',
        isActive: true,
        birthDate: date,
      };
      jest.spyOn(patientsService, 'create').mockImplementation();

      expect(await patientsController.create(result)).toBe(result);
    });
    it('should return an array of patients', async () => {
      const result = [
        {
          id: 1,
          firstName: 'teste',
          lastName: 'teste2',
          isActive: true,
          birthDate: date,
        },
      ];
      jest.spyOn(patientsService, 'findAll').mockResolvedValue(result);

      expect(await patientsController.findAll()).toBe(result);
    });
    it('should update an patient', async () => {
      const updateQuery = '1';

      const updateData = {
        firstName: 'teste3',
      };
      jest.spyOn(patientsService, 'update').mockResolvedValue(updateQuery);

      expect(await patientsController.update(updateQuery, updateData)).toBe(
        updateQuery,
      );
    });
    it('should find patient of id 1', async () => {
      const updateQuery = '1';
      const findData = {
        id: 1,
        firstName: 'teste',
        lastName: 'teste2',
        isActive: true,
        birthDate: date,
      };
      jest.spyOn(patientsService, 'findOne').mockResolvedValue(findData);

      expect(await patientsController.findOne(updateQuery)).toBe(updateQuery);
    });
    it('should delete patient of id 1', async () => {
      const updateQuery = '1';

      jest.spyOn(patientsService, 'remove').mockResolvedValue();

      expect(await patientsController.remove(updateQuery)).toBe(updateQuery);
    });
  });
});
