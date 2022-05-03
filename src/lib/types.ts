export interface Post {
  title: string;
  date: string;
  description: string;
  unlisted?: boolean;
  draft?: boolean;
  filename: string;
}
