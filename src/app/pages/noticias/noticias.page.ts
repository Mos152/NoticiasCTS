import { Component, OnInit } from '@angular/core';
import {WordpressAPIService} from '../../services/wordpress-api.service';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  posts = [];
  page = 1;
  count = null;

  constructor (private wp: WordpressAPIService, private loadingCtrl:LoadingController ,) { }

  ngOnInit() {
    this.loadPosts();
  }
  async loadPosts() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading Data...'
    });
    await loading.present();
 
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      loading.dismiss();
    });
  }
 
  loadMore(event) {
    this.page++;
 
    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();
 
      // Disable infinite loading when maximum reached
      if (this.page == this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }
}
