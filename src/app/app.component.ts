import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { Session } from '@supabase/supabase-js';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, AccountComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'aicademia';
  session: Session | null;

  constructor(private readonly supabase: SupabaseService) {
    this.session = this.supabase.session;
  }

  ngOnInit() {
    this.supabase.authChanges((e, session) => (this.session = session));
  }
}
