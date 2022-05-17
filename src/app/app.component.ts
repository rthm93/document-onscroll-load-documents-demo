import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-grid-basic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class NzDemoGridBasicComponent {
  array = [];
  sum = 10;
  throttle = 300;
  scrollDistance = 3;
  scrollUpDistance = 2;
  page = 0;
  direction = '';
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    if (this.page < 3) {
      console.log('scrolled down!!', ev);

      // add another 20 items
      const start = this.sum;
      this.sum += 20;
      this.appendItems(start, this.sum);

      this.direction = 'down';
      this.page++;
    }
  }

  onUp(ev) {}

  generateWord() {
    return 'Document Name';
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
