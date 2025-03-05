export default {
    // Main Logo Information
    LogoTitle: 'Brand Identity',
    LogoDescription: 'Enter your organization name to create a distinctive brand mark',
    
    // Vision & Description
    LogoDescTitle: 'Articulate Your Brand Vision',
    LogoDescDescription: 'Describe your brand vision and purpose to help the AI generate a logo that aligns with your brand identity',
    LogoIdeaTitle: 'Explore Design Concepts',
    LogoIdeaDesc: 'Select from curated design templates or describe your custom vision',
    
    // Design Preferences
    LogoDesignTitle: 'Select Your Logo Architecture',
    LogoDesignDesc: 'Choose a design approach that aligns with your brand identity',
    
    // Color Selection
    LogoColorPaletteTitle: 'Define Your Brand Colors',
    LogoColorPaletteDesc: 'Select a color palette that embodies your brand personality',

    LoadingWaitDesc:'✨ Please wait a moment while we work our magic to bring your logo to life.',
    LoadingWaitTitle:'Your logo is being created',

    pricingOptions: [
        {
            title: 'Free',
            price: '$0',
            desc: 'Perfect for trying out the platform',
            features: [
                'Generate 3 logos per day',
                'Basic customization options',
                'Standard quality downloads',
                'PNG downloads only',
                'Basic color variations'
            ],
            buttonText: 'Start Free',
            popular: false
        },
        {
            title: 'Pro',
            price: '$19',
            desc: 'Ideal for businesses and professionals',
            features: [
                'Unlimited logo generations',
                'Advanced customization tools',
                'High resolution downloads',
                'All file formats (PNG, SVG, PDF)',
                'Multiple color variations',
                'Remove background',
                'Priority support'
            ],
            buttonText: 'Go Pro',
            popular: true
        },
        {
            title: 'Enterprise',
            price: '$49',
            descri: 'Complete brand identity solution',
            features: [
                'Everything in Pro plan',
                'Brand guidelines document',
                'Social media kit',
                'Business card designs',
                'Unlimited revisions',
                'Dedicated support',
                'Commercial usage rights'
            ],
            buttonText: 'Contact Sales',
            popular: false
        }
    ]
}