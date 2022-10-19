import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiPath = environment.URL;
  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get(this.apiPath + '/api/WeatherForcast/GetWeatherForecast');
  }
}
