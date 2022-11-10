import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvatarServiceService {

  constructor(
    protected http: HttpClient
  ) { }

  sendMessage(message: string) {
    return this.http.post('http://localhost:5000/', message);
  }
}
