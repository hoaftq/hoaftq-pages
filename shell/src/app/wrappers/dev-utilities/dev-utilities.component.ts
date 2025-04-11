import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dev-utilities',
  templateUrl: './dev-utilities.component.html',
})
export class DevUtilitiesComponent {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    import('dev-utilities-remote/dev-utilities').then(m => {
      const element = document.createElement(m.elementName);
      this.container?.nativeElement.replaceChildren(element);
    });
  }
}
