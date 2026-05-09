import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function BacklinkGuide() {
    const backlinkStrategies = [
        {
            title: "Local Business Directories",
            platforms: [
                "Google My Business",
                "Bing Places",
                "Apple Maps Connect",
                "Facebook Business Page",
                "JustDial",
                "IndiaMart",
                "TradeIndia",
                "Yellow Pages India"
            ],
            tips: "Ensure consistent NAP (Name, Address, Phone) across all listings"
        },
        {
            title: "Industry-Specific Directories",
            platforms: [
                "Clutch.co",
                "GoodFirms",
                "ITFirms",
                "AppFutura",
                "DesignRush",
                "TopDevelopers",
                "TechBehemoths"
            ],
            tips: "Focus on technology and software development directories"
        },
        {
            title: "Local Community & Forums",
            platforms: [
                "Reddit (r/India, r/Entrepreneur)",
                "Quora",
                "Stack Overflow",
                "GitHub Community",
                "LinkedIn Groups",
                "Facebook Groups (Ahmedabad Tech)"
            ],
            tips: "Provide valuable answers and establish expertise"
        },
        {
            title: "Content Sharing Platforms",
            platforms: [
                "Medium",
                "Dev.to",
                "Hashnode",
                "Hackernoon",
                "Towards Data Science",
                "Analytics Vidhya"
            ],
            tips: "Publish high-quality technical articles and tutorials"
        },
        {
            title: "Guest Posting Opportunities",
            platforms: [
                "Tech Blogs",
                "Industry Publications",
                "Local News Websites",
                "Educational Platforms",
                "Startup Blogs"
            ],
            tips: "Offer to write about Ahmedabad's tech ecosystem"
        },
        {
            title: "Social Media & Influencer Outreach",
            platforms: [
                "LinkedIn Influencers",
                "Tech YouTubers",
                "Instagram Tech Pages",
                "Twitter Tech Communities",
                "Facebook Tech Groups"
            ],
            tips: "Share your expertise and collaborate with local influencers"
        }
    ];

    const localKeywords = [
        "IT company Ahmedabad",
        "software development Ahmedabad",
        "web development company Ahmedabad",
        "mobile app development Ahmedabad",
        "best IT services Navrangpura",
        "tech company Vijay Cross Road",
        "IT consultancy Ahmedabad",
        "digital marketing Ahmedabad"
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <PageHeader
                title="Backlink Generation Guide"
                subtitle="Complete strategy for building high-quality backlinks for YugAntar Technologies"
                backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=400&fit=crop"
            />

            <main className="flex-grow py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Introduction */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Backlink Building Strategy for Ahmedabad IT Company
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            This comprehensive guide outlines proven strategies to build high-quality backlinks
                            for YugAntar Technologies, focusing on local Ahmedabad market and technical expertise.
                        </p>
                    </div>

                    {/* Local Keywords Section */}
                    <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Target Local Keywords</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {localKeywords.map((keyword, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                    <span className="text-secondary-600 font-medium">{keyword}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backlink Strategies */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {backlinkStrategies.map((strategy, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{strategy.title}</h3>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2">Platforms:</h4>
                                    <ul className="space-y-1">
                                        {strategy.platforms.map((platform, idx) => (
                                            <li key={idx} className="text-gray-600 flex items-center">
                                                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                                                {platform}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip:</h4>
                                    <p className="text-blue-700 text-sm">{strategy.tips}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Creation Strategy */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Content Creation for Backlinks</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Technical Articles</h4>
                                <p className="text-gray-600 text-sm">
                                    Write in-depth tutorials on MERN stack, Python, AI/ML, and trending technologies
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Industry Reports</h4>
                                <p className="text-gray-600 text-sm">
                                    Create reports on Ahmedabad's tech ecosystem and IT industry trends
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎥</span>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Video Content</h4>
                                <p className="text-gray-600 text-sm">
                                    Produce YouTube videos on coding tutorials and career guidance
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Plan */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">30-Day Action Plan</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Week 1: Foundation</h4>
                                    <p className="text-gray-600">Set up Google My Business, claim listings, optimize social profiles</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Week 2: Content Creation</h4>
                                    <p className="text-gray-600">Publish 3-5 blog posts and share on relevant communities</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Week 3: Outreach</h4>
                                    <p className="text-gray-600">Contact local blogs, forums, and industry directories for backlinks</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Week 4: Monitoring & Scaling</h4>
                                    <p className="text-gray-600">Track backlinks, analyze performance, and scale successful strategies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Build Backlinks?</h3>
                        <p className="text-gray-600 mb-6">
                            Start implementing these strategies today to improve your search rankings and online visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/blog"
                                className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Read Our Blog Posts
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white font-semibold rounded-lg transition-colors"
                            >
                                Get Backlink Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}