import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  {path: '', redirectTo:'create', pathMatch: 'full'},
  {path: 'create', component: CreateCardComponent},
  {path: 'all-cards', component: AllCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }