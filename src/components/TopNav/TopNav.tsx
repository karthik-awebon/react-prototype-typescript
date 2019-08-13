import * as React from 'react';

import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { MenuItem, SimpleMenu } from '@rmwc/menu';
import { TextField } from '@rmwc/textfield';
import { IconButton } from '@rmwc/icon-button';
import { Button } from '@rmwc/button';

import '@material/layout-grid/dist/mdc.layout-grid.css';

import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';

import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/list/dist/mdc.list.css';

import { ReactComponent as Logo } from './logo.svg';
import styles from './TopNav.module.css';

const TopNav: React.FC = () => {
  return (
    <Grid data-test="top-nav-wrapper" className={styles.TopNav}>
      <GridCell span={9}>
        <Logo data-test="top-nav-logo" />
      </GridCell>
      <GridCell span={2} className={styles.SearchWrapper}>
        <TextField
          icon="search"
          trailingIcon={{
            icon: 'close',
            tabIndex: 0,
            onClick: () => console.log('Clear')
          }}
          label="search..."
          data-test="top-nav-search"
        />
      </GridCell>
      <GridCell span={1} className={styles.HelpWrapper}>
        <IconButton icon="help" />
      </GridCell>
      <GridCell span={6}>
        <GridInner>
          <SimpleMenu
            handle={<IconButton icon="menu" />}
            anchorCorner={'bottomLeft'}
            data-test="top-nav-menu"
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Account</MenuItem>
          </SimpleMenu>
          <SimpleMenu
            handle={<Button>File</Button>}
            anchorCorner={'bottomLeft'}
          >
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </SimpleMenu>
          <SimpleMenu
            handle={<Button>Edit</Button>}
            anchorCorner={'bottomLeft'}
          >
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
            <MenuItem>Select All</MenuItem>
            <MenuItem>Delete</MenuItem>
          </SimpleMenu>
          <SimpleMenu
            handle={<Button>Theme</Button>}
            anchorCorner={'bottomLeft'}
          >
            <MenuItem>Light</MenuItem>
            <MenuItem>Dark</MenuItem>
            <MenuItem>Fortnightly</MenuItem>
          </SimpleMenu>
        </GridInner>
      </GridCell>
    </Grid>
  );
};

export default TopNav;
