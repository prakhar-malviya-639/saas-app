export enum Subject {
  maths = "maths",
  language = "language",
  science = "science",
  history = "history",
  coding = "coding",
  geography = "geography",
  economics = "economics",
  finance = "finance",
  business = "business",
}

export type Companion = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

export interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

export interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

export interface BuildClient {
  key?: string;
  sessionToken?: string;
}

export interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

export interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}

export interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

export interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}
