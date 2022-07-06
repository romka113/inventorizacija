import { Component, OnInit } from '@angular/core';
import { Inventorius } from '../../models/inventorius';
import { InvetoricazijaService } from '../../services/invetoricazija.service';

@Component({
  selector: 'app-inventorius-list',
  templateUrl: './inventorius-list.component.html',
  styleUrls: ['./inventorius-list.component.css'],
})
export class InventoriusListComponent implements OnInit {
  public invetorius: Inventorius[] = [];
  constructor(private inventoriusService: InvetoricazijaService) {}
  public load() {
    this.inventoriusService.getAllInventorius().subscribe((response) => {
      this.invetorius = response;
    });
  }
  ngOnInit(): void {
    this.load();
  }
  public deleteInventor(id: string | undefined) {
    if (id != undefined) {
      this.inventoriusService.deleteInventor(id).subscribe(() => {
        this.load();
      });
    }
  }
}
