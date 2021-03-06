import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit,OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    });
  }

  onClose() {
    this.closeSidenav.emit();
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.closeSidenav.emit();
    this.authService.logout();
  }
}
