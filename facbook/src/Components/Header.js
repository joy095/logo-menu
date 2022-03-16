import React from "react";

function Header() {
  return (
    <div>
      <div className="header">
        <ul id="header-left">
          <li>
            <img src="./img/facebook-icon.svg" id="logo" />
          </li>
          <li>
            <img src="./img/search-icon.svg" id="search" />
          </li>
        </ul>

        <ul id="header-middle">
          <li>
            <img src="./img/home-icon.svg" id="home" />
            <span className="logo-name">Home</span>
          </li>
          <li>
            <img src="./img/marketplace-icon.svg" id="marketplace" />
            <span className="logo-name">Marketplace</span>
          </li>
          <li>
            <img src="./img/group-icon.svg" id="group" />
            <span className="logo-name">Group</span>
          </li>
          <li>
            <img src="./img/gaming-icon.svg" id="gaming" />
            <span className="logo-name">Gaming</span>
          </li>
        </ul>

        <ul id="header-right">
          <li>
            <img src="./img/my-icon.svg" id="my-icon" />
          </li>
          <li>
            <img src="/img/add-icon.svg" id="add" />
            <span className="logo-name">Add</span>
          </li>
          <li id="menu-icon">
            <img src="/img/menu-icon.svg" id="menu" />
            <span className="logo-name">Menu</span>
          </li>
          <li>
            <img src="/img/messenger-icon.svg" id="messenger" />
            <span className="logo-name">Messenger</span>
          </li>
          <li>
            <img src="/img/notification-icon.svg" id="notification" />
            <span className="logo-name">Notification</span>
          </li>
          <li>
            <img src="/img/account-icon.svg" id="account" />
            <span className="logo-name">Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
