import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.page.html',
  styleUrls: ['./pickup-call-card.page.scss'],
})
export class PickupCallCardPage implements OnInit {

  @Input() hasFooter: boolean = false;
  @Input() hasHeader: boolean = false;
  @Input() status: string = '';
  @Input() createdAt: string = '';
  @Input() updatedAt: string = '';
  @Input() notes: string = '';
  @Input() moneyValue: string = '';

  @Output() seeAllBtnClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  seeAllPickupCalls() {
    this.seeAllBtnClicked.emit('see all btn clicked');
  }
}
