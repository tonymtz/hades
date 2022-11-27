interface Attachment {
  name: string;
  rawUrl: string;
  url: string;
}

export interface NotionPost {
  id: string;
  title: string;
  published: boolean;
  slug: string;
  cover?: Attachment[];
}
