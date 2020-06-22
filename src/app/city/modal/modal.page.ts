import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  newNote = {
    author: '',
    text: ''
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss(this.newNote);
  }

  add() {
    this.close();
  }

}
