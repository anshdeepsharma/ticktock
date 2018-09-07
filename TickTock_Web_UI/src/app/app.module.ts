import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
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

declare var $: any;
declare var jQuery: any;

// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.


@NgModule({
 
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
          { path: 'app-trackdevices', component: TrackdevicesComponent },

            { path: '**', redirectTo: 'home' }
        ]),
AgmCoreModule.forRoot({
  apiKey: 'AIzaSyAyJlqYQxONEk2lvrCLJnaEkqtGPdCvSUw'
		})
  ],

  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }, GoogleMapsAPIWrapper]
 
})
export class AppModule { }

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}




