import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, TimelineComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  biography =
    'Soy un arquitecto apasionado por la creación de espacios que fusionan funcionalidad, estética y sostenibilidad. Con más de [X] años de experiencia en el diseño arquitectónico y visualización, me especializo en la transformación de ideas en impresionantes representaciones gráficas. A lo largo de mi carrera, he trabajado en diversos proyectos, desde viviendas y oficinas hasta espacios comerciales y públicos, siempre enfocándome en contar una historia a través del diseño.';

  showCard = false;

  @HostBinding('class.translate-y-0') translateY = false;
  @HostBinding('class.opacity-100') opacity = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showCard = true;
      this.translateY = true;
      this.opacity = true;
    }, 100); // Ajusta el tiempo de espera según prefieras.
  }
}
