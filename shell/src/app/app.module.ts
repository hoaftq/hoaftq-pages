import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './wrappers/tic-tac-toe/tic-tac-toe.component';
import { Game2048Component } from './wrappers/game-2048/game-2048.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    Game2048Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
