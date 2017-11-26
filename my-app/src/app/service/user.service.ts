import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  memberList = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' }
  ];
  constructor() { }
  getMemberList() {
    return this.memberList;
  }
  addMember(str: string) {
    this.memberList.push({ name: str });
  }
}
