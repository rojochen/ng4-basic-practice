import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../service/route.service';
@Component({
  selector: 'app-basic-child-2',
  templateUrl: './basic-child-2.component.html',
  styleUrls: ['./basic-child-2.component.css']
})
export class BasicChild2Component implements OnInit {

  constructor(private route: RouteService) { }

  ngOnInit() {
  }
  goBack() {
    this.route.goBack();
  }

}
