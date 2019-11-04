import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { City } from './interfaces/city';
import { Responsibility } from './interfaces/responsibility';

@Injectable()
export class AdvertiseService {
  constructor(
    private http: HttpClient
  ) {
  }

  private URL_API = "https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=";

  getResponsibilities(): Observable<Array<Responsibility>> {
    return this.getApi('C', 'cargo')
  }

  getCities(): Observable<Array<City>> {
    return this.getApi('CE', 'cidade')
  }

  getSlides(): Array<any> {
    return [
      {
        image: "assets/slider/1.jpg"
      },
      {
        image: "assets/slider/2.jpg"
      },
      {
        image: "assets/slider/3.jpg"
      }
    ];
  }

  private getApi ( type: string, term: string ): Observable<Array<City|Responsibility>> {
    return this.http.get<any>(`${this.URL_API}${type}&term=${term}`).pipe(map( (data: Array<City|Responsibility>) => data ))
  }
}
