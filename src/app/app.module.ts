import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './home/home.component';
import { EpisodelistComponent } from './episodelist/episodelist.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EpdetailsComponent } from './epdetails/epdetails.component';
import { EpdetailscharactersComponent } from './epdetailscharacters/epdetailscharacters.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodelistComponent,
    EpdetailsComponent,
    EpdetailscharactersComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
