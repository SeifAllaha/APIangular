import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../moodels/Doctor';
import { DoctorService } from './../../services/doctor.service';


@Component({
  selector: 'app-dlist',
  templateUrl: './dlist.component.html',
  styleUrls: ['./dlist.component.css']
})
export class DlistComponent implements OnInit {
  doctors: Doctor ;
  Doctor: any;
  constructor(public serv: DoctorService) {
    this.doctors = new Doctor();
  }

  ngOnInit() {
    this.serv.get().subscribe((data: Doctor) => {
      this.Doctor = data;
    });
  }

  delete(id: number) {
    this.serv.delete(id).subscribe((data: Doctor) => {
      window.location.reload();
    });
  }
}

