import { Component, OnInit } from '@angular/core';
import { ISneaker, SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  sneakerList: ISneaker[] = []

  constructor(
    private _sneakerService: SneakerService
  ) { }

  ngOnInit(): void {
    this.getSneakers()
  }

  getSneakers(): void {
    this.sneakerList = this._sneakerService.getItems()
  }

}
