import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BioExtendedComponent } from './components/bio-extended/bio-extended.component';
import { ClientsExtendedComponent } from './components/clients-extended/clients-extended.component';
import { PortfolioExtendedComponent } from './components/portfolio-extended/portfolio-extended.component';
import { SkillsExtendedComponent } from './components/skills-extended/skills-extended.component';
import { TestimonialsExtendedComponent } from './components/testimonials-extended/testimonials-extended.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: BioExtendedComponent},
  {path: 'clients', component: ClientsExtendedComponent},
  {path: 'portfolio', component: PortfolioExtendedComponent},
  {path: 'skills', component: SkillsExtendedComponent},
  {path: 'testimonials', component: TestimonialsExtendedComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
