import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventorius } from '../models/inventorius';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvetoricazijaService {
  constructor(private hhtp: HttpClient) {}

  public getAllInventorius() {
    return this.hhtp
      .get<{ [key: string]: Inventorius }>(
        environment.dbUrl + 'inventorizacija.json'
      )
      .pipe(
        map((response) => {
          let storage: Inventorius[] = [];
          for (let key in response) {
            storage.push({ ...response[key], id: key });
          }
          return storage;
        })
      );
  }
  public getInvetorius(id: string) {
    return this.hhtp
      .get<Inventorius>(environment.dbUrl + 'inventorizacija/' + id + '.json')
      .pipe(
        map((response) => {
          response.id = id;
          return response;
        })
      );
  }
  public addInvetorius(inventor: Inventorius) {
    return this.hhtp.post(environment.dbUrl + 'inventorizacija.json', inventor);
  }
  public updateInventorius(inventor: Inventorius) {
    return this.hhtp.patch(
      environment.dbUrl + 'inventorizacija/' + inventor.id + '.json',
      inventor
    );
  }
  public deleteInventor(id: string) {
    return this.hhtp.delete(
      environment.dbUrl + 'inventorizacija/' + id + '.json'
    );
  }
}
