import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CandidateService } from 'src/app/candidate.service';
import { MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with pagination
 */
export interface RequirementElement {
  _id: string;
  clientName: string;
  stackName: string;
  exp: number;
  noOfPositions: number;
  location: string;
  designation: string;
  closingDate: string;
  CTC: number;
  startDate: string;
}

export interface PeriodicElement {
  candName: string;
  email: string;
  gender: string;
  contactNumb: number;
  totalExp: number;
  relExp: number;
  currentOrg: string;
  stackName: string;
  jobDesc: string;
  CCTC: number;
  ECTC: number;
  location: string;
  noticePer: string;
  relocate: string;
  InterPanel: string;
}
@Component({
  selector: 'app-candidate-requirements',
  templateUrl: './candidate-requirements.component.html',
})
export class AppCandidateRequirementsComponent {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ELEMENT_DATA: RequirementElement[];
  requirements;
  candidateDetails;
  deployingComany;

  selection = new SelectionModel<RequirementElement>(true, []);
  requirementColumns: string[] = [
    'select',
    'clientName',
    'stackName',
    'exp',
    'positions',
    'CTC',
     ];
  constructor(public service: CandidateService) {
    this.getAllRequirements();
  }

  setWidth() {
    document.querySelector<any>('.cdk-overlay-pane').style.width = '50%';
  }

  getAllRequirements() {
    setTimeout(() => {
      this.ELEMENT_DATA = this.service.getRequirementsModal();
      this.candidateDetails = this.service.candiateDetails;
      this.requirements = new MatTableDataSource<RequirementElement>(this.ELEMENT_DATA);
      this.requirements.paginator = this.paginator;
      console.log(this.ELEMENT_DATA);
      this.setWidth();
      console.log('candidate', this.candidateDetails);
    }, 3000);
  }
  selectRequirement(row , event) {
    if (event.checked) {
      this.deployingComany = row;
    }
  }
  deployCandidate() {
    this.service.deployCandidate(this.candidateDetails._id, this.deployingComany._id);
  }
}

@Component({
  selector: 'app-shortlisted-candidate',
  templateUrl: './shortlisted-candidate.component.html',
  styleUrls: ['./shortlisted-candidate.component.css']
})
export class ShortListedCandidateComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[];
  dataSource;
  isActive = false;

  constructor(private service: CandidateService, public dialog: MatDialog) {
      this.getAllShortlistedCandidates();
  }

  displayedColumns: string[] = [
                                'candName',
                                'email',
                                'contactNumb',
                                'totalExp',
                                'currentOrg',
                                'stackName',
                                'CCTC',
                                'ECTC',
                                'location',
                                'noticePer',
                                'relocate',
                                'InterPanel',
                                'Deploy'
                              ];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  getAllShortlistedCandidates() {
    this.service.getAllShortlistedCandidates().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(AppCandidateRequirementsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllRequirements(elementData) {
    console.log(elementData);
    this.service.getRequirementBasedSkill(elementData._id);
  }
}
