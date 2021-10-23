interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseWithDescription extends CoursePartBase {
  description: string;
}

export enum PartType {
  Normal = "normal",
  GroupProject = "groupProject",
  Submission = "submission",
  Special = "special",
}

interface CourseNormalPart extends CourseWithDescription {
  type: PartType.Normal;
}

interface CourseSpecialPart extends CourseWithDescription {
  type: PartType.Special;
  requirements: string[];
}

interface CourseProjectPart extends CoursePartBase {
  type: PartType.GroupProject;
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseWithDescription {
  type: PartType.Submission;
  exerciseSubmissionLink: string;
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseSpecialPart;

export interface HeaderProps {
  title: string;
}

export interface ContentProps {
  courseParts: CourseParts;
}

export interface PartProps {
  coursePart: CoursePart;
}

export interface TotalProps {
  total: Total;
}

export type CourseParts = CoursePart[];

export type Total = number;
