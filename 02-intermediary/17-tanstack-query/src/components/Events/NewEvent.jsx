import { Link, useNavigate } from 'react-router-dom';
// You only use useQuery to get data
import { useMutation } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock'
import { createNewEvent } from '../../util/http'
import { queryClient } from '../../util/http'

export default function NewEvent() {
  const navigate = useNavigate();

  // You call this 'mutate' prop anywhere to trigger the query request.
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      // Tells React Query that data is outdated and should be refetched
      queryClient.invalidateQueries({ queryKey: ['events']  })
      navigate('/events')
    }
  })

  function handleSubmit(formData) {
    mutate({ event: formData })
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && <ErrorBlock title="Failed to create event" message={error.info?.message || 'Failed to create event. Please check your inputs.'} />}
    </Modal>
  );
}
