import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.html',
  styleUrl: './poll.css'
})
export class PollComponent implements OnInit{
  polls: Poll[] = [];
  constructor(private pollService : PollService){
  }

  ngOnInit(): void{
      this.loadPolls();
  }

  loadPolls(){
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
      }
    })
  }
}
