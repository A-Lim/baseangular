import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Base } from 'app/shared/components/base.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent extends Base implements OnInit, OnDestroy {
  public menuIsOpened: boolean = true;
  public isHoverOver: boolean = false;

  public appLongName: string = environment.longName;

  constructor(private renderer: Renderer2) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.updateSideMenuState();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  toggleMenu() {
    this.menuIsOpened = !this.menuIsOpened;
    this.updateSideMenuState();
  }

  onMouseEnter() {
    if (this.menuIsOpened)
      return;
    
    this.isHoverOver = true;
  }

  onMouseLeave() {
    if (this.menuIsOpened)
      return;
    this.isHoverOver = false;
  }

  updateSideMenuState() {
    if (this.menuIsOpened) {
      this.renderer.removeClass(document.body, 'menu-collapsed');
      this.renderer.addClass(document.body, 'menu-expanded');
    } else {
      this.renderer.removeClass(document.body, 'menu-expanded');
      this.renderer.addClass(document.body, 'menu-collapsed');
    }
  }
}
