import { SideBarStyle } from "./SideBar.styled";

export const SideBar = () => {
  return (
    <SideBarStyle>
      <h3>Side Navigation</h3>
      <ul>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
        <li>
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </SideBarStyle>
  );
};
