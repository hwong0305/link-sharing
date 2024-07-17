import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import { platforms } from '../../lib/constants';
import './Dropdown.css';

export default function Dropdown({ selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">Platform</Label>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img alt="" src={selected.icon} className="h-5 w-5 flex-shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {platforms.map(platform => (
            <ListboxOption
              key={platform.id}
              value={platform}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:devlinks__secondary-background-2 option__divider last:border-b-0"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={platform.icon}
                  className="h-5 w-5 flex-shrink-0 rounded-full group-data-[selected]:svg__primary"
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:devlinks__primary-color">
                  {platform.name}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

Dropdown.propTypes = {
  selected: PropTypes.object,
  setSelected: PropTypes.func,
};
