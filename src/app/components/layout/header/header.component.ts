import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	public title = 'Faesa';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  click() {
    this.router.navigateByUrl("/inscricao");
    console.log("qwe");
    
  }

}
