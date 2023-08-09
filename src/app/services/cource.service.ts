import { Injectable } from '@angular/core';
import { SharedserviceService } from './sharedservice.service';
import { cource } from '../moodels/Cource';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourceService extends SharedserviceService <cource> {

  constructor(public override http : HttpClient){
  super( http , " http://localhost:3000/cource");
}
}
