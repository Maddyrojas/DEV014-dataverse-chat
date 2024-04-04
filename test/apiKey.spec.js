import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    const apiKey = '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';
    localStorage.setItem('apiKey', apiKey)
    expect(getApiKey()).toEqual(apiKey);
  });
});

describe('setApiKey', () => {
  it('correctly set the API KEY', () => {
    const apiKey = 'newApiKey';
    setApiKey(apiKey);
    const localStorageApiKey = localStorage.getItem('apiKey',);
    expect(localStorageApiKey).toEqual(apiKey);
  });
  it('should remove ApiKey if it is empty', () => {
    const emptyApiKey = null;
    setApiKey(emptyApiKey);
    const localStorageApiKey = localStorage.getItem('apiKey',);
    expect(localStorageApiKey).toEqual(emptyApiKey);
  });
});