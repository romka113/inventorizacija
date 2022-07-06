import { Component, OnInit } from '@angular/core';
import { InvetoricazijaService } from '../../services/invetoricazija.service';
import { Router } from '@angular/router';
import { Inventorius } from '../../models/inventorius';

@Component({
  selector: 'app-inventoriusnew',
  templateUrl: './inventoriusnew.component.html',
  styleUrls: ['./inventoriusnew.component.css'],
})
export class InventoriusnewComponent implements OnInit {
  public name: string = '';
  public inNumber: number = 0;
  public price: number = 0;
  public date: Date = new Date();
  constructor(
    private inventorService: InvetoricazijaService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  public addInventorius() {
    let newItem = new Inventorius(
      this.inNumber,
      this.name,
      this.price,
      this.date
    );
    this.inventorService.addInvetorius(newItem).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
