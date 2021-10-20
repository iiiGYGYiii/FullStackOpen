import { useQuery } from "@apollo/client";
import { BooksTable } from "..";
import { USER_RECOMMENDATION } from "../../logic/graphql/queries/queries";

const RecommendedSection = () => {
  const result = useQuery(USER_RECOMMENDATION);
  if (result.loading) return <h3>Loading...</h3>;
  return <BooksTable books={result.data.userRecommendations} />;
};

export default RecommendedSection;
