import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles:[`
  .online{
    color: white;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverWasCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 100);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverMsgVisibility();
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  serverMsgVisibility(){
    if (this.serverName.length > 0) {
      this.serverWasCreated = true; 
    }
    else{
      this.serverWasCreated = false;
    }
  }
}
