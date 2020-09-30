import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs;

  constructor(private http: HttpClient) { }

  gifImages(response) {
    let imageArray = []
    response.forEach(element => {
      imageArray.push({
        title: element.title,
        image: element.images.original.url,
      })
    });

    return imageArray
  }

  gifContent() {
    this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=PWVU2kUYV18ckDvJrsUFWf27iPELR1Lw&limit=30&rating=g").subscribe(response =>{
      const gifArray = response['data'] && this.gifImages(response['data']);
      this.gifs = gifArray
    })
  }

  ngOnInit() {
    this.gifContent()

  }

}
