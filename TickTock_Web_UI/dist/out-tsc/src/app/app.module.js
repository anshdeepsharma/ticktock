var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Application Modules
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { HomeComponent } from './home/home.component';
import { TrackdevicesComponent } from './trackdevices/trackdevices.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { TicktockfooterComponent } from './ticktockfooter/ticktockfooter.component';
import { ServicesComponent } from './services/services.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TeamComponent } from './team/team.component';
// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            bootstrap: [AppComponent],
            declarations: [
                AppComponent,
                SecurityComponent,
                HomeComponent,
                TrackdevicesComponent,
                NavMenuComponent,
                TicktockfooterComponent,
                ServicesComponent,
                CompaniesComponent,
                ProductsComponent,
                ContactusComponent,
                AboutusComponent,
                AnnouncementsComponent,
                TopmenuComponent,
                TeamComponent
            ],
            imports: [
                BrowserModule,
                CommonModule,
                //platformBrowserDynamic,
                HttpModule,
                FormsModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: HomeComponent },
                    { path: 'app-security', component: SecurityComponent },
                    { path: 'app-devices', component: TrackdevicesComponent },
                    { path: 'app-services', component: ServicesComponent },
                    { path: 'app-companies', component: CompaniesComponent },
                    { path: 'app-products', component: ProductsComponent },
                    { path: 'app-contactus', component: ContactusComponent },
                    { path: 'app-vision', component: AboutusComponent },
                    { path: 'app-announcements', component: AnnouncementsComponent },
                    { path: 'app-team', component: TeamComponent },
                    { path: '**', redirectTo: 'home' }
                ]),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCjMxrdHckY7rDOKdr1BwVI1nE78f8dERQ'
                })
            ],
            providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map