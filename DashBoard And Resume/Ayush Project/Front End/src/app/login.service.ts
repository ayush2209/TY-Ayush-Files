import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost:4000';
  schedule:any=[]
  candidates:any=[]
   require:any;
   candi:any=[]

   filledrequire:any=[]
  // dashboard:any;
  isLoggedIn=true;
  logginMsg = true;
  addRequire = true;
  addCandidate = true;
  interview = true;
  constructor(private http:HttpClient) { 
    this.gettingCandidate();
    this.getDashboardData('data');
    this.getDBScheduleDetails('data');
    this.getPerticularData('id');
  }
  


  //posting  schedule interview
  postInterview(interview){
    return this.http.post(`${this.url}/addInterview`,interview);
  }

  //getting interview into schdeule interview Component
  getInterview() {
    return this.http.get(`${this.url}/getInterview`);
  }

  //perticular row selection data
  getPerticularData(id) {
   return this.http.get<any>(`${this.url}/getPerticularRowData/${id}`);
  }


  
  //getting filter data
  getFilterData(interviewnamefilter) {
    return this.http.get(`${this.url}/filterInterview/${interviewnamefilter}`);
  }



























  postData(user){
    return this.http.post(`${this.url}/addUser`,user);
  }
  getData(){
    return this.http.get(`${this.url}/addUser`);
  }
 
  postCandidate(candidate){
    return this.http.post(`${this.url}/addCandidate`,candidate);
  }

  getCandidate(){
    return this.http.get(`${this.url}/addCandidate`);
  }

  getFilteredCandidate(cname, role, fromdate, todate) {
    return this.http.get(`${this.url}/filteredCandidates/${cname}/${role}/${fromdate}/${todate}`);
  }
  getScheduledInterview(){
     this.http.get(`${this.url}/getDBScheInterview`).subscribe(candidate=>{
      this.schedule=candidate;
    },err=>{
      console.log(err);
    },()=>{
      console.log("Interview scheduled");
    });
  }
  getDBScheduleDetails(data){
    return this.http.get(`${this.url}/allCandidates/${data}`);
  }
  updateRequirement(requirement){
    return this.http.post(`${this.url}/editUser`,requirement);
  }
  deleteRequirement(id){
    return this.http.delete(`${this.url}/deleteUser/${id}`);
  }
  // getDashboardData(){
  //   this.http.get(`${this.url}/getDashboard`).subscribe(data=>{
  //     this.dashboard=data;
  //   },err=>{
  //     console.log(err);
  //   },()=>{
  //     console.log("Data got successfully");
  //   });
  // }
   getDashboardData(data){
     return this.http.get(`${this.url}/allRequirements/${data}`);
    }
  rejectedCandidate(id){
    return this.http.delete(`${this.url}/rejectCandidate/${id}`);
  }
  postingCandidate(candidate){
    return this.http.post(`${this.url}/postCandidate`,candidate);
  }
  gettingCandidate(){
    this.http.get(`${this.url}/gettingCandidate`).subscribe(candidate=>{
    this.candidates=candidate;
    },err=>{
      console.log(err);
    },()=>{
      console.log("candidate selected successfully");
    })
  }
  getDBCandidate(){
    this.http.get(`${this.url}/getDBSelectedCandidate`).subscribe(candi=>{
    this.candi=candi;
    },err=>{
      console.log(err)
    },()=>{
      console.log("got selected success");
    })
  }

  getDBCandidateDetails(data){
    return this.http.get(`${this.url}/allSelectedCandidates/${data}`);
  }
 postSignUp(data){
   return this.http.post<any>(`${this.url}/postSignUp`,data);
 }
 getDashboardRequire(){
   this.http.get(`${this.url}/getDashboardRequire`).subscribe(require=>{  
     this.require=require;
   },err=>{
     console.log(err);
   },()=>{
     console.log("Required successfully");
   })
  }
 postLogin(data){
  return this.http.post<any>(`${this.url}/postLogin`,data);
 }
 postLogout(data){
   return this.http.post(`${this.url}/postLogout`,data);
 }
 getDeploymentData(id){
   console.log("service",id);
   return this.http.get<any>(`${this.url}/getDeploymentDetails/${id}`);
 }

 deployCandidate(compId , candId){
   return this.http.get(`${this.url}/deployCandidate/${compId}/${candId}`);
 }

 getFilledRequirement(){
  this.http.get(`${this.url}/filledRequirement`).subscribe(fillRequire=>{  
    this.filledrequire=fillRequire;
  },err=>{
    console.log(err);
  },()=>{
    console.log("Filled requirement successfully");
  })
 }

 getDBFilledRequirement(data){
  return this.http.get(`${this.url}/allFilledRequirement/${data}`);
 }
}
