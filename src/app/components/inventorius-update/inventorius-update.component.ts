import { Component, OnInit } from '@angular/core';
import { InvetoricazijaService } from '../../services/invetoricazija.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventorius } from '../../models/inventorius';

@Component({
  selector: 'app-inventorius-update',
  templateUrl: './inventorius-update.component.html',
  styleUrls: ['./inventorius-update.component.css'],
})
export class InventoriusUpdateComponent implements OnInit {
  public name: string = '';
  public inNumber: number = 0;
  public price: number = 0;
  public date: Date = new Date();
  public id: string;
  constructor(
    private inventorService: InvetoricazijaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inventorService.getInvetorius(this.id).subscribe((resp) => {
      this.name = resp.name;
      this.inNumber = resp.inNumber;
      this.price = resp.price;
      this.date = resp.date;
    });
  }
  public updateInventor() {
    let newItem = new Inventorius(
      this.inNumber,
      this.name,
      this.price,
      this.date,
      this.id
    );
    this.inventorService.updateInventorius(newItem).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
