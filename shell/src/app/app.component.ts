import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  onTicTacToeClick() {
    import('game-tic-tac-toe-remote/tictactoe').then(m => {
      const elementName = m.elementName;
      const tictactoe = document.createElement(elementName);
      document.getElementById("content")?.replaceChildren(tictactoe);
    });
  }

  on2048GameClick() {
    import('game-2048-remote/game-2048').then(m => {
      const elementName = m.elementName;
      const game2048 = document.createElement(elementName);
      game2048.style.height = '920px';
      document.getElementById("content")?.replaceChildren(game2048);
    })
  }
}
