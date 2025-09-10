import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', 
        redirectTo: 'templates/template1', pathMatch: 'full'},
    { path: 'templates/:id', 
        loadComponent: () => 
            import('./templates/template-detail/template-detail').then(m => m.TemplateDetail) 
    },
    { path: 'user-modules/:id', 
        loadComponent: () => 
            import('./user/user-template-detail/user-template-detail').then(m => m.UserModuleDetail)
    },
    { path: '**', 
        redirectTo: 'templates/template1'
    }
];
