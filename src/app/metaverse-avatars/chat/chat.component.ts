import { Component, OnInit } from '@angular/core';
import { AvatarServiceService } from '../services/avatar-service/avatar-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  chatlogs = [
    'Hola avatar',
    'Hola humano'
  ]

  inputChat: string = '';

  constructor(private avatarServiceService: AvatarServiceService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.chatlogs.push(this.inputChat);
    this.avatarServiceService.sendMessage(this.inputChat).subscribe((response: any) => {
      if (response.type) {
        this.chatlogs.push(response.message);
      } else {
        this.chatlogs.push("I couldn't understand your message...");
      }
      this.inputChat = ''
    })
  }

}
