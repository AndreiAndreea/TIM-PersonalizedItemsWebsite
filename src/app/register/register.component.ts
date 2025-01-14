import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private sharedService: SharedService,private router: Router) {}

  UsersList: any[] = [];
    // User input properties
    Username: string = '';
    Userpassword: string = '';


registerForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$')]),
});

register(email: string, password: string) {
  const user = { Username: email, Userpassword: password }; // create a user object
  this.sharedService.addUser(user).subscribe(() => {
    console.log('User added successfully');
    this.router.navigate(['/login']);
    // Optionally, you can navigate to another page or perform any other action after adding the user
  });
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
