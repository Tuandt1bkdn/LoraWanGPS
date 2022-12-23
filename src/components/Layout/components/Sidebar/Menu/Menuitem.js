import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import stlyles from './Menu.module.scss';

const cx = classNames.bind(stlyles);

function MenuItem({ title, to, icon }) {
  return (
    <NavLink
      className={(nav) =>
        cx('mx-4 text-xl py-2', {
          'text-purple-700': nav.isActive,
          'text-gray-100': !nav.isActive,
        })
      }
      to={to}>
      <FontAwesomeIcon icon={icon} />
      <span className={cx('title')}>{title} </span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
export default MenuItem;
