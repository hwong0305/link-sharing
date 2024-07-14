import PropTypes from 'prop-types';
import './previewLink.css';

export default function PreviewLink(props) {
  const getClass = type => {
    switch (type) {
      case 'GitHub':
        return 'github';
      case 'Frontend Mentor':
        return 'frontend-mentor';
      case 'Twitter':
        return 'twitter';
      case 'Facebook':
        return 'facebook';
      case 'YouTube':
        return 'youtube';
      case 'Twitch':
        return 'twitch';
      case 'DevTo':
        return 'devTo';
      case 'Codewars':
        return 'codwars';
      case 'FreeCodeCamp':
        return 'freecodecamp';
      case 'GitLab':
        return 'gitlab';
      case 'Hashnode':
        return 'hashnode';
      case 'Stack Overflow':
        return 'stackOverflow';
      default:
        return '';
    }
  };
  return (
    <li className={`w-60 h-11 rounded-lg px-4 py-2 github ${getClass(props.type)}`}>
      {props.children}
    </li>
  );
}

PreviewLink.propTypes = { children: PropTypes.element, type: PropTypes.string };
