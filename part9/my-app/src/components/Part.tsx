import { PartProps, PartType } from "../types";
import { assertNever } from "../utils";

const Part = ({ coursePart }: PartProps) => {
  switch (coursePart.type) {
    case PartType.Normal:
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <i>{coursePart.description}</i>
        </div>
      );
    case PartType.GroupProject:
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>project exercises: {coursePart.groupProjectCount}</p>
        </div>
      );
    case PartType.Submission:
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <i>{coursePart.description}</i>
          <p>Submit to: {coursePart.exerciseSubmissionLink}</p>
        </div>
      );
    case PartType.Special:
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <i>{coursePart.description}</i>
          <p>Required skills: {coursePart.requirements.join(", ")}</p>
        </div>
      );
    default:
      return assertNever(coursePart);
  }
};

export default Part;
