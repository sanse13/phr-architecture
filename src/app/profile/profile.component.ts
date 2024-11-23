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
    'Arquitecto junior apasionado por el diseño innovador y la sostenibilidad. Recién graduado en Arquitectura con especial interés en la creación de espacios funcionales y estéticamente impactantes. Durante mi formación, desarrollé habilidades en diseño conceptual, modelado 3D y software como AutoCAD, Revit y SketchUp, complementadas con conocimientos en construcción sostenible y eficiencia energética.\n' +
    '\nHe participado en proyectos académicos que integran soluciones creativas con enfoque social y ambiental, destacándome por mi atención al detalle y capacidad para trabajar en equipo. Busco oportunidades para aplicar mi creatividad y habilidades técnicas en el desarrollo de proyectos arquitectónicos que impacten positivamente en las comunidades.';

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
