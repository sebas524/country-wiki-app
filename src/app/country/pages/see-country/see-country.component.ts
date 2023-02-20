import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private countryService:CountryService
    ){}

  ngOnInit(): void {


    this.activatedRoute.params
      .pipe(switchMap(({id})=>{
      return this.countryService.getCountryById(id)
    })).subscribe(country=>{

      console.log(country);
      this.country = country[0]
      
    })
  }

}
