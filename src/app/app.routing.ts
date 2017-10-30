import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommunityComponent } from './community/community.component'
import { PersonalsComponent } from './personals/personals.component'
import { DiscussionComponent } from './discussion/discussion.component'
import { HousingComponent } from './housing/housing.component'
import { ForComponent } from './for/for.component'
import { ServicesComponent } from './services/services.component'
import { JobsComponent } from './jobs/jobs.component'
import { GigsComponent } from './gigs/gigs.component'
import { PostComponent } from './post/post.component'
import { ListDetailComponent }   from './list-detail/list-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,

  },
  {
    path: 'community',
    component: CommunityComponent,
  },
  {
    path: 'personals',
    component: PersonalsComponent,
  },
  {
    path: 'discussion',
    component: DiscussionComponent,
  },
  {
    path: 'housing',
    component: HousingComponent,
  },
  {
    path: 'for',
    component: ForComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'gigs',
    component: GigsComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'list/:id',
    component: ListDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
