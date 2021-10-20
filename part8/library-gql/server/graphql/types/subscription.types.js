const { gql } = require("apollo-server");

const subscriptionTypes = gql`
  type Subscription {
    bookAdded: Book!
  }
`;

module.exports = subscriptionTypes;
