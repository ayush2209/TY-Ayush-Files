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
  selector: 'app-deployed-candidate',
  templateUrl: './deployed-candidate.component.html',
  styleUrls: ['./deployed-candidate.component.scss']
})
export class DeployedCandidateComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[];
  dataSource;

  constructor(private service: CandidateService) {
      this.getAllDeployedCandidates();
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
                                'InterPanel'
                              ];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  getAllDeployedCandidates() {
    this.service.getAllDeployedCandidates().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
  }

}
