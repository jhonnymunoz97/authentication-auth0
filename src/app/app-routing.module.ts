import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'pricing', component: PricingComponent },
  { path:'protegida', component: ProtegidaComponent, canActivate: [ AuthGuard ] },
  { path:'**', pathMatch: 'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
