import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

export default function Alert({ children }) {
  return (
    <div className="border-l-4 border-red-400 bg-red-50 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">{children}</p>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.element,
};
