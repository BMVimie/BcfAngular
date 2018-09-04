import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-projects-page',
  templateUrl: './all-projects-page.component.html',
  styleUrls: ['./all-projects-page.component.scss']
})
export class AllProjectsPageComponent implements OnInit {

  name:String;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.name = this.route.snapshot.params['id'];
  }

}
