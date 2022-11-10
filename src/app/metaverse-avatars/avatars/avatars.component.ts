import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {
  @Input() avatar = 'sebas'

  constructor() { }

  ngOnInit(): void {
  }

}
