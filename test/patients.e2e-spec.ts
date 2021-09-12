import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { PatientsModule } from '../src/patients/patients.module';
import { PatientsService } from '../src/patients/patients.service';
import { INestApplication } from '@nestjs/common';

describe('Patients', () => {
  let app: INestApplication;
  let patientsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PatientsModule],
    })
      .overrideProvider(PatientsService)
      .useValue(patientsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET patients`, () => {
    return request(app.getHttpServer())
      .get('/patients')
      .expect(200)
      .expect(
        patientsService.findAll(),
      );
  });

  afterAll(async () => {
    await app.close();
  });
});