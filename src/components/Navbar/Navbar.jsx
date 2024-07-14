import PropTypes from 'prop-types';
import LinkIcon from '../../assets/icon-links-header.svg?react';
import PreviewIcon from '../../assets/icon-preview-header.svg?react';
import ProfileDetailsIcon from '../../assets/icon-profile-details-header.svg?react';
import Logo from '../../assets/logo-devlinks-large.svg?react';
import LogoMobile from '../../assets/logo-devlinks-small.svg?react';
import './Navbar.css';

function Navbar({ activeTab, setTab }) {
  return (
    <header className="bg-white min-h-20 p-4">
      {/* Mobile First Header */}
      <nav className="flex flex-row justify-between items-center lg:hidden">
        <div className="inline w-fit">
          <a href="/">
            <LogoMobile />
          </a>
        </div>

        <div className="inline w-fit">
          <button
            type="button"
            className={`w-20 rounded-lg px-4 py-2 ${activeTab === 'link' ? 'tab__active' : ''}`}
            onClick={() => {
              setTab('link');
            }}
          >
            <LinkIcon className="mx-auto" color={activeTab === 'link' ? '#633cff' : '#737373'} />
          </button>
          <button
            type="button"
            className={`w-20 rounded-lg px-4 py-2 ${activeTab === 'detail' ? 'tab__active' : ''}`}
            onClick={() => {
              setTab('detail');
            }}
          >
            <ProfileDetailsIcon
              className="mx-auto"
              color={activeTab === 'detail' ? '#633cff' : '#737373'}
            />
          </button>
        </div>

        <div className="inline w-fit">
          <button
            type="button"
            className="border-solid border px-4 py-2 rounded-lg button__secondary button__secondary__border-primary"
          >
            <PreviewIcon />
          </button>
        </div>
      </nav>
      {/* Larger Screen Header */}
      <nav className="hidden flex-row justify-between items-center lg:flex">
        <div className="inline w-fit">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="inline w-fit">
          <button
            type="button"
            onClick={() => {
              setTab('link');
            }}
            className={`rounded-lg px-4 py-2 ${activeTab === 'link' ? 'tab__active' : ''}`}
          >
            <span className="flex font-bold">
              <LinkIcon className="mr-2" color={activeTab === 'link' ? '#633cff' : '#737373'} />{' '}
              Links
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setTab('detail');
            }}
            className={`rounded-lg px-4 py-2 ${activeTab === 'detail' ? 'tab__active' : ''}`}
          >
            <span
              className={`flex font-bold navbar__tab-text ${
                activeTab === 'detail' ? 'primary' : ''
              }`}
            >
              <ProfileDetailsIcon
                className="mr-2"
                color={activeTab === 'detail' ? '#633cff' : '#737373'}
              />
              Profile Details
            </span>
          </button>
        </div>
        <div className="inline w-fit">
          <button
            type="button"
            className="border-solid border-2 px-4 py-2 font-bold rounded-lg button__primary button__primary-border-primary"
          >
            Preview
          </button>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default Navbar;
