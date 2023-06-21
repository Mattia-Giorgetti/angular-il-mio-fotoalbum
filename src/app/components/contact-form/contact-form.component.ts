import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Mail } from 'src/app/shared/Mail.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){}

  contactForm!: FormGroup;
  isLoading: boolean = false;
  success: boolean = false;
  message: null | string = null;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'mail': new FormControl (null, [Validators.email, Validators.required]),
      'message': new FormControl (null, Validators.required)
    });
  }

  onSubmitForm(){
    this.isLoading = true;
    const mail: Mail = this.contactForm.value;

    this.http.post('http://localhost:8080/api/mails', mail).subscribe(res => {
      console.log(res)
      this.success = true;
      this.message = 'Your Message in on the way!'
    },
    error => {
      this.success = false
      this.isLoading = false
      this.message = `Something went wrong: ${error.message}`
    })
    this.isLoading = false;
  }
  onCancel(){
    this.router.navigate(['/pics'])
  }
}
