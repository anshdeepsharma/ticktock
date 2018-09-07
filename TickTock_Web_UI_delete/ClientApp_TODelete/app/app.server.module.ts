import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
		AppModuleShared,
		AgmCoreModule.forRoot({
			apiKey: '1074555460564-tbq33t5is4jl38v34gf3aa84khm9mjmh.apps.googleusercontent.com'
		})
    ]
})
export class AppModule {
}
