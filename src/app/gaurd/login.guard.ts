import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
  RoutesRecognized,
  Router,
  NavigationEnd,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  page;
  constructor(private router: Router, private route: ActivatedRoute) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return new Promise((resolve, rejects) => {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.route.root.firstChild.snapshot.data['role'])
        )
        .subscribe((data) => {
          const da = data === 'admin' ? true : false;
          resolve(da);
        });
    });
  }
}
