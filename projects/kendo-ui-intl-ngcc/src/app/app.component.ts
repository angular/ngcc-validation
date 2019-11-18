import { Component, LOCALE_ID, Inject } from '@angular/core';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public number = 42.123;
    public date = new Date();

    constructor(@Inject(LOCALE_ID) public localeId: string, public intlService: IntlService) {
    }

    public onLocaleChange(locale: string): void {
        this.localeId = locale;
        (<CldrIntlService>this.intlService).localeId = locale;
    }
}
