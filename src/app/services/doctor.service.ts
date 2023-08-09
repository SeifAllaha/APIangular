import { Injectable } from '@angular/core';
import { SharedserviceService } from './sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../moodels/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService  extends SharedserviceService<Doctor>{

  constructor(public override http : HttpClient) {
    super(http, "http://localhost:3000/doctor");
   }
}
