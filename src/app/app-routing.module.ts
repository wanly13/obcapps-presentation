import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }/* , 
  {
    path: 'home',
    component:HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'examenes-laboratorio',
    component:HomeExamenesComponent,
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
