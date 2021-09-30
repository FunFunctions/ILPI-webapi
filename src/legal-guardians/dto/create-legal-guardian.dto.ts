import { IsDateString, IsString } from 'class-validator';

export class CreateLegalGuardianDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDateString()
  birthDate: Date;
}
