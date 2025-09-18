import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**bootstrapApplication(() => null, {
  providers: [provideRouter(routes), provideHttpClient()]
});
*/

//clarify
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  /*
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
  ]
})
.catch((err) => console.error(err));*/