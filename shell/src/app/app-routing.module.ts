import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './wrappers/tic-tac-toe/tic-tac-toe.component';
import { Game2048Component } from './wrappers/game-2048/game-2048.component';
import { HolidayCalendarComponent } from './wrappers/holiday-calendar/holiday-calendar.component';
import { DevUtilitiesComponent } from './wrappers/dev-utilities/dev-utilities.component';

const routes: Routes = [
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent
  },
  {
    path: 'game-2048',
    component: Game2048Component
  },
  {
    path: 'holiday-calendar',
    component: HolidayCalendarComponent,
  },
  {
    path: 'dev-utilities',
    component: DevUtilitiesComponent,
  },
  {
    path: '**',
    redirectTo: '/tic-tac-toe'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
