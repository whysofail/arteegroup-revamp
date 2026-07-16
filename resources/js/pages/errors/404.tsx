import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'motion/react';

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: 'easeOut',
        },
    }),
};

export default function Error404() {
    return (
        <>
            <Head title="404 | Artee Group" />

            <section className="relative flex min-h-screen overflow-hidden bg-[#0B0B0B] text-white">

                {/* Glow */}
                <motion.div
                    initial={{
                        scale: 0.8,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[700px]
                        w-[700px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-brand/10
                        blur-[180px]
                    "
                />

                {/* Watermark */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.6,
                    }}
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                    "
                >
                    <span
                        className="
                            select-none
                            text-[12rem]
                            font-black
                            leading-none
                            tracking-tight
                            text-white/[0.03]
                            md:text-[20rem]
                            lg:text-[28rem]
                        "
                    >
                        404
                    </span>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex w-full items-center">

                    <div className="mx-auto w-full max-w-7xl px-8 py-20 md:px-20">

                        {/* Breadcrumb */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    items-center
                                    text-sm
                                    text-zinc-400
                                    transition
                                    hover:text-brand
                                "
                            >
                                ← Back to Home
                            </Link>
                        </motion.div>

                        {/* Label */}

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                            className="
                                mt-12
                                text-sm
                                font-medium
                                uppercase
                                tracking-[0.35em]
                                text-brand
                            "
                        >
                            Error 404
                        </motion.p>

                        {/* Heading */}

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            className="
                                mt-6
                                max-w-4xl
                                text-5xl
                                font-black
                                leading-[1.05]
                                tracking-tight
                                md:text-7xl
                                lg:text-8xl
                            "
                        >
                            Looks like this
                            <br />
                            campaign never launched.
                        </motion.h1>

                        {/* Animated Line */}

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: 180,
                            }}
                            transition={{
                                delay: .5,
                                duration: .6,
                            }}
                            className="
                                mt-10
                                h-[2px]
                                bg-brand
                            "
                        />

                        {/* Description */}

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.35}
                            className="
                                mt-10
                                max-w-2xl
                                text-base
                                leading-8
                                text-zinc-400
                                md:text-lg
                            "
                        >
                            The page you're looking for may have been moved,
                            renamed or no longer exists.

                            <br />
                            <br />

                            Let's get you back to something worth exploring.
                        </motion.p>

                        {/* CTA */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.45}
                            className="
                                mt-14
                                flex
                                flex-wrap
                                gap-4
                            "
                        >

                            <Link
                                href="/"
                                className="
                                    rounded-full
                                    bg-brand
                                    px-7
                                    py-3
                                    font-medium
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:scale-[1.03]
                                    hover:shadow-[0_0_40px_rgba(255,126,29,.3)]
                                "
                            >
                                Back Home
                            </Link>

                            <Link
                                href="/works"
                                className="
                                    rounded-full
                                    border
                                    border-zinc-700
                                    px-7
                                    py-3
                                    font-medium
                                    transition-all
                                    duration-300
                                    hover:border-brand
                                    hover:bg-white/[0.04]
                                "
                            >
                                Explore Our Works
                            </Link>

                        </motion.div>

                    </div>

                </div>

            </section>
        </>
    );
}

Error404.layout = (page: React.ReactNode) => (
    <AppLayout children={page} />
);