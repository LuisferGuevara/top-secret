import axios from 'axios';
import { stopSpinner, startSpinner } from '../state/global.actions';

const { MODE } = import.meta.env;

/**
 * Provider: axios, fetch...
 * baseUrl: (server route) https://localhost:3000
 * prefix: if api has prefix (in our case /api/v1/)
 */
class HttpFactory {
  constructor(provider, baseUrl, prefix = '') {
    this.provider = provider;
    this.baseUrl = baseUrl;
    this.url = `${baseUrl}${prefix}`;
  }

  setConfig() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.baseUrl,
      },
      withCredentials: true,
      timeout: 3000,
    };
  }

  async request(path, options, data = {}) {
    options.spinner && startSpinner(options.spinner);

    const config = { url: this.url + path, ...this.setConfig(), ...options };
    if(data) config.data = data;

    return await this.provider(config)
      .then(({ data }) => {
        console.log(data);
        console.log('[REQUEST OK]: ', data);
        return data;
      })
      .catch(result => {
        const message = result.code === 'ERR_NETWORK' ? 'Error al conectar con el servidor' : null;
        const { response } = result;
        console.log(response?.data);
        console.log('[SERVER ERROR]: ', response?.data?.message || message);
        return { error: true, message: message || 'Inténtelo de nuevo', ...response?.data };
      })
      .finally(() => options.spinner && stopSpinner(options.spinner));

    // TODO Crear Interceptor de errores siguiendo Interceptor Error pattern;
  }

  mock(_, data, options) {
    options.spinner && startSpinner(options.spinner);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
        options.spinner && stopSpinner(options.spinner);
      }, 1500);
    });
  }

  get(path, options) {
    return this.request(path, { method: 'get', ...options });
  }

  post(path, data, options) {
    return this.request(path, { method: 'post', ...options }, data);
  }

  put(path, data, options) {
    return this.request(path, { method: 'put', ...options }, data);
  }

  delete(path, options) {
    return this.request(path, { method: 'delete', ...options });
  }
}

// TODO create enviroments and get here auto back url

const servers = {
  dev: 'http://localhost:4000',
  prod: 'TODOTODOTOD',
};

export const http = new HttpFactory(axios, servers[MODE], '/api/v1');
