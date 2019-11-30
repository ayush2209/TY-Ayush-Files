import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  backendURL  = 'http://localhost:4000';
  requirement = false;

  constructor(private http: HttpClient) { }

  addRequirement(requirement) {
    return this.http.post(`${this.backendURL}/addRequirement` , requirement);
  }

  getAllRequirements() {
   return this.http.get<any>(`${this.backendURL}/allRequirements`);
  }
}
