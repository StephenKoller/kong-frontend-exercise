export interface Version {
  id: string;
  name: string;
  description: string;
  updated_at: string;
}

export interface Metrics {
  latency: number;
  uptime: number;
  requests: number;
  errors: number;
}

export enum PUBLICATION_STATUS {
  PUBLISHED = 'published',
  IN_PROGRESS = 'in_progress',
  UNPUBLISHED = 'unpublished',
}
