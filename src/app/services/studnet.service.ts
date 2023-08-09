import { Injectable } from '@angular/core';
import { SharedserviceService } from './sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../moodels/Studnet';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends SharedserviceService<Student> {
  constructor(public override http: HttpClient) {
    super(http, "http://localhost:3000/studnent");
  }
}
