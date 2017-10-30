import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { List } from '../list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
  providers: [ListService]
})
export class ListDetailComponent implements OnInit {
  listId: number;
  listToDisplay: List;

  constructor(private route: ActivatedRoute, private location: Location, private listService: ListService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listId = parseInt(urlParameters['id']);
    });
    this.listToDisplay = this.listService.getListById(this.listId);
   }

}
