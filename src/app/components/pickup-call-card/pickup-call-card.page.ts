import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
