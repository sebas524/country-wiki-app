import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  keyword: string = ""
  isThereAnError: boolean = false
  countries: Country[] =[]


  constructor(private countryService:CountryService){}


  search(keyword:string){
  
    this.isThereAnError = false
    this.keyword = keyword
    
    this.countryService.search4Country(this.keyword)
    .subscribe(res=>{
      console.log(res);
      //important:!!!!!
      this.countries = res
    },(error)=>{
      this.isThereAnError = true
      this.countries = []
      
    })

   
    
  }

  suggestions(keyword:string ){

    this.isThereAnError = false
     

  }

}
