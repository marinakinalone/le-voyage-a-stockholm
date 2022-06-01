import { Header, Map, Markers, Details, ButtonSet } from './components';


test('Exports components', () => {
  expect(typeof Header).toBe('function');
  expect(typeof Map).toBe('function');
  expect(typeof Markers).toBe('function');
  expect(typeof Details).toBe('function');
  expect(typeof ButtonSet).toBe('function');
})