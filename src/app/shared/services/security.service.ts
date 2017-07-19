import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Security, SecurityListConfig } from '../models';

@Injectable()
export class SecurityService {

  constructor (
    private apiService: ApiService
  ) {}

  query(config: SecurityListConfig): Observable<{safetyList: Security[], securityCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params: URLSearchParams = new URLSearchParams();

    Object.keys(config.filters)
    .forEach((key) => {
      params.set(key, config.filters[key]);
    });

    return this.apiService
    .get(
      '/securityList' + ((config.type === 'modelName') ? '/modelName' : ''),
      params
    ).map(result => result.data);
  }

  get(id): Observable<Security> {
    return this.apiService.get('/security/' + id)
           .map(result => result.data);
  }

  destroy(id) {
    return this.apiService.delete('/security/' + id);
  }

  save(security): Observable<Security> {
    // If we're updating an existing item
    if (security.Id) {
      return this.apiService.put('/security/' + security.Id, {entity: security})
             .map(result => result.data);

    // Otherwise, create a new item 
    } else {
      return this.apiService.post('/security/', {entity: security})
             .map(result => result.data);
    }
  }
   
}
