//
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ArticulosComponent,
    ArticulosFamiliasComponent,
    ModalDialogComponent,
    InsumosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulos', component: ArticulosComponent },
     // { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'empresas', component: InsumosComponent },
    ]),
    NgbPaginationModule,
    NgbModalModule,
  ],
  
  providers: [
     {provide: APP_BASE_HREF, useValue : '/' },
      export app.module,
  ],
    
  
