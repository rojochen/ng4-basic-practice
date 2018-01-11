import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-2',
  templateUrl: './pipe-demo-2.component.html',
  styleUrls: ['./pipe-demo-2.component.css']
})
export class PipeDemo2Component implements OnInit {
  movieName: string;
  searchName: string;
  movies: { title: string }[];
  constructor() {
    this.movieName = '';
  }
  addMovie(title: string) {
    this.movies.push({ title });
  }
  ngOnInit() {

    this.movies = [
      { title: '星際叛將：歐西里斯之子' },
      { title: '與神同行' },
      { title: 'JOJO的奇妙冒險：不滅鑽石' },
      { title: '幸福路上' }
    ];
  }
}
