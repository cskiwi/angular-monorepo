import { provideHttpClient, withFetch } from '@angular/common/http';
import { renderPage } from '@nitedani/vite-plugin-angular/client';
import { SharedModule } from '../shared.module';
import { AppComponent } from './app.component';

renderPage({
  page: AppComponent,
  imports: [SharedModule],
  providers: [provideHttpClient(withFetch())],
});
