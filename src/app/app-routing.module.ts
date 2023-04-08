import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';
import { ProjectComponent } from './composants/project/project.component';
import { ServicesComponent } from './composants/services/services.component';
import { ContactsComponent } from './composants/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
  { path: 'Accueil', component: HomeComponent },
  {path:'Apropos', component: AboutComponent},
  {path:'Projet', component: ProjectComponent},
  {path:'Services', component:ServicesComponent},
  {path:'Contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
