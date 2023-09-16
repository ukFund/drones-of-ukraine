import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';

import { NgImageSliderModule } from 'ng-image-slider';
import { DonatePageComponent } from './components/donate-page/donate-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [AppComponent, HomePageComponent, DonatePageComponent, AboutUsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgImageSliderModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatExpansionModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
