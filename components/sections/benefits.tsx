import { motion } from 'framer-motion';
import {
    BookOpen, Globe, Users, MessageSquare, Award, Clock,
    Zap, Shield, ArrowUpRight, HeartHandshake,
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

export default function BenefitsSection() {
    return (
        <>
            {/* Benefits Section */}
            <motion.section
                className="flex flex-col gap-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                aria-labelledby="benefits-heading"
            >
                <motion.h2
                    id='what-we-offer'
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white"
                    variants={itemVariants}
                >
                    <span className="block mb-2">We're completely transparent with our process</span>
                    <span className="text-xl sm:text-2xl font-normal block text-red-600 dark:text-red-200">
                        What we teach is <span className='font-bold dark:text-red-400'>nothing new.</span> But our curriculum is something never <span className="font-bold dark:text-red-400">seen before.</span>
                    </span>
                </motion.h2>

                {/* Responsive Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={itemVariants}
                    transition={{ delay: 0.6 }}
                >
                    {[
                        {
                            icon: BookOpen,
                            title: "Mastering Fundamentals",
                            description: "Build a strong foundation in Arabic language, from grammar to essential vocabulary.",
                            color: "bg-gradient-to-br from-red-500 to-red-700",
                            features: [
                                {
                                    icon: BookOpen,
                                    text: "Structured Curriculum: Progress from <strong class='text-red-600 dark:text-red-400'>beginner to advanced</strong> with our comprehensive learning path"
                                },
                                {
                                    icon: Users,
                                    text: "Native Instructors: Learn authentic pronunciation from qualified Arabic teachers"
                                },
                            ]
                        },
                        {
                            icon: Globe,
                            title: "Engaging & Immersive Practice",
                            description: "Dive into real-world Arabic usage and cultural understanding.",
                            color: "bg-gradient-to-br from-red-600 to-red-800",
                            features: [
                                {
                                    icon: Globe,
                                    text: "Cultural Immersion: Learn beyond language with cultural insights and traditions"
                                },
                                {
                                    icon: MessageSquare,
                                    text: "Conversation Practice: Regular speaking sessions to build confidence in real conversations"
                                },
                            ]
                        },
                        {
                            icon: Award,
                            title: "Flexible & Certified Advancement",
                            description: "Achieve recognized proficiency with flexible learning options.",
                            color: "bg-gradient-to-br from-red-700 to-red-900",
                            features: [
                                {
                                    icon: Award,
                                    text: "Certification: Earn recognized certificates upon course completion"
                                },
                                {
                                    icon: Clock,
                                    text: "Flexible Scheduling: Learn at your own pace with classes available 24/7"
                                },
                            ]
                        }
                    ].map((pathway, idx) => {
                        const PathwayIcon = pathway.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="h-full"
                                whileHover={{ y: -5 }}
                            >
                                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800">
                                    <CardHeader className={`relative p-6 ${pathway.color} text-white`}>
                                        <div className="flex items-center gap-4">
                                            <PathwayIcon className="w-8 h-8" />
                                            <CardTitle className="text-2xl font-bold">{pathway.title}</CardTitle>
                                        </div>
                                        <p className="text-sm opacity-90 mt-2">{pathway.description}</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow p-6 dark:text-gray-300">
                                        <ul className="space-y-3">
                                            {pathway.features.map((feature, fIdx) => {
                                                const FeatureIcon = feature.icon;
                                                return (
                                                    <li key={fIdx} className="flex items-start gap-3">
                                                        <FeatureIcon className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                                                        <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Quran Ayat Section */}
                <motion.div
                    className="text-center mb-4 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <motion.div
                        className="mb-8 max-w-3xl mx-auto px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-sm"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-3xl font-amiri mb-4 text-red-800 dark:text-red-200 leading-loose md:leading-normal">﴾ كِتَـٰبٌۭ فُصِّلَتْ ءَايَـٰتُهُۥ قُرْءَانًا عَرَبِيًّۭا لِّقَوْمٍۢ يَعْلَمُونَ ﴿</p>
                        <p className="text-lg text-red-700 dark:text-red-300 italic">
                            "A Book whose verses have been detailed, an Arabic Qur’ān for a people who know,"
                        </p>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">- Al-Jumu'ah (62:10)</p>
                    </motion.div>
                </motion.div>

                {/* Course Highlights */}
                <motion.div
                    className="text-center mt-8 bg-gradient-to-r from-red-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 max-w-6xl mx-auto border border-red-200 dark:border-gray-700"
                    variants={itemVariants}
                    transition={{ delay: 1 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                            Your Path to Arabic Mastery باذن الله
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        Our comprehensive program helps you <span className="font-bold text-red-600 dark:text-red-400">achieve fluency faster</span> through:
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {[
                            { icon: Zap, text: "Personalized learning plans tailored to your goals" },
                            { icon: Shield, text: "Quranic Arabic and Modern Standard Arabic tracks" },
                            { icon: ArrowUpRight, text: "Progress tracking with regular assessments" },
                            { icon: HeartHandshake, text: "Supportive community of fellow learners" }
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-red-600 dark:text-red-400" />
                                    </div>
                                    <p className="font-medium text-gray-700 dark:text-gray-200 text-center">
                                        {item.text}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>


                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                    >
                        <Link
                            href={'#price-options'}
                            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector('#price-options');
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <button className="cursor-pointer bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Enroll Now
                            </button>
                        </Link>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Start your first modules free - no credit card required
                    </p>
                </motion.div>
            </motion.section>
        </>
    )
}