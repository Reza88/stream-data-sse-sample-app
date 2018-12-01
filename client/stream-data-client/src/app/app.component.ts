import { Component, NgZone } from '@angular/core';
import { Sse} from './sse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Sse]
})
export class AppComponent {
  btcdata:string = '';

  constructor(sse:Sse){
    sse.observe('//localhost:8000/streamdata').subscribe(data=>this.btcdata=data);
    }; 
  }



