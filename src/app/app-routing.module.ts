import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuruganParentComponent } from './output/murugan-parent/murugan-parent.component';

const routes: Routes = [
  { path: 'output', component: MuruganParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
