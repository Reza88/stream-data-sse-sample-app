import { NgZone, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
const EventSource: any = window['EventSource'];
@Injectable()
export class Sse {

    constructor(private zone: NgZone) { }

    /*
    Gives you back an observable Returns an observable that can be subscribed  
    */
    observe(sseUrl: string): Observable<any> {
        return new Observable<any>(obs => {
            const url = '//localhost:8000/streamdata';
            const es = new EventSource(sseUrl);
            es.onmessage = evt => {
                const data = evt.data;
                console.log(data);
                this.zone.run(() => obs.next(data));
            };
            //fix leaking 
            return () => es.close();
        });
    }
}
