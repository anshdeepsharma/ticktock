import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
		ServerModule,
		CommonModule,
		AppModuleShared,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: '1074555460564-tbq33t5is4jl38v34gf3aa84khm9mjmh.apps.googleusercontent.com'
		})
    ]
})
export class AppModule {
}
