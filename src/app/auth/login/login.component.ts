import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {

  constructor(private router:Router) { }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  onSubmit() {
    this.router.navigate(['/clientes']);
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

}
