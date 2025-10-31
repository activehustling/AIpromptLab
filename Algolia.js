import { algoliasearch } from 'algoliasearch';

const client = algoliasearch('MFPEBUWDNP', '9e132117177be3c42d4b68b11bef022f');

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch('https://dashboard.algolia.com/api/1/sample_datasets?type=movie');
  const movies = await datasetRequest.json();
  return await client.saveObjects({ indexName: 'movies_index', objects: movies });
};

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch((err) => console.error(err));
