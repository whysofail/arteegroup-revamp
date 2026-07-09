import { cn } from '@/lib/utils';
import { IWork } from '@/types/data.type';
import WorkCard from './card-work';

interface BentoGridProps {
    className?: string;
    children: React.ReactNode;
}

interface BentoGridWorkItemProps {
    work: IWork;
    className?: string;
}

export function BentoGrid({ className, children }: BentoGridProps) {
    return <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[22rem] md:grid-cols-3', className)}>{children}</div>;
}

export function BentoGridWorkItem({ work, className }: BentoGridWorkItemProps) {
    return (
        <div className={cn('group/bento shadow-input row-span-1 flex h-full flex-col justify-between space-y-4', className)}>
            <WorkCard work={work} />
        </div>
    );
}
