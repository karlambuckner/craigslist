import { Injectable } from '@angular/core';
import { List } from './list.model';
import { LISTS } from './mock-lists';

@Injectable()
export class ListService {

  constructor() { }

  getLists() {
     return LISTS;
   }

   getListById(listId: number){
    for (var i = 0; i <= LISTS.length - 1; i++) {
      if (LISTS[i].id === listId) {
        return LISTS[i];
      }
    }
  }
}
