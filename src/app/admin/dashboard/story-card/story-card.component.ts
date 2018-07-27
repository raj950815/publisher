import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'of-story-card',
  styleUrls: ['./story-card.component.scss'],
  templateUrl: './story-card.component.html',
})
export class StoryCardComponent implements OnInit, OnDestroy {

  constructor(
    private _sanitizer: DomSanitizer,
  ) { }
  @Input() storyCard: any;
  image: any
  ngOnDestroy() { }
  ngOnInit() {
    this.storyCard['likes'] = 0,
    this.storyCard['dislikes'] = 0,
    this.storyCard['comment'] = 0,
    this.storyCard['preview'] = 0,
    this.storyCard['shares'] = 0,

    this.image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.storyCard['cover_image']})`);
  }
}
