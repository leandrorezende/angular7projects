import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaService } from './shared';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

@NgModule({
  declarations: [JogoDaVelhaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
