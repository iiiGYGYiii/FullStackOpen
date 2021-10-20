import client from "../client";
import { ALL_BOOKS } from "../queries/queries";

const includedIn = (set, object) => set.map((p) => p.id).includes(object.id);

export const updateCacheWith = (bookAdded) => {
  const dataInStore = client.readQuery({
    query: ALL_BOOKS,
  });
  console.log(dataInStore);
  if (!includedIn(dataInStore.allBooks, bookAdded)) {
    client.writeQuery({
      query: ALL_BOOKS,
      data: {
        allBooks: dataInStore.allBooks.concat(bookAdded),
      },
    });
  }
};

export const onSubscriptionData = ({ subscriptionData }) => {
  const { bookAdded } = subscriptionData.data;

  console.log(`${bookAdded.title} has been added.`);
  updateCacheWith(bookAdded);
};
