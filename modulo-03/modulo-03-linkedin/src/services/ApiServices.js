const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export { fetchContacts };
