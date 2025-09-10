import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'templates/:id', 
        loadComponent: () => 
            import('./templates/template-detail/template-detail').then(m => m.TemplateDetail) 
    },
    { path: 'user-modules/:id', 
        loadComponent: () => 
            import('./user/user-module-detail/user-module-detail').then(m => m.UserModuleDetail)
    },
    { path: '**', 
        redirectTo: 'templates/template1'
    }
];
