import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personatga } from 'src/app/models/personatge.interface';
import { PersonatgesService } from 'src/app/services/personatges.service';
@Component({
  selector: 'app-personatga',
  templateUrl: './personatga.component.html',
  styleUrls: ['./personatga.component.css'],
})
export class PersonatgaComponent implements OnInit {
  loading!: Boolean;
  personatga!: Personatga;
  show!: Boolean;
  constructor(
    private personatgesService: PersonatgesService,
    //to read paramater from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user view if we don't have a valid identifier
    private router: Router
  ) {}

  ngOnInit(): void {
    this.show = false;
    this.loading = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -->', identifier);

    this.personatgesService.getImgeById(identifier!).subscribe((personatga) => {
      if (!personatga) {
        return this.router.navigateByUrl('/');
      }
      this.personatga = personatga;
      this.loading = false;
      console.log('personatge -->', this.personatga);
      return;
    });
  }
  ShowDetails() {
    this.show = !this.show;
  }
}
