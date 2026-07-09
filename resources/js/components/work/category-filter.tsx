import { ICategory } from '@/types/data.type';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Button } from '../ui/button';

interface Props {
    categories: ICategory[];
    selectedCategory?: string;
}

export default function CategoryFilter({ categories, selectedCategory }: Props) {
    const applyFilter = (category?: string) => {
        router.get(
            route('work'),
            {
                category,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    return (
        <div className="flex flex-wrap gap-2">
            <Button
                onClick={() => applyFilter()}
                variant={!selectedCategory ? 'selected' : 'default'}
                className="hover:bg-brand rounded-2xl hover:text-white"
            >
                All
            </Button>

            {categories.map((category) => (
                <Button
                    key={category.id}
                    onClick={() => applyFilter(category.slug)}
                    variant={selectedCategory === category.slug ? 'selected' : 'default'}
                    className="hover:bg-brand rounded-2xl hover:text-white"
                >
                    {category.name}
                </Button>
            ))}
        </div>
    );
}
