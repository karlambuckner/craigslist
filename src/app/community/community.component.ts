import { Component, OnInit } from '@angular/core';
import { List } from '../list.model';
import { Router } from '@angular/router';
import { ListService } from '../list.service';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [ListService]
})
export class CommunityComponent implements OnInit {
  lists: List[];

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    this.lists = this.listService.getLists(); 
  }

  goToDetailPage(clickedList: List) {
    this.router.navigate(['lists', clickedList.id]);
  };
}
