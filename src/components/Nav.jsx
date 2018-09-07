import React from 'react';
import UserAvatar from './UserAvatar';
import { PageHeader } from 'react-bootstrap';

const Nav = () => (
  <div className="nav">
    <PageHeader>
      Example page header <small>Subtext for header</small>
      <UserAvatar size="small" />
    </PageHeader>;
  </div>
);

export default Nav;