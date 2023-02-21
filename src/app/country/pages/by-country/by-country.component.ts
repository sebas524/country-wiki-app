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
  suggestedCountries: Country[] =[]
  isSuggested:boolean=false


  constructor(private countryService:CountryService){}


  search(keyword:string){

    this.isSuggested = false

  
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
    this.isSuggested = true

    this.countryService.search4Country(keyword)
      .subscribe(countries=>
        this.suggestedCountries = countries.splice(0,5),
        (error)=> this.suggestedCountries = []

      )
     

  }

  searchTheSuggested(keyword:string){
    this.search(keyword)
    this.isSuggested = false



  }

}
