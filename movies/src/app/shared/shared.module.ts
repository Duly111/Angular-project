import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
  imports: [CommonModule],
  exports:[EmailDirective,SlicePipe,ElapsedTimePipe]
})
export class SharedModule {}
