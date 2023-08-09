import { Component } from '@angular/core';
import { Doctor } from './../../moodels/Doctor';
import { DoctorService } from './../../services/doctor.service';

@Component({
  selector: 'app-dadd',
  templateUrl: './dadd.component.html',
  styleUrls: ['./dadd.component.css']
})
export class DaddComponent {
  doctor: Doctor = new Doctor();

  constructor(public serv: DoctorService) { }

  post() {
    this.serv.post(this.doctor).subscribe((data: Doctor) => {
      window.location.reload();
    });
  }
}
