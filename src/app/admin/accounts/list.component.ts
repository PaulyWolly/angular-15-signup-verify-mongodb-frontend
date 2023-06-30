import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { Router } from '@angular/router';
import { UserInterface } from '@app/types/user.interface';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    accounts?: any[];
    user!: UserInterface;


    constructor(
      private accountService: AccountService,
      private route: Router
    ) { }

    ngOnInit() {
      this.accountService.getAll()
        .pipe(first())
        .subscribe(accounts => this.accounts = accounts);
    }

    onDelete(id: any, firstName: string, lastName: string) {
      let userName = firstName + ' ' + lastName;
      let text = "Are you sure you want to DELETE user: " + userName + "?? \nOK or Cancel.";
      if (confirm(text) == true) {
        this.deleteAccount(id);
        this.route.navigate(['./admin/accounts']);
      } else {
        this.route.navigate(['./admin/accounts']);
      }
    }

    deleteAccount(id: string) {

      const account = this.accounts!.find(x => x.id === id);
      account.isDeleting = true;
      this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => {
            this.accounts = this.accounts!.filter(x => x.id !== id)
        });
    }
}

