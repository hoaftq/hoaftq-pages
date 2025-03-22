import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-2048',
  templateUrl: './game-2048.component.html',
})
export class Game2048Component implements OnInit {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    import('game-2048-remote/game-2048').then(m => {
      const element = document.createElement(m.elementName);
      element.style.height = '800px';
      this.container?.nativeElement.replaceChildren(element);
    })
  }
}
