import { Component, OnInit } from '@angular/core';
import {WordpressAPIService} from '../../services/wordpress-api.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  post: any;
  constructor(private route: ActivatedRoute, private wp: WordpressAPIService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
    });
  }
  openOriginal() {
    // Add InAppBrowser for app if want
    window.open(this.post.link, '_blank');
  }

}
