import { Button } from '@/components/ui/button';
import { IHeroBlock } from '@/types/blocks.type';
import HeroBlock from '../block/hero-block';

export default function HeroSection({ data }: IHeroBlock) {
    const hasData = data;

    if (!hasData) {
        return (
            <section className="relative flex h-screen items-center justify-center">
                <img src="/moon.gif" alt="Background Animation" className="absolute z-0 h-full w-full object-cover" />
                <div className="absolute bottom-24 left-0 z-10 w-full">
                    <div className="mx-auto max-w-7xl px-8">
                        <h1 className="mb-4 max-w-xl text-4xl text-white">Create impact through meaningful and loud ideas. With a solid squad.</h1>
                        <Button className="bg-brand mt-4 rounded-full px-6 text-white transition hover:bg-white hover:text-black">
                            Explore Our Works
                        </Button>
                    </div>
                </div>
            </section>
        );
    }

    return <HeroBlock data={data} type="hero" />;
}
//
