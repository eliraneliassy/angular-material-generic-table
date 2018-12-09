import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  clicked(event) {

    console.log('itay ya zain');
  }

}
