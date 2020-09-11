export interface IBlog {
  id?: string;
  title?: string;
  authorid?: number;
  content?: string;
  _created?: number;
}

export interface ITags {
  id?: string;
  name?: string;
}

export interface IBlogTags {
  blogid?: number;
  tagid?: number;
}