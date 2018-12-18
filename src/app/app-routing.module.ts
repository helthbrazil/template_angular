import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes/componentes.component';
import { SobreComponent } from './sobre/sobre.component';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { TesteComponent } from './teste/teste.component';
import { AngularDocsComponent } from './angular-docs/angular-docs.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo', component: ComponentesComponent },
  { path: 'angular_docs', component: AngularDocsComponent },
  { path: 'busca_cep', component: BuscaCepComponent },
  { path: 'teste', component: TesteComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'anotacoes', component: AnotacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
