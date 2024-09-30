import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'color-translator-web-app';
  result = 'Not available';
  colorNameCtrl = new FormControl('');
  private apiService = inject(ApiService);
  
  ngOnInit(): void {
    this.colorNameCtrl.valueChanges.subscribe((name: string | null) => {
        this.result = '';
    });
  }

  getHex() {
    this.result = '';
    const colorName = this.colorNameCtrl.value || '';
    this.apiService.getHexData(colorName).subscribe({
      next: (response) => {
        console.log(response);
        this.result = response?.hex;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
