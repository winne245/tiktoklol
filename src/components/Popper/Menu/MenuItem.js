import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
