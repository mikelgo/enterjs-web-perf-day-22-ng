import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent {

  createLongTask() {
    work(3000);
  }

  alert() {
    alert('Hello World!');
  }

  posttask() {

    (window as any).scheduler
      .postTask(() => work(50, 'background'), { priority: 'background' })
      .then();
    (window as any).scheduler
      .postTask(() => work(50, 'user-visible'), { priority: 'user-visible' })
      .then();
    (window as any).scheduler
      .postTask(() => work(50, 'blocking'), { priority: 'user-blocking' })
      .then();

    (window as any).scheduler
      .postTask(() => work(50, 'background'), { priority: 'background' })
      .then();
    (window as any).scheduler
      .postTask(() => work(50, 'background'), { priority: 'background' })
      .then();
    (window as any).scheduler
      .postTask(() => work(50, 'blocking'), { priority: 'user-blocking' })
      .then();
  }
}

function schedulerSupported() {
  return 'scheduler' in window;
}

function work(duration: number = 3000, label: string = '') {
  const start = Date.now();
  console.log(`💪 [${label} ]Starting work for ${duration}ms`);
  while (Date.now() - start < duration) {

  }
  console.log(`✅ Work done`);
}

function fibonacci(num: number): number {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
