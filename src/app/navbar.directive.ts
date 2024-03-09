import { Directive, ElementRef, HostDecorator, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective  {

  constructor(private er:ElementRef,rn:Renderer2)
   {
      
   }

}
