import Footer from '@/components/homepage/Footer';
import { usePage } from '@inertiajs/react';
// import Navbar from '@/components/homepage/Navbar';

import Navigation from '@/components/homepage/Navbar';
import { NavItemsProps } from '@/components/ui/resizable-navbar';
import { Separator } from '@/components/ui/separator';
import { type BreadcrumbItem } from '@/types';
import { ISiteSettings, NavbarLink } from '@/types/global';
import { type ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export const transformNavbarLinks = (links: NavbarLink[]): NavItemsProps['items'] => {
    return links.map((link) => {
        if (link.children?.length) {
            return {
                name: link.label,
                link: link.url || '#',
                dropdown: (
                    <div className="flex flex-col space-y-4 text-sm">
                        {link.children.map((child, idx) => (
                            <a key={idx} href={child.url || '#'} className="hover:underline">
                                {child.label}
                            </a>
                        ))}
                    </div>
                ),
            };
        }

        return {
            name: link.label,
            link: link.url,
        };
    });
};

export default ({ children, ...props }: AppLayoutProps) => {
    const { siteSettings } = usePage().props as unknown as { siteSettings: ISiteSettings };
    const navbarLinks = transformNavbarLinks(siteSettings?.navbar_links) || [];
    return (
        <>
            <div className="relative">
                <Navigation logo={siteSettings?.navbar_logo} item={navbarLinks} />
                {children}
                <Separator />
                <Footer />
            </div>
            <Toaster />
        </>
    );
};
