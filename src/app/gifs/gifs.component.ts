import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TrendingService } from '../trending.service'
import { environment } from '../../environments/environment';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs;

  searchWords = {
    value: ''
  }
  //searchValue = this.searchWords.value;
  

  showGif(searchValue) {
    console.log(searchValue)
    
    if(searchValue !== '') {
      this.searchService.displayGif(searchValue).subscribe((response:any) => {
        const gifArray = this.gifImages(response['data']);
        this.gifs = gifArray
      })
    }
    
    
  }

  

  constructor(private http: HttpClient, private trendingService: TrendingService, private searchService: SearchService) { }

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
    this.trendingService.getTrending().subscribe(response =>{
      const gifArray = this.gifImages(response['data']);
      this.gifs = gifArray
    })
  }

  ngOnInit() {
    this.gifContent()

  }

}
