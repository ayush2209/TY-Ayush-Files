import { Component, OnInit, ViewChild, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RequirementService } from 'src/app/requirement.service';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with pagination
 */
export interface PeriodicElement {
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


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[];
  dataSource;
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private service: RequirementService) {
      this.getAllRequirements();
  }

  displayedColumns: string[] = [
                                'select',
                                'clientName',
                                'stackName',
                                'exp',
                                'positions',
                                'location',
                                'designation',
                                'closingDate',
                                'CTC',
                                'startDate',
                                'edit'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
  }

  getAllRequirements() {
    this.service.getAllRequirements().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  editRequirement(element) {
    console.log(element);
  }
  checkboxLabel(row?: PeriodicElement): string {
    console.log(row);
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }
  selectCandidate(row , event) {
    if (event.checked === true) {
      console.log(row);
    }
    console.log(event);
  }
}
