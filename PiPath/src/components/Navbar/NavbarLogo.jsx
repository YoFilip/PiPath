import React from "react";

function NavbarLogo({ onNavigate }) {
  return (
    <a
      href="#home"
      onClick={() => onNavigate("home")}
      className="text-2xl font-bold text-logoTextColor">
      PiPath
    </a>
  );
}

export default NavbarLogo;
