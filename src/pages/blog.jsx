import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock3, BookOpen, Sparkles, X } from "lucide-react";

const WHATSAPP_NUMBER = "917010054619";

const articles = [
  {
    "title": "Scent Marketing for Hotels: Improve Guest Experience & Loyalty",
    "readTime": "6 min read",
    "excerpt": "Discover how hotels in UAE use scent marketing solutions to improve guest experience, brand recall, and loyalty with professional aroma diffusers.",
    "slug": "scent-marketing-for-hotels-improve-guest-experience-loyalty",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "What to Consider When Choosing a Commercial Aroma Diffuser",
    "readTime": "7 min read",
    "excerpt": "Learn what large companies actually consider when selecting professional scent systems—from HVAC compatibility to micro-atomization technology.",
    "slug": "what-to-consider-when-choosing-a-commercial-aroma-diffuser",
    "category": "Diffuser Guides"
  },
  {
    "title": "Scent Marketing 101 Solutions in UAE | Cool Max Scent",
    "readTime": "5 min read",
    "excerpt": "Scent Marketing 101: How Dubai Businesses Use olfactory branding to dominate the market.",
    "slug": "scent-marketing-101-solutions-in-uae-cool-max-scent",
    "category": "Scent Marketing"
  },
  {
    "title": "Why 5-Star Hotels in Dubai Use Scent Diffusers - The Power of Scent Marketing in Luxury Hospitality",
    "readTime": "6 min read",
    "excerpt": "Discover why leading 5-star hotels in Dubai invest in hotel scent diffuser systems.",
    "slug": "why-5-star-hotels-in-dubai-use-scent-diffusers-the-power-of-scent-marketing-in-luxury-hospitality",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "First Impressions Matter: Scent Solutions for Corporate Reception Area",
    "readTime": "4 min read",
    "excerpt": "How Commercial Scent Diffuser Machines Transform Business Environments and brand perception.",
    "slug": "first-impressions-matter-scent-solutions-for-corporate-reception-area",
    "category": "Workplaces"
  },
  {
    "title": "How Large Area & HVAC Aroma Diffusers Transform Commercial Spaces | Cool Max Scent",
    "readTime": "5 min read",
    "excerpt": "Discover how industrial HVAC scenting creates seamless fragrance coverage for malls and towers.",
    "slug": "how-large-area-hvac-aroma-diffusers-transform-commercial-spaces-cool-max-scent",
    "category": "Diffuser Guides"
  },
  {
    "title": "Best Aroma Diffuser in Dubai – How to Choose Scents for Every Season",
    "readTime": "8 min read",
    "excerpt": "A complete seasonal scenting guide for facility managers. Learn what to diffuse from spring florals to winter woods.",
    "slug": "best-aroma-diffuser-in-dubai-how-to-choose-scents-for-every-season",
    "category": "Diffuser Guides"
  },
  {
    "title": "Why Modern Offices Use Scent Systems - The Strategic Advantage",
    "readTime": "7 min read",
    "excerpt": "Discover the measurable ROI of office scenting, from 20% increased focus to employee retention in the UAE.",
    "slug": "why-modern-offices-use-scent-systems-the-strategic-advantage",
    "category": "Workplaces"
  },
  {
    "title": "Commercial Scent Diffuser vs Air Freshener | Cool max",
    "readTime": "8 min read",
    "excerpt": "Compare commercial scent diffuser vs air freshener and find what works best for your business. Improve customer experience with the right scent solution.",
    "slug": "commercial-scent-diffuser-vs-air-freshener-cool-max",
    "category": "Diffuser Guides"
  },
  {
    "title": "Best Scent Diffuser Machine Guide | Cool Max Scent UAE & QATAR",
    "readTime": "8 min read",
    "excerpt": "Learn how to choose the best scent diffuser machine for homes, offices, and commercial spaces. Discover advanced scent solutions by Cool Max Scent in UAE & Qatar.",
    "slug": "best-scent-diffuser-machine-guide-cool-max-scent-uae-qatar",
    "category": "Diffuser Guides"
  },
  {
    "title": "5 Simple Steps to Clean and Maintain Your Diffuser for Long-Lasting Performance",
    "readTime": "8 min read",
    "excerpt": "A good scent diffuser helps spread a pleasant fragrance evenly and makes any space feel more inviting—whether it's your home, hotel, office, or shop.",
    "slug": "5-simple-steps-to-clean-and-maintain-your-diffuser-for-long-lasting-performance",
    "category": "Diffuser Guides"
  },
  {
    "title": "Aroma Diffuser Machine UAE | Fragrance Solutions in UAE",
    "readTime": "8 min read",
    "excerpt": "Discover the best aroma diffuser machine UAE solutions for homes, offices, hotels, and retail spaces. Explore professional fragrance solutions in UAE.",
    "slug": "aroma-diffuser-machine-uae-fragrance-solutions-in-uae",
    "category": "Fragrance Guides"
  },
  {
    "title": "HVAC Scent Diffuser System UAE for Better Business Experience",
    "readTime": "8 min read",
    "excerpt": "Discover how HVAC scent diffuser system UAE helps hotels, malls, and offices improve customer experience with consistent fragrance solutions.",
    "slug": "hvac-scent-diffuser-system-uae-for-better-business-experience",
    "category": "Diffuser Guides"
  },
  {
    "title": "Best Aroma Oil Scent Diffuser Guide for Every Room | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Find the perfect aroma oil diffuser for your space. Explore premium aroma oils like oud, lavender, white tea, and more to create a relaxing atmosphere. Contact Us Today!",
    "slug": "best-aroma-oil-scent-diffuser-guide-for-every-room-cool-max-scent",
    "category": "Fragrance Guides"
  },
  {
    "title": "Stop Summer Odors Fast with Smart Scent Solutions I Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Beat summer odors in homes, offices, and malls. Discover diffuser solutions for long-lasting freshness. Contact Cool Max Scent experts today.",
    "slug": "stop-summer-odors-fast-with-smart-scent-solutions-i-cool-max-scent",
    "category": "Fragrance Guides"
  },
  {
    "title": "Air Fragrance Diffusers in Dubai Hospitality Industry: How Hotels Create Premium Guest Experiences",
    "readTime": "8 min read",
    "excerpt": "Dubai is known for luxury, innovation, and world-class hospitality. From premium hotels and resorts to boutique stays and serviced apartments, every hospitality brand in the city competes to deliver memorable guest experiences.",
    "slug": "air-fragrance-diffusers-in-dubai-hospitality-industry-how-hotels-create-premium-guest-experiences",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Why Floor standing diffusers are ideal for commercial spaces",
    "readTime": "8 min read",
    "excerpt": "Discover why Floor-Standing Aroma Diffusers in UAE are ideal for luxury hotels, offices, showrooms, and large commercial spaces with premium scent coverage.",
    "slug": "why-floor-standing-diffusers-are-ideal-for-commercial-spaces",
    "category": "Diffuser Guides"
  },
  {
    "title": "Aroma Oil Diffusers in Dubai for Better Mood & Comfort",
    "readTime": "8 min read",
    "excerpt": "Discover how Aroma Oil Diffusers in Dubai improve mood, comfort, and indoor atmosphere in homes, offices, hotels, and commercial spaces across UAE.",
    "slug": "aroma-oil-diffusers-in-dubai-for-better-mood-comfort",
    "category": "Fragrance Guides"
  },
  {
    "title": "Air Diffuser Machine in Dubai for Retail & Hospitality Spaces",
    "readTime": "8 min read",
    "excerpt": "Discover how an Air Diffuser Machine in Dubai improves customer experience, brand perception, and atmosphere in retail and hospitality spaces.",
    "slug": "air-diffuser-machine-in-dubai-for-retail-hospitality-spaces",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Aroma Diffuser Solutions in Dubai for Shopping Malls",
    "readTime": "8 min read",
    "excerpt": "Discover how aroma diffuser solutions in Dubai can enhance the shopping experience and create a welcoming atmosphere in retail spaces.",
    "slug": "aroma-diffuser-solutions-in-dubai-for-shopping-malls",
    "category": "Retail & Customer Experience"
  },
  {
    "title": "Aroma Diffuser Solutions in Dubai for Modern Office Workspaces",
    "readTime": "8 min read",
    "excerpt": "Discover how modern offices in Dubai use aroma diffuser solutions, HVAC scent systems, & commercial aroma diffusers to improve workplace atmosphere & employee experience.",
    "slug": "aroma-diffuser-solutions-in-dubai-for-modern-office-workspaces",
    "category": "Workplaces"
  },
  {
    "title": "Small Space Scent Diffuser Guide | Choose the Best One for Your Home or Office",
    "readTime": "8 min read",
    "excerpt": "Discover how to choose the best scent diffuser for small spaces. Learn tips on selecting the right scent diffuser machine and aroma diffuser machine UAE.",
    "slug": "small-space-scent-diffuser-guide-choose-the-best-one-for-your-home-or-office",
    "category": "Workplaces"
  },
  {
    "title": "Gym Scent Diffusers in Dubai | Improve Gym Ambience",
    "readTime": "8 min read",
    "excerpt": "Improve gym ambience and customer satisfaction with professional scent diffusers and air freshener machines for gyms in Dubai.",
    "slug": "gym-scent-diffusers-in-dubai-improve-gym-ambience",
    "category": "Industry Solutions"
  },
  {
    "title": "Aerosol Spray Dispenser vs Automatic Scent Diffuser | UAE & Qatar",
    "readTime": "8 min read",
    "excerpt": "Compare aerosol spray dispensers vs automatic scent diffusers to find the best long-lasting fragrance solution for homes, offices, hotels, and commercial spaces across UAE and Qatar.",
    "slug": "aerosol-spray-dispenser-vs-automatic-scent-diffuser-uae-qatar",
    "category": "Scent Marketing"
  },
  {
    "title": "Dubai Hotel Scent Secrets | Luxury Home Fragrance UAE",
    "readTime": "8 min read",
    "excerpt": "Learn how UAE hotels create unforgettable scent experiences and transform your home or business with premium fragrance solutions from Cool Max Scent.",
    "slug": "dubai-hotel-scent-secrets-luxury-home-fragrance-uae",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Cool Max Scent Diffusers for Dubai Supermarket Stores",
    "readTime": "8 min read",
    "excerpt": "Transform your supermarket atmosphere with premium scent diffusers in Dubai that improve customer experience, boost engagement, and create fresh shopping environments. Contact Us Today!",
    "slug": "cool-max-scent-diffusers-for-dubai-supermarket-stores",
    "category": "Retail & Customer Experience"
  },
  {
    "title": "How to Use Aroma Diffusers Effectively | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Learn how to use aroma diffuser machines in UAE effectively for homes, offices, hotels, & commercial spaces. Discover expert tips for better fragrance coverage.",
    "slug": "how-to-use-aroma-diffusers-effectively-cool-max-scent",
    "category": "Diffuser Guides"
  },
  {
    "title": "Top 10 Aroma Diffusers in UAE for Commercial Spaces",
    "readTime": "8 min read",
    "excerpt": "Discover the best Aroma Diffuser Machines in UAE for hotels, offices, malls, and retail spaces. Explore premium scenting solutions from Cool Max Scent.",
    "slug": "top-10-aroma-diffusers-in-uae-for-commercial-spaces",
    "category": "Diffuser Guides"
  },
  {
    "title": "10 Best Summer Fragrance Oils for Dubai Diffusers | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Looking for the perfect summer scent? Discover the 10 best fragrance oils for diffusers in Dubai, with fresh, long-lasting options for UAE spaces. Contact Us Today!",
    "slug": "10-best-summer-fragrance-oils-for-dubai-diffusers-cool-max-scent",
    "category": "Fragrance Guides"
  },
  {
    "title": "Scent Aroma Oil Diffusers for Clinics & Wellness Centers | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Learn how aroma oil diffusers help clinics and wellness centers create calming environments, improve patient comfort, and enhance visitor experiences. Contact Us Today!",
    "slug": "scent-aroma-oil-diffusers-for-clinics-wellness-centers-cool-max-scent",
    "category": "Fragrance Guides"
  },
  {
    "title": "Create a Luxurious Home with Professional Aroma Diffusers | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Discover how essential oil diffusers and premium fragrance oils create a luxurious, welcoming, and relaxing atmosphere throughout your home.",
    "slug": "create-a-luxurious-home-with-professional-aroma-diffusers-cool-max-scent",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Maximize Your Workouts with Cool Max Scent Solutions for Gyms",
    "readTime": "7 min read",
    "excerpt": "Boost member experience with Cool Max Scent Solutions, delivering consistent fragrance and a clean, welcoming gym environment every day.",
    "slug": "maximize-your-workouts-with-cool-max-scent-solutions-for-gyms",
    "category": "Industry Solutions"
  },
  {
    "title": "Why Every Modern Cinema in Dubai Needs the Right Aroma Diffuser",
    "readTime": "8 min read",
    "excerpt": "Explore professional aroma diffuser solutions for Dubai cinemas, entertainment venues, and large commercial spaces to create a premium visitor experience.",
    "slug": "why-every-modern-cinema-in-dubai-needs-the-right-aroma-diffuser",
    "category": "Industry Solutions"
  },
  {
    "title": "How an Aroma Diffuser for Clinics in Dubai Enhances Patient Comfort",
    "readTime": "8 min read",
    "excerpt": "Discover how clinics in Dubai improve patient comfort, reduce stress, and create a welcoming healthcare environment with professional aroma diffusers.",
    "slug": "how-an-aroma-diffuser-for-clinics-in-dubai-enhances-patient-comfort",
    "category": "Industry Solutions"
  },
  {
    "title": "How an Aroma Diffuser for Salons in Dubai Helps Increase Repeat Visits",
    "readTime": "8 min read",
    "excerpt": "Discover how an aroma diffuser for salons in Dubai enhances ambiance, strengthens client loyalty, and encourages repeat salon visits.",
    "slug": "how-an-aroma-diffuser-for-salons-in-dubai-helps-increase-repeat-visits",
    "category": "Industry Solutions"
  },
  {
    "title": "How an Aroma Diffuser for Fashion Avenue in Dubai Enhances the Shopping Experience",
    "readTime": "8 min read",
    "excerpt": "Discover how an aroma diffuser for Fashion Avenue in Dubai enhances retail atmosphere, customer experience, and brand perception.",
    "slug": "how-an-aroma-diffuser-for-fashion-avenue-in-dubai-enhances-the-shopping-experience",
    "category": "Retail & Customer Experience"
  },
  {
    "title": "How Wellness Spaces in Dubai Benefit from Professional Aroma Diffusers",
    "readTime": "8 min read",
    "excerpt": "Discover how an Aroma Diffuser for Wellness Space in Dubai enhances visitor comfort, creates a welcoming atmosphere, and supports modern wellness businesses.",
    "slug": "how-wellness-spaces-in-dubai-benefit-from-professional-aroma-diffusers",
    "category": "Industry Solutions"
  },
  {
    "title": "Stop Restroom Odors Before They Start with an Aroma Diffuser for Commercial Restrooms in Dubai",
    "readTime": "8 min read",
    "excerpt": "Discover how an aroma diffuser for commercial restrooms in Dubai keeps restrooms fresh, controls odors, and enhances customer experience.",
    "slug": "stop-restroom-odors-before-they-start-with-an-aroma-diffuser-for-commercial-restrooms-in-dubai",
    "category": "Industry Solutions"
  },
  {
    "title": "How an Aroma Diffuser for Restaurants in Dubai Enhances the Dining Experience",
    "readTime": "8 min read",
    "excerpt": "Discover how an aroma diffuser for restaurants in Dubai enhances ambience, reduces odours, and creates memorable dining experiences.",
    "slug": "how-an-aroma-diffuser-for-restaurants-in-dubai-enhances-the-dining-experience",
    "category": "Industry Solutions"
  },
  {
    "title": "Why the AeroPillar Diffuser is the Preferred Aroma Diffuser for Luxury Spaces in Dubai",
    "readTime": "8 min read",
    "excerpt": "Discover why the AeroPillar Diffuser is the preferred aroma diffuser in Dubai's luxury spaces for homes, hotels, offices, and retail environments.",
    "slug": "why-the-aeropillar-diffuser-is-the-preferred-aroma-diffuser-for-luxury-spaces-in-dubai",
    "category": "Scent Marketing"
  },
  {
    "title": "5 Ways Aroma Diffusers with Essential Oils Enhance Customer Satisfaction in Grocery Stores",
    "readTime": "8 min read",
    "excerpt": "Learn how commercial aroma diffusers and premium essential oils improve freshness, comfort, brand loyalty, and shopping behavior in grocery stores.",
    "slug": "5-ways-aroma-diffusers-with-essential-oils-enhance-customer-satisfaction-in-grocery-stores",
    "category": "Fragrance Guides"
  },
  {
    "title": "Best Aroma Diffuser for Shopping Malls in Dubai",
    "readTime": "8 min read",
    "excerpt": "Discover how an aroma diffuser for shopping malls in Dubai helps create a welcoming environment, improve visitor comfort, and strengthen the mall's premium retail experience.",
    "slug": "best-aroma-diffuser-for-shopping-malls-in-dubai",
    "category": "Diffuser Guides"
  },
  {
    "title": "Aroma Diffuser for Corporate Office in Dubai | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Explore why office ambience matters and how a professional office aroma diffuser supports a welcoming workplace in Dubai.",
    "slug": "aroma-diffuser-for-corporate-office-in-dubai-cool-max-scent",
    "category": "Workplaces"
  },
  {
    "title": "Creating Premium Client Impressions with Aroma Diffusers",
    "readTime": "8 min read",
    "excerpt": "Learn how an Aroma Diffuser for Corporate Office in Dubai helps create premium client impressions through better office ambience and scenting.",
    "slug": "creating-premium-client-impressions-with-aroma-diffusers",
    "category": "Scent Marketing"
  },
  {
    "title": "What Makes Luxury Hotels Unforgettable? The Role of an Aroma Diffuser for Hotel in Dubai",
    "readTime": "8 min read",
    "excerpt": "Every memorable hotel stay begins with the right atmosphere. An Aroma Diffuser for Hotel in Dubai helps create lasting guest impressions and elevates the luxury hospitality experience.",
    "slug": "what-makes-luxury-hotels-unforgettable-the-role-of-an-aroma-diffuser-for-hotel-in-dubai",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Why Schools Need Professional Aroma Solutions: Creating Better Learning Environments in Dubai",
    "readTime": "8 min read",
    "excerpt": "Discover why schools need professional aroma solutions. An Aroma Diffuser for Schools in Dubai helps create better learning environments across the UAE.",
    "slug": "why-schools-need-professional-aroma-solutions-creating-better-learning-environments-in-dubai",
    "category": "Workplaces"
  },
  {
    "title": "Top Commercial Spaces That Benefit Most from HVAC Scenting Systems in Dubai",
    "readTime": "8 min read",
    "excerpt": "Discover which Dubai commercial spaces gain the most from HVAC scenting systems — hotels, retail, offices, clinics, gyms and showrooms.",
    "slug": "top-commercial-spaces-that-benefit-most-from-hvac-scenting-systems-in-dubai",
    "category": "Diffuser Guides"
  },
  {
    "title": "Retail Store Aroma Diffuser Dubai | Professional Scenting",
    "readTime": "8 min read",
    "excerpt": "Improve customer experience with a Retail Store Aroma Diffuser Dubai. Explore retail fragrance systems for stores, showrooms, and commercial spaces.",
    "slug": "retail-store-aroma-diffuser-dubai-professional-scenting",
    "category": "Retail & Customer Experience"
  },
  {
    "title": "Why Customers Spend More Time in Pleasantly Scented Retail Stores",
    "readTime": "8 min read",
    "excerpt": "Discover how a commercial aroma diffuser for retail stores can create inviting shopping experiences. Explore AeroBlack Med and MistBox X for effective retail scenting.",
    "slug": "why-customers-spend-more-time-in-pleasantly-scented-retail-stores",
    "category": "Retail & Customer Experience"
  },
  {
    "title": "How to Select the Right Fragrance Intensity for Different Commercial Spaces",
    "readTime": "8 min read",
    "excerpt": "Too strong drives customers out, too weak wastes budget. Here's how to calibrate fragrance intensity for UAE commercial spaces, room by room. Contact Us!",
    "slug": "how-to-select-the-right-fragrance-intensity-for-different-commercial-spaces",
    "category": "Diffuser Guides"
  },
  {
    "title": "Aroma Diffuser for Hotel in UAE: A Complete Guide to Creating Memorable Guest Experiences",
    "readTime": "12 min read",
    "excerpt": "Discover how an aroma diffuser for hotel in UAE can enhance guest experiences. Explore professional hotel scenting solutions for lobbies, corridors and large hospitality spaces.",
    "slug": "aroma-diffuser-for-hotel-in-uae-a-complete-guide-to-creating-memorable-guest-experiences",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Commercial Aroma Diffuser for Car Showroom: Create Premium Buying Experiences",
    "readTime": "11 min read",
    "excerpt": "Create a premium car buying experience with a Commercial Aroma Diffuser for Car Showroom. Explore luxury scenting solutions for automotive dealerships.",
    "slug": "commercial-aroma-diffuser-for-car-showroom-create-premium-buying-experiences",
    "category": "Diffuser Guides"
  },
  {
    "title": "Why Members Return to Fresh Fitness Centers | Gym Fragrance Solutions Dubai",
    "readTime": "12 min read",
    "excerpt": "Discover how Gym Fragrance Solutions in Dubai can support a fresh, comfortable fitness environment and create a consistent member experience.",
    "slug": "why-members-return-to-fresh-fitness-centers-gym-fragrance-solutions-dubai",
    "category": "Fragrance Guides"
  },
  {
    "title": "How Scent Diffusers Enhance Passenger Experience in Airports & Aviation Lounges",
    "readTime": "8 min read",
    "excerpt": "Discover how scent diffusers enhance passenger experience in airports and aviation lounges by creating a fresh, relaxing, and premium atmosphere. Contact Us!",
    "slug": "how-scent-diffusers-enhance-passenger-experience-in-airports-aviation-lounges",
    "category": "Industry Solutions"
  },
  {
    "title": "Creating a Luxury Showroom Experience: The Role of Fragrance in Dubai Car Dealerships",
    "readTime": "8 min read",
    "excerpt": "Discover how fragrance can elevate luxury car showrooms in Dubai, create memorable customer experiences, and strengthen premium brand perception with scent marketing.",
    "slug": "creating-a-luxury-showroom-experience-the-role-of-fragrance-in-dubai-car-dealerships",
    "category": "Fragrance Guides"
  },
  {
    "title": "How Fragrance Influences Customer Experience in Commercial Spaces",
    "readTime": "8 min read",
    "excerpt": "Discover how fragrance influences customer experience, first impressions, and brand identity in hotels, restaurants, offices, retail stores, and commercial spaces. Contact Us!",
    "slug": "how-fragrance-influences-customer-experience-in-commercial-spaces",
    "category": "Diffuser Guides"
  },
  {
    "title": "Back to School, Fresh Atmosphere: Refreshing Homes, Classrooms & Study Spaces with Fragrance",
    "readTime": "8 min read",
    "excerpt": "Discover how fragrance can refresh homes, classrooms, and study spaces for back-to-school season with aroma solutions from Cool Max Scent. Contact Us!",
    "slug": "back-to-school-fresh-atmosphere-refreshing-homes-classrooms-study-spaces-with-fragrance",
    "category": "Workplaces"
  },
  {
    "title": "How to Choose the Right Fragrance for Your Business: A Complete Scent Selection Guide",
    "readTime": "8 min read",
    "excerpt": "Learn how to choose the right fragrance for your business based on your space, audience and brand identity. Discover professional scent solutions from Cool Max Scent.",
    "slug": "how-to-choose-the-right-fragrance-for-your-business-a-complete-scent-selection-guide",
    "category": "Diffuser Guides"
  },
  {
    "title": "How Office Fragrance Solutions Create a More Productive Workplace",
    "readTime": "8 min read",
    "excerpt": "Discover how an office aroma diffuser for workplace environments can improve ambience and comfort. Explore professional office fragrance solutions in Dubai.",
    "slug": "how-office-fragrance-solutions-create-a-more-productive-workplace",
    "category": "Workplaces"
  },
  {
    "title": "Villa Aroma Diffuser Dubai Room-by-Room Guide | Cool Max Scent",
    "readTime": "8 min read",
    "excerpt": "Discover how to choose the right aroma diffuser for your Dubai villa. Explore room-by-room diffuser recommendations, fragrance notes, and expert tips.",
    "slug": "villa-aroma-diffuser-dubai-room-by-room-guide-cool-max-scent",
    "category": "Hotels & Hospitality"
  },
  {
    "title": "Scent Marketing for Real Estate Developers: Creating Memorable Property Viewing Experiences",
    "readTime": "8 min read",
    "excerpt": "Discover how scent marketing enhances property viewings, sales galleries, and luxury show apartments. Explore professional aroma diffuser solutions by Cool Max Scent.",
    "slug": "scent-marketing-for-real-estate-developers-creating-memorable-property-viewing-experiences",
    "category": "Scent Marketing"
  },
  {
    "title": "What Is Cold-Air Diffusion Technology? Understanding Modern Waterless Aroma Diffusers",
    "readTime": "7 min read",
    "excerpt": "Discover how cold-air diffusion technology works and explore the benefits of waterless aroma diffusers for homes, hotels, offices, and commercial spaces. Contact Us!",
    "slug": "what-is-cold-air-diffusion-technology-understanding-modern-waterless-aroma-diffusers",
    "category": "Diffuser Guides"
  },
  {
    "title": "Why Fragrance Consistency Matters in Multi-Branch Businesses: A Guide to Standardising Your Brand's Scent",
    "readTime": "6 min read",
    "excerpt": "Learn why consistent brand fragrance matters for multi-branch businesses and how standardised scent solutions create a memorable, recognisable customer experience. Contact Us!",
    "slug": "why-fragrance-consistency-matters-in-multi-branch-businesses-a-guide-to-standardising-your-brand-s-scent",
    "category": "Fragrance Guides"
  },
  {
    "title": "How to Select Aroma Oils for Different Seasons in the UAE: Summer, Winter and Transitional Weather",
    "readTime": "7 min read",
    "excerpt": "Discover how to choose fresh summer scents, warm winter fragrances and versatile aroma oils for transitional weather in homes, offices and commercial spaces across the UAE.",
    "slug": "how-to-select-aroma-oils-for-different-seasons-in-the-uae-summer-winter-and-transitional-weather",
    "category": "Diffuser Guides"
  },
  {
    "title": "Aroma Diffusers for Salons and Barbershops: Creating a Welcoming Customer Environment",
    "readTime": "7 min read",
    "excerpt": "Discover how professional aroma diffusers and scent marketing can create a welcoming salon or barbershop atmosphere and strengthen your brand in the UAE.",
    "slug": "aroma-diffusers-for-salons-and-barbershops-creating-a-welcoming-customer-environment",
    "category": "Industry Solutions"
  },
  {
    "title": "How to Calculate Aroma Oil Consumption and Monthly Refilling Costs for Commercial Spaces",
    "readTime": "7 min read",
    "excerpt": "Learn how diffuser size, operating hours, fragrance intensity, and coverage affect aroma oil consumption and monthly refilling requirements for commercial spaces.",
    "slug": "how-to-calculate-aroma-oil-consumption-and-monthly-refilling-costs-for-commercial-spaces",
    "category": "Diffuser Guides"
  },
  {
    "title": "How Professional Fragrance Creates a Calming Wellness Environment",
    "readTime": "7 min read",
    "excerpt": "Discover how an aroma diffuser for wellness centres can create a calming atmosphere. Explore professional spa scenting solutions with AeroBlack Med and MistBox X.",
    "slug": "how-professional-fragrance-creates-a-calming-wellness-environment",
    "category": "Fragrance Guides"
  },
  {
    "title": "Professional Aroma Diffuser Rental Services in Dubai, UAE: Affordable Scent Marketing Solutions for Businesses",
    "readTime": "7 min read",
    "excerpt": "Transform your business environment with affordable aroma diffuser rental services in Dubai. Deliver a welcoming experience with professional scent marketing solutions.",
    "slug": "professional-aroma-diffuser-rental-services-in-dubai-uae-affordable-scent-marketing-solutions-for-businesses",
    "category": "Diffuser Guides"
  },
  {
    "title": "Create a Lasting Impression with Signature Scents: 5-Day Free Trial and Affordable Rental Plans in the UAE",
    "readTime": "7 min read",
    "excerpt": "Discover Cool Max Scent's signature scent solutions in the UAE with a 5-day free trial and affordable rental plans for hotels, offices, retail stores and businesses.",
    "slug": "create-a-lasting-impression-with-signature-scents-5-day-free-trial-and-affordable-rental-plans-in-the-uae",
    "category": "Diffuser Guides"
  },
  {
    "title": "From Installation to Refilling: Your Complete Guide to Hassle-Free Commercial Scenting Solutions in the UAE",
    "readTime": "7 min read",
    "excerpt": "Discover how commercial scenting solutions work, from diffuser installation and fragrance selection to regular refilling and maintenance for businesses across the UAE.",
    "slug": "from-installation-to-refilling-your-complete-guide-to-hassle-free-commercial-scenting-solutions-in-the-uae",
    "category": "Diffuser Guides"
  },
  {
    "title": "How to Create a Consistent Signature Scent Across Multiple Business Locations",
    "readTime": "8 min read",
    "excerpt": "Discover how UAE businesses can create a consistent signature scent across multiple locations with the right fragrance, diffuser system and maintenance plan.",
    "slug": "how-to-create-a-consistent-signature-scent-across-multiple-business-locations",
    "category": "Fragrance Guides"
  },
  {
    "title": "Choosing the Perfect Aroma Diffuser for Every Business Space in the UAE",
    "readTime": "7 min read",
    "excerpt": "Learn how to choose the right scent diffuser for hotels, offices, restaurants and retail spaces in the UAE with Cool Max Scent.",
    "slug": "choosing-the-perfect-aroma-diffuser-for-every-business-space-in-the-uae",
    "category": "Diffuser Guides"
  }
];

const categoryImages = {
  "Hotels & Hospitality": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
  "Workplaces": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  "Diffuser Guides": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
  "Fragrance Guides": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85",
  "Retail & Customer Experience": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
  "Industry Solutions": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  "Scent Marketing": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85"
};

const categories = ["All Articles", ...new Set(articles.map((article) => article.category))];

const whatsappLink = () => {
  const message = "Hello Cool Max Scent, I would like to know more about your professional scenting solutions.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = activeCategory === "All Articles" || article.category === activeCategory;
      const searchMatch = !term || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="cms-blog">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .cms-blog{--forest:#173d2b;--gold:#c7a96b;--cream:#f8f7f2;--ink:#1f3026;--muted:#737b72;background:#fbfaf7;color:var(--ink);font-family:'Poppins',sans-serif;min-height:100vh}
        .cms-blog *{box-sizing:border-box}.cms-blog a{text-decoration:none}.cms-container{width:min(1200px,calc(100% - 40px));margin:0 auto}
        .cms-hero{position:relative;overflow:hidden;background:var(--forest);color:#fff;padding:82px 0 74px}
        .cms-hero:after{content:'';position:absolute;width:500px;height:500px;border:1px solid #c7a96b38;border-radius:50%;right:-150px;top:-250px;box-shadow:0 0 0 50px #c7a96b0d,0 0 0 100px #c7a96b0a}
        .cms-hero-inner{position:relative;z-index:1;max-width:780px}
        .cms-eyebrow{display:inline-flex;align-items:center;gap:9px;color:#e2ce9d;font-size:10px;letter-spacing:.22em;font-weight:700;text-transform:uppercase}
        .cms-eyebrow:before{content:'';width:26px;height:1px;background:var(--gold)}
        .cms-hero h1{font-size:clamp(38px,5vw,64px);font-weight:500;letter-spacing:-.04em;line-height:1.12;margin:18px 0}
        .cms-hero h1 em{font-style:normal;color:#dfc991}
        .cms-hero p{max-width:650px;font-size:14px;line-height:1.9;color:#ffffffb8;margin:0}
        .cms-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
        .cms-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 18px;border:1px solid transparent;font:600 11px 'Poppins',sans-serif;cursor:pointer;transition:.25s}
        .cms-btn-primary{background:var(--gold);color:#203728}.cms-btn-primary:hover{background:#e0c98f;transform:translateY(-2px)}
        .cms-btn-outline{border-color:#ffffff55;color:white}.cms-btn-outline:hover{background:#ffffff12}
        .cms-stats{background:#fff;border-bottom:1px solid #e9e6dc}.cms-stats-inner{display:grid;grid-template-columns:repeat(3,1fr)}
        .cms-stat{display:flex;align-items:center;justify-content:center;gap:12px;padding:20px 12px;border-right:1px solid #eeeae0}.cms-stat:last-child{border:0}
        .cms-stat-icon{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#f3efe4;color:#987b45}
        .cms-stat strong{display:block;font-size:12px}.cms-stat span{display:block;font-size:10px;color:var(--muted);margin-top:3px}
        .cms-content{padding:66px 0 88px}.cms-head{max-width:690px;margin:0 auto 32px;text-align:center}
        .cms-kicker{color:#a1844f;text-transform:uppercase;letter-spacing:.19em;font-size:10px;font-weight:700}
        .cms-head h2{font-size:clamp(30px,4vw,44px);font-weight:500;letter-spacing:-.03em;line-height:1.2;margin:12px 0}
        .cms-head p{font-size:13px;line-height:1.8;color:var(--muted);margin:0}
        .cms-toolbar{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin:30px 0 24px}
        .cms-tabs{display:flex;flex-wrap:wrap;gap:7px}.cms-tab{border:1px solid #e4e1d7;background:transparent;color:#687269;padding:10px 12px;font:500 10px 'Poppins',sans-serif;cursor:pointer;transition:.2s}
        .cms-tab:hover,.cms-tab.active{background:var(--forest);border-color:var(--forest);color:white}
        .cms-search{position:relative;width:min(100%,280px)}.cms-search svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#879087}
        .cms-search input{width:100%;padding:12px 12px 12px 37px;border:1px solid #e4e1d7;background:#fff;outline:none;font:11px 'Poppins',sans-serif}
        .cms-search input:focus{border-color:#a1844f;box-shadow:0 0 0 3px #c7a96b22}
        .cms-result-line{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;color:#778074;font-size:11px}
        .cms-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .cms-card{display:flex;flex-direction:column;min-width:0;background:#fff;border:1px solid #e9e5da;transition:transform .25s,box-shadow .25s,border-color .25s;animation:cms-rise .5s ease both}
        .cms-card:hover{transform:translateY(-4px);border-color:#d4c7a7;box-shadow:0 18px 38px #173d2b10}
        .cms-card-image{height:205px;position:relative;overflow:hidden;background:#efeee7}
        .cms-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
        .cms-card:hover .cms-card-image img{transform:scale(1.045)}
        .cms-card-category{position:absolute;top:13px;left:13px;background:#f9f6ed;color:#725d36;padding:7px 9px;font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .cms-card-body{display:flex;flex:1;flex-direction:column;padding:20px}
        .cms-card-meta{display:flex;align-items:center;gap:7px;color:#9b8352;font-size:10px}
        .cms-card h3{font-size:17px;line-height:1.45;font-weight:500;letter-spacing:-.02em;margin:11px 0}
        .cms-card p{font-size:11px;line-height:1.85;color:#737b72;margin:0 0 20px}
        .cms-card-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:auto;border-top:1px solid #efede6;padding-top:14px}
        .cms-read-time{display:flex;align-items:center;gap:6px;font-size:10px;color:#81897f;white-space:nowrap}
        .cms-read-link{display:inline-flex;align-items:center;gap:6px;background:none;border:0;padding:7px 0;color:var(--forest);font:700 10px 'Poppins',sans-serif;cursor:pointer}
        .cms-read-link svg{transition:transform .2s}.cms-read-link:hover svg{transform:translateX(4px)}
        .cms-empty{grid-column:1/-1;padding:50px 20px;text-align:center;color:var(--muted);font-size:13px;background:white;border:1px solid #e9e5da}
        .cms-newsletter{background:#f0ede3;padding:58px 0}.cms-newsletter-inner{display:flex;align-items:center;justify-content:space-between;gap:28px}
        .cms-newsletter h2{font-size:clamp(26px,3vw,38px);font-weight:500;margin:10px 0}.cms-newsletter p{max-width:650px;color:#697369;font-size:12px;line-height:1.8;margin:0}
        .cms-note{padding:18px 0;text-align:center;color:#8a9087;font-size:10px;line-height:1.7}
        .cms-modal-backdrop{position:fixed;inset:0;z-index:1000;background:#10251acc;backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:20px}
        .cms-modal{width:min(600px,100%);max-height:85vh;overflow:auto;background:#fbfaf7;border:1px solid #e5dfd0;padding:28px;box-shadow:0 25px 80px #0003}
        .cms-modal-top{display:flex;justify-content:space-between;gap:15px;align-items:flex-start}.cms-modal h2{font-size:25px;line-height:1.35;font-weight:500;margin:12px 0}
        .cms-modal-close{border:1px solid #e3dfd4;background:white;width:36px;height:36px;display:grid;place-items:center;cursor:pointer;flex-shrink:0}
        @keyframes cms-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:950px){.cms-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cms-toolbar{align-items:stretch}.cms-search{width:100%;max-width:none}}
        @media(max-width:650px){.cms-container{width:calc(100% - 30px)}.cms-hero{padding:58px 0}.cms-hero h1{font-size:42px}.cms-hero p{font-size:12px}.cms-stats-inner{grid-template-columns:1fr}.cms-stat{justify-content:flex-start;border-right:0;border-bottom:1px solid #eeeae0;padding:14px 3px}.cms-stat:last-child{border-bottom:0}.cms-content{padding:48px 0 60px}.cms-grid{grid-template-columns:1fr;gap:16px}.cms-card-image{height:220px}.cms-tabs{flex-wrap:nowrap;overflow-x:auto;padding-bottom:5px}.cms-tab{white-space:nowrap}.cms-newsletter-inner{align-items:flex-start;flex-direction:column}.cms-modal{padding:21px}}
        @media(prefers-reduced-motion:reduce){.cms-blog *,.cms-blog *:before,.cms-blog *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
      `}</style>

      <section className="cms-hero">
        <div className="cms-container cms-hero-inner">
          <span className="cms-eyebrow">The Cool Max Scent Journal</span>
          <h1>Ideas that shape a <em>better scent experience.</em></h1>
          <p>Explore practical guides to professional aroma diffusers, scent marketing, fragrance selection and commercial scenting solutions for hotels, offices, retail spaces and more.</p>
          <div className="cms-hero-actions">
            <a className="cms-btn cms-btn-primary" href="#blog-articles">Explore articles <ArrowRight size={15} /></a>
            <a className="cms-btn cms-btn-outline" href={whatsappLink()} target="_blank" rel="noreferrer">Talk to a scenting specialist <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="cms-stats" aria-label="Journal features">
        <div className="cms-container cms-stats-inner">
          <div className="cms-stat"><div className="cms-stat-icon"><BookOpen size={18} /></div><div><strong>Practical buying guides</strong><span>Make informed scenting decisions</span></div></div>
          <div className="cms-stat"><div className="cms-stat-icon"><Sparkles size={18} /></div><div><strong>Industry insights</strong><span>Ideas for hospitality and business</span></div></div>
          <div className="cms-stat"><div className="cms-stat-icon"><Clock3 size={18} /></div><div><strong>Quick reads</strong><span>Helpful topics in a few minutes</span></div></div>
        </div>
      </section>

      <section className="cms-content" id="blog-articles">
        <div className="cms-container">
          <header className="cms-head">
            <span className="cms-kicker">Knowledge for better spaces</span>
            <h2>Explore the latest articles</h2>
            <p>Browse our scent marketing insights, diffuser guides and industry-specific ideas. Search by topic or choose a category to find what matters to your space.</p>
          </header>
          <div className="cms-toolbar">
            <div className="cms-tabs" aria-label="Filter articles by category">
              {categories.map((category) => <button type="button" key={category} onClick={() => setActiveCategory(category)} className={`cms-tab ${activeCategory === category ? "active" : ""}`}>{category}</button>)}
            </div>
            <label className="cms-search"><Search size={15} /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles..." aria-label="Search blog articles" /></label>
          </div>
          <div className="cms-result-line"><span>{activeCategory === "All Articles" ? "ALL ARTICLES" : activeCategory.toUpperCase()}</span><span>{filteredArticles.length} articles</span></div>
          <div className="cms-grid">
            {filteredArticles.map((article, index) => <article className="cms-card" key={article.slug} style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
              <div className="cms-card-image">
                <img src={categoryImages[article.category] || categoryImages["Scent Marketing"]} alt={article.title} loading="lazy" />
                <span className="cms-card-category">{article.category}</span>
              </div>
              <div className="cms-card-body">
                <div className="cms-card-meta"><Clock3 size={13} />{article.readTime}</div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="cms-card-footer">
                  <span className="cms-read-time"><BookOpen size={13} /> Insight & guide</span>
                  <button type="button" className="cms-read-link" onClick={() => setSelectedArticle(article)}>Read article <ArrowRight size={14} /></button>
                </div>
              </div>
            </article>)}
            {filteredArticles.length === 0 && <div className="cms-empty">No articles match your search. Try another keyword or choose “All Articles”.</div>}
          </div>
        </div>
      </section>

      <section className="cms-newsletter">
        <div className="cms-container cms-newsletter-inner">
          <div><span className="cms-kicker">Stay informed on scent excellence</span><h2>Find the right scent for your space.</h2><p>Whether you need a scent machine for a home or a professional system for a large commercial environment, our team can help you explore suitable options.</p></div>
          <a className="cms-btn cms-btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={15} /></a>
        </div>
      </section>
      <div className="cms-container cms-note">Article summaries are for general information. Product suitability depends on your space, ventilation, operating hours and fragrance preferences.</div>

      {selectedArticle && <div className="cms-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedArticle(null); }}>
        <section className="cms-modal" role="dialog" aria-modal="true" aria-labelledby="cms-modal-title">
          <div className="cms-modal-top"><span className="cms-kicker">{selectedArticle.category} · {selectedArticle.readTime}</span><button type="button" className="cms-modal-close" onClick={() => setSelectedArticle(null)} aria-label="Close article summary"><X size={18} /></button></div>
          <h2 id="cms-modal-title">{selectedArticle.title}</h2>
          <p style={{fontSize: "13px", lineHeight: 1.9, color: "#737b72"}}>{selectedArticle.excerpt}</p>
          <p style={{fontSize: "12px", lineHeight: 1.9, color: "#737b72"}}>This article preview introduces the topic. For recommendations tailored to your property or business, contact Cool Max Scent to discuss your space, scenting goals and diffuser requirements.</p>
          <a className="cms-btn cms-btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">Ask about scenting solutions <ArrowRight size={14} /></a>
        </section>
      </div>}
    </main>
  );
}
