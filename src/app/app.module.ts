import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommunityComponent } from './community/community.component';
import { PersonalsComponent } from './personals/personals.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { HousingComponent } from './housing/housing.component';
import { ForComponent } from './for/for.component';
import { GigsComponent } from './gigs/gigs.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { PostComponent } from './post/post.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CommunityComponent,
    PersonalsComponent,
    DiscussionComponent,
    HousingComponent,
    ForComponent,
    GigsComponent,
    JobsComponent,
    ServicesComponent,
    PostComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
