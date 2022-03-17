import { render, screen } from '@testing-library/react';
// import App from './App';
import { Header, Map, Markers, Details, ButtonSet, Button } from './components';
// import renderer from 'react-test-renderer';


test('Exports components', () => {
  expect(typeof Header).toBe('function');
  expect(typeof Map).toBe('function');
  expect(typeof Markers).toBe('function');
  expect(typeof Details).toBe('function');
  expect(typeof ButtonSet).toBe('function');
  expect(typeof Button).toBe('function');
})
