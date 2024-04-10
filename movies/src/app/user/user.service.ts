import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/users';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
   this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('http://localhost:3030/users/login', {
        email,
        password,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<UserForAuth>('http://localhost:3030/users/register', {
        username,
        email,
        tel,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post('http://localhost:3030/users/logout',{}).pipe(tap(() => this.user$$.next(undefined)))
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
