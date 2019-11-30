import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  backendURL = 'http://localhost:4000';
  // storing requirements to deploy candidate
  candiateDetails: any;
  requirements: any[];
  sheduledStatus = false;
  shortlistedStatus = false;
  constructor(private http: HttpClient, private router: Router) { }

  // adding candidate
  addCandidate(candDetails) {
    return this.http.post(`${this.backendURL}/addCandidate`, candDetails);
  }

  // gettting All candidates
  getAllCandidates() {
    return this.http.get<any>(`${this.backendURL}/getAllCandidates`);
  }

  // selectCandidate and shortlisting the same candidate
  selectCandidate(candId) {
    this.http.get(`${this.backendURL}/selectCandidate/${candId}`).subscribe(data => {
      this.shortlistedStatus = true;
      setTimeout(() => {
        this.shortlistedStatus = false;
      }, 3000);
      this.router.navigate(['../talent-hunt/shortlisted-candidate']);
    });
  }

  // rejecting Candidate
  rejectCandidate(candId) {
    this.http.delete(`${this.backendURL}/rejectCandidate/${candId}`).subscribe(data => {
      console.log(data);
    });
  }

  // gettting All ShortlistedCandidates
  getAllShortlistedCandidates() {
    return this.http.get<any>(`${this.backendURL}/getShortlistedCandidates`);
  }

  // searching for company requirement based on candidate skill
  getRequirementBasedSkill(candId) {
    console.log(candId);
    this.http.get<any>(`${this.backendURL}/getSkillBaseRequirement/${candId}`).subscribe(data => {
      console.log(data);
      this.requirements = data.requirements;
      this.candiateDetails = data.candidateDetails;
      console.log(this.requirements , this.candiateDetails);
    });
  }

  getRequirementsModal() {
    return this.requirements;
  }

  // deploying Candidate based on candidate and company
  deployCandidate(candId , requiId) {
      console.log(candId, requiId);
      this.http.get(`${this.backendURL}/deployCandidate/${requiId}/${candId}`).subscribe(data => {
         console.log(data);
      });
  }

  // gettingAllDeployedCandidates
  getAllDeployedCandidates() {
    return this.http.get<any>(`${this.backendURL}/getDeployedCandidates`);
  }
}
