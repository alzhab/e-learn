import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, AuthorType } from '../models/Announcemet';

@Pipe({
  name: 'announcementsFilter'
})
export class AnnouncementsFilterPipe implements PipeTransform {

  transform(announcementsList: Announcement[], type: AuthorType): any {
    if (type === 'all') {
      return announcementsList
    }

    return announcementsList.filter((ann) => {
      return ann.authorType === type
    })
  }
}
