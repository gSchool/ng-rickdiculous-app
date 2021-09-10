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
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodelistComponent,
    EpdetailsComponent,
    EpdetailscharactersComponent,
    SearchformComponent,
    ResultsComponent,
    CharacterlistComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
