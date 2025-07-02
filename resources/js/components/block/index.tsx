// components/block/index.tsx
import type { IBlock } from '@/types/blocks.type';
import { lazy, Suspense } from 'react';

// Glob import
const modules = import.meta.glob('./*-block.tsx');

// Wrapper component that resolves the lazy component at runtime
export function RenderBlock({ type, data }: { type: string; data?: IBlock['data'] }) {
    const file = Object.keys(modules).find((key) => key.endsWith(`${type}-block.tsx`));

    if (!file) return null;

    const LazyComponent = lazy(modules[file] as () => Promise<{ default: React.ComponentType<{ data?: IBlock['data'] }> }>);

    return (
        <Suspense fallback={<div>Loading {type}...</div>}>
            <LazyComponent data={data} />
        </Suspense>
    );
}
