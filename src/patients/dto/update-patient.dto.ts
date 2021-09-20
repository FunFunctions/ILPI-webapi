import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  id?: number;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
  birthDate?: Date;
}
