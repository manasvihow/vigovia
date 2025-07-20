// src/constants.js

export const topDestinations = [
    { name: 'Dubai, UAE', code: 'DXB' },
    { name: 'Bangkok, Thailand', code: 'BKK' },
    { name: 'Singapore', code: 'SIN' },
    { name: 'Bali, Indonesia', code: 'DPS' },
    { name: 'Maldives', code: 'MLE' },
    { name: 'London, UK', code: 'LHR' },
    { name: 'Paris, France', code: 'CDG' },
    { name: 'Kuala Lumpur, Malaysia', code: 'KUL' },
    { name: 'Kathmandu, Nepal', code: 'KTM' },
    { name: 'Phuket, Thailand', code: 'HKT' },
  ];
  
  export const indianAirports = [
    { name: 'Delhi (DEL)', code: 'DEL' },
    { name: 'Mumbai (BOM)', code: 'BOM' },
    { name: 'Bengaluru (BLR)', code: 'BLR' },
    { name: 'Chennai (MAA)', code: 'MAA' },
    { name: 'Hyderabad (HYD)', code: 'HYD' },
    { name: 'Kolkata (CCU)', code: 'CCU' },
  ];
  
  export const destinationData = {
    // --- Dubai ---
    DXB: {
      activities: [
        { id: 1, rank: 1, timeOfDay: 'Afternoon', name: 'Burj Khalifa At The Top', description: 'Observation deck on the 148th floor.', price: '95' },
        { id: 2, rank: 2, timeOfDay: 'Evening', name: 'Desert Safari with BBQ Dinner', description: '4x4 dune bashing, camel rides, and dinner.', price: '70' },
        { id: 3, rank: 3, timeOfDay: 'Evening', name: 'Dubai Mall & Fountain Show', description: 'Shop and watch the spectacular water show.', price: '0' },
        { id: 4, rank: 4, timeOfDay: 'Morning', name: 'Old Dubai Souks', description: 'Explore the Gold, Spice, and Textile Souks.', price: '10' },
        { id: 5, rank: 5, timeOfDay: 'Afternoon', name: 'Atlantis Aquaventure Waterpark', description: 'Enjoy the rides at Atlantis, The Palm.', price: '85' },
        { id: 6, rank: 6, timeOfDay: 'Afternoon', name: 'The Dubai Frame', description: 'Walk the glass bridge with panoramic city views.', price: '15' },
        { id: 7, rank: 7, timeOfDay: 'Morning', name: 'Dubai Miracle Garden', description: 'See millions of flowers in unique designs.', price: '25' },
        { id: 8, rank: 8, timeOfDay: 'Afternoon', name: 'Ski Dubai', description: 'Indoor ski resort in Mall of the Emirates.', price: '75' },
        { id: 9, rank: 9, timeOfDay: 'Evening', name: 'Dhow Cruise in Dubai Marina', description: 'Dinner cruise with city skyline views.', price: '50' },
        { id: 10, rank: 10, timeOfDay: 'Morning', name: 'Jumeirah Mosque Visit', description: 'Learn about Islamic culture at this beautiful mosque.', price: '10' },
      ],
      transfers: [{ type: 'Airport Taxi', price: '30' }, { type: 'Full Day Metro Pass', price: '15' }],
    },
    // --- Bangkok ---
    BKK: {
      activities: [
        { id: 11, rank: 1, timeOfDay: 'Morning', name: 'Grand Palace & Wat Phra Kaew', description: 'Visit the stunning home of the Emerald Buddha.', price: '15' },
        { id: 12, rank: 2, timeOfDay: 'Morning', name: 'Damnoen Saduak Floating Market', description: 'Experience a traditional market on water.', price: '25' },
        { id: 13, rank: 3, timeOfDay: 'Afternoon', name: 'Wat Arun (Temple of Dawn)', description: 'Climb the iconic riverside temple.', price: '5' },
        { id: 14, rank: 4, timeOfDay: 'Afternoon', name: 'Wat Pho (Reclining Buddha)', description: 'See the giant gold-plated Reclining Buddha.', price: '7' },
        { id: 15, rank: 5, timeOfDay: 'Evening', name: 'Chao Phraya River Dinner Cruise', description: 'Cruise with views of illuminated temples.', price: '40' },
        { id: 16, rank: 6, timeOfDay: 'Afternoon', name: 'Chatuchak Weekend Market', description: 'Explore one of the world\'s largest markets.', price: '5' },
        { id: 17, rank: 7, timeOfDay: 'Evening', name: 'Khao San Road Exploration', description: 'Experience the famous backpacker street.', price: '0' },
        { id: 18, rank: 8, timeOfDay: 'Afternoon', name: 'Siam Paragon & MBK Center', description: 'Indulge in luxury and bargain shopping.', price: '0' },
        { id: 19, rank: 9, timeOfDay: 'Morning', name: 'Jim Thompson House Museum', description: 'Discover traditional Thai architecture and silk.', price: '6' },
        { id: 20, rank: 10, timeOfDay: 'Evening', name: 'Calypso Cabaret Show', description: 'Enjoy a world-famous ladyboy cabaret show.', price: '30' },
      ],
      transfers: [{ type: 'Airport Rail Link', price: '2' }, { type: 'BTS Skytrain Day Pass', price: '4' }],
    },
    // --- Singapore ---
    SIN: {
      activities: [
          { id: 21, rank: 1, timeOfDay: 'Evening', name: 'Gardens by the Bay', description: 'Explore the Supertree Grove and Cloud Forest.', price: '40' },
          { id: 22, rank: 2, timeOfDay: 'Afternoon', name: 'Marina Bay Sands Skypark', description: 'Get a 360-degree view of the city.', price: '20' },
          { id: 23, rank: 3, timeOfDay: 'Morning', name: 'Sentosa Island', description: 'Visit Universal Studios, S.E.A. Aquarium, or the beaches.', price: '80' },
          { id: 24, rank: 4, timeOfDay: 'Morning', name: 'Singapore Zoo & Night Safari', description: 'World-class zoo with a unique nocturnal experience.', price: '55' },
          { id: 25, rank: 5, timeOfDay: 'Afternoon', name: 'Orchard Road Shopping', description: 'Explore the famous shopping belt.', price: '0' },
          { id: 26, rank: 6, timeOfDay: 'Evening', name: 'Clarke Quay', description: 'Enjoy riverside dining and nightlife.', price: '30' },
          { id: 27, rank: 7, timeOfDay: 'Morning', name: 'Botanic Gardens', description: 'Walk through a UNESCO World Heritage Site.', price: '0' },
          { id: 28, rank: 8, timeOfDay: 'Afternoon', name: 'Chinatown & Buddha Tooth Relic Temple', description: 'Explore the vibrant cultural precinct.', price: '0' },
          { id: 29, rank: 9, timeOfDay: 'Evening', name: 'Singapore Flyer', description: 'Ride the giant observation wheel for stunning views.', price: '25' },
          { id: 30, rank: 10, timeOfDay: 'Afternoon', name: 'ArtScience Museum', description: 'Exhibitions at the intersection of art and science.', price: '15' },
      ],
      transfers: [{ type: 'MRT Tourist Pass', price: '15' }, { type: 'Grab Ride', price: '10' }],
    },
     // --- Bali ---
    DPS: {
      activities: [
        { id: 31, rank: 1, timeOfDay: 'Afternoon', name: 'Uluwatu Temple Sunset & Kecak Fire Dance', description: 'Cliff-top temple with a dramatic traditional dance performance.', price: '10' },
        { id: 32, rank: 2, timeOfDay: 'Morning', name: 'Ubud Monkey Forest', description: 'Walk among hundreds of long-tailed macaques.', price: '5' },
        { id: 33, rank: 3, timeOfDay: 'Morning', name: 'Tegalalang Rice Terrace', description: 'Hike through the iconic terraced rice paddies.', price: '2' },
        { id: 34, rank: 4, timeOfDay: 'Morning', name: 'Mount Batur Sunrise Trek', description: 'Hike an active volcano to watch the sunrise.', price: '35' },
        { id: 35, rank: 5, timeOfDay: 'Afternoon', name: 'Tanah Lot Temple', description: 'Famous Hindu shrine on a rock formation by the sea.', price: '4' },
        { id: 36, rank: 6, timeOfDay: 'Afternoon', name: 'Seminyak Beach & Cafes', description: 'Relax on the beach and enjoy trendy cafes.', price: '15' },
        { id: 37, rank: 7, timeOfDay: 'Morning', name: 'Tirta Empul Temple', description: 'Participate in a holy water purification ritual.', price: '3' },
        { id: 38, rank: 8, timeOfDay: 'Afternoon', name: 'Kuta Beach Surfing Lesson', description: 'Learn to surf at Bali\'s most famous beach.', price: '20' },
        { id: 39, rank: 9, timeOfDay: 'Day Trip', name: 'Nusa Penida Island Tour', description: 'Visit Kelingking Beach and other stunning viewpoints.', price: '50' },
        { id: 40, rank: 10, timeOfDay: 'Evening', name: 'Jimbaran Bay Seafood Dinner', description: 'Enjoy fresh seafood on the beach.', price: '30' },
      ],
      transfers: [{ type: 'Private Car with Driver (Full Day)', price: '40' }, { type: 'Scooter Rental (Full Day)', price: '5' }],
    },
    // --- Maldives ---
    MLE: {
      activities: [
        { id: 41, rank: 1, timeOfDay: 'Day Trip', name: 'Snorkeling Safari', description: 'Explore multiple coral reefs and see marine life.', price: '50' },
        { id: 42, rank: 2, timeOfDay: 'Afternoon', name: 'Sunset Dolphin Cruise', description: 'Watch pods of dolphins play in the open sea.', price: '45' },
        { id: 43, rank: 3, timeOfDay: 'Morning', name: 'Scuba Diving Introductory Course', description: 'Learn the basics and dive in a safe lagoon.', price: '120' },
        { id: 44, rank: 4, timeOfDay: 'Day Trip', name: 'Local Island Visit (Maafushi)', description: 'Experience Maldivian culture and local life.', price: '30' },
        { id: 45, rank: 5, timeOfDay: 'Afternoon', name: 'Watersports (Jet Ski, Kayaking)', description: 'Enjoy various water activities at your resort.', price: '75' },
        { id: 46, rank: 6, timeOfDay: 'Evening', name: 'Private Beach Dinner', description: 'A romantic dining experience on the sand.', price: '150' },
        { id: 47, rank: 7, timeOfDay: 'Afternoon', name: 'Spa & Wellness Treatment', description: 'Indulge in a relaxing massage with ocean views.', price: '100' },
        { id: 48, rank: 8, timeOfDay: 'Morning', name: 'Glass-Bottom Boat Tour', description: 'See the coral reefs without getting wet.', price: '40' },
        { id: 49, rank: 9, timeOfDay: 'Day Trip', name: 'Sandbank Excursion & Picnic', description: 'Visit a tiny, pristine sandbank in the middle of the ocean.', price: '60' },
        { id: 50, rank: 10, timeOfDay: 'Morning', name: 'Male City Tour', description: 'Explore the capital city\'s markets and mosques.', price: '25' },
      ],
      transfers: [{ type: 'Resort Speedboat Transfer', price: '150' }, { type: 'Seaplane Transfer', price: '400' }],
    },
      // --- London ---
    LHR: {
      activities: [
        { id: 51, rank: 1, timeOfDay: 'Morning', name: 'Tower of London & Crown Jewels', description: 'Explore the historic castle and see the royal gems.', price: '35' },
        { id: 52, rank: 2, timeOfDay: 'Afternoon', name: 'The London Eye', description: 'Get panoramic views of the city from the giant wheel.', price: '30' },
        { id: 53, rank: 3, timeOfDay: 'Morning', name: 'The British Museum', description: 'See world treasures like the Rosetta Stone.', price: '0' },
        { id: 54, rank: 4, timeOfDay: 'Afternoon', name: 'Buckingham Palace & Changing of the Guard', description: 'Witness the iconic royal ceremony.', price: '0' },
        { id: 55, rank: 5, timeOfDay: 'Afternoon', name: 'Westminster Abbey & Houses of Parliament', description: 'See the heart of British politics and history.', price: '25' },
        { id: 56, rank: 6, timeOfDay: 'Evening', name: 'West End Theatre Show', description: 'Watch a world-class musical or play.', price: '70' },
        { id: 57, rank: 7, timeOfDay: 'Morning', name: 'Cruise on the River Thames', description: 'See London\'s landmarks from the water.', price: '15' },
        { id: 58, rank: 8, timeOfDay: 'Afternoon', name: 'Trafalgar Square & National Gallery', description: 'Visit the famous square and art museum.', price: '0' },
        { id: 59, rank: 9, timeOfDay: 'Afternoon', name: 'Covent Garden', description: 'Enjoy street performers, shops, and markets.', price: '0' },
        { id: 60, rank: 10, timeOfDay: 'Day Trip', name: 'Warner Bros. Studio Tour - The Making of Harry Potter', description: 'Go behind the scenes of the Harry Potter films.', price: '50' },
      ],
      transfers: [{ type: 'Oyster Card (Visitor)', price: '20' }, { type: 'Heathrow Express to Paddington', price: '25' }],
    },
    // --- Paris ---
    CDG: {
      activities: [
        { id: 61, rank: 1, timeOfDay: 'Morning', name: 'Eiffel Tower Summit Access', description: 'Go to the very top of the iconic landmark.', price: '30' },
        { id: 62, rank: 2, timeOfDay: 'Morning', name: 'Louvre Museum', description: 'See the Mona Lisa and other masterpieces.', price: '17' },
        { id: 63, rank: 3, timeOfDay: 'Afternoon', name: 'Notre-Dame Cathedral & Latin Quarter', description: 'See the famous cathedral and explore the historic area.', price: '0' },
        { id: 64, rank: 4, timeOfDay: 'Evening', name: 'Seine River Cruise', description: 'A scenic boat tour past illuminated monuments.', price: '15' },
        { id: 65, rank: 5, timeOfDay: 'Afternoon', name: 'Montmartre & Sacré-Cœur Basilica', description: 'Explore the artistic district and enjoy city views.', price: '0' },
        { id: 66, rank: 6, timeOfDay: 'Day Trip', name: 'Palace of Versailles', description: 'Explore the opulent palace and its vast gardens.', price: '20' },
        { id: 67, rank: 7, timeOfDay: 'Afternoon', name: 'Musée d\'Orsay', description: 'View Impressionist and Post-Impressionist art.', price: '16' },
        { id: 68, rank: 8, timeOfDay: 'Morning', name: 'Arc de Triomphe', description: 'Climb to the top for views of the Champs-Élysées.', price: '13' },
        { id: 69, rank: 9, timeOfDay: 'Afternoon', name: 'Champs-Élysées Shopping', description: 'Stroll down the world-famous avenue.', price: '0' },
        { id: 70, rank: 10, timeOfDay: 'Evening', name: 'Moulin Rouge Show', description: 'Experience the legendary Parisian cabaret.', price: '100' },
      ],
      transfers: [{ type: 'Navigo Découverte (Weekly Pass)', price: '30' }, { type: 'RER B Train from CDG Airport', price: '12' }],
    },
      // --- Kuala Lumpur ---
    KUL: {
      activities: [
        { id: 71, rank: 1, timeOfDay: 'Afternoon', name: 'Petronas Twin Towers Skybridge', description: 'Visit the iconic twin skyscrapers.', price: '20' },
        { id: 72, rank: 2, timeOfDay: 'Morning', name: 'Batu Caves', description: 'Climb the steps to the Hindu shrine in a limestone cave.', price: '0' },
        { id: 73, rank: 3, timeOfDay: 'Evening', name: 'Jalan Alor Food Street', description: 'Sample a huge variety of Malaysian street food.', price: '15' },
        { id: 74, rank: 4, timeOfDay: 'Afternoon', name: 'Menara KL Tower', description: 'Get 360-degree views from the observation deck.', price: '12' },
        { id: 75, rank: 5, timeOfDay: 'Morning', name: 'Merdeka Square (Independence Square)', description: 'See the historic center of KL.', price: '0' },
        { id: 76, rank: 6, timeOfDay: 'Afternoon', name: 'Central Market & Chinatown', description: 'Shop for souvenirs and explore Petaling Street.', price: '5' },
        { id: 77, rank: 7, timeOfDay: 'Morning', name: 'Thean Hou Temple', description: 'Visit a beautiful six-tiered Chinese temple.', price: '0' },
        { id: 78, rank: 8, timeOfDay: 'Afternoon', name: 'KL Bird Park', description: 'Walk through the world\'s largest free-flight aviary.', price: '18' },
        { id: 79, rank: 9, timeOfDay: 'Evening', name: 'Heli Lounge Bar', description: 'Enjoy drinks on a helipad-turned-rooftop bar.', price: '25' },
        { id: 80, rank: 10, timeOfDay: 'Day Trip', name: 'Genting Highlands', description: 'Visit the cool mountain resort with theme parks and a casino.', price: '30' },
      ],
      transfers: [{ type: 'KLIA Ekspres Train', price: '12' }, { type: 'Touch \'n Go Card (Public Transit)', price: '10' }],
    },
    // --- Kathmandu ---
    KTM: {
      activities: [
        { id: 81, rank: 1, timeOfDay: 'Morning', name: 'Boudhanath Stupa', description: 'Walk around one of the largest stupas in the world.', price: '3' },
        { id: 82, rank: 2, timeOfDay: 'Morning', name: 'Pashupatinath Temple', description: 'Visit the sacred Hindu temple complex on the Bagmati River.', price: '7' },
        { id: 83, rank: 3, timeOfDay: 'Afternoon', name: 'Swayambhunath Stupa (Monkey Temple)', description: 'Climb the hill for panoramic views of the city.', price: '2' },
        { id: 84, rank: 4, timeOfDay: 'Afternoon', name: 'Kathmandu Durbar Square', description: 'Explore the ancient royal palace and temples.', price: '10' },
        { id: 85, rank: 5, timeOfDay: 'Evening', name: 'Thamel District Walk', description: 'Explore the bustling hub for tourists with shops and restaurants.', price: '10' },
        { id: 86, rank: 6, timeOfDay: 'Day Trip', name: 'Bhaktapur Durbar Square', description: 'Visit the well-preserved medieval city.', price: '15' },
        { id: 87, rank: 7, timeOfDay: 'Morning', name: 'Patan Durbar Square', description: 'Discover the art and architecture of the ancient city of Patan.', price: '7' },
        { id: 88, rank: 8, timeOfDay: 'Day Trip', name: 'Nagarkot Sunrise View', description: 'Travel to see stunning sunrise views over the Himalayas.', price: '25' },
        { id: 89, rank: 9, timeOfDay: 'Morning', name: 'Garden of Dreams', description: 'Relax in a beautiful neo-classical garden.', price: '3' },
        { id: 90, rank: 10, timeOfDay: 'Scenic Flight', name: 'Mount Everest Scenic Flight', description: 'Get a close-up view of the world\'s highest peak.', price: '200' },
      ],
      transfers: [{ type: 'Pre-paid Taxi from Airport', price: '7' }, { type: 'Local Bus/Tempo', price: '1' }],
    },
    // --- Phuket ---
    HKT: {
      activities: [
        { id: 91, rank: 1, timeOfDay: 'Day Trip', name: 'Phi Phi Islands Tour by Speedboat', description: 'Visit Maya Bay, Monkey Beach, and snorkel.', price: '70' },
        { id: 92, rank: 2, timeOfDay: 'Afternoon', name: 'Big Buddha of Phuket', description: 'Visit the giant marble Buddha statue for panoramic views.', price: '0' },
        { id: 93, rank: 3, timeOfDay: 'Evening', name: 'Bangla Road in Patong', description: 'Experience the vibrant and wild nightlife.', price: '20' },
        { id: 94, rank: 4, timeOfDay: 'Day Trip', name: 'James Bond Island (Phang Nga Bay) Tour', description: 'See the famous sea karsts and go sea canoeing.', price: '60' },
        { id: 95, rank: 5, timeOfDay: 'Afternoon', name: 'Old Phuket Town', description: 'Explore the charming Sino-Portuguese architecture.', price: '5' },
        { id: 96, rank: 6, timeOfDay: 'Evening', name: 'Phuket FantaSea Show', description: 'A cultural theme park with a grand show.', price: '50' },
        { id: 97, rank: 7, timeOfDay: 'Afternoon', name: 'Karon View Point', description: 'See a beautiful vista of three beaches: Kata Noi, Kata, and Karon.', price: '0' },
        { id: 98, rank: 8, timeOfDay: 'Morning', name: 'Wat Chalong', description: 'Visit Phuket\'s most important and revered temple.', price: '0' },
        { id: 99, rank: 9, timeOfDay: 'Afternoon', name: 'Freedom Beach', description: 'Relax on a beautiful, relatively secluded beach.', price: '10' },
        { id: 100, rank: 10, timeOfDay: 'Morning', name: 'Elephant Sanctuary Visit', description: 'Ethically interact with rescued elephants.', price: '75' },
      ],
      transfers: [{ type: 'Airport Minibus', price: '5' }, { type: 'Tuk-Tuk/Songthaew Ride', price: '10' }],
    },
  };