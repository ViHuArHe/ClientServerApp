import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponentComponent } from './auth/login-component.component';
import { RegisterComponentComponent } from './auth/register-component.component';
import { HeaderComponentComponent } from './shared/header-component.component';
import { FooterComponentComponent } from './shared/footer-component.component';
import { NavigationComponentComponent } from './shared/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
