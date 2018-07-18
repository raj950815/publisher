import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'pub-story-card',
  styleUrls: ['./story-card.component.scss'],
  templateUrl: './story-card.component.html',
})
export class StoryCardComponent implements OnInit, OnDestroy {

  // currentTheme: string;
  // themeSubscription: any;

  constructor(
    private _sanitizer: DomSanitizer,
    // private themeService: NbThemeService
  ) {
    // this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
    //   this.currentTheme = theme.name;
    // });
  }
  @Input() storyCard: any;
  image: any
  ngOnDestroy() {
    // this.themeSubscription.unsubscribe();
  }
  ngOnInit() {
    this.storyCard['likes'] = 8745,
    this.storyCard['dislikes'] = 81,
    this.storyCard['comment'] = 54,
    this.storyCard['preview'] = 5135543,
    this.storyCard['shares'] = 41,

    this.image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.storyCard['cover_image']})`);
  }
}
