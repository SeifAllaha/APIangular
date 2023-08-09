import { Component, OnInit } from '@angular/core';
import { Student } from './../../moodels/Studnet';
import { StudentService } from './../../services/studnet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student;
  Student: any;
  constructor(public serv: StudentService) {
    this.students = new Student();
  }

  ngOnInit() {
    this.serv.get().subscribe((data: Student) => {
      this.Student = data;
    });
  }

  delete(id: number) {
    this.serv.delete(id).subscribe((data: Student) => {
      window.location.reload();
    });
  }
}
