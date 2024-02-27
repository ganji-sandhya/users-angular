import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.form.component.html',
  styleUrl: './user.form.component.css'
})
export class UserFormComponent {
  
    user = {
        name: '',
        email: '',
        phone: '',
        profileImage: '',
      };
    
      constructor(private userService: UserService, private router: Router) {}

   onSubmit(form: NgForm) {

    if (form.valid) {

    // reader.rea(this.user.profileImage);
        // Form is valid, handle form submission logic here
        console.log('Form submitted:', form, JSON.stringify(this.user));
        this.userService.addUser(this.user).subscribe((response)=>{
            console.log("user added successfully", response);
            this.router.navigate(['/user-table']);
        });
        // Reset the form
        form.resetForm();
      } else {
        // Form is invalid, show error messages or handle accordingly
        console.log('Form is invalid');
      }
    };

    handleFileInput(event: any): void {
        const file = event.target.files[0];
        if(file) {
            this.readFileAsBlob(file);
        }
    }
    
    private readFileAsBlob(file: File): void {
        const reader = new FileReader();
    
        reader.onload = () => {
    
          // Use the obtained Blob object as needed (e.g., send it to a server, display it, etc.)
        //   console.log('Blob Object:', blobData);
    
          // Example: Display the image
        //   this.user.profileImage = JSON.stringify(reader.result);
          const blob = new Blob([reader.result!], { type: 'image/png' }); // Specify the MIME type accordingly

          const jsonData = {
            data: reader.result!,
            name: file.name
          };
          const image = new Image();

          image.title = file.name;
          image.src = URL.createObjectURL(blob);
// Create a data URL from Blob
// this.user.profileImage = URL.createObjectURL(blob);
this.user.profileImage = JSON.stringify(jsonData);
        };
    
        reader.readAsDataURL(file);
      }
}
