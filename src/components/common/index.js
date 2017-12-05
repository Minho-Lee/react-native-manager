// these lines will import and export all at once everything from where the file loc is specified
// index.js usually exists in each folder to aggregate and make all other components accessible from
// a single entry point.

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';
export * from './ConfirmModal';

// Above statements import/export those modules which means each component no longer can 'export default'

