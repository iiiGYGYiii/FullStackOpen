import { Part } from ".";
import { ContentProps } from "../types";

const Content = ({ courseParts }: ContentProps) => (
  <div>
    {courseParts.map((part) => (
      <Part key={part.name} coursePart={part} />
    ))}
  </div>
);

export default Content;
