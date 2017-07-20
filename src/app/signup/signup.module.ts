import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { UsuarioService } from '../shared/services/usuario.service'

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule
  ],
  declarations: [SignupComponent],
  providers: [UsuarioService]
})
export class SignupModule { }
