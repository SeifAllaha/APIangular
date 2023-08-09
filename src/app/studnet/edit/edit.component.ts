import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './../../moodels/Studnet';
import { StudentService } from './../../services/studnet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  student = new Student();
  id: any;

  constructor(public active: ActivatedRoute, public service: StudentService , public router: Router) {
    this.id = this.active.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data: Student) => {
      this.student = data;
    });
  }

  update() {
    this.service.update(this.id, this.student).subscribe((data: Student) => {
      this.router.navigateByUrl('/studnet/list');
    });
  }
}
