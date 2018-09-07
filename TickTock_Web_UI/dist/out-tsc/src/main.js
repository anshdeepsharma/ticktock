import 'reflect-metadata';
import 'zone.js';
import 'jquery';
import 'bootstrap';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
var modulePromise = platformBrowserDynamic().bootstrapModule(AppModule).catch(function (err) { return console.log(err); });
;
//# sourceMappingURL=main.js.map