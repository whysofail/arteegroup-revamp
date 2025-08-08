import Footer from '@/components/homepage/Footer';
import { usePage } from '@inertiajs/react';
// import Navbar from '@/components/homepage/Navbar';

import Navigation from '@/components/homepage/Navbar';
import { NavItemsProps } from '@/components/ui/resizable-navbar';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
// import { type BreadcrumbItem } from '@/types';
import { ISiteSettings, NavbarLink } from '@/types/global';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    // breadcrumbs?: BreadcrumbItem[];
    customCSS?: string; // Optional custom CSS from division
}

export const transformNavbarLinks = (links: NavbarLink[]): NavItemsProps['items'] => {
    if (!links || !Array.isArray(links)) return [];

    return links.map((link) => ({
        name: link.label,
        link: link.url || '#',
        hasDropdown: !!link.children?.length,
        children: link.children || [], // pass raw children
    }));
};

export default ({ children, customCSS }: AppLayoutProps) => {
    const { siteSettings } = usePage().props as unknown as {
        siteSettings: ISiteSettings;
    };

    const navbarLinks = transformNavbarLinks(siteSettings?.navbar_links) || [];

    return (
        <>
            <div className="">
                <Navigation logo={siteSettings?.navbar_logo} item={navbarLinks} />
                {children}
                <Separator />
                <Footer />
            </div>
            {customCSS && <style dangerouslySetInnerHTML={{ __html: customCSS }} />}

            <Toaster />
        </>
    );
};
