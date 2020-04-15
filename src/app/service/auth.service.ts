import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TabletModelData} from '../data/tablet-model-data';
import {TabletDb} from '../data/tablet-db';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authKey;

  constructor(private http: HttpClient) { }

  signIn(): Boolean{
    //TODO: add in firebase auth and sign in
    return false;
  }

  signOut(): Boolean{
    //TODO: add in sign out
    return false;
  }

  updateJSON(): string{
    //TODO Get String from Firebase
    return '';
  }

  updateFirebaseJSON(): Boolean{
    //TODO Save string to Firebase
    return false;
  }
}
