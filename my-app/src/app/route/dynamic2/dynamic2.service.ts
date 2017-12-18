import { Injectable } from '@angular/core';


@Injectable()
export class Dynamic2Service {
  memberList = [{
    id: '1',
    name: 'Jason'
  }, {
    id: '2',
    name: 'Max'
  }];
  constructor() { }
  getMemberList() {
    return this.memberList;
  }
  getMemberInfo(memberId): any {
    return this.memberList.find((item) => {
      return item.id === memberId;
    });
  }
}
