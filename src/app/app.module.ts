import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppRoutes } from './app.routet';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { HomeMenuComponent } from './home/components/home-menu/home-menu.component';
import { HomeFooterComponent } from './home/components/home-footer/home-footer.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { SostenibilidadComponent } from './sostenibilidad/sostenibilidad.component';
//import { LoadingComponent } from './commons/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeMenuComponent,
    HomeFooterComponent,
    BienvenidoComponent,
    SostenibilidadComponent,
    //LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,    
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
