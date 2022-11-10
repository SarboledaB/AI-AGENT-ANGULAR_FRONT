import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avartar$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  selected$: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() { }

  ngOnInit(): void {
  }

  selectAvatar(avatar: string) {
    this.selected$.next(true);
    this.avartar$.next(avatar)
  }

}
