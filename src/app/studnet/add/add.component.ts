import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/moodels/Studnet";

import { StudentService } from './../../services/studnet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

studnet = new Student ();
Name: any;


  constructor(public serv : StudentService) { }


  post(){
    this.serv.post(this.studnet).subscribe( (data : Student)=>{
      window.location.reload()
    } );;
  }
  }


