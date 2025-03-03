export interface SiteType {
  id: number;
  url: string;
}

export interface DataItemType {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
  url?: string;
}

export type StatusType = "ONLINE" | "PAUSED" | "STOPPED" | "DRAFT";
