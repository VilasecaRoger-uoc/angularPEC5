import { Component, OnInit } from '@angular/core';
import { Personatga } from 'src/app/models/personatge.interface';
import { PersonatgesService } from 'src/app/services/personatges.service';

@Component({
  selector: 'app-personatges',
  templateUrl: './personatges.component.html',
  styleUrls: ['./personatges.component.css'],
  // animations: [
  //   trigger('cardAnimation', [
  //     transition('* => *', [
  //       query('mat-card', style({ transform: 'translateX(-100%)' })),
  //       query(
  //         'mat-card',
  //         stagger('600ms', [
  //           animate('900ms', style({ transform: 'translateX(0)' })),
  //         ])
  //       ),
  //     ]),
  //   ]),
  // ],
})
export class PersonatgesComponent implements OnInit {
  loading!: Boolean;
  personatges: Personatga[] = [];
  constructor(private personatgesService: PersonatgesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.personatgesService.getAllImages().subscribe((personatges) => {
      this.personatges = personatges;
      this.loading = false;
    });
  }
}
