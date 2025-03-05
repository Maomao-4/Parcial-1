import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent], 
  imports: [CommonModule, IonicModule, FormsModule], 
  exports: [CardComponent] 
})
export class CardModule {}