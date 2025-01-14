import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  constructor(private sharedService: SharedService,private router: Router) {}

  UsersList: any[] = [];
    // User input properties
    email: string = '';
    password: string = '';


registerForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$')]),
});

//function to check if the user is valid or not
login(email: string, password: string) {
  const trimmedEmail = email.trim().toLowerCase(); // Remove extra whitespaces
  const trimmedPassword = password.trim().toLowerCase();

  for (let i = 0; i < this.UsersList.length; i++) {
    const user = this.UsersList[i];
    const storedEmail = user.Username.trim().toLowerCase();
    const storedPassword = user.Userpassword.trim().toLowerCase();

    console.log('Input Email:', trimmedEmail);
    console.log('Stored Email:', storedEmail);
    console.log('Input Password:', trimmedPassword);
    console.log('Stored Password:', storedPassword);

    if (storedEmail === trimmedEmail && storedPassword === trimmedPassword) {
      alert('Login successful');
      this.router.navigateByUrl('/home');
      return;
    }
  }

  alert('Login failed');
}



  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList() {
    this.sharedService.getUsersList().subscribe(data => {
      console.log('UsersList from API:', data);
      this.UsersList = data;
    });
  }
}
