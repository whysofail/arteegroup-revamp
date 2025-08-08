'use client';

import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import type { NavItemsProps } from '../ui/resizable-navbar';
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarLogo, NavBody, NavItems } from '../ui/resizable-navbar';

type NavbarProps = {
    logo?: string;
    item?: NavItemsProps['items'];
    backgroundColor?: string;
};

// utils/isColorLight.ts
export function isColorLight(hexColor: string): boolean {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186; // higher = lighter
}

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
            children: [
                { label: 'Algochurn', url: 'https://algochurn.com' },
                { label: 'Tailwind Master Kit', url: 'https://tailwindmasterkit.com' },
                { label: 'Moonbeam', url: 'https://gomoonbeam.com' },
                { label: 'Rogue', url: 'https://userogue.com' },
            ],
        },
        {
            name: 'Services',
            children: [
                { label: 'Web Development', url: '/web-dev' },
                { label: 'Interface Design', url: '/interface-design' },
                { label: 'Search Engine Optimization', url: '/seo' },
                { label: 'Branding', url: '/branding' },
            ],
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ];

    // State to track which mobile dropdowns are open
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});
    // const isLight = isColorLight(backgroundColor || '#ffffff');
    return (
        <Navbar className="navbar">
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
                    {navItems.map((item, idx) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isOpen = !!openDropdowns[idx];

                        return (
                            <div key={idx} className="w-full">
                                <div
                                    className="flex w-full items-center justify-between px-2 py-2 text-neutral-800 dark:text-neutral-200"
                                    onClick={() => {
                                        if (hasChildren) {
                                            setOpenDropdowns((prev) => ({
                                                ...prev,
                                                [idx]: !prev[idx],
                                            }));
                                        } else {
                                            setIsMobileMenuOpen(false);
                                        }
                                    }}
                                >
                                    <a href={item.link || '#'}>{item.name}</a>
                                    {hasChildren && (
                                        <button className="text-brand text-sm" type="button">
                                            {isOpen ? '-' : '+'}
                                        </button>
                                    )}
                                </div>

                                {/* Dropdown */}
                                {hasChildren && isOpen && (
                                    <div className="ml-4 mt-2 flex flex-col space-y-1">
                                        {item.children?.map((child, childIdx) => (
                                            <a
                                                key={childIdx}
                                                href={child.url || '#'}
                                                className="px-2 py-1 text-sm text-neutral-600 dark:text-neutral-300"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
