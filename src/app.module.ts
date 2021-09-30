import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PatientsModule } from './patients/patients.module';
import { LegalGuardiansModule } from './legal-guardians/legal-guardians.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PatientsModule,
    LegalGuardiansModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
