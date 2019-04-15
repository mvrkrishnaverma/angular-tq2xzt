import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './buttonbar.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ButtonbarComponent  {
  @Input() btnGrp: any =[];
  @Output() btnResponse: EventEmitter<any> = new EventEmitter();
  
getBtnDetails(val) {
    this.btnResponse.emit(val);
  }
add(val) {
    if (val){
    this.btnGrp.push({'title': val}) ;
    }
    this.btnGrp.title = ''
  }

}
