import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; //PARA LAS RUTAS PARA PODER CAMBIAR LOS COMPONENTES DE FORMA DINAMICA
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms' //PARA EL FORMULARIO REACTIVO
import { HttpClientModule } from '@angular/common/http';

//CREAR LAS RUTAS DE LOS COMPONENTES DINAMICOS
const router: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //IMPORTAR PARA CONECTAR CON BACKEND
    ReactiveFormsModule, //IMPORTAR EL MODULO DE FORMULARIOS
    RouterModule.forRoot(router, {useHash: true})  //IMPORTAR EL MODULO DE RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
