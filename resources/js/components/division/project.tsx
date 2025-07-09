import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import clsx from 'clsx';
import React, { useState } from 'react';

const services = [
    'Brand strategy',
    'Brand identity',
    'Art direction',
    'ATL & BTL concept',
    'Collateral design',
    'Packaging design',
    'Annual report design',
];

interface ProjectProps {
    color?: string;
}

const budgets = ['10K - 20K', '20K - 50K', 'more than 50K'];

const Project: React.FC<ProjectProps> = ({ color }) => {
    const [agree, setAgree] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

    const toggleService = (service: string) => {
        setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));
    };

    return (
        <section className="text-white">
            <div className="mx-auto md:max-w-2xl px-8">
                <div className="mb-20 flex flex-col justify-between gap-6">
                    <h1 className="mb-5 text-center text-xl md:text-3xl">Please tell us about your project</h1>
                    <div className="text-sm">Service</div>
                    <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                            <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className={clsx(
                                    'rounded-full border px-4 py-2 text-sm transition',
                                    selectedServices.includes(service)
                                        ? 'bg-brand border-brand text-white'
                                        : 'border-white text-white hover:bg-white hover:text-black',
                                )}
                                style={{ backgroundColor: selectedServices.includes(service) ? color : 'transparent' }}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm">Budget in Rupiah</div>
                    <div className="flex flex-wrap gap-2">
                        {budgets.map((budget) => (
                            <button
                                key={budget}
                                type="button"
                                onClick={() => setSelectedBudget(budget)}
                                className={clsx(
                                    'rounded-full border px-4 py-2 text-sm transition',
                                    selectedBudget === budget
                                        ? 'bg-brand border-brand text-white'
                                        : 'border-white text-white hover:bg-white hover:text-black',
                                )}
                                style={{ backgroundColor: selectedBudget === budget ? color : 'transparent' }}
                            >
                                {budget}
                            </button>
                        ))}
                    </div>
                    <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Input placeholder="Your name" className="text-white" />
                        <Input placeholder="Your email" className="text-white" />
                        <div className="sm:col-span-2">
                            <Input placeholder="A few word about project" className="text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-sm sm:col-span-2">
                            <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(!!v)} className="border-white md:mt-0.5" />
                            <label htmlFor="agree" className="leading-relaxed text-white">
                                I confirm that I have read and agree to the{' '}
                                <a href="/privacy-policy" className="text-brand hover:underline" style={{ color: color }}>
                                    privacy policy
                                </a>
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <Button className="bg-brand w-full rounded-full text-white transition hover:bg-white hover:text-black" style={{ backgroundColor: color }}>
                                Let's discuss
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Project;