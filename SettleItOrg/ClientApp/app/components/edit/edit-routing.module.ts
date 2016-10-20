import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditComponent } from './edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'edit', component: EditComponent },
      { path: 'edit/:url', component: EditComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EditRoutingModule { }
