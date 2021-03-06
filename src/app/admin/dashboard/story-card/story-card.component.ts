import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { DashboardService } from '../admin-dashboard-service/dashboard.service';

@Component({
  selector: 'of-story-card',
  styleUrls: ['./story-card.component.scss'],
  templateUrl: './story-card.component.html',
})
export class StoryCardComponent implements OnInit, OnDestroy {
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private _sanitizer: DomSanitizer,
    private snotify: SnotifyService,
    private dashboardService: DashboardService,
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

  storyStatus(storyId, status) {
    if (status === 'Pending') {
      this.snotify.confirm('Are you sure you want to Change Status?', 'Confirm', {
        ...this.snotifyConfig,
        buttons: [
        {
          text: 'Approved',
          action: () => {
            const changeData = {
              story_id: storyId,
              status: 'Approved',
              // reason: ''
            }
            this.snotify.remove()
            this.changeStoryStatus(changeData)
          },
        },
        {
          text: 'Rejected',
          action: () => {
            this.snotify.remove()
            this.snotify.prompt('Enter Rejection Message', 'Message', {
              ...this.snotifyConfig,
              buttons: [
                {
                  text: 'Rejected',
                  action: (message) => {
                    const changeData = {
                      story_id: storyId,
                      status: 'Rejected',
                      reason: message.value,
                    }
                    this.snotify.remove()
                    this.changeStoryStatus(changeData)
                  },
                },
                {
                  text: 'Cancel',
                  action: () => {
                    this.snotify.remove()
                  },
                },
              ],
              placeholder: 'Enter Message.',
            })
          },
        },
        ],
      })
    } else if (status === 'Approved') {
      this.snotify.confirm('Are you sure you want to Reject?', 'Confirm', {
        ...this.snotifyConfig,
        buttons: [
        {
          text: 'Reject',
          action: () => {
            this.snotify.remove()
            this.snotify.prompt('Enter Rejection Message', 'Message', {
              ...this.snotifyConfig,
              buttons: [
                {
                  text: 'Rejected',
                  action: (message) => {
                    const changeData = {
                      story_id: storyId,
                      status: 'Rejected',
                      reason: message.value,
                    }
                    this.snotify.remove()
                    this.changeStoryStatus(changeData)
                  },
                },
                {
                  text: 'Cancel',
                  action: () => {
                    this.snotify.remove()
                  },
                },
              ],
              placeholder: 'Enter Message.',
            })
          },
        },
        {
          text: 'Cancel',
          action: () => {
            this.snotify.remove()
          },
        },
        ],
      })
    } else if (status === 'Rejected') {
      this.snotify.confirm('Are you sure you want to Approve?', 'Confirm', {
        ...this.snotifyConfig,
        buttons: [
        {
          text: 'Approved',
          action: () => {
            const changeData = {
              story_id: storyId,
              status: 'Approved',
              reason: '',
            }
            this.snotify.remove()
            this.changeStoryStatus(changeData)
          },
        },
        {
          text: 'Cancel',
          action: () => {
            this.snotify.remove()
          },
        },
        ],
      })
    }
  }

  changeStoryStatus(changeData) {
    this.dashboardService.changeStatus(changeData).subscribe(data => {
      if (data['status']) {
        this.dashboardService.change.emit(true)
        this.snotify.confirm(data['response'], 'Success', this.snotifyConfig)
      } else {
        this.snotify.warning(data['response'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something went wrong. Please try again later', 'Error', this.snotifyConfig)
    })
  }
}
