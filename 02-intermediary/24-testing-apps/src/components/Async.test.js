import { render, screen } from "@testing-library/react";
import Async from './Async.js'

describe('Async component', () => {
    // Arrange
    test('renders posts if request succeeds', async () => {
        // .fn creates a mock function
        window.fetch = jest.fn()
        // This is the response we expect to get from the request, so we can simulate
        // a response sent by the real fetch function
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        })
        render(<Async />)

    // Act
    // ... nothing

    // Assert
    // getByRole() fails if there is more than one item with that role
    // The getAllByRole() searches immediatly for the items, but in this case,
    // they are just rendered after the fetch request responds

    // The findAllByRole() returns a promise, and by default waits for 1s before checking
    // if the elements exists.
    const listItemElements = await screen.findAllByRole('listitem')
    expect(listItemElements).not.toHaveLength(0)

    })
})