import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/auth/auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  //authSubscription: Subscription;

  constructor(private authService:AuthService, private store: Store<fromRoot.State>) { }

  /*ngOnDestroy():void{
    this.authSubscription.unsubscribe();
  }*/

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    /*this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });*/
  }

  onLogout(){
    this.authService.logout();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

}
