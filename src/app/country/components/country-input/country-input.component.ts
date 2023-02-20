import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = ""


  debouncer:Subject<string> = new Subject()


  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(keyword =>{

        this.onDebounce.emit(keyword)
      
    })
  }

  keyword:string="";

  search(){
    
    this.onEnter.emit(this.keyword)
  }

  myKeyPress(){

    this.debouncer.next(this.keyword)

  }

}
