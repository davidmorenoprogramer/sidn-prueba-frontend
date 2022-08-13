import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path:'home',component:CardsComponent},
  {path:'info/:id',component:InfoComponent},
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
