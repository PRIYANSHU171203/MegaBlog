import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

// Example SVG icons (can be replaced with your own or from a library)
const ExternalLinkIcon = () => (
    <svg className="inline ml-1 w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13V19a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6"/><path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3"/></svg>
);


function Footer() {
    return (
        <footer className="relative overflow-hidden py-10 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 border-t-2 border-t-black shadow-lg">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap gap-y-8">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12 flex flex-col justify-between">
                        <div className="mb-4 flex items-center">
                            <Logo width="100px" />
                            <span className="ml-3 text-xl font-bold text-gray-800">MegaBlog</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            &copy; {new Date().getFullYear()} MegaBlog. All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://github.com/PRIYANSHU171203" target="_blank" rel="noopener noreferrer" className="group hover:text-blue-500 transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
                            </a>
                            <a href="mailto:contact@megablog.com" className="group hover:text-blue-500 transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-9 6-9-6"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500 tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/features">Features <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/pricing">Pricing <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/affiliate">Affiliate Program <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/press">Press Kit <ExternalLinkIcon /></Link></li>
                        </ul>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500 tracking-wide">Support</h3>
                        <ul className="space-y-3">
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/account">Account <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/help">Help <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/contact">Contact Us <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/support">Customer Support <ExternalLinkIcon /></Link></li>
                        </ul>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500 tracking-wide">Legals</h3>
                        <ul className="space-y-3">
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/terms">Terms &amp; Conditions <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/privacy">Privacy Policy <ExternalLinkIcon /></Link></li>
                            <li><Link className="group text-base font-medium text-gray-700 hover:text-blue-500 transition flex items-center" to="/licensing">Licensing <ExternalLinkIcon /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
