<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f65cd762c3d8b4c3e171215dd01fc22913fc6d3a
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnInit } from "@angular/core";
import { Match } from "../../types/Match";
<<<<<<< HEAD
import { Team } from "../../types/Team";
import { IplService } from "../../services/ipl.service";
import { HttpErrorResponse } from "@angular/common/http";
=======
>>>>>>> f65cd762c3d8b4c3e171215dd01fc22913fc6d3a

@Component({
    selector: 'app-matchcreate',
    templateUrl: './matchcreate.component.html',
    styleUrls: ['./matchcreate.component.scss']
  })

export class MatchCreateComponent implements OnInit{
    match : Match | null = null;
    successMessage: string | null = null;
    errorMessage: string | null = null;
<<<<<<< HEAD
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
=======
    matchForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.matchForm = this.fb.group({
      matchId: [null, [Validators.required]],
      firstTeamId: [null, [Validators.required]],
      secondTeamId: [null, [Validators.required]],
      matchDate: ['', [Validators.required]],
      venue: ['', [Validators.required]],
      result: ['', [Validators.required]],
      status:['' , [Validators.required]],
      winnerTeamId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      this.match = this.matchForm.value;
      this.successMessage = 'Match created successfully!';
      this.errorMessage = null;
      this.resetForm();
>>>>>>> f65cd762c3d8b4c3e171215dd01fc22913fc6d3a
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

<<<<<<< HEAD
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
=======
  resetForm(): void {
    // this.cricketerForm.reset({
    //   cricketerId: null,
    //   teamId: null,
    //   cricketerName: '',
    //   age: null,
    //   nationality: '',
    //   experience: null,
    //   role: '',
    //   totalRuns: null,
    //   totalWickets: null
    // });
    this.matchForm.reset();
  }
=======

export class MatchCreateComponent {
 
>>>>>>> 223324dc07b45aab6ad765574a36f47daf7e3f8d
>>>>>>> f65cd762c3d8b4c3e171215dd01fc22913fc6d3a

}
