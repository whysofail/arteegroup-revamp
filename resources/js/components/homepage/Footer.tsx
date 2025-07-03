import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const [agree, setAgree] = useState(false);

    return (
        <footer className="px-8 py-10 text-white">
            <div className="mx-auto grid grid-cols-2">
                {/* LEFT SIDE */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl leading-snug">
                            Let’s start the <span className="font-bold">Magic</span> and
                            <br />
                            Let us show you the <span className="font-bold">Tricks</span>
                        </h2>
                    </div>
                    <div className="flex items-start gap-8">
                        <img src="/artee-logo.png" alt="artee logo" className="h-8 mt-1" />
                        <p className="text-sm text-white">
                            a group of <span className="text-brand font-semibold">talented magicians</span> united with
                            <br />a shared goal to transform digital marketing.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col justify-between">
                    <form className="grid grid-cols-2 gap-4">
                        <Input placeholder="Your name" className="text-white" />
                        <Input placeholder="Your email" className="text-white" />
                        <div className="col-span-2">
                            <Input placeholder="A few word about project" className="text-white" />
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-sm">
                            <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(!!v)} className="border-white mt-0.5" />
                            <label htmlFor="agree" className="text-white">
                                I confirm that I have read and agree to the{' '}
                                <a href="/privacy-policy" className="text-brand hover:underline">
                                    privacy policy
                                </a>
                            </label>
                        </div>
                        <div className="col-span-2">
                            <Button className="bg-brand w-full rounded-full text-white transition hover:bg-white hover:text-black">
                                Get in touch
                            </Button>
                        </div>
                    </form>

                    <div className="mt-24 flex justify-end gap-4 text-white">
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