import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NfeedsService} from '../nfeedservice/nfeeds.service';
import {of} from "rxjs";

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
