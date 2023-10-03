import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommentsComponent } from './pages/comments/comments.component';

import { EmpresasComponent } from './pages/empresas/empresas.component';
import { NuestrosServiciosComponent } from './pages/nuestros-servicios/nuestros-servicios.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutUsComponent,
    CommentsComponent,
    
    EmpresasComponent,
         NuestrosServiciosComponent,
         FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
