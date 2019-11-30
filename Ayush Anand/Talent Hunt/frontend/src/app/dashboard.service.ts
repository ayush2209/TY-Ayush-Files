import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  backendURL = 'http://localhost:4000';


  constructor(public http: HttpClient) { }


  getDashBoardRequirements() {
    return this.http.get<any>(`${this.backendURL}/getDashboardRequirements`);
  }


  getDashBoardfilledRequirements() {
    return this.http.get<any>(`${this.backendURL}/getDashboardFilledRequirements`);
  }

  getDashBoardSheduledCandidate() {
    return this.http.get<any>(`${this.backendURL}/getDBScheduledCandidate`);
  }


  getDashBoardSelectedCandidate() {
    return this.http.get<any>(`${this.backendURL}/getDBSelectedCandidate`);
  }

  getRequirementsBasedStack(stackName) {
    return this.http.get<any>(`${this.backendURL}/allRequirements/${stackName}`);
  }

  getfilledRequirementsBasedClientName(clientName) {
    return this.http.get<any>(`${this.backendURL}/allFilledRequirement/${clientName}`);
  }
}
