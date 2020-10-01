export interface IBlog {
  id?: string;
  title?: string;
  authorid?: number;
  content?: string;
  name?: string;
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