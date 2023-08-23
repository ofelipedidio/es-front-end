import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() maxRating = 5;
  @Input() currentRating = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
  }

  rate(rating: number) {
    this.ratingClicked.emit(rating);
  }

  stars(): number[] {
    return Array(this.maxRating);
  }
}
