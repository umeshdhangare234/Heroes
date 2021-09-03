import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent  {
  details ='';
  messages = '';
  sending = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  send(){
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    },1000)
  }

  cancel(){
    this.closePopup();
  }

  closePopup(){
    this.router.navigate([{outlets:{popup:null}}]);
  }
}
