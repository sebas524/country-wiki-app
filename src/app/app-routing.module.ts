import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const myRoutes: Routes = [{
    path:'',
    component: ByCountryComponent,
    pathMatch: 'full'
},{
    path:'region',
    component: ByRegionComponent,
},{
    path:'capital',
    component:ByCapitalComponent,
},{
    path:'country/:id',
    component: SeeCountryComponent
},{
    //! in case of wrong path, then:
    path:'**',
    redirectTo:''
}]

@NgModule({
    imports:[RouterModule.forRoot(myRoutes)],exports:[RouterModule]
})
export class AppRoutingModule{

}