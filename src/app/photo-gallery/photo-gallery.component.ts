import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapChevronLeft,
  bootstrapChevronRight,
  bootstrapFullscreen,
  bootstrapFullscreenExit,
  bootstrapHouseDoor,
} from '@ng-icons/bootstrap-icons';
import { initFlowbite } from 'flowbite';
import { BackButtonComponent } from '../back-button/back-button.component';

interface Image {
  src: string;
  alt: string;
}

export enum ResizeImage {
  maximize = 'maximize',
  minimize = 'minimize',
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [NgOptimizedImage, NgIcon, RouterLink, BackButtonComponent],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  viewProviders: [
    NgOptimizedImage,
    provideIcons({
      bootstrapChevronLeft,
      bootstrapChevronRight,
      bootstrapHouseDoor,
      bootstrapFullscreen,
      bootstrapFullscreenExit,
    }),
  ],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() id!: string;
  images: Image[] = [];
  currentImage!: Image;
  animationClass = '';

  currentIndex: number = 0;

  onResizeImage: ResizeImage = ResizeImage.minimize;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(): void {
    if (this.onResizeImage === ResizeImage.maximize) {
      this.onResizeImage = ResizeImage.minimize;
      this.animationClass = '';
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.previousImage();
    }
  }

  ngOnInit(): void {
    this.buildImages();
    initFlowbite();

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
    this.animationClass = '';

    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;

      this.currentImage = this.images[this.currentIndex];

      this.animationClass = 'animate-slideInLeft';
    }, 100);
  }

  nextImage() {
    this.animationClass = '';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];

      this.animationClass = 'animate-slideInRight';
    }, 100);
  }

  goToImage(index: number) {
    this.animationClass = '';

    setTimeout(() => {
      this.currentIndex = index;
      this.currentImage = this.images[this.currentIndex];
      this.animationClass = 'animate-slideInRight';
    }, 50);
  }

  toggleResizeImage(): void {
    this.animationClass = '';
    if (this.onResizeImage === ResizeImage.minimize) {
      this.onResizeImage = ResizeImage.maximize;
    } else {
      this.onResizeImage = ResizeImage.minimize;
    }
  }

  protected readonly bootstrapHouseDoor = bootstrapHouseDoor;
  protected readonly ResizeImage = ResizeImage;
}
