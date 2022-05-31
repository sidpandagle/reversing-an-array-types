import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  input = 'my name is abc';
  //output =='ym eman si cba'
  ngOnInit() {
    let output = [];
    // console.log(this.input.split('').reverse().join(''));
    // console.log(this.input.split(' '));
    this.input.split(' ').forEach((response) => {
      output.push(response.split('').reverse().join(''));
    });
    console.log(output.join(' '));
  }
}
