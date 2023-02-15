import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main-page-module.component.html',
  styleUrls: ['./main-page-module.component.css']
})
export class MainPageModuleComponent implements OnInit{
  easyLevel='Easy';
  mediumLevel='Medium';
  hardLevel='Hard';

  ngOnInit():void{
    
  }
}
