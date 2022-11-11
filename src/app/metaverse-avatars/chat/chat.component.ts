import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AvatarServiceService } from '../services/avatar-service/avatar-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() subjects = {
    AI_introduction: "4,4,4",
    Modern_SW_development_processes: "4,4,4",
    Projects_management: "4,4,4",
    UX_Design: "4,4,4",
    Karate: "4,4,4",
    Rest: "4,4,4",
  }

  chatlogs: any[] = []

  inputChat: string = '';
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null;
  uploadForm: any;
  imageURL: string = '';

  constructor(private avatarServiceService: AvatarServiceService) {

   }

  ngOnInit(): void {
  }

  // Image Preview
	selectFile(event: any) {
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			console.log(reader.result);
      this.sendImage(reader.result as string)
		}
  }

  sendImage(image: string) {
    console.log(image);
    this.chatlogs.push({type: 1, message: "Image sent..."});
    this.avatarServiceService.sendImage(image).subscribe((response: any) => {
      if (response.type) {
        this.chatlogs.push({type: 2, message: response.message});
      } else {
        this.chatlogs.push({type: 2, message: "I couldn't understand your message..."});
      }
      this.inputChat = ''
    });
  }

  sendInterest(key: string): boolean{
    this.avatarServiceService.sendMessage(this.subjects[key]).subscribe((response: any) => {
      if (response.type) {
        if (typeof response.message === 'string') {
          if (this.sendInterest(response.message)) {
            this.chatlogs.push({type: 2, message: response.message});
          }

        } else {
          response.message.forEach((element : string) => {
            this.chatlogs.push({type: 2, message: element});
          });
        }
      } else {
        this.chatlogs.push({type: 2, message: "I couldn't understand your message..."});
      }
      this.inputChat = ''
    })
    return true
  }

  sendMessage(){
    this.chatlogs.push({type: 1, message: this.inputChat});
    this.avatarServiceService.sendMessage(this.inputChat).subscribe((response: any) => {
      if (response.type) {
        if (typeof response.message === 'string') {
          if (this.sendInterest(response.message)) {
            this.chatlogs.push({type: 2, message: response.message});
          }

        } else {
          response.message.forEach((element : string) => {
            this.chatlogs.push({type: 2, message: element});
          });
        }
      } else {
        this.chatlogs.push({type: 2, message: "I couldn't understand your message..."});
      }
      this.inputChat = ''
    })
  }

}
