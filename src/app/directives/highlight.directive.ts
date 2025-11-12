import { Directive, ElementRef, Input, Renderer2,OnInit } from '@angular/core';
import { Product } from '../product';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input("appHighlight") product: Product;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(){

  }

}
