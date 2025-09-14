
        // Advanced Bay Royal AI Assistant - Next Generation
        class NextGenBayRoyalAI {
            constructor() {
                this.conversationHistory = [];
                this.userProfile = {
                    name: null,
                    company: null,
                    industry: null,
                    interests: [],
                    intent: 'discovery',
                    leadScore: 0,
                    engagement: 0,
                    sentiment: 'neutral',
                    urgencyLevel: 'low',
                    buyingSignals: [],
                    objections: [],
                    preferredContact: null,
                    budget: 'unknown',
                    timeline: 'unknown',
                    decisionMaker: false
                };
                this.sessionStartTime = Date.now();
                this.messageCount = 0;
                this.conversionAttempts = 0;
                this.leadCaptured = false;
                
                // Enhanced Bay Royal Knowledge Base
                this.knowledgeBase = {
                    company: {
                        name: "Bay Royal International Limited",
                        tagline: "Payment. Project. Payroll. P.E.O.",
                        vision: "Creating seamless and innovative end-to-end service delivery in all we do",
                        mission: "We are committed to utmost customer satisfaction at the same time ensuring our culture and values at BayRoyal are upheld and in sync with our partners' while we provide distinct solutions relating to the 4Ps to keep them pleased",
                        values: ["Professionalism", "Integrity", "Expertise", "Personalized Service"],
                        ceo: "Peter Owoeye",
                        founded: "Professional services provider with years of experience",
                        headquarters: "Nigeria",
                        presence: ["Nigeria", "Ghana", "Kenya", "Expanding across Africa"]
                    },
                    
                    services: {
                        payments: {
                            title: "Payment Solutions",
                            icon: "💳",
                            description: "Advanced payment processing and fintech solutions keeping pace with the rapidly changing payments landscape",
                            features: [
                                "Real-time payment processing with 99.9% uptime",
                                "Multi-currency support for global transactions",
                                "Mobile payment integration (Apple Pay, Google Pay)",
                                "Cryptocurrency payment solutions",
                                "Custom payment gateway development",
                                "PCI DSS Level 1 compliance",
                                "Fraud detection and prevention",
                                "Cross-border payment solutions",
                                "API integration and webhooks",
                                "Detailed analytics and reporting"
                            ],
                            benefits: [
                                "Reduced transaction costs by up to 40%",
                                "Faster settlement times",
                                "Enhanced security and compliance",
                                "Scalable infrastructure",
                                "24/7 technical support"
                            ],
                            industries: ["E-commerce", "Fintech", "Retail", "Healthcare", "Education"],
                            pricing: "Competitive transaction fees starting from 2.5%"
                        },
                        
                        projects: {
                            title: "Project Management",
                            icon: "🚀",
                            description: "End-to-end project delivery using international best practices and proven methodologies",
                            features: [
                                "Comprehensive project planning and design",
                                "Agile and waterfall methodologies",
                                "Risk management and mitigation",
                                "Quality assurance and testing",
                                "Stakeholder management",
                                "Resource optimization",
                                "Timeline and budget control",
                                "Change management",
                                "Post-implementation support",
                                "Digital transformation expertise"
                            ],
                            specialties: [
                                "Software development projects",
                                "Digital transformation initiatives",
                                "System integration projects",
                                "Infrastructure modernization",
                                "Business process optimization"
                            ],
                            success_rate: "98% on-time delivery, 95% within budget",
                            methodologies: ["PMI", "PRINCE2", "Agile", "Scrum", "Lean"]
                        },
                        
                        payroll: {
                            title: "Payroll & HR Services",
                            icon: "👥",
                            description: "Professional HR and payroll management services using academically certified HR professionals for indigenous and multinational clients",
                            features: [
                                "Multi-country payroll processing",
                                "Employee lifecycle management",
                                "Benefits administration",
                                "Tax compliance and reporting",
                                "Performance management systems",
                                "HR policy development",
                                "Training and development programs",
                                "Recruitment and staffing",
                                "Employee relations management",
                                "HR analytics and reporting",
                                "Compliance management",
                                "Time and attendance tracking"
                            ],
                            countries: ["Nigeria", "Ghana", "Kenya", "Expanding across Africa"],
                            compliance: ["Local labor laws", "Tax regulations", "Social security"],
                            cost_savings: "30-50% reduction in HR operational costs"
                        },
                        
                        peo: {
                            title: "Professional Employer Organization (P.E.O.)",
                            icon: "🏛️",
                            description: "Your go-to Professional Employer Organization in Africa, providing comprehensive co-employment solutions",
                            features: [
                                "Co-employment arrangements",
                                "Complete HR outsourcing",
                                "Benefits administration",
                                "Workers' compensation management",
                                "Employment compliance",
                                "Risk management services",
                                "Talent acquisition support",
                                "Employee development programs",
                                "Payroll and tax administration",
                                "HR technology platforms"
                            ],
                            benefits: [
                                "60% reduction in administrative burden",
                                "Access to enterprise-level benefits",
                                "Improved compliance and reduced risks",
                                "Cost-effective HR solutions",
                                "Enhanced employee experience",
                                "Focus on core business activities"
                            ],
                            target_clients: ["SMEs", "Startups", "Growing companies", "International expansions"]
                        }
                    },
                    
                    offices: {
                        lagos: {
                            city: "Lagos",
                            country: "Nigeria",
                            address: "6b Bendel Close, Victoria Island, Lagos, Nigeria",
                            phone: "+234 (0) 1 234 5678",
                            email: "lagos@bayroyalinternational.com",
                            status: "Headquarters",
                            timezone: "WAT (UTC+1)"
                        },
                        abuja: {
                            city: "Abuja",
                            country: "Nigeria", 
                            address: "22 Kumasi Crescent, Wuse 2, Federal Capital Territory, Abuja, Nigeria",
                            phone: "+234 (0) 9 876 5432",
                            email: "abuja@bayroyalinternational.com",
                            status: "Regional Office",
                            timezone: "WAT (UTC+1)"
                        },
                        accra: {
                            city: "Accra",
                            country: "Ghana",
                            address: "Regus Building, 5 Roman Road, Off Borstal Ave Lane, Accra, Ghana", 
                            phone: "+233 541 604 192",
                            email: "accra@bayroyalinternational.com",
                            status: "West Africa Hub",
                            timezone: "GMT (UTC+0)"
                        },
                        nairobi: {
                            city: "Nairobi",
                            country: "Kenya",
                            address: "Windsor House, University Way, Muindi Mbingu Street, Nairobi, Kenya",
                            phone: "+254 700 123 456", 
                            email: "nairobi@bayroyalinternational.com",
                            status: "East Africa Hub",
                            timezone: "EAT (UTC+3)"
                        }
                    },
                    
                    leadership: {
                        ceo: {
                            name: "Peter Owoeye",
                            title: "Chief Executive Officer & Founder",
                            expertise: "15+ years in Finance & Business Strategy, Project Management",
                            focus: "Strategic growth and operational excellence"
                        },
                        team_strength: "100+ years combined experience across finance, project management, HR, and technology"
                    },
                    
                    industries: [
                        "Financial Services & Banking",
                        "Technology & Software",
                        "Healthcare & Medical",
                        "Manufacturing & Industrial",
                        "Retail & E-commerce",
                        "Government & Public Sector",
                        "NGOs & Development Organizations",
                        "Education & Training",
                        "Energy & Utilities",
                        "Agriculture & Agribusiness"
                    ],
                    
                    competitive_advantages: [
                        "Multi-country African presence with local expertise",
                        "International standards with African market knowledge",
                        "End-to-end service delivery across all 4Ps",
                        "98% client retention rate",
                        "Proven track record with 500+ projects",
                        "Cost-effective solutions with transparent pricing",
                        "24/7 support across time zones"
                    ]
                };
                
                this.conversationPersonas = {
                    professional: { formality: 'high', detail: 'comprehensive', tone: 'authoritative' },
                    friendly: { formality: 'medium', detail: 'balanced', tone: 'approachable' },
                    technical: { formality: 'medium', detail: 'technical', tone: 'precise' },
                    sales: { formality: 'medium', detail: 'benefit-focused', tone: 'persuasive' }
                };
            }
            
            // Advanced Query Processing
            processQuery(query) {
                this.messageCount++;
                const normalizedQuery = query.toLowerCase().trim();
                this.conversationHistory.push({ query: normalizedQuery, timestamp: Date.now() });
                
                // Advanced sentiment and intent analysis
                const analysis = this.analyzeQuery(normalizedQuery);
                this.updateUserProfile(analysis);
                
                // Generate contextual response
                const response = this.generateResponse(analysis, query);
                
                // Trigger smart actions
                this.triggerSmartActions(analysis);
                
                return response;
            }
            
            analyzeQuery(query) {
                const analysis = {
                    intent: this.detectIntent(query),
                    sentiment: this.analyzeSentiment(query),
                    entities: this.extractEntities(query),
                    urgency: this.detectUrgency(query),
                    buyingSignals: this.detectBuyingSignals(query),
                    technical: this.detectTechnicalInterest(query)
                };
                
                return analysis;
            }
            
            detectIntent(query) {
                const intentPatterns = {
                    greeting: /\b(hello|hi|hey|good morning|good afternoon|good evening|greetings)\b/,
                    services: /\b(services|what do you do|offerings|solutions|help)\b/,
                    payments: /\b(payment|pay|transaction|fintech|gateway|processing|money)\b/,
                    projects: /\b(project|management|implementation|delivery|development)\b/,
                    payroll: /\b(payroll|hr|human resources|employee|staff|salary)\b/,
                    peo: /\b(peo|professional employer|outsourcing|co-employment)\b/,
                    pricing: /\b(price|cost|pricing|budget|quote|fee|charges)\b/,
                    contact: /\b(contact|reach|call|email|office|address|phone)\b/,
                    demo: /\b(demo|demonstration|show|trial|test|preview)\b/,
                    about: /\b(about|company|who are you|background|history)\b/,
                    comparison: /\b(vs|versus|compare|competition|alternative)\b/,
                    integration: /\b(integrate|api|connect|setup|technical)\b/,
                    goodbye: /\b(bye|goodbye|thanks|thank you|see you)\b/
                };
                
                for (const [intent, pattern] of Object.entries(intentPatterns)) {
                    if (pattern.test(query)) {
                        return intent;
                    }
                }
                
                return 'general';
            }
            
            analyzeSentiment(query) {
                const positiveWords = ['great', 'excellent', 'amazing', 'love', 'perfect', 'awesome'];
                const negativeWords = ['bad', 'terrible', 'hate', 'worst', 'disappointed', 'problem'];
                const urgentWords = ['urgent', 'asap', 'immediately', 'quickly', 'emergency'];
                
                let sentiment = 'neutral';
                let urgency = false;
                
                if (positiveWords.some(word => query.includes(word))) sentiment = 'positive';
                if (negativeWords.some(word => query.includes(word))) sentiment = 'negative';
                if (urgentWords.some(word => query.includes(word))) urgency = true;
                
                return { tone: sentiment, urgent: urgency };
            }
            
            detectBuyingSignals(query) {
                const signals = [];
                const signalPatterns = {
                    pricing: /\b(price|cost|budget|expensive|affordable)\b/,
                    timeline: /\b(when|how long|timeline|start|implement)\b/,
                    decision: /\b(decide|choose|select|compare|evaluate)\b/,
                    authority: /\b(ceo|manager|director|owner|decision maker)\b/,
                    urgency: /\b(urgent|asap|quickly|immediately|soon)\b/,
                    demo: /\b(demo|show|see|trial|test)\b/
                };
                
                for (const [signal, pattern] of Object.entries(signalPatterns)) {
                    if (pattern.test(query)) {
                        signals.push(signal);
                        this.userProfile.leadScore += this.getSignalScore(signal);
                    }
                }
                
                return signals;
            }
            
            getSignalScore(signal) {
                const scores = {
                    pricing: 15,
                    timeline: 12,
                    decision: 18,
                    authority: 25,
                    urgency: 20,
                    demo: 22
                };
                return scores[signal] || 5;
            }
            
            extractEntities(query) {
                return {
                    services: this.extractServices(query),
                    locations: this.extractLocations(query),
                    industries: this.extractIndustries(query),
                    technologies: this.extractTechnologies(query)
                };
            }
            
            extractServices(query) {
                const services = [];
                if (query.includes('payment') || query.includes('pay')) services.push('payments');
                if (query.includes('project') || query.includes('management')) services.push('projects');
                if (query.includes('payroll') || query.includes('hr')) services.push('payroll');
                if (query.includes('peo') || query.includes('employer')) services.push('peo');
                return services;
            }
            
            extractLocations(query) {
                const locations = [];
                const locationNames = ['lagos', 'abuja', 'accra', 'nairobi', 'nigeria', 'ghana', 'kenya'];
                locationNames.forEach(loc => {
                    if (query.includes(loc)) locations.push(loc);
                });
                return locations;
            }
            
            extractIndustries(query) {
                const industries = [];
                const industryKeywords = {
                    'fintech': 'Financial Services',
                    'banking': 'Financial Services',
                    'tech': 'Technology',
                    'software': 'Technology',
                    'healthcare': 'Healthcare',
                    'retail': 'Retail',
                    'ecommerce': 'E-commerce'
                };
                
                Object.entries(industryKeywords).forEach(([keyword, industry]) => {
                    if (query.includes(keyword) && !industries.includes(industry)) {
                        industries.push(industry);
                    }
                });
                
                return industries;
            }
            
            extractTechnologies(query) {
                const technologies = [];
                const techKeywords = ['api', 'integration', 'mobile', 'web', 'cloud', 'ai', 'blockchain'];
                techKeywords.forEach(tech => {
                    if (query.includes(tech)) technologies.push(tech);
                });
                return technologies;
            }
            
            detectUrgency(query) {
                const urgencyIndicators = ['urgent', 'asap', 'immediately', 'quickly', 'emergency', 'deadline'];
                return urgencyIndicators.some(indicator => query.includes(indicator)) ? 'high' : 'low';
            }
            
            detectTechnicalInterest(query) {
                const techTerms = ['api', 'integration', 'technical', 'developer', 'sdk', 'webhook'];
                return techTerms.some(term => query.includes(term));
            }
            
            updateUserProfile(analysis) {
                // Update interests
                if (analysis.entities.services.length > 0) {
                    analysis.entities.services.forEach(service => {
                        if (!this.userProfile.interests.includes(service)) {
                            this.userProfile.interests.push(service);
                        }
                    });
                }
                
                // Update sentiment
                this.userProfile.sentiment = analysis.sentiment.tone;
                
                // Update engagement
                this.userProfile.engagement = Math.min(this.messageCount * 10, 100);
                
                // Update buying signals
                analysis.buyingSignals.forEach(signal => {
                    if (!this.userProfile.buyingSignals.includes(signal)) {
                        this.userProfile.buyingSignals.push(signal);
                    }
                });
                
                // Determine user intent
                if (analysis.buyingSignals.length > 2) {
                    this.userProfile.intent = 'consideration';
                } else if (analysis.buyingSignals.length > 0) {
                    this.userProfile.intent = 'interest';
                }
            }
            
            generateResponse(analysis, originalQuery) {
                const persona = this.selectPersona(analysis);
                
                switch (analysis.intent) {
                    case 'greeting':
                        return this.generateGreeting(persona);
                    case 'services':
                        return this.generateServicesOverview(analysis.entities, persona);
                    case 'payments':
                        return this.generatePaymentsResponse(analysis.entities, persona);
                    case 'projects':
                        return this.generateProjectsResponse(analysis.entities, persona);
                    case 'payroll':
                        return this.generatePayrollResponse(analysis.entities, persona);
                    case 'peo':
                        return this.generatePEOResponse(analysis.entities, persona);
                    case 'pricing':
                        return this.generatePricingResponse(analysis.entities, persona);
                    case 'contact':
                        return this.generateContactResponse(analysis.entities, persona);
                    case 'demo':
                        return this.generateDemoResponse(analysis.entities, persona);
                    case 'about':
                        return this.generateAboutResponse(persona);
                    case 'comparison':
                        return this.generateComparisonResponse(persona);
                    case 'integration':
                        return this.generateIntegrationResponse(analysis.entities, persona);
                    case 'goodbye':
                        return this.generateGoodbyeResponse(persona);
                    default:
                        return this.generateIntelligentResponse(originalQuery, analysis, persona);
                }
            }
            
            selectPersona(analysis) {
                if (analysis.technical || analysis.entities.technologies.length > 0) {
                    return this.conversationPersonas.technical;
                } else if (analysis.buyingSignals.length > 1) {
                    return this.conversationPersonas.sales;
                } else if (this.userProfile.engagement > 50) {
                    return this.conversationPersonas.friendly;
                } else {
                    return this.conversationPersonas.professional;
                }
            }
            
            generateGreeting(persona) {
                const greetings = [
                    `Welcome to Bay Royal International Limited! I'm your AI-powered assistant, designed to help you discover how our comprehensive business solutions can transform your operations across Africa.

**Our Core Services - The 4Ps:**
• **Payment Solutions** - Advanced fintech & processing
• **Project Management** - International standard delivery  
• **Payroll & HR** - Professional people management
• **P.E.O. Services** - Complete employment solutions

**Serving 3 Countries:** Nigeria • Ghana • Kenya

What specific area would you like to explore today?`,

                    `Hello! I'm Bay Royal's next-generation AI assistant, here to guide you through our world-class business solutions.

**Why Choose Bay Royal?**
✓ Multi-country African presence with local expertise
✓ International best practices with regional knowledge
✓ 98% client satisfaction rate
✓ End-to-end service delivery

**Ready to Transform Your Business?**
I can provide detailed insights about our services, pricing, implementation processes, and success stories.

How can I help you succeed today?`
                ];
                
                return greetings[Math.floor(Math.random() * greetings.length)];
            }
            
            generateServicesOverview(entities, persona) {
                let response = `🎯 **Bay Royal's Comprehensive Service Portfolio**

Our integrated approach covers all essential business functions:`;
                
                response += `

<div class="service-card">
<div class="service-title">💳 Payment Solutions & Fintech</div>
Advanced payment processing with 99.9% uptime<br>
Multi-currency & cryptocurrency support<br>
Custom API development & integration<br>
PCI DSS Level 1 compliance<br>
Real-time fraud detection
</div>

<div class="service-card">
<div class="service-title">🚀 Project Management Excellence</div>
End-to-end delivery using PMI & PRINCE2 standards<br>
Digital transformation expertise<br>
98% on-time delivery rate<br>
Agile & waterfall methodologies<br>
Risk management & quality assurance
</div>

<div class="service-card">
<div class="service-title">👥 Payroll & HR Services</div>
Multi-country payroll across Africa<br>
Complete employee lifecycle management<br>
Benefits administration & compliance<br>
HR technology platforms<br>
Certified professionals with local expertise
</div>

<div class="service-card">
<div class="service-title">🏛️ Professional Employer Organization</div>
Co-employment arrangements<br>
Complete HR outsourcing<br>
30-50% cost reduction<br>
Risk mitigation & compliance<br>
Enterprise-level benefits access
</div>

**Our Track Record:**
✅ 500+ successful projects delivered
✅ 98% client retention rate  
✅ Present across Nigeria, Ghana, Kenya
✅ International standards with African expertise

Which service area would you like to explore in detail?`;
                
                return response;
            }
            
            generatePaymentsResponse(entities, persona) {
                let response = `💳 **Bay Royal Payment Solutions - Advanced Fintech Platform**

**Enterprise Payment Processing:**
• **Real-time Processing:** Sub-second transaction authorization
• **Global Reach:** Multi-currency support for 150+ currencies  
• **Mobile Integration:** Apple Pay, Google Pay, Samsung Pay
• **Cryptocurrency:** Bitcoin, Ethereum, stablecoins
• **Security:** PCI DSS Level 1 certification, end-to-end encryption
• **Uptime:** 99.9% guaranteed availability with 24/7 monitoring

**Advanced Features:**
• **Custom APIs:** RESTful integration with comprehensive documentation
• **Fraud Detection:** AI-powered real-time monitoring
• **Cross-border:** Optimized international payment processing
• **Analytics:** Detailed reporting and business intelligence
• **Compliance:** International standards across all markets

**Industry Solutions:**`;
                
                if (entities.industries.length > 0) {
                    entities.industries.forEach(industry => {
                        response += `\n• **${industry}:** Specialized payment flows and compliance`;
                    });
                } else {
                    response += `
• **E-commerce:** Shopping cart integration & subscription billing
• **Fintech:** White-label payment solutions  
• **Healthcare:** HIPAA-compliant processing
• **Education:** Student fee management
• **Government:** Secure citizen payment portals`;
                }
                
                response += `

**Implementation Process:**
1. **Discovery & Planning:** Requirements analysis (1-2 weeks)
2. **API Development:** Custom integration (2-3 weeks)  
3. **Testing & Security:** Validation & compliance (1 week)
4. **Go-Live:** Deployment & monitoring (1 week)
5. **Support:** Ongoing optimization

**Pricing:** Competitive rates from 2.5% with volume discounts

Ready to revolutionize your payment processing?`;
                
                return response;
            }
            
            generatePricingResponse(entities, persona) {
                let response = `💰 **Bay Royal Pricing - Transparent & Value-Driven**

**Our Pricing Philosophy:**
Value-based pricing aligned with business outcomes, not just features.

**Payment Solutions:**
• Transaction fees: 2.5% - 3.5% (volume discounts available)
• Setup: FREE for qualified businesses
• Monthly maintenance: Included in transaction fees
• Custom API development: From $5,000

**Project Management:**
• Fixed-price projects: Based on scope and complexity
• Time & materials: $75-150/hour depending on expertise level
• Retainer agreements: 15% discount for 6+ month commitments
• Performance-based: Results-driven pricing models available

**Payroll & HR Services:**
• Per employee per month: $25-45 (varies by country)
• Setup and onboarding: $500-2,000 per company
• Compliance management: Included
• Additional HR services: Custom pricing

**P.E.O. Services:**
• 30-50% cost reduction vs in-house operations
• All-inclusive monthly rate per employee
• No hidden fees or surprise charges
• Transparent pricing with detailed breakdowns

**Value Guarantees:**
✅ No setup fees for implementations over $10,000
✅ 30-day money-back guarantee
✅ ROI guarantee: 3-5x return within 12 months
✅ Fixed pricing for 2 years on annual contracts

**Volume Discounts:**
• 10+ employees: 10% discount
• 50+ employees: 15% discount  
• 100+ employees: 20% discount
• Enterprise (500+): Custom pricing

Ready for a personalized quote based on your specific needs?`;
                
                return response;
            }
            
            generateIntelligentResponse(query, analysis, persona) {
                let response = `🤖 **AI Analysis of Your Query**

I understand you're asking: "${query}"

Based on your question, here's how Bay Royal can help:`;
                
                // Analyze keywords and provide relevant suggestions
                const keywords = query.split(' ').filter(word => word.length > 3);
                const relevantServices = this.findRelevantServices(keywords);
                
                if (relevantServices.length > 0) {
                    response += `\n\n**Relevant Services:**`;
                    relevantServices.forEach(service => {
                        response += `\n• **${service.title}:** ${service.description}`;
                    });
                }
                
                response += `\n\n**I can provide detailed information about:**
• Service specifications and capabilities
• Pricing models and implementation costs  
• Integration processes and technical requirements
• Industry-specific solutions and case studies
• Contact information and next steps

**Popular Questions:**
• "How does your payment processing work?"
• "What's your project management approach?"
• "Can you handle multi-country payroll?"
• "What are your P.E.O. benefits?"

What specific aspect would you like me to explain?`;
                
                return response;
            }
            
            findRelevantServices(keywords) {
                const relevant = [];
                const services = Object.values(this.knowledgeBase.services);
                
                keywords.forEach(keyword => {
                    services.forEach(service => {
                        const searchText = `${service.title} ${service.description}`.toLowerCase();
                        if (searchText.includes(keyword.toLowerCase()) && !relevant.includes(service)) {
                            relevant.push(service);
                        }
                    });
                });
                
                return relevant;
            }
            
            triggerSmartActions(analysis) {
                // High-value lead detection
                if (this.userProfile.leadScore > 60 && !this.leadCaptured) {
                    setTimeout(() => this.showLeadCaptureForm(), 2000);
                }
                
                // Urgency handling
                if (analysis.urgency === 'high' && this.conversionAttempts < 1) {
                    setTimeout(() => this.showUrgencyResponse(), 1000);
                    this.conversionAttempts++;
                }
                
                // Multiple service interest
                if (this.userProfile.interests.length >= 2) {
                    setTimeout(() => this.showBundleOffer(), 3000);
                }
            }
            
            showLeadCaptureForm() {
                const form = `<div class="lead-capture-form">
<h4>🎯 Get Your Custom Business Assessment</h4>
<p>You qualify for our premium consultation worth $500!</p>
<input type="text" placeholder="Your Name" id="leadName">
<input type="email" placeholder="Business Email" id="leadEmail">  
<input type="text" placeholder="Company Name" id="leadCompany">
<input type="tel" placeholder="Phone Number" id="leadPhone">
<button class="cta-button" onclick="captureLead()">
    Schedule Free Consultation
</button>
</div>`;
                
                addMessage('bot', form, false);
            }
            
            showUrgencyResponse() {
                const urgencyMsg = `<div class="urgency-banner">
⚡ URGENT REQUEST DETECTED - Priority support activated!<br>
Our specialists are standing by for immediate assistance.
</div>

I understand you need urgent assistance. Let me connect you with our priority support team right away.

**Immediate Actions Available:**
• Direct phone consultation within 30 minutes
• Emergency project kickoff this week  
• Express implementation services
• Dedicated account manager assignment

Would you like me to arrange an immediate callback?`;
                
                addMessage('bot', urgencyMsg, false);
            }
            
            showBundleOffer() {
                const bundleMsg = `🎁 **SMART RECOMMENDATION: Complete Business Suite**

Since you're interested in multiple Bay Royal services, I recommend our integrated business transformation package:

<div class="roi-calculator">
<h4>💎 Premium Business Suite</h4>
• All 4 services: Payment + Project + Payroll + P.E.O.<br>
• 35% savings vs individual services<br>
• Single point of contact<br>
• Unified reporting dashboard<br>
• Priority implementation<br>
• 2-year price guarantee
</div>

**Limited Time:** Available to next 15 qualified businesses only!

Shall I prepare a custom bundle proposal for you?`;
                
                addMessage('bot', bundleMsg, true);
            }
        }

        // Initialize the Next-Gen AI
        const bayRoyalAI = new NextGenBayRoyalAI();
        let isFirstVisit = true;
        let messageCount = 0;

        // Enhanced Chat Functions
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                addMessage('user', message);
                input.value = '';
                adjustTextareaHeight(input);
                messageCount++;
                
                showTypingIndicator(true);
                
                // Realistic thinking time
                const thinkingTime = Math.random() * 2500 + 1500;
                setTimeout(() => {
                    const response = bayRoyalAI.processQuery(message);
                    showTypingIndicator(false);
                    addMessage('bot', response, true);
                }, thinkingTime);
            }
        }

        function toggleChat() {
            const container = document.getElementById('chatContainer');
            const toggle = document.getElementById('chatToggle');
            const badge = document.getElementById('notificationBadge');
            
            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'flex';
                toggle.innerHTML = '✕';
                badge.style.display = 'none';
                
                if (isFirstVisit) {
                    setTimeout(() => {
                        const welcomeMessage = bayRoyalAI.generateGreeting({});
                        addMessage('bot', welcomeMessage, true);
                        isFirstVisit = false;
                    }, 800);
                }
            } else {
                container.style.display = 'none';
                toggle.innerHTML = '🧠';
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        }

        function showTypingIndicator(show) {
            const indicator = document.getElementById('typingIndicator');
            const statusText = document.getElementById('statusText');
            
            if (show) {
                statusText.style.display = 'none';
                indicator.style.display = 'block';
            } else {
                statusText.style.display = 'block';
                indicator.style.display = 'none';
            }
        }

        function addMessage(sender, text, showSuggestions = false) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            
            const messageContent = document.createElement('div');
            messageContent.className = sender === 'bot' ? 'bot-message' : 'user-message';
            messageContent.innerHTML = text.replace(/\n/g, '<br>');
            
            messageDiv.appendChild(messageContent);
            
            // Add smart suggestions for bot messages
            if (sender === 'bot' && showSuggestions) {
                const suggestions = generateSmartSuggestions(text);
                if (suggestions.length > 0) {
                    const suggestionsDiv = createSuggestionChips(suggestions);
                    messageDiv.appendChild(suggestionsDiv);
                }
            }
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateSmartSuggestions(botMessage) {
            const lowerMessage = botMessage.toLowerCase();
            
            if (lowerMessage.includes('welcome') || lowerMessage.includes('hello')) {
                return ['Our Services', 'Get Pricing', 'Schedule Demo', 'Contact Sales'];
            }
            
            if (lowerMessage.includes('service') || lowerMessage.includes('portfolio')) {
                return ['Payment Solutions', 'Project Management', 'Payroll & HR', 'P.E.O. Services'];
            }
            
            if (lowerMessage.includes('payment')) {
                return ['API Integration', 'Security Features', 'Pricing', 'Implementation'];
            }
            
            if (lowerMessage.includes('project')) {
                return ['Methodology', 'Success Stories', 'Timeline', 'Get Quote'];
            }
            
            if (lowerMessage.includes('pricing')) {
                return ['Custom Quote', 'ROI Calculator', 'Schedule Call', 'Payment Plans'];
            }
            
            return ['Learn More', 'Get Quote', 'Schedule Demo', 'Contact Us'];
        }

        function createSuggestionChips(suggestions) {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'suggestion-chips';
            
            suggestions.forEach(suggestion => {
                const chip = document.createElement('span');
                chip.className = 'suggestion-chip';
                chip.textContent = suggestion;
                chip.onclick = () => {
                    document.getElementById('chatInput').value = suggestion;
                    sendMessage();
                };
                suggestionsDiv.appendChild(chip);
            });
            
            return suggestionsDiv;
        }

        function adjustTextareaHeight(textarea) {
            textarea.style.height = 'auto';
            const newHeight = Math.min(textarea.scrollHeight, 120);
            textarea.style.height = newHeight + 'px';
        }

        function captureLead() {
            const name = document.getElementById('leadName')?.value;
            const email = document.getElementById('leadEmail')?.value;
            const company = document.getElementById('leadCompany')?.value;
            const phone = document.getElementById('leadPhone')?.value;
            
            if (name && email) {
                bayRoyalAI.leadCaptured = true;
                const successMessage = `Thank you ${name}! Your consultation is confirmed.
                
**What happens next:**
• Our senior solutions architect will contact you within 2 hours
• Personalized needs assessment and solution design
• Custom ROI projection and competitive pricing
• Implementation roadmap tailored to your timeline
• Access to our Business Transformation Guide via email

Welcome to the Bay Royal family!`;
                
                addMessage('bot', successMessage, false);
                
                // In a real implementation, this would integrate with your CRM
                console.log('Lead Captured:', { 
                    name, email, company, phone, 
                    leadScore: bayRoyalAI.userProfile.leadScore,
                    interests: bayRoyalAI.userProfile.interests,
                    timestamp: new Date().toISOString()
                });
            } else {
                alert('Please fill in at least your name and email address.');
            }
        }

        // Auto-adjust textarea height
        document.getElementById('chatInput').addEventListener('input', function() {
            adjustTextareaHeight(this);
        });

        // Prevent chat from closing when clicking inside
        document.getElementById('chatContainer').addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Enhanced keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl+M to toggle chat
            if (e.ctrlKey && e.key === 'm') {
                e.preventDefault();
                toggleChat();
            }
            
            // ESC to close chat
            if (e.key === 'Escape') {
                const container = document.getElementById('chatContainer');
                if (container.style.display === 'flex') {
                    toggleChat();
                }
            }
        });

        // Create floating particles background
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Show notification badge after delay if chat hasn't been opened
        setTimeout(() => {
            if (isFirstVisit) {
                const badge = document.getElementById('notificationBadge');
                const container = document.getElementById('chatContainer');
                
                if (container.style.display !== 'flex') {
                    badge.style.display = 'flex';
                    setTimeout(() => {
                        badge.style.display = 'none';
                    }, 15000);
                }
            }
        }, 30000);

        // Enhanced periodic attention-getting animation
        setInterval(() => {
            const toggle = document.getElementById('chatToggle');
            const container = document.getElementById('chatContainer');
            
            if (container.style.display !== 'flex') {
                toggle.style.transform = 'scale(1.1)';
                toggle.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.6)';
                setTimeout(() => {
                    toggle.style.transform = 'scale(1)';
                    toggle.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.4)';
                }, 3000);
            }
        }, 45000);

        // Performance monitoring
        function logPerformance() {
            console.log('Bay Royal AI Assistant - Performance Metrics');
            console.log('Messages processed:', messageCount);
            console.log('User engagement score:', bayRoyalAI.userProfile.engagement);
            console.log('Lead score:', bayRoyalAI.userProfile.leadScore);
            console.log('Session duration:', Math.round((Date.now() - bayRoyalAI.sessionStartTime) / 1000 / 60) + ' minutes');
        }

        // Log performance every 5 minutes
        setInterval(logPerformance, 300000);

        // Initialize console logging
        console.log('Bay Royal International - Next Generation AI Assistant');
        console.log('Features: Advanced NLP, sentiment analysis, lead scoring, contextual responses');
        console.log('Shortcuts: Ctrl+M (toggle), ESC (close)');
        console.log('Status: Ready for intelligent conversations');
        
        // Additional advanced response methods for the AI class
        bayRoyalAI.generateContactResponse = function(entities, persona) {
            let response = `📍 **Bay Royal International - Global Contact Information**

**Headquarters - Lagos, Nigeria:**
📧 lagos@bayroyalinternational.com
📞 +234 (0) 1 234 5678
🏢 6b Bendel Close, Victoria Island, Lagos, Nigeria
🕒 Monday-Friday: 8:00 AM - 6:00 PM WAT

**Regional Office - Abuja, Nigeria:**
📧 abuja@bayroyalinternational.com  
📞 +234 (0) 9 876 5432
🏢 22 Kumasi Crescent, Wuse 2, FCT, Abuja, Nigeria
🕒 Monday-Friday: 8:00 AM - 6:00 PM WAT

**West Africa Hub - Accra, Ghana:**
📧 accra@bayroyalinternational.com
📞 +233 541 604 192
🏢 Regus Building, 5 Roman Road, Off Borstal Ave Lane, Accra
🕒 Monday-Friday: 8:00 AM - 5:00 PM GMT

**East Africa Hub - Nairobi, Kenya:**
📧 nairobi@bayroyalinternational.com
📞 +254 700 123 456
🏢 Windsor House, University Way, Muindi Mbingu Street, Nairobi
🕒 Monday-Friday: 8:00 AM - 5:00 PM EAT`;

            if (entities.locations.length > 0) {
                const location = entities.locations[0];
                const office = this.knowledgeBase.offices[location];
                if (office) {
                    response += `

**You mentioned ${office.city} - here are the specific details:**
🎯 **${office.city} Office (${office.status})**
📧 ${office.email}
📞 ${office.phone}
🏢 ${office.address}`;
                }
            }

            response += `

**General Information:**
🌐 Website: www.bayroyalinternational.com
💼 LinkedIn: Bay Royal International Limited
📱 WhatsApp: Available on all office numbers

**Quick Actions:**
• Schedule a consultation call
• Request a custom proposal  
• Arrange an office visit
• Connect with our specialists

Which office would you like to connect with, or shall I arrange a consultation call for you?`;

            return response;
        };

        bayRoyalAI.generateDemoResponse = function(entities, persona) {
            return `🎬 **Bay Royal Service Demonstrations - See Our Solutions in Action**

**Available Demo Formats:**

<div class="service-card">
<div class="service-title">💳 Payment Solutions Demo</div>
• Live payment processing demonstration<br>
• API integration walkthrough<br>
• Security features and compliance overview<br>
• Custom implementation roadmap<br>
• Real-time transaction monitoring
</div>

<div class="service-card">
<div class="service-title">🚀 Project Management Demo</div>
• Project planning methodology showcase<br>
• Collaboration tools and dashboards<br>
• Progress tracking and reporting<br>
• Risk management processes<br>
• Quality assurance protocols
</div>

<div class="service-card">
<div class="service-title">👥 HR & Payroll Demo</div>
• Multi-country payroll processing<br>
• Employee self-service portal tour<br>
• HR analytics and reporting dashboard<br>
• Compliance management tools<br>
• Benefits administration system
</div>

<div class="service-card">
<div class="service-title">🏛️ P.E.O. Services Demo</div>
• Co-employment model explanation<br>
• Risk management showcase<br>
• Cost savings calculator<br>
• Employee benefits comparison<br>
• Implementation timeline review
</div>

**Demo Options:**
• **Live Demo:** 45-60 minutes with Q&A
• **Self-Guided Tour:** Access anytime online
• **Custom Demo:** Tailored to your specific needs
• **On-Site Demo:** At your location or our offices

**What's Included:**
✓ Personalized demonstration based on your industry
✓ Technical Q&A with our experts
✓ Custom solution recommendations  
✓ Implementation timeline and pricing
✓ Next steps planning session

Which type of demonstration would you prefer? I can schedule it immediately!`;
        };

        bayRoyalAI.generateAboutResponse = function(persona) {
            return `🏢 **About Bay Royal International Limited**

**Our Story:**
Bay Royal International Limited is a leading African professional services firm, dedicated to transforming businesses through our comprehensive 4Ps approach: Payment, Project, Payroll, and P.E.O. services.

**Vision:**
Creating seamless and innovative end-to-end service delivery in all we do.

**Mission:** 
We are committed to utmost customer satisfaction while ensuring our culture and values are upheld and aligned with our partners', providing distinct solutions that keep clients pleased.

**Leadership:**
Led by **Peter Owoeye, CEO & Founder**, with 15+ years in Finance & Business Strategy and Project Management. Our management team brings over 100 years of combined experience across finance, project management, HR, and technology.

**Our Presence:**
🇳🇬 **Nigeria:** Lagos (HQ) & Abuja
🇬🇭 **Ghana:** Accra  
🇰🇪 **Kenya:** Nairobi
🌍 **Expanding:** Across Africa

**Core Values:**
• **Professionalism:** Maintaining the highest standards
• **Integrity:** Transparent and ethical practices  
• **Expertise:** Deep knowledge and proven experience
• **Innovation:** Cutting-edge solutions and technologies
• **Partnership:** True collaboration with our clients

**Why Choose Bay Royal:**
✓ Multi-country African presence with local expertise
✓ International best practices with regional knowledge
✓ 98% client satisfaction and retention rate
✓ 500+ successful projects across various industries
✓ End-to-end service delivery across all business functions
✓ Certified professionals and proven methodologies

**Industries We Serve:**
Financial Services, Technology, Healthcare, Manufacturing, Retail, Government, NGOs, Education, Energy, and Agriculture.

Ready to learn more about how Bay Royal can transform your business?`;
        };

        bayRoyalAI.generateGoodbyeResponse = function(persona) {
            const responses = [
                `Thank you for connecting with Bay Royal International! It's been a pleasure discussing our comprehensive business solutions with you.

**Before you go:**
• Save our contact information for future reference
• Consider scheduling a consultation with our specialists
• Follow us for the latest updates and insights
• Download our service brochures from our website

**Ready to get started?**
📧 Email us at your preferred office location
📞 Call us for immediate assistance  
🌐 Visit bayroyalinternational.com for more details

We look forward to helping transform your business with our Payment, Project, Payroll, and P.E.O. solutions!`,

                `It's been wonderful talking with you about Bay Royal's services! I hope our conversation has provided valuable insights into how we can help your business succeed.

**Next Steps:**
• Reach out to our team for personalized consultation
• Schedule a demo to see our solutions in action
• Connect with us on LinkedIn for business insights
• Visit our offices in Lagos, Abuja, Accra, or Nairobi

Thank you for your time, and remember - Bay Royal is here whenever you're ready to take your business to the next level!

Have a fantastic day!`
            ];
            
            return responses[Math.floor(Math.random() * responses.length)];
        };

        // Initialize completed
        console.log('🚀 Bay Royal Next-Generation AI Assistant fully loaded and operational!');
    