import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export type ObjOf<T = unknown> = Record<string, T>;

export const toJson = <R>(data: string) => JSON.parse(data) as R;
export const toText = <T extends ObjOf<T[keyof T]>>(data: T) => JSON.stringify(data);

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  form = this._fb.group({
    nickname: ['', Validators.required],
    meet: ['', Validators.required],
  });

  constructor(private quoteService: QuoteService, private _fb: FormBuilder, private _router: Router) {}

  ngOnInit() {
    // this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
    this.form.patchValue({ meet: uuid() });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const { meet } = this.form.value;
      this._router.navigate(['/', 'meet', meet]);
    }
  }
}
