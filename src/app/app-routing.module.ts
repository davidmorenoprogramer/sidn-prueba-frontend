import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { InfoComponent } from './components/info/info.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
const routes: Routes = [
  {path:'register',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:CardsComponent,canActivate:[AuthGuard]},
  {path:'info/:id',component:InfoComponent,canActivate:[AuthGuard]},
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
