import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CandidateService } from 'src/app/candidate.service';

/**
 * @title Table with pagination
 */
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
  selector: 'app-sheduled-candidates',
  templateUrl: './sheduled-candidates.component.html',
  styleUrls: ['./sheduled-candidates.component.css']
})
export class SheduledCandidatesComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[];
  dataSource;

  constructor(private service: CandidateService) {
      this.getAllCandidates();
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
                                'edit',
                                'select',
                                'reject'
                              ];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  getAllCandidates() {
    this.service.getAllCandidates().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  editRequirement(element) {
    console.log(element);
  }

  selectCandidate(candiDetails) {
    console.log(candiDetails._id);
    this.service.selectCandidate(candiDetails._id);
  }

  rejectCandidate(candiDetails) {
    console.log(candiDetails._id);
    this.service.rejectCandidate(candiDetails._id);
  }

  ngOnInit() {
  }
}
