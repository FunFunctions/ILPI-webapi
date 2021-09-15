import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    this.patientsRepository.insert(createPatientDto);
  }

  async findAll() {
    const patients = await this.patientsRepository.find();
    return patients;
  }

  async findOne(id: number) {
    const patients = await this.patientsRepository.findOne(id);
    return patients;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: number) {
    await this.patientsRepository.delete(id);
  }
}
