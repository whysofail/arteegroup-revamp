import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <header className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between bg-transparent px-8 py-4">
            <img src="/artee-logo.png" alt="artee" className="h-6" />
            <nav className="space-x-6 text-white">
                <Link className="hover:underline hover:text-brand" href="#">About</Link>
                <Link className="hover:underline hover:text-brand" href="#">Work</Link>
                <Link className="hover:underline hover:text-brand" href="#">Culture</Link>
                <Link className="hover:underline hover:text-brand" href="#">Contact</Link>
            </nav>
            <Button variant="outline" className="rounded-full bg-transparent border-brand text-brand transition hover:bg-white hover:text-black">
                Get in Touch
            </Button>
        </header>
    );
}