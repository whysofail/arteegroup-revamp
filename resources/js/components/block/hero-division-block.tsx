'use client';

import { getRelativePath } from '@/lib/get-relative-path';
<<<<<<< HEAD
import { HeroDivisionProps } from '@/types/blocks.type';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
=======
import { IDivision, IHeroBlock } from '@/types/blocks.type';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface HeroDivisionProps {
    data: IHeroBlock['data'] & IDivision['data'];
    color?: string;
    name?: string;
}
>>>>>>> origin/dev

const HeroDivisionBlock: React.FC<HeroDivisionProps> = ({ data, color, name }) => {
    const { title, subtitle, cta_text, cta_url, background_url } = data || {};
    const [animateText, setAnimateText] = useState(false);
<<<<<<< HEAD
=======

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateText(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    console.log('HeroDivisionBlock', data, color, name);

    console.log('HeroDivisionBlock', data, color, name);
>>>>>>> origin/dev

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateText(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
            style={{ backgroundColor: color }}
        >
            <AnimatePresence>
                {background_url && (
                    <motion.img
                        key="logo"
                        src={getRelativePath(background_url)}
                        alt={name}
                        className="z-10 mb-12 h-72"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                )}
            </AnimatePresence>

            <motion.div
                className="z-20 max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={animateText ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {title && (
                    <motion.p
                        className="text-md mb-12 leading-relaxed text-[#1E2738]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={animateText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        {title}
                    </motion.p>
                )}

                {subtitle && (
                    <motion.p
                        className="text-md mb-12 leading-relaxed text-[#1E2738]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={animateText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: 0.6 }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {cta_text && cta_url && (
                    <motion.a
                        href={cta_url}
                        className="text-md inline-block rounded-full bg-[#1E2738] px-6 py-3 text-white transition hover:bg-white hover:text-black"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={animateText ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.1, delay: 1 }}
                    >
                        {cta_text}
                    </motion.a>
                )}
            </motion.div>
        </section>
    );
};

export default HeroDivisionBlock;