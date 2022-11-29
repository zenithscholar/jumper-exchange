// import {default as NavbarLinks} from './NavbarLinks'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';
import { useLocales } from '@transferto/shared/src/hooks';
import { openInNewTab } from '@transferto/shared/src/utils/';
import { Dispatch, SetStateAction } from 'react';
import { MenuItem, MenuItemLabel } from './Navbar.styled';
interface NavbarMenuItemProps {
  open: boolean;
  openSubMenu: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarMenuItemAbout = ({
  open,
  openSubMenu,
  setOpen,
}: NavbarMenuItemProps) => {
  const { translate } = useLocales();
  const i18Path = 'Navbar.';

  return (
    !!open && (
      <>
        {openSubMenu === 'none' && (
          <MenuItem
            onClick={() => {
              openInNewTab('https://li.fi');
              setOpen(false);
            }}
          >
            <MenuItemLabel>
              <>
                <InfoOutlinedIcon />
                <Typography
                  className="menu-item-label__text"
                  fontSize={'14px'}
                  fontWeight={500}
                  lineHeight={'20px'}
                  ml={'12px'}
                >
                  <>{translate(`${i18Path}NavbarMenu.AboutLIFI`)}</>
                </Typography>
              </>
            </MenuItemLabel>
          </MenuItem>
        )}
      </>
    )
  );
};

export default NavbarMenuItemAbout;
