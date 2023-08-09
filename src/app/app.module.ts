import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './shared/navebar/navebar.component';
import { HomeComponent } from './home/home.component';
import { FooderComponent } from './shared/fooder/fooder.component';
import { AddComponent } from './studnet/add/add.component';
import { ListComponent } from './studnet/list/list.component';
import{HttpClientModule}from"@angular/common/http";
import { FormsModule } from '@angular/forms';
import { EditComponent } from './studnet/edit/edit.component';
import { DeditComponent } from './doctor/dedit/dedit.component';
import { DlistComponent } from './doctor/dlist/dlist.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { ClistComponent } from './cource/clist/clist.component';
import { CaddComponent } from './cource/cadd/cadd.component';
import { CsditComponent } from './cource/csdit/csdit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    HomeComponent,
    FooderComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DeditComponent,
    DlistComponent,
    DaddComponent,
    ClistComponent,
    CaddComponent,
    CsditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
