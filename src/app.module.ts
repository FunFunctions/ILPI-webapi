import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Patient } from './patients/entities/patient.entity';
import { PatientsModule } from './patients/patients.module';
import { LegalGuardiansModule } from './legal-guardians/legal-guardians.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'ilpi',
      entities: [Patient],
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
