import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {and} from "@angular/router/src/utils/collection";
import {invalid} from "@angular/compiler/src/render3/view/util";
import {until, WebElement} from "selenium-webdriver";
import elementIsDisabled = until.elementIsDisabled;

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  taskValue = new FormControl('', [Validators.minLength(3), Validators.pattern('[^!]*')]);

  getErrorMessage() {
      return this.taskValue.hasError('minLength') ? 'Необходимо ввести более 2-х символов' : this.taskValue.hasError('pattern') ? 'Введен недопустимый символ "!"' : '';
  }

  constructor() {}

  ngOnInit() {}
}
