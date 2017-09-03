import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NGLibDirective } from './directive';

@NgModule({
  declarations: [
    NGLibDirective,
  ],
  exports: [
    NGLibDirective,
  ],
  imports: [
    CommonModule,
  ],
})
export class NGLibModule {}
