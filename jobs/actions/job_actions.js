import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'

import {
    FETCH_JOBS,
    LIKE_JOB
} from './types'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'

const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2', // version
  latlong: 1, // get back latitude and longitude that we get a job, user can visually see the exact location of job
  radius: 10, // 10 miles of center latitude and longitude
  q: 'javascript'
}

const buildJobsUrl = (zip) => {
  // I want to take all of the different properties out of job query programs and add them to the subject.
  // And then I also want to add in the location
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
  // We'll return template string to take the job routes
  return `${JOB_ROOT_URL}${query}`
}

// From 'MapScreen': we're going to pass the entire 'region' object over to the action creator
export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    // convert latlong to zip
    let zip = await reverseGeocode(region)
    const url = buildJobsUrl(zip)
    // Make the actual network request over to Indeed, fetch that list of jobs and return as a response object
    let { data } = await axios.get(url)
    // dispatch action
    dispatch({ type: FETCH_JOBS, payload: data })
    // navigate to deck screen
    callback()
  } catch(e) {
      console.error(e)
  }
}

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  }
}