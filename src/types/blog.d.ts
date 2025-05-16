export interface Blog {
  slug: string;
  metadata: {
    title: string;
    description: string;
    date: {
      createdAt: string;
      updatedAt: string;
    };
    tags: string[];
    cover: string;
    author: {
      name: string;
      role: string;
      github: string;
      instagram: string;
      twitter: string;
      website: string;
    };
  };
  content: string;
}
