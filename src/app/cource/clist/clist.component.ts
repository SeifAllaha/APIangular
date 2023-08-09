import { Component, OnInit } from '@angular/core';
import{Cource} from './../../moodels/Cource';
import { CourceService } from 'src/app/services/cource.service';

@Component({
selector: 'app-clist',
templateUrl: './clist.component.html',
styleUrls: ['./clist.component.css']
})
export class clistComponent implements OnInit {
cources: Cource ;
Cource: any;
constructor(public serv: CourceService) {
this.cources = new Cource();
}

ngOnInit() {
this.serv.get().subscribe((data:Cource) => {
this.Cource = data;
});
}

delete(id: number) {
this.serv.delete(id).subscribe((data: Cource) => {
window.location.reload();
});
}
}
