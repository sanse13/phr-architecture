import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  biography =
    'Arquitecto recién graduado con muchas ganas de crecer profesionalmente y seguir aprendiendo en este campo que me apasiona. Tengo experiencia en el manejo' +
    ' de programas de modelado 3D como Rhinoceros y 3ds Max, además de Autocad y Photoshop, herramientas que me han permitido explorar y materializar ' +
    'ideas creativas en proyectos académicos y personales.\n\n' +
    'Me considero una persona proactiva, con facilidad para adaptarme a nuevos retos y aprender rápido. Disfruto trabajando en equipo y aportando soluciones prácticas ' +
    'y creativas. Estoy listo para poner en práctica mis conocimientos y sumar valor en proyectos desafiantes que impulsen mi desarrollo.';

  showCard = false;

  @HostBinding('class.translate-y-0') translateY = false;
  @HostBinding('class.opacity-100') opacity = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showCard = true;
      this.translateY = true;
      this.opacity = true;
    }, 100);
  }
}
