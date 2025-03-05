import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { HeaderModule } from '../../component/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/component/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    HeaderModule,
    SharedModule,
  ],
  declarations: [DetailPage],
})
export class DetailPageModule {}
