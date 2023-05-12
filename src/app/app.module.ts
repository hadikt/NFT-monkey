import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { HeadingComponent } from './heading/heading.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { CategoriesComponent } from './categories/categories.component';
import { SellingComponent } from './selling/selling.component';
import { NftsComponent } from './nfts/nfts.component';
import { CreatorsComponent } from './creators/creators.component';
import { JoinComponent } from './join/join.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    HeadingComponent,
    MonkeyComponent,
    CategoriesComponent,
    SellingComponent,
    NftsComponent,
    CreatorsComponent,
    JoinComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
