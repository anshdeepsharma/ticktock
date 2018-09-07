import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
	selector: 'trackdevices',
	templateUrl: './trackdevices.component.html'
})

@NgModule({
	imports: [
		AgmCoreModule
	]
})
export class trackdevicesComponent {
	public currentCount = 0;
	public apiStatus = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
