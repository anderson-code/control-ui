import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini');
  }

}
