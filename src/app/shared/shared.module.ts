import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../component/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { MaomaoStoreService } from '../services/maomao-store.service';
import { CardModule } from '../component/card/card.module';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { ItemModule } from '../component/item/item.component.module';
import { PersonalDataService } from '../services/personal-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule,
    CardModule,
    RouterModule,
    ItemModule
  ],

  exports: [
    CommonModule,
    HeaderModule,
    CardModule,
    RouterModule,
    ItemModule
  ],
  providers: [MaomaoStoreService, CarritoService, PersonalDataService]
})
export class SharedModule { }
