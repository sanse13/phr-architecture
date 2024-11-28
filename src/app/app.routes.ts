import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: ProfileComponent,
  },
  {
    path: 'gallery/:id',
    component: PhotoGalleryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
