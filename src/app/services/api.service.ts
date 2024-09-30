import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHexData(colorName: string): Observable<any> {
    const params = new HttpParams().set('name', colorName);

    return this.http.get(`${this.baseUrl}/color-translate`, { params });
  }
}
