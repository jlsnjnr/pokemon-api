import { List } from 'phosphor-react';
import logo from './../../../public/logo.png';

export function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <img src={logo} alt="Logo pokémon" />
      <List size={28} color='#fff' />
    </header>
  )
}