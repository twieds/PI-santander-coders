import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private idOng = new BehaviorSubject('');
  _idOng = this.idOng.asObservable();

  private idDev = new BehaviorSubject('');
  _idDev = this.idDev.asObservable();

  private userType = new BehaviorSubject('');
  _userType = this.userType.asObservable();

  constructor() { }

  updateIdOng(idOng: string) {
    this.idOng.next(idOng);
  }

  updateIdDev(idDev: string) {
    this.idDev.next(idDev);
  }

  updateUserType(userType: string) {
    this.userType.next(userType);
  }
}
