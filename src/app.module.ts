import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { LegalGuardiansModule } from './legal-guardians/legal-guardians.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [PatientsModule, LegalGuardiansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
