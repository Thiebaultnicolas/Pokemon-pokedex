import { Injectable } from '@angular/core';
import { CanActivate,} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate()  {
    console.log('Le guard a bien été appelé ! ');
    return true;
  }
}
