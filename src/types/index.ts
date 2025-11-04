export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export type FileType = "pdf" | "doc" | "docx" | "ppt" | "pptx" | "xls" | "xlsx" | "image" | "video" | "web" | "other";

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  fileType: FileType;
  fileSize?: string; // e.g., "2.5 MB"
  downloadable?: boolean; // Whether the file can be downloaded
}

export interface PresentationFile {
  name: string;
  url: string;
  type: FileType;
  size?: string;
}

export interface Presentation {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  status: "upcoming" | "past";
  slides?: PresentationFile[];
  recording?: string;
  materials?: PresentationFile[]; // Additional materials
  detailedDescription?: string; // Detailed description
  topics?: string[]; // Topics covered
}

