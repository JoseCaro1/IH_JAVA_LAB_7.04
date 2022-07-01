import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ISneaker, SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup

  nameModelField: FormControl
  priceField: FormControl
  specialEditionField: FormControl
  authorField: FormControl
  creationDateField: FormControl
  artistCollaboratorField: FormControl

  radioValue: string = 'no'

  constructor(
    private _sneakerService: SneakerService
  ) {
    this.nameModelField  = new FormControl('', [Validators.required])
    this.priceField = new FormControl('', [Validators.required])
    this.specialEditionField = new FormControl('', [Validators.required])
    this.authorField = new FormControl('', [Validators.required])
    this.creationDateField = new FormControl('', [Validators.required])
    this.artistCollaboratorField = new FormControl('', [])

    this.form = new FormGroup({
      modelname: this.nameModelField,
      price: this.priceField,
      specialedition: this.specialEditionField,
      author: this.authorField,
      creationdate: this.creationDateField,
      artistcollaborator: this.artistCollaboratorField
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const item: ISneaker = {
      modelname: this.nameModelField.value,
      price: this.priceField.value,
      specialedition: this.specialEditionField.value==='yes'?true:false,
      author: this.authorField.value,
      creationdate: this.creationDateField.value,
      artistcollaborator: this.artistCollaboratorField.value
    }
    console.log(item)
    this._sneakerService.addItem(item)
  }

  onRadioClick(): void {
    console.log("changes!")
    this.specialEditionField.valueChanges.subscribe(checked => {
      if(checked) {
        if(this.specialEditionField.value === 'yes') {
          console.log("value yes!")
          this.artistCollaboratorField.setValidators([Validators.required])
          console.log(this.artistCollaboratorField)
        } else {
          console.log("value no!")
          this.artistCollaboratorField.setValidators(null)
          console.log(this.artistCollaboratorField)
        }
        this.artistCollaboratorField.updateValueAndValidity()
      }
    })
  }

}

