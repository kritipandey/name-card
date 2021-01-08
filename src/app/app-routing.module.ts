import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {path: '', redirectTo:'tab1', pathMatch: 'full'},
  {path: 'tab1', component: DataFormComponent},
  {path: 'tab2', component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
