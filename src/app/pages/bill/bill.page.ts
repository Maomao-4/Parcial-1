import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
  standalone: false,
})
export class BillPage implements OnInit {
  personalData: any = {};

  constructor(
    private carritoSvc: CarritoService,
    private personalDataSvc: PersonalDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personalData = this.personalDataSvc.getPersonalData();
    console.log(this.personalData);
  }

  onClick() {
    this.carritoSvc.clearCart();
    this.personalDataSvc.clearPersonalData();
    this.router.navigate(['/home']);
  }
}
