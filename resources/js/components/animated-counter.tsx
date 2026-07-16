import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
} from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

interface AnimatedCounterProps {
    value: string;
    duration?: number;
    delay?: number;
}

interface ParsedValue {
    target: number;
    suffix: string;
}

function parseValue(value: string): ParsedValue {
    const input = value.trim().toUpperCase();

    const match = input.match(/^([\d.,]+)\s*([A-Z%+]*)$/);

    if (!match) {
        return {
            target: 0,
            suffix: '',
        };
    }

    const number = Number(match[1].replace(/,/g, ''));

    const suffix = match[2];

    const multipliers: Record<string, number> = {
        K: 1_000,
        M: 1_000_000,
        MIO: 1_000_000,
        B: 1_000_000_000,
        T: 1_000_000_000_000,
    };

    return {
        target: number * (multipliers[suffix] ?? 1),
        suffix,
    };
}

export default function AnimatedCounter({
    value,
    duration = 1.5,
    delay = 0,
}: AnimatedCounterProps) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: '-100px',
    });

    const parsed = useMemo(() => parseValue(value), [value]);

    const motionValue = useMotionValue(0);

    const rounded = useTransform(motionValue, (latest) =>
        Math.round(latest),
    );

    const [display, setDisplay] = useState('0');

    useEffect(() => {
        const unsubscribe = rounded.on('change', (latest) => {
            if (latest >= parsed.target) {
                setDisplay(value);
                return;
            }

            setDisplay(
                latest.toLocaleString('en-US'),
            );
        });

        return unsubscribe;
    }, [rounded, parsed.target, value]);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(
            motionValue,
            parsed.target,
            {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            },
        );

        return () => controls.stop();
    }, [
        isInView,
        parsed.target,
        duration,
        delay,
    ]);

    return (
        <motion.span ref={ref}>
            {display}
        </motion.span>
    );
}