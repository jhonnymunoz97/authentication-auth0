import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PricingComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Módulo de Auth0
    AuthModule.forRoot({
      domain: 'jhonnymunoz.us.auth0.com',
      clientId: '9z87Tkkxz6fwFZxn6janQlDBdqZBoyh7'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
