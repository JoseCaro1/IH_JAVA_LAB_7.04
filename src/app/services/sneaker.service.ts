import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SneakerService {

  private _snakers: ISneaker[] = []

  addItem(sneaker: ISneaker) {
    this._snakers.push(sneaker);
  }

  getItems(): ISneaker[] {
      return this._snakers;
  }

  constructor() { }
}

export interface ISneaker {
    modelname: string
    price: string
    specialedition: boolean
    author: string
    creationdate: Date
    artistcollaborator: string
}