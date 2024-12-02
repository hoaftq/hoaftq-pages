import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
})
export class TicTacToeComponent implements OnInit{

  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    import('game-tic-tac-toe-remote/tictactoe').then(m => {
      const element = document.createElement(m.elementName);
      this.container?.nativeElement.replaceChildren(element);
    })
  }
}
