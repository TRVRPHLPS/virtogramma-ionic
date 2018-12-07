
import { Component, Input, EventEmitter ,Output} from "@angular/core";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number ;
  resault:string;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  constructor() {}

  rate(index: number) {
      this.rating = index;
      this.ratingChange.emit(this.rating);
   }

  getColor(index: number) {
    this.resault= "#FFCA28";
    return this.resault
    }

  isAboveRating(index: number): boolean {
    return index > this.rating;
  }
  ngOnInit() {
  }

}
