import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

type NavbarProps = {};

export const Navbar: React.FC = (props: NavbarProps) => {
  return (
    <nav>
      {/* TODO: Logo */}
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/places">Places</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};