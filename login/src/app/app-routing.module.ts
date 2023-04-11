import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './Entidades/padre/padre.component';

const routes: Routes = [
  {path:'padre', component:PadreComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
