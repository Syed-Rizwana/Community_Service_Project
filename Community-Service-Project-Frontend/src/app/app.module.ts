import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AbourComponent } from './abour/abour.component';
import { ActsComponent } from './acts/acts.component';
import { InsComponent } from './ins/ins.component';
import { StoriesComponent } from './stories/stories.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DisplayComponent } from './display/display.component';

import { InsertComponent } from './insert/insert.component';

import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShareComponent } from './share/share.component';
import { FormComponent } from './form/form.component';
import { DvComponent } from './dv/dv.component';
import { DowryComponent } from './dowry/dowry.component';
import { ShComponent } from './sh/sh.component';
import { AcidComponent } from './acid/acid.component';
//import { FormsModule } from '@angular/forms';
import { ReadComponent } from './read/read.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';
import { OfficersComponent } from './officers/officers.component';
import { VictimsComponent } from './victims/victims.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { InstructionsComponent } from './instructions/instructions.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AbourComponent,
    ActsComponent,
    InsComponent,
    StoriesComponent,
    FeedbackComponent,
    DisplayComponent,
    InsertComponent,
   
    UpdateComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    ShareComponent,
    FormComponent,
    DvComponent,
    DowryComponent,
    ShComponent,
    AcidComponent,
    ReadComponent,
    TableComponent,
    ProfileComponent,
    OfficersComponent,
    VictimsComponent,
    ComplaintComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
