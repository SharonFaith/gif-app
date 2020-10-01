import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUrl = `${environment.gifUrl}/search`
  apiKey = `${environment.API_KEY}`
  limit = 5

  displayGif(gifValue) {
    return this.http.get(`${this.searchUrl}?api_key=${this.apiKey}&q=${gifValue}&limit=${this.limit}`)
  }

  constructor(private http: HttpClient) { }
}
