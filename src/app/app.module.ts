import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    EditarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
