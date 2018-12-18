import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { OpenPanelComponent } from './open-panel/open-panel.component';
import { ButtonComponent } from './button/button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { Page1Component } from './tabs/pages/page1/page1.component';
import { Page2Component } from './tabs/pages/page2/page2.component';
import { Page3Component } from './tabs/pages/page3/page3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent, BottomSheetOverviewExampleSheet } from './menu/menu.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { SobreComponent } from './sobre/sobre.component';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { TextMaskModule } from 'angular2-text-mask';

/* HTTP */
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './teste/teste.component';
import { AngularDocsComponent } from './angular-docs/angular-docs.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';


/* TRANSLATE */
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';
import { AnotacaoItemComponent } from './anotacao-item/anotacao-item.component';
import { DialogNoteComponent } from './dialogs/dialog-note/dialog-note.component';
import { ConfirmacaoDialogComponent } from './dialogs/confirmacao-dialog/confirmacao-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CardsComponent,
    OpenPanelComponent,
    ButtonComponent,
    ProgressBarComponent,
    Page1Component,
    Page2Component,
    BottomSheetOverviewExampleSheet,
    Page3Component,
    MenuComponent,
    ComponentesComponent,
    SobreComponent,
    BuscaCepComponent,
    TesteComponent,
    AngularDocsComponent,
    BottomSheetComponent,
    LoadingScreenComponent,
    AnotacoesComponent,
    AnotacaoItemComponent,
    DialogNoteComponent,
    ConfirmacaoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    MaterialModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  entryComponents: [BottomSheetOverviewExampleSheet,
    DialogNoteComponent, ConfirmacaoDialogComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent, DialogNoteComponent, ConfirmacaoDialogComponent]
})
export class AppModule { }
