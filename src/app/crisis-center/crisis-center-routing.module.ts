import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const routes: Routes = [
  {path:'', 
  component:CrisisCenterComponent,
  children: [
    {path:'',
    component:CrisisListComponent,
    children:[  {path:':id',
                component:CrisisDetailComponent,
                canDeactivate:[CanDeactivateGuard]  
                },
                {path:'',
                component:CrisisCenterHomeComponent
                }
  
    ]
  }
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
