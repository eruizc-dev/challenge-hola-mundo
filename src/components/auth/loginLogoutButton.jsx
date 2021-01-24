import React, { useState } from 'react';
import useAuth from "../../redux/auth/useAuth";
import { LogInButton, LoginModal, LoginAlert } from './login';
import { LogOutButton, LogoutAlert } from './logout';

function SessionButton({ onLoginClick, onLogoutClick }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn
    ? <LogOutButton onClick={onLogoutClick} />
    : <LogInButton onClick={onLoginClick} />
}

export default function LoginLogoutButton() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginAlertOpen, setLoginAlertOpen] = useState(false);
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);

  return (
    <>
      <SessionButton
        onLoginClick={() => setLoginModalOpen(true)}
        onLogoutClick={() => setLogoutAlertOpen(true)}
      />
      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSubmit={() => setLoginAlertOpen(true)}
      />
      <LoginAlert
        open={loginAlertOpen}
        onClose={() => setLoginAlertOpen(false)}
      />
      <LogoutAlert
        open={logoutAlertOpen}
        onClose={() => setLogoutAlertOpen(false)}
      />
    </>
  );
}

