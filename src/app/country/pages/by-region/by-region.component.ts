import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {


  regions :string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  activeRegion: string = ""
  isThereAnError: boolean = false


  countries: Country[]=[]


  constructor(private countryService:CountryService){}

  regionActivator(region: string){

    if(region === this.activeRegion ){return}

    this.activeRegion = region
    this.countries=[]
    this.countryService.getCountryByRegion(this.activeRegion).subscribe(res=>{
      console.log(res);
      //important:!!!!!
      this.countries = res
    },(error)=>{
      this.countries = []
      
    })


  }

}
