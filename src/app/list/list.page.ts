import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string; url: string }> = [];
  constructor(private route: ActivatedRoute) {
   // for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'deportes',
        note: 'noticias deportivas CTS',
        icon: 'football',
        url: '/deportes'
      });
      this.items.push({
        title: 'videojuegos',
        note: 'noticias de jueguitos CTS',
        icon: 'paper-plane',
        url: './categorias/videojuegos'
      });
    //}

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
