export type AuthorType = 'teacher' | 'admin' | 'all'

export interface Announcement {
  id?: number
  view: number,
  title: string,
  text: string,
  authorType: AuthorType
}