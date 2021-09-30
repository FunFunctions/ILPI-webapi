import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LegalGuardian } from 'src/legal-guardians/entities/legal-guardian.entity';
import { Patient } from 'src/patients/entities/patient.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: +process.env.DBMS_PORT,
  username: process.env.DBMS_USERNAME,
  password: process.env.DBMS_PASSWORD,
  database: process.env.DBMS_DATABASE,
  entities: [Patient, LegalGuardian],
  synchronize: true,
};
