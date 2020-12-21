import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsI } from "../../interfaces/news.interface";
import { NewsServiceService } from "../../services/news-service.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) scrollControl: IonInfiniteScroll;
  numNoticasref = 2;

  noticias: NewsI[] = [];
  arrayNoticias: NewsI[] = [];

  constructor(public newsService: NewsServiceService) { }

  ngOnInit() {

    this.newsService.getNoticias<NewsI>().subscribe(res => {
      for(let news of res){
        let newNot = {
          content: news.content,
          date: news.date.toDate(),
          image: news.image,
          link: news.link,
          source: news.source,
          title: news.title 
        }
        this.arrayNoticias.push(newNot);
      }

      //Se ordena el arreglo de noticias de manera descendente en base al valor de la fecha
      this.arrayNoticias.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      })
    })
  }

  mostrarNoticias(event){
    setTimeout(() => {
      if (this.numNoticasref<this.arrayNoticias.length) {
        this.numNoticasref = this.numNoticasref+2;
        event.target.complete();
      }else{
        event.target.disabled = true;
      }
    }, 1000);
  }
}
