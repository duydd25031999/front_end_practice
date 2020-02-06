import { config } from '../config'

export const api = function({ url, type, data, success, error }) {
  return $.ajax({
    processData: true,
    async: true,
    timeout: config.API_TIMEOUT,
    url,
    type,
    data,
    success,
    error
  });
};
