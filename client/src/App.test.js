import { render, screen } from '@testing-library/react';
// import App from './App';
import { Header, Map, Markers } from './components';
// import renderer from 'react-test-renderer';


test('Exports components', () => {
  expect(typeof Header).toBe('function');
  expect(typeof Map).toBe('function');
  expect(typeof Markers).toBe('function');
})
