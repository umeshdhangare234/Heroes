import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
// import { HeroListComponent } from './hero-list/hero-list.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisCenterModule } from './crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // HeroListComponent,
    // CrisisListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule,
    // CrisisCenterModule,
    // AdminModule,
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key:any, value:any) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
