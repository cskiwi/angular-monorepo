// needs to be first import, it loads the polyfills
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { Module } from '@nestjs/common';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [SharedModule],
      // provide only on server
      providers: [],
    }),
  ],
})
export class AppModule {}
