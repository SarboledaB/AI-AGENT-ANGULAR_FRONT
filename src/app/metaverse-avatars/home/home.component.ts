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

  backToHome(){
    this.selected$.next(false);
    this.avartar$.next(undefined)
  }

  selectAvatar(avatar: string) {
    this.selected$.next(true);
    this.avartar$.next(avatar)
  }

  getInterestList(avatar: string){
    switch (avatar) {
      case 'Sebastian':
        return {
          AI_introduction: "4,4,4",
          Modern_SW_development_processes: "4,4,4",
          Projects_management: "4,4,4",
          UX_Design: "4,4,4",
          Karate: "4,4,4",
          Rest: "4,4,4",
        }
      case 'Katherin':
        return {
          AI_introduction: "4,4,4",
          Modern_SW_development_processes: "4,4,4",
          Projects_management: "4,4,4",
          UX_Design: "4,4,4",
          Karate: "4,4,4",
          Rest: "4,4,4",
        }
      case 'Anthony':
        return {
          AI_introduction: "4,4,4",
          Modern_SW_development_processes: "4,4,4",
          Projects_management: "4,4,4",
          UX_Design: "4,4,4",
          Karate: "4,4,4",
          Rest: "4,4,4",
        }
      default:
        return {
          AI_introduction: "4,4,4",
          Modern_SW_development_processes: "4,4,4",
          Projects_management: "4,4,4",
          UX_Design: "4,4,4",
          Karate: "4,4,4",
          Rest: "4,4,4",
        }
    }
  }

}
