import { Component, OnInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private ren: Renderer2,
    private router: Router) { }

  ngOnInit() {
  }

}
