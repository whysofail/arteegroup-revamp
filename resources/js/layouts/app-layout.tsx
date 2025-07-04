import Footer from '@/components/homepage/Footer';
import Navbar from '@/components/homepage/Navbar';
import { Separator } from '@/components/ui/separator';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <>
        <Navbar />
        {children}
        <Separator />
        <Footer />
    </>
);
