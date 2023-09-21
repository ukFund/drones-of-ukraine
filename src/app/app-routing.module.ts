import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DonatePageComponent } from './components/donate-page/donate-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ReportsPageComponent } from './components/reports-page/reports-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about-us',
        component: AboutUsPageComponent,
    },
    {
        path: 'reports',
        component: ReportsPageComponent
    },
    {
        path: 'donate',
        component: DonatePageComponent,
    },
    {
        path: '**',
        redirectTo: '/home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
