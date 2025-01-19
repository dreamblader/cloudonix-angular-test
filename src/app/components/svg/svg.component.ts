import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.css',
})
export class SvgComponent implements OnInit {
  link: string = '';
  @Input() type: string = '';
  @Input() size?: string;

  constructor() {}

  ngOnInit(): void {
    this.link = `/assets/svgs/${this.type}.svg#${this.type}`;
  }
}
