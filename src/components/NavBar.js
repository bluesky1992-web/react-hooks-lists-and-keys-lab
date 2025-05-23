import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const arrStr = links.map(link => <a key={link} href={`#${link}`}>{link}</a> )

  return <nav>{arrStr}</nav>;
}

export default NavBar;
