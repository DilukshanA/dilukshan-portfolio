'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import dilukshan_logo from './../../public/assets/dilukshan_logo.png'
import ThemeToggleButton from './ThemeToggleButton';
import { Button } from './ui/button';
import { FiGithub } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// Define navigation item structure with support for deeper nesting
type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

// Define sidebar navigation that can appear in dropdowns
// type SidebarSection = {
//   title: string;
//   items: NavItem[];
// };

// Define main navigation items
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Reference',
    href: '#',
    children: [
      { label: 'API Reference', href: '/' },
      { label: '<ReactFlow />', href: '/reference/reactflow' },
      { label: '<ReactFlowProvider />', href: '/reference/reactflowprovider' },
      { 
        label: 'Components', 
        href: '/reference/components',
        children: [
          { label: 'Background', href: '/reference/components/background' },
          { label: 'Controls', href: '/reference/components/controls' },
          { label: 'MiniMap', href: '/reference/components/minimap' },
          { label: 'Panel', href: '/reference/components/panel' },
        ]
      },
      { 
        label: 'Hooks', 
        href: '/reference/hooks',
        children: [
          { label: 'useReactFlow', href: '/reference/hooks/use-react-flow' },
          { label: 'useNodes', href: '/reference/hooks/use-nodes' },
          { label: 'useEdges', href: '/reference/hooks/use-edges' },
          { label: 'useViewport', href: '/reference/hooks/use-viewport' },
        ]
      },
      { 
        label: 'Types', 
        href: '/reference/types',
        children: [
          { label: 'Node', href: '/reference/types/node' },
          { label: 'Edge', href: '/reference/types/edge' },
          { label: 'Viewport', href: '/reference/types/viewport' },
        ]
      },
      { 
        label: 'Utils', 
        href: '/reference/utils',
        children: [
          { label: 'getIncomers', href: '/reference/utils/get-incomers' },
          { label: 'getOutgoers', href: '/reference/utils/get-outgoers' },
          { label: 'getConnectedEdges', href: '/reference/utils/get-connected-edges' },
        ]
      },
    ],
  },
  {
    label: 'Projects',
    href: '#',
    children: [
      { label: 'Changelog', href: '/changelog' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Playground', href: '/playground' },
    ],
  },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Changelog', href: '/changelog' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Playground', href: '/playground' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isAboveMd = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const toggleSubMenu = (label: string) => {
    const newOpenSubMenus = new Set(openSubMenus);
    if (newOpenSubMenus.has(label)) {
      newOpenSubMenus.delete(label);
    } else {
      newOpenSubMenus.add(label);
    }
    setOpenSubMenus(newOpenSubMenus);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:text-white bg-white/30 backdrop-blur-md dark:bg-black/30">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl text-black dark:text-white font-bold flex items-center">
              <div className="mr-2">
                <img src={dilukshan_logo.src} alt="Logo" className="h-8 w-8" />
              </div>
              Dilukshan
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2" ref={isAboveMd ? dropdownRef : null}>
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => toggleDropdown(item.label)}
                className={`flex items-center px-3 py-2 text-sm font-medium hover:text-pink-500 ${
                pathname === item.href? 'text-pink-500' : 'text-gray-700 dark:text-white'
                }`}
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
                
                {item.children && (
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {item.children && openDropdown === item.label && (
                <div className="absolute z-10 mt-1 w-56 rounded-md bg-white shadow-lg border border-gray-200">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <div key={child.label}>
                        {!child.children ? (
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() => toggleSubMenu(child.label)}
                              className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {child.label}
                              <ChevronRight
                                className={`ml-1 h-4 w-4 transition-transform ${
                                  openSubMenus.has(child.label) ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                            {openSubMenus.has(child.label) && (
                              <div className="pl-4">
                                {child.children.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-2">
          <ThemeToggleButton/>
          <Button variant="outline" size="icon" className='h-8 w-8 rounded-md'>
            <FiGithub className="absolute text-bold h-8 w-8" />
          </Button>
          <Button variant="outline" className='bg-pink-500 hover:bg-blue-500 dark:bg-pink-500 dark:hover:bg-blue-500'>
            Hire Me
            <MdOutlineKeyboardDoubleArrowRight />
          </Button>
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="space-y-1 px-2 py-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {!item.children ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      pathname === item.href? 'text-pink-500' : 'text-gray-700 dark:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex w-full items-center justify-between px-3 py-2 text-base font-medium ${
                      pathname === item.href? 'text-pink-500' : 'text-gray-700 dark:text-white'
                    }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <div key={child.label}>
                            {!child.children ? (
                              <Link
                                href={child.href}
                                className="block border-l-2 border-gray-200 pl-4 py-2 text-gray-600 hover:text-gray-900
                                dark:text-gray-100 dark:hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ) : (
                              <>
                                <button
                                  onClick={() => toggleSubMenu(child.label)}
                                  className="flex w-full items-center justify-between border-l-2 border-gray-200 pl-4 py-2 text-gray-600 hover:text-gray-900
                                  dark:text-gray-100 dark:hover:text-white"
                                >
                                  {child.label}
                                  <ChevronDown
                                    className={`h-5 w-5 transition-transform ${
                                      openSubMenus.has(child.label) ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {openSubMenus.has(child.label) && (
                                  <div className="pl-6 space-y-1">
                                    {child.children.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        className="block border-l-2 border-gray-200 pl-4 py-2 text-gray-500 hover:text-gray-800
                                        dark:text-gray-100 dark:hover:text-white"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;