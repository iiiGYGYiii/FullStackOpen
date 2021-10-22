export interface CoursePart {
  name: string;
  exerciseCount: number;
}

export interface HeaderProps {
  title: string;
}

export interface ContentProps {
  courseParts: CourseParts;
}

export interface TotalProps {
  total: Total;
}

export type CourseParts = CoursePart[];

export type Total = number;
