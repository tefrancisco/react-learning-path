import { useQuery, useMutation } from '@tanstack/react-query'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchEvent, updateEvent, queryClient } from '../../util/http'

import Modal from '../UI/Modal.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator'
import EventForm from './EventForm.jsx';

export default function EditEvent() {
  const params = useParams()
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    // Executes right after you call mutate, does not wait for the backend response
    // This data is the same you passed to the mutate function
    onMutate: async (data) => {
      // Manipulates the cached data without waiting for a response
      const newEvent = data.event
      await queryClient.cancelQueries({queryKey: ['events', params.id]})
      // Get the old data to use it if the backend query fails
      const previousEvent  = queryClient.getQueryData(['events', params.id])
      // Optmistically updating the data
      queryClient.setQueryData(['events', params.id], newEvent)

      // This object is the error's context
      return { previousEvent }
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousEvent)
    },
    // This is called either if it fails or succeed, just to make sure that the data
    // between front and backend is synced
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id])
    }
  })

  function handleSubmit(formData) {
    mutate({
      id: params.id,
      event: formData
    })
    navigate('../')
   }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = <div className="center">
      <LoadingIndicator />
    </div>
  }

  if (isError) {
    content = <>
      <ErrorBlock title="Failed to load event." message={error.info?.message || 'Failed.'} />
      <div className="form-actions">
        <Link to="../" className="button" />
      </div>
    </>
  }

  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

// export function loader({params}) {
//   return queryClient.fetchQuery({
//     queryKey: ['events', params.id],
//     queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
//   })
// }
