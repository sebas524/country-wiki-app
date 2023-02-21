import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private apiUrl: string = 'https://restcountries.com/v3.1'



  constructor(private http:HttpClient) { }

  search4Country(keyword:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${keyword}`
    return this.http.get<Country[]>(url);

  }

  search4Capital(keyword:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${keyword}`
    return this.http.get<Country[]>(url);
  }

  getCountryById(keyword:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${keyword}`
    return this.http.get<Country[]>(url);

  }

  getCountryByRegion(keyword:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${keyword}`
    return this.http.get<Country[]>(url);

  }


  

}
