/**
 * Mocking client-server processing
 */
import _lessons from './lessons.json'

const TIMEOUT = 100

export default {
  getLessons(callback) {
    setTimeout(() => callback(_lessons), TIMEOUT)
  }
}
