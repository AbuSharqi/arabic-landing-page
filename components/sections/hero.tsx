import { motion } from 'framer-motion';
import {
    BookOpen, Globe, Users, MessageSquare, Award, Calendar,
    Zap, Shield, ArrowUpRight, HeartHandshake, Star, Book, Languages,
    Mic, GraduationCap, Clock, FileText, Bookmark,
    ArrowBigDownDash
} from 'lucide-react';
import Link from 'next/link';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HeroSection() {
    return (
        <>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12">
                <motion.div
                    className="hero-container text-center py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Floating Arabic letters will be added here by JS */}

                    <motion.h1
                        className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative z-10"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="block mb-4">A flexible curriculum that fits into your life to help you</span>
                        <span className="leading=[2] py-5 block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                            Master Arabic
                        </span>
                    </motion.h1>

                    {/* We Offer Section */}
                    <motion.div
                        className="max-w-4xl mx-auto bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-10 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            We Offer:
                            <span className="block text-lg font-normal text-red-100 mt-1">
                                Everything you need to master Arabic, from beginner to advanced
                            </span>
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: Book, text: "Quranic Arabic" },
                                { icon: Languages, text: "Modern Standard" },
                                { icon: Mic, text: "Daily Conversation" },
                                { icon: Award, text: "Exam Preparation" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg p-3 text-center"
                                >
                                    <item.icon className="w-6 h-6 text-red-300 mb-2" />
                                    <div className="text-white font-medium">{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Link
                        href={'#what-we-offer'}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector('#what-we-offer');
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.01 }}
                        >

                            <div className="cursor-pointer inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-gray-100 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl">
                                Awesome, how can I learn more? <ArrowBigDownDash className="w-4 h-4 inline-block ml-2" />
                            </div>
                        </motion.div>
                    </Link>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-red-400/20 blur-xl z-0"></div>
                    <div className="absolute bottom-10 right-8 w-16 h-16 rounded-full bg-red-500/20 blur-xl z-0"></div>
                    <div className="absolute top-1/4 right-12 w-8 h-8 rounded-full bg-white/10 z-0"></div>
                </motion.div>
            </div>
        </>
    )
}