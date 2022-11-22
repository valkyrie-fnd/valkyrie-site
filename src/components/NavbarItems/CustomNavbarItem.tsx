import React from 'react'
import clsx from 'clsx'
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from '@theme/NavbarItem/DefaultNavbarItem';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import styles from './styles.module.css'
type NavbarItem = {
  to: string
  label: string
}
type PropsDesktop = DesktopOrMobileNavBarItemProps & {
  items: NavbarItem[]
}

type PropsMobile = DesktopOrMobileNavBarItemProps & {
  items: NavbarItem[]
}

type WrapperProps = Props & {
  items: NavbarItem[]
}

function NavbarItemDesktop({
  className,
  isDropdownItem = false,
  label,// Should use label on items
  items,
  ...props
}: PropsDesktop) {
  return (
    <div className={`navbar__items ${styles.navbarItemsCustom}`}>
      {items.map(i => (
        <NavbarNavLink
          key={'navbarLink-' + i.label}
          className={clsx(
            isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link',
            className,
          )}
          isDropdownLink={isDropdownItem}
          {...i}{...props}
        />
      ))}
    </div>
  );
}

function NavbarItemMobile({
  className,
  isDropdownItem,
  label,// Should use label from items
  items,
  ...props
}: PropsMobile) {
  return (<>
    {
      items.map(i => (
        <li className="menu__list-item">
          <NavbarNavLink className={clsx('menu__link', className)} {...i} {...props} />
        </li>
      ))}
  </>
  );
}

export default function ({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: WrapperProps): JSX.Element {
  const Comp = mobile ? NavbarItemMobile : NavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? 'menu__link--active' : 'navbar__link--active')
      }
    />
  );
}