import * as data from '../../example_api_response.json';

module.exports = {
  get: () => {
    return Promise.resolve(data)
  }
}