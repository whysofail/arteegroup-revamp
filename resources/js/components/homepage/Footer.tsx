import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const [agree, setAgree] = useState(false);

    return (
        <footer className="px-6 py-10 text-white sm:px-8">
            <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
                {/* LEFT SIDE */}
                <div className="flex flex-col md:justify-between">
                    <div>
                        <h2 className="mb-8 text-center text-2xl md:mb-0 md:text-start md:text-3xl">
                            Let’s start the <span className="font-bold">Magic</span> and
                            <br />
                            Let us show you the <span className="font-bold">Tricks</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-start">
                        <img src="/artee-logo.png" alt="artee logo" className="mb-4 h-8 md:mt-0.5 md:mb-0" />
                        <p className="text-xs leading-relaxed text-white md:text-sm">
                            a group of <span className="text-brand font-semibold">talented magicians</span> united with
                            <br />a shared goal to transform digital marketing.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col justify-between gap-8">
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
                                <a href="/privacy-policy" className="text-brand hover:underline">
                                    privacy policy
                                </a>
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <Button className="bg-brand w-full rounded-full text-white transition hover:bg-white hover:text-black">
                                Get in touch
                            </Button>
                        </div>
                    </form>

                    <div className="mt-12 flex justify-center gap-4 text-white md:mt-16 md:justify-end">
                        <FaInstagram className="hover:text-brand cursor-pointer" />
                        <FaTiktok className="hover:text-brand cursor-pointer" />
                        <FaFacebook className="hover:text-brand cursor-pointer" />
                        <FaGlobe className="hover:text-brand cursor-pointer" />
                        <FaEnvelope className="hover:text-brand cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
