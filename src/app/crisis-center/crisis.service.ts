import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { CRISES } from '../mock-crisis';
import {  BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor() { }

  getCrises(){
   return(this.crises$);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises:any[]) => crises.find((crisis:any) => crisis.id === +id)!)
    );
  }

  
}
