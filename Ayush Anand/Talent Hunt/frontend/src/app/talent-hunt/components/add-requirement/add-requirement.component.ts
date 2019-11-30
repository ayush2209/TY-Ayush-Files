import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { RequirementService } from 'src/app/requirement.service';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(private service: RequirementService, private router: Router) { }

  addRequirement(form: NgForm) {
    console.log(form.value);
    this.service.addRequirement(form.value).subscribe(status => {
      console.log(status);
      this.service.getAllRequirements();
      this.service.requirement = true;
      setTimeout(() => {
        this.service.requirement = false;
      }, 3000);
      this.router.navigate(['../talent-hunt/requirements']);
    }, err => {
      console.log(err);
    }, () => {
      console.log('requirement added successfully');
    });
    form.reset();
  }

  ngOnInit() {
  }

}
