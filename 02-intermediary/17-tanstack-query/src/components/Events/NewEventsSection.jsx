import { useQuery } from '@tanstack/react-query'
 
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js'

export default function NewEventsSection() {
  // This will send an HTTP request behind the scenes, take that event data and set up a loading state for us.
  // It requires that you write the fetch function and then pass it as the queryFn, and a queryKey,
  // basically an id for each query that is made, to store that data and retrieve it faster next time.
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { max: 3 }],
    // Query returns a default object to this queryFn function
    queryFn: ({signal}) => fetchEvents({signal, max: 3}),
    // Time to send another request to see if it is needed to update the data
    staleTime: 5000,
    // Determines for how much time the cached data will stay stored
    gcTime: 30000
  })


  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events.'}/>
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
