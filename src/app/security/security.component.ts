import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Security,
  SecurityListConfig,
  SecurityService
} from '../shared';

@Component({
  selector: 'security-page',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {}

  listConfig: SecurityListConfig = new SecurityListConfig();
  safetyList: Array<Security> = [];
  securitiesLoaded = false;

  ngOnInit() {
    this.securityService.query(this.listConfig)
    .subscribe(data => {
      this.safetyList = data.safetyList;
      this.securitiesLoaded = true;
    });
  }

  setListTo(type: string = '', filters: Object = {}) {
    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }

}
