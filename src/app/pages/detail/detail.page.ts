import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaomaoStoreService } from 'src/app/services/maomao-store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {

  productsId: string = "";
  product = null  as any; 

  constructor(
    private actRoute: ActivatedRoute,
    private maomaoSvc: MaomaoStoreService


  ) { 
    this.productsId = this.actRoute.snapshot.paramMap.get('id') as string 
    console.log(this.productsId);
  }

  ngOnInit() {
    console.log("detail.page");
    this.getProductById(this.productsId)
  }

  getProductById(id: string){
    this.maomaoSvc.getProductsById(id).subscribe({

      next: (res: any) => {

        this.product = res;
        console.log(this.product)
      },
      error: (error: any) => {

      }

    })
  }

}
