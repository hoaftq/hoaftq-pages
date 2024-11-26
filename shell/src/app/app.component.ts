import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  onTicTacToeClick() {
    import('tic-tac-toe-game/tictactoe').then(m => {
      const elementName = m.elementName;
      const tictactoe = document.createElement(elementName);
      document.getElementById("content")?.replaceChildren(tictactoe);
    })
  }
}
