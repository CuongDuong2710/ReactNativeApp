/**
 * Using export (not default)
 * Locate all action creator.
 * Whenever we call action creator they return to action will be automatically dispatched to us
 * and sent to all the different reducers.
 */
export const selectedLibrary = (libraryId) => {
  // An action is how we cause the reducers to update the data that they produce.
  return {
    type: 'select_library',
    payload: libraryId
  }
}