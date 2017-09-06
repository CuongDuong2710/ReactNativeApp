import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'

import {
    FETCH_JOBS
} from './types'

const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2', // version
  latlong: 1, // get back latitude and longitude that we get a job, user can visually see the exact location of job
  radius: 10, // 10 miles of center latitude and longitude
  q: 'javascript'
}

// From 'MapScreen': we're going to pass the entire 'region' object over to the action creator
export const fetchJobs = (region) => async (dispatch) => {
  try {
    let zip = reverseGeocode(region)
  } catch(e) {
      console.error(e)
  }
}