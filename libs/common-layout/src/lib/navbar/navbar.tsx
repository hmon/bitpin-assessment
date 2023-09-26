import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { INavbar, INavbarProps } from '@bitpin/shared-models';

import styles from './navbar.module.scss';

export function Navbar(props: INavbarProps) {
  const { navbarItems } = props;

  const renderItem = (item: INavbar) => (
    <li key={item.id}>
      <Link href={item.href} target={item.target}>
        {item.title}
      </Link>
      <div className={styles['ker']} />
    </li>
  );

  const renderNavbarItems = () => navbarItems?.map((item) => renderItem(item));

  return (
    <nav className={styles['navbar']}>
      <div className="container">
        <div className="section-right">
        <Image
          src="/logo.svg"
          data-testid="logo-image"
          alt='logo'
          width={150}
          height={20}
        />

        <ul className={styles['navigation-container']}>
          {renderNavbarItems()}
        </ul>
        </div>
      </div>
    </nav>
  );
}

function propsAreEqual(prev: INavbarProps, next: INavbarProps) {
  return prev.navbarItems === next.navbarItems
}

export default memo(Navbar, propsAreEqual)
