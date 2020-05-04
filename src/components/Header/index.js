import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notifications'

import logo from '~/assets/logo-purple.svg'
import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          
          <Notification/>

          <Profile>
            <div>
              <strong>Anderson Silva</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Anderson Silva"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;