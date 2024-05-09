import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:ActivatedRoute,private fb:FormBuilder) { }

  formulaire?:FormGroup
  

  ngOnInit(): void {
    var id=this.router.snapshot.paramMap.get('id');
    console.log(id);

    this.formulaire=this.fb.group({
      'firstName': ['islem', Validators.required],
      'lastName': ['e@ma.il'],
      'age': [18, Validators.required]
    });
   
   
 
  }

  sendContact(){
    console.log(this.formulaire?.controls['firstName'].value , this.formulaire?.controls['lastName'].value)
    console.log(this.formulaire?.controls['age'].value)
  }

 

}
