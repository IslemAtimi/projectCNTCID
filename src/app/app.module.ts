import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImportantDirective } from './important.directive';
import { MockTaskService } from './mock-task.service';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskService } from './task.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PriorityPipe } from './priority.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TasksListComponent,
    ImportantDirective,
    PriorityPipe,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    {provide: TaskService, useClass: MockTaskService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
