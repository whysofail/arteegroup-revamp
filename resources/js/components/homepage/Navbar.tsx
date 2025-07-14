'use client';

import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import type { NavItemsProps } from '../ui/resizable-navbar';
import {
    HoveredLink,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarLogo,
    NavBody,
    NavItems,
} from '../ui/resizable-navbar';

type NavbarProps = {
    logo?: string;
    item?: NavItemsProps['items'];
};

export default function Navigation({ logo, item }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Define the navigation items
    // If `item` is provided, use it; otherwise, use the default items
    const navItems = item || [
        {
            name: 'About',
            link: '#about',
        },
        {
            name: 'Works',
            link: '#works',
        },
        {
            name: 'Products',
            dropdown: (
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="https://algochurn.com">Algochurn</HoveredLink>
                    <HoveredLink href="https://tailwindmasterkit.com">Tailwind Master Kit</HoveredLink>
                    <HoveredLink href="https://gomoonbeam.com">Moonbeam</HoveredLink>
                    <HoveredLink href="https://userogue.com">Rogue</HoveredLink>
                </div>
            ),
        },
        {
            name: 'Services',
            dropdown: (
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
            ),
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ];

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo logo={logo} />
                <NavItems items={navItems} />
                <div className="z-20 hidden md:block">
                    <Button
                        variant="outline"
                        className="border-brand text-brand rounded-full bg-transparent transition hover:bg-white hover:text-black"
                    >
                        <Link href="#get-in-touch">Get in Touch</Link>
                    </Button>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo logo={logo} />
                    <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link || '#'}
                            className="block px-2 py-1 text-neutral-600 dark:text-neutral-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
