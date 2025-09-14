import { useEffect, useState } from "react"
import { BookA, X, Menu } from "lucide-react"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="mx-auto rounded-md sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-16">
                    <div className="flex items-center gap-5">
                        {/* Left side - Logo */}
                        <div
                            className="flex items-center gap-2"
                            onClick={() => router.push('/')}
                        >
                            <BookA className="w-6 h-6 text-red-600" />
                            <span className="mr-5 font-semibold text-lg bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                                Al Mukhtasarat Institute
                            </span>
                        </div>

                        {/* Right side - Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                href=""
                            >
                                <Button
                                    className='cursor-pointer'
                                    variant='outline'
                                >
                                    Log In
                                </Button></Link>
                            <Link
                                href=''
                            >
                                <Button
                                    className='cursor-pointer'
                                    variant='secondary'
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute right-4 md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-purple-600"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col gap-4 mt-4">
                            <Link
                                href={'#contact-session'}
                                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#contact-session');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >

                                <Button
                                    className='cursor-pointer'
                                    variant='secondary'
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}