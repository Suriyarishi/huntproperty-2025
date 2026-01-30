import React from 'react';
import { Building, Target, Users, Sparkles, BookOpen, ShieldCheck, TrendingUp } from 'lucide-react';

const AboutUsView = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Header Section */}
                <div className="text-center space-y-6 mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 text-primary border border-white/5 text-[9px] font-bold uppercase tracking-[0.4em] shadow-lg">
                        <Building size={14} /> Our Mission & Vision
                    </div>
                    <h1 className="text-3xl md:text-5xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">
                        About <span className="text-red-600">Hunt Property</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-medium max-w-3xl mx-auto leading-relaxed italic opacity-80">
                        "Simplifying the complexities of real estate with customized, innovative, and client-first solutions."
                    </p>
                </div>
                
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-7 space-y-12 animate-fade-in-up delay-100">
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-200">
                             <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                                <div className="w-1.5 h-8 bg-red-600 rounded-full"></div> About Hunt Property
                             </h2>
                             <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-sm leading-relaxed">
                                <p>Hunt Property, established in April 2017, is a leading name in the real estate industry, dedicated to providing exceptional services to clients and developers. With over a decade of experience, our expert team offers customized solutions tailored to meet diverse client needs, ensuring maximum satisfaction and seamless experiences.</p>
                                <p>We believe in delivering excellence through innovation and a customer-first approach. Our comprehensive services includes real estate development, real estate portfolio management, residential and commercial leasing, project management Vaastu consultation, interior design, home loans, and real estate learning programs, making us a one-stop solution for all your property needs.</p>
                                <p>At Hunt Property, we simplify the complexities of real estate. Whether you're buying, investing, or designing, our dedicated professionals ensure you receive top-notch solutions crafted just for you.</p>
                             </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-200">
                            <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                                <div className="w-1.5 h-8 bg-emerald-600 rounded-full"></div> Why Choose Hunt Property?
                            </h2>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <h3 className="font-bold text-slate-800">Find your dream home</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">A home is more than just four walls - it reflects your personality, aspirations, and future. At Hunt Property, we believe everyone deserves a home that is not only comfortable but crafted to the highest quality standards. Our expertise ensures you find a property that aligns perfectly with your vision, making your dream home a reality.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-slate-800">Securing the Best Deal for You</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">Your home is your sanctuary, and we understand the importance of fair pricing. At Hunt Property, we advocate for you to ensure you receive the best value without compromise.</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">We operate with integrity and transparency, ensuring our clients never feel pressured or misled. Your journey towards homeownership should be smooth, exciting, and rewarding - and we are here to make that happen by delivering exceptional deals and unmatched service.</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">With Hunt Property, you can trust that your real estate journey is guided by professionals committed to securing the best outcomes, every step of the way. That's why we believe in <strong className="text-emerald-700">Think Wisely & Invest Smartly</strong> slogan to ensure the best services for strategically investments in real estate sector.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Founder's Desk */}
                    <div className="lg:col-span-5 space-y-8 sticky top-28 animate-fade-in-up delay-200">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-200">
                            <h2 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-100 pb-5">From The Founder's Desk</h2>
                            
                            <div className="flex items-center gap-8 mb-8">
                                <img 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                                    alt="Mr. Tejasvi Kapoor" 
                                    className="w-40 h-40 rounded-3xl object-cover shadow-lg border-4 border-white"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Mr. Tejasvi Kapoor</h3>
                                    <p className="text-sm text-red-600 font-bold uppercase tracking-wider">Founder & Chairman</p>
                                </div>
                            </div>

                            <div className="prose prose-sm max-w-none text-slate-500 space-y-4 text-xs leading-relaxed">
                                <p>Mr. Tejasvi Kapoor brings a wealth of experience and expertise to Hunt Property, with a career that reflects leadership and continuous learning. His journey began as a Director at a leading real estate brokerage house, where he served as a director marketing from December 2006 to April 2017. During this time, he gained invaluable insights into the real estate market, laying a strong foundation for his entrepreneurial ventures.</p>
                                <p>Academically, Mr. Kapoor holds an MBA from Amity University and a BCA from Indian Institute of Education, U.P. His pursuit of excellence led him to further enhance his skills at prestigious institutions in the world. He successfully completed a real estate program from Oxford University, followed by a senior management program in business analytics at the Indian Institute of Management Calcutta. Additionally, he deepened his understanding of Real Estate Economics and Finance from the London School of Economics and Political Science.</p>
                                <p>As the real estate industry evolves, Mr. Kapoor envisions Hunt Property growing alongside it. With a forward-thinking approach, he has spearheaded initiatives that expand service networks and integrate cutting-edge technology with marketing. His leadership drives the organization's ambition to become the most elite player in the real estate sector.</p>
                                <p>Under his guidance, Hunt Property focuses on understanding the dynamic needs of each client, providing tailored solutions that not only meet but surpass expectations. His unwavering commitment to customer satisfaction and long-term relationships remains the cornerstone of Hunt Property's ethos. Driven by innovation and dedication, Mr. Kapoor and his team continue to redefine excellence in the real estate industry.</p>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-slate-100 text-xs text-slate-500 font-medium">
                                <p>Thank You</p>
                                <p>With Best Regards</p>
                                <p className="font-bold text-slate-800 mt-2">Tejasvi Kapoor</p>
                                <p>Hunt Property Infratech Pvt Ltd</p>
                            </div>

                        </div>
                        
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-white/5">
                            <h3 className="text-white font-bold uppercase text-[9px] tracking-widest mb-6">Accreditations & Education</h3>
                            <div className="flex items-center justify-around flex-wrap gap-x-6 gap-y-4 text-slate-500 font-bold text-xs uppercase">
                                <span>IIM Calcutta</span>
                                <span>LSE</span>
                                <span>Oxford</span>
                                <span>Amity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsView;