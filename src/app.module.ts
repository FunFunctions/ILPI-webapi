import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
      port: +process.env.DBMS_PORT,
      username: process.env.DBMS_USERNAME,
      password: process.env.DBMS_PASSWORD,
      database: process.env.DBMS_DATABASE,
      entities: [Patient, LegalGuardian],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    PatientsModule,
    LegalGuardiansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
