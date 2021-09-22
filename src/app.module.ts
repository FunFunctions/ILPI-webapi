import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Patient } from './patients/entities/patient.entity';
import { PatientsModule } from './patients/patients.module';
import { LegalGuardiansModule } from './legal-guardians/legal-guardians.module';
import { LegalGuardian } from './legal-guardians/entities/legal-guardian.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: '123',
      database: 'ilpi',
      entities: [Patient, LegalGuardian],
      synchronize: true,
    }),
    PatientsModule,
    LegalGuardiansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
