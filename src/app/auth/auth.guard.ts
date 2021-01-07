import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

//import { AuthService } from './auth.service';
import * as fromRoot from '../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private store: Store<fromRoot.State>){}

    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot){
        return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }

    canLoad(route: Route){
        return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }

}