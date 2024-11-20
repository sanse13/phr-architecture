import { Component, inject, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowLeftCircle,
  bootstrapArrowRightCircle,
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
    provideIcons({ bootstrapArrowLeftCircle, bootstrapArrowRightCircle }),
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
          { src: '1/render1.png', alt: 'Render 1' },
          { src: '1/render2.webp', alt: 'Render 2' },
          { src: '1/render3.webp', alt: 'Render 3' },
          { src: '1/render4.webp', alt: 'Render 4' },
        ];
        break;
      case '2':
        this.images = [
          { src: '2/render1.jpg', alt: 'Render 1' },
          { src: '2/render2.jpg', alt: 'Render 2' },
          { src: '2/render3.jpg', alt: 'Render 3' },
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
