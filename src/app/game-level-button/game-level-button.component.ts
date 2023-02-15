import { Component, Input } from '@angular/core';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-level-button',
  templateUrl: './game-level-button.component.html',
  styleUrls: ['./game-level-button.component.css']
})
export class GameLevelButtonComponent {

  @Input() name = '';
  gameLevel = this.name;
  
  

  constructor(private router: Router) {}

  play(): void {
    this.router.navigate(["gamePage", this.name]);
  }
}