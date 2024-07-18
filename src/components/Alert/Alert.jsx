import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="border-l-4 border-red-400 bg-red-50 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            Incorrect email / password combination. Please try again.
          </p>
        </div>
      </div>
    </div>
  );
}
