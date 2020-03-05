import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
