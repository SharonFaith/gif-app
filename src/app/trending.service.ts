import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  getTrending() {
    return this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=PWVU2kUYV18ckDvJrsUFWf27iPELR1Lw&limit=30&rating=g")
  }
}
