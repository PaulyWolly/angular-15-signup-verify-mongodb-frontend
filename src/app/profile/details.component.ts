import { Component } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {

    constructor(private accountService: AccountService) { }

    account = this.accountService.accountValue;

}
