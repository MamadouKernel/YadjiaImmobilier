import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsComponent } from './composants/navs/navs.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';
import { ProjectComponent } from './composants/project/project.component';
import { ServicesComponent } from './composants/services/services.component';
import { ContactsComponent } from './composants/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
