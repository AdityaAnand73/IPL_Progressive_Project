import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnInit } from "@angular/core";
import { Match } from "../../types/Match";
import { Team } from "../../types/Team";
import { IplService } from "../../services/ipl.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'app-matchcreate',
    templateUrl: './matchcreate.component.html',
    styleUrls: ['./matchcreate.component.scss']
  })

export class MatchCreateComponent implements OnInit{
    match : Match | null = null;
    successMessage: string | null = null;
    errorMessage: string | null = null;
    matchForm!: FormGroup;
    teams: Team[]=[];

  constructor(private fb: FormBuilder, private iplService: IplService) {}

  ngOnInit(): void {
    this.loadTeams();
    this.matchForm = this.fb.group({
      firstTeam: [null, [Validators.required]],
      secondTeam: [null, [Validators.required]],
      matchDate: ['', [Validators.required]],
      venue: [''],
      result: [''],
      status:['' , [Validators.required]],
    });
  }

  loadTeams(): void{
    this.iplService.getAllTeams().subscribe((teams) => {
      this.teams = teams;
    })
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      this.addMatch();
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  private addMatch(): void{
    this.iplService.addMatch(this.matchForm.value).subscribe(
      (response: Match) => {
        this.match = response;
        this.successMessage = '[Match created successfully!';
        this.errorMessage = null;
        this.resetForm();
      },
      (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    )
  }

  resetForm(): void {
    this.matchForm.reset();
  }

  private handleError(error: HttpErrorResponse): void{
    if(error.error instanceof ErrorEvent){
      this.errorMessage = `Client-side error: ${error.error.message}`;
    }else{
      this.errorMessage=`Server-side error: ${error.status} ${error.message}`;
      if(error.status === 400){
        this.errorMessage= 'Bad request. Please check your input.';
      }
    }
    this.successMessage = null;
    console.error('An error occured;', this.errorMessage);
  }

}
