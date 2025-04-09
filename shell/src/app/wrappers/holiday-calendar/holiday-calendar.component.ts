import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.scss']
})
export class HolidayCalendarComponent implements AfterViewInit {
  @ViewChild('frame') frame!: ElementRef<HTMLIFrameElement>;
  holidayCalendarUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(environment.holidayCalendarUrl);

  constructor(private domSanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    this.setFrameHeight();
    window.onresize = () => {
      this.setFrameHeight();
    };
  }

  setFrameHeight() {
    const frameElement = this.frame.nativeElement;
    frameElement.style.height = `calc(100vh - ${frameElement.offsetTop}px)`;
  }
}
