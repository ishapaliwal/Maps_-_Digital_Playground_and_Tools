import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MapContainerComponent } from './layout/map-container/map-container.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MapContainerComponent,
    MainLayoutComponent,
    MenubarModule,
    AvatarModule,
    InputTextModule,
    BadgeModule,
    RippleModule,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
