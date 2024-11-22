import { Component, inject, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowLeftCircle,
  bootstrapArrowRightCircle,
  bootstrapChevronLeft,
  bootstrapChevronRight,
} from '@ng-icons/bootstrap-icons';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [NgOptimizedImage, NgIcon],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  viewProviders: [
    NgOptimizedImage,
    provideIcons({ bootstrapChevronLeft, bootstrapChevronRight }),
  ],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() id!: string;
  images: Image[] = [];
  currentImage!: Image;

  currentIndex: number = 0;
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.buildImages();

    this.currentImage = this.images[this.currentIndex];
  }

  buildImages(): void {
    switch (this.id) {
      case '1':
        this.images = [
          { src: '1/1.jpg', alt: 'Render 1' },
          { src: '1/2.jpg', alt: 'Render 2' },
          { src: '1/3.jpg', alt: 'Render 3' },
          { src: '1/4.jpg', alt: 'Render 4' },
          { src: '1/5.jpg', alt: 'Render 5' },
          { src: '1/7.jpg', alt: 'Render 7' },
        ];
        break;
      case '2':
        this.images = [
          { src: '2/1.jpg', alt: 'Render 1' },
          { src: '2/2.jpg', alt: 'Render 2' },
          { src: '2/3.jpg', alt: 'Render 3' },
        ];
        break;
      case '3':
        this.images = [
          { src: '3/1.jpg', alt: 'Render 1' },
          { src: '3/2.jpg', alt: 'Render 2' },
          { src: '3/3.jpg', alt: 'Render 3' },
          { src: '3/4.jpg', alt: 'Render 4' },
          { src: '3/5.jpg', alt: 'Render 5' },
          { src: '3/6.jpg', alt: 'Render 6' },
        ];
        break;
      case '4':
        this.images = [
          { src: '4/1.jpg', alt: 'Render 1' },
          { src: '4/2.jpg', alt: 'Render 2' },
          { src: '4/3.jpg', alt: 'Render 3' },
        ];
        break;
      case '5':
        this.images = [
          { src: '5/1.jpg', alt: 'Render 1' },
          { src: '5/2.jpg', alt: 'Render 2' },
        ];
        break;
      default:
        this.images = [];
        break;
    }
  }

  previousImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  nextImage() {
    if (this.currentIndex === this.images.length - 1) {
      void this.router.navigateByUrl('/');
    }
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
}
