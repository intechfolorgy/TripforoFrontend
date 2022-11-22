import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatMenuTrigger } from '@angular/material/menu';

@UntilDestroy()
@Component({
  selector: 'app-sidebar-panel',
  templateUrl: './sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.scss']
})
export class SidebarPanelComponent {

  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  showProfile: boolean = false;
  isSidebarShow: boolean = true;
  constructor(private observer: BreakpointObserver, private router: Router) {

  }

  sidebar() {
    this.isSidebarShow = !this.isSidebarShow;
  };

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  // user profile toggle
  openUserMenu() {
    this.trigger.openMenu();
  }
  closeUserMenu() {
    this.trigger.closeMenu();
  }

  ngOnInit(): void {

  }
  userProfile() {
    this.showProfile = !this.showProfile
  };

}


