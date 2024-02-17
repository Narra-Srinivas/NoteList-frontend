import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NoteComponent } from './layouts/note/note.component';
import { HomeComponent } from './page/home/home.component';
import { AddNoteComponent } from './layouts/add-note/add-note.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { DateTimeComponent } from './page/date-time/date-time.component';
import { TimeBoxComponent } from './layouts/time-box/time-box.component';
import { DateYearComponent } from './layouts/date-year/date-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    HomeComponent,
    AddNoteComponent,
    LoginComponent,
    DateTimeComponent,
    TimeBoxComponent,
    DateYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
