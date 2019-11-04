import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class AdvertiseService {
  constructor(
    private http: HttpClient
  ) { }

  private URL_API = "https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=CE&term=";

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

  getResponsibilities(): Observable<any> {
    return this.getApi('cargo')
  }

  getCities(): Observable<any> {
    return this.getApi('cidade')
  }

  private getApi ( term: string ): Observable<any> {
    return this.http.get<any>(`${this.URL_API}${term}`).pipe(map( (data: any) => data ))
  }
}
