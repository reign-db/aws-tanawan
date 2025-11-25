// Combined JS for Food, Attractions, and Landmarks Modals

// --- Food Modal ---
(function() {
    const foodModal = document.getElementById('foodModal');
    if (!foodModal) return;
    const foods = {
        'lomi': {
            title: 'Lomi',
            image: '../assets/Website Contents/Lomi.jpg',
            description: 'Lomi is a type of noodle soup dish that makes use of thick egg noodles. Although this dish originated from the Chinese, several different regional variations became available throughout the years. The most popular among these variations would probably be the Batangas Lomi.',
            location: "Pinky's Lomi House Sambat",
            mapUrl: "https://maps.google.com/?q=Pinky's+Lomi+House+Sambat+Tanauan+City+Batangas"
        },
        'goto': {
            title: 'Goto',
            image: '../assets/Website Contents/Gotong-Batangas-Wide.png',
            description: 'Goto usually refers to rice porridge in Filipino. This is composed of innards. It is best when topped with toasted garlic and chopped green onions. Gotong Batangas, on the other hand, is a bit different from traditional goto because it does not use rice. It is more of a soup than a porridge.',
            location: 'Greg Goto and Mami',
            mapUrl: 'https://maps.google.com/?q=Greg+Goto+and+Mami+Tanauan+City+Batangas'
        },
        'tawilis': {
            title: 'Tawilis',
            image: '../assets/Website Contents/Tawilis.jpg',
            description: 'Sardinella tawilis is a freshwater sardine found exclusively in the Philippines. It is the only member of the genus Sardinella known to exist entirely in fresh water. Tawilis populations are only found in Taal Lake in the Batangas province on the island of Luzon in the Philippines. Taal Lake is the third-largest lake in the Philippines and is located in the caldera of an ancient volcano.',
            location: 'Victory Mall and Market Tanauan',
            mapUrl: 'https://maps.google.com/?q=Victory+Mall+and+Market+Tanauan+City+Batangas'
        },
        'adobo-sa-dilaw': {
            title: 'Adobo sa Dilaw',
            image: '../assets/Website Contents/Adobo-sa-Dilaw_023.jpg',
            description: 'Adobong Dilaw is an adobo version that does not use soy sauce. Instead, it uses turmeric which is a type of rhizome that belongs to the ginger family. It is known as "luyang dilaw" in Filipino.',
            location: "Mando and Elvie's",
            mapUrl: "https://maps.google.com/?q=Mando+and+Elvie's+Tanauan+City+Batangas"
        },
        'native-kakanin': {
            title: 'Native Kakanin',
            image: '../assets/Website Contents/Native Kakanin.jpg',
            description: 'Kakanin is a term for various native snacks and desserts in the Philippines, typically made from glutinous rice or rice flour, often combined with coconut milk and sugar. The term itself derives from the Tagalog words "kain" (to eat) and "kanin" (rice), highlighting the importance of rice in Filipino cuisine. Kakanin is deeply rooted in Filipino culture and is often associated with celebrations, gatherings, and communal activities.',
            location: 'Amor Special Puto at Kakanin',
            mapUrl: 'https://maps.google.com/?q=Amor+Special+Puto+at+Kakanin+Tanauan+City+Batangas'
        },
        'puto-bao': {
            title: 'Puto Bao',
            image: '../assets/Website Contents/Puto Bao.jpg',
            description: 'Puto Bao is a steamed rice cake using bao ng niyog (coconut husks) as molders and traditionally using pirurutong, glutinous rice in shades of brownish-purple. Every bite comes with a surprise with the rich filling of bukayo or sweetened young coconut strips.',
            location: 'Amor Special Puto at Kakanin',
            mapUrl: 'https://maps.google.com/?q=Amor+Special+Puto+at+Kakanin+Tanauan+City+Batangas'
        },
        'atchara': {
            title: 'Atchara',
            image: '../assets/Website Contents/atchara-1152x1536.jpg',
            description: 'Atchara or Atcharang Papaya is an appetizer made from pickled green papaya. Julienned or grated green papaya are placed in airtight containers and soaked for a week in cooked vinegar and sugar mixture with onions, garlic, ginger, peppercorn, and red bell pepper.',
            location: 'Victory Mall and Market Tanauan',
            mapUrl: 'https://maps.google.com/?q=Victory+Mall+and+Market+Tanauan+City+Batangas'
        },
        'kapeng-barako': {
            title: 'Kapeng Barako',
            image: '../assets/Website Contents/Kapeng Barako.jpg',
            description: 'Kapeng barako, also known as Barako coffee or Batangas coffee, is a coffee varietal grown in the Philippines, particularly in the provinces of Batangas and Cavite. It belongs to the species Coffea liberica. The term is also used to refer to all coffee coming from those provinces. Barako in the languages of the Philippines means "stud", and is associated with the image of masculinity.',
            location: 'Victory Mall and Market Tanauan',
            mapUrl: 'https://maps.google.com/?q=Victory+Mall+and+Market+Tanauan+City+Batangas'
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('foodModal');
        if (!modal) return;
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.querySelector('.modal-overlay');
        const foodCards = document.querySelectorAll('.food-card');
        foodCards.forEach(card => {
            card.addEventListener('click', function() {
                const foodId = this.getAttribute('data-food');
                const food = foods[foodId];
                if (food) {
                    document.getElementById('modalImage').src = food.image;
                    document.getElementById('modalImage').alt = food.title;
                    document.getElementById('modalTitle').textContent = food.title;
                    document.getElementById('modalDescription').textContent = food.description;
                    document.getElementById('modalLocationText').textContent = food.location;
                    document.getElementById('modalLocation').href = food.mapUrl;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    });
})();

// --- Attractions Modal ---
(function() {
    const attractionModal = document.getElementById('attractionModal');
    if (!attractionModal) return;
    const attractions = {
        'taal-lake': {
            title: 'Taal Lake & Volcano Viewing',
            image: '../assets/PLACES/Taal Lake and Volcano Viewing.webp',
            description: 'Experience breathtaking panoramic views of the iconic Taal Lake and its active volcano. Several scenic viewpoints around Tanauan offer perfect spots for photography, relaxation, and appreciating the natural beauty of this geological wonder. The area provides stunning sunrise and sunset views, making it a photographer\'s paradise and a must-visit destination for nature enthusiasts.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Banadero+Baywalk+Tanauan+Batangas'
        },
        'eskinita-art-farm': {
            title: 'Eskinita Art Farm',
            image: '../assets/PLACES/Eskinita Art Farm.jpg',
            description: 'A unique cultural destination that combines art, agriculture, and community. This creative farm showcases local artists\' works, offers workshops, and provides visitors with an immersive experience of Tanauan\'s artistic heritage and rural charm. Visitors can participate in art workshops, explore the farm\'s sustainable practices, and connect with local artists.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Eskinita+Art+Farm+Tanauan+Batangas'
        },
        'j-castles': {
            title: 'J Castles Amusement Park',
            image: '../assets/PLACES/j castles.jpg',
            description: 'A family-friendly entertainment destination featuring exciting rides, games, and attractions. Perfect for families and thrill-seekers looking for fun-filled adventures and memorable experiences in Tanauan. The park offers a variety of rides suitable for all ages, from gentle carousel rides for children to thrilling roller coasters for adventure seekers.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=J+Castles+Amusement+Park+Tanauan+Batangas'
        },
        'tanauan-city-park': {
            title: 'Tanauan City Park',
            image: '../assets/images/blog-4.jpg',
            description: 'A well-maintained urban green space that serves as the heart of community life. Features walking paths, playgrounds, picnic areas, and open spaces perfect for outdoor activities, family gatherings, and leisurely strolls. The park hosts various community events and provides a peaceful retreat for residents and visitors alike.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Tanauan+City+Park+Batangas'
        },
        'solar-power-plant': {
            title: 'Tanauan Solar Power Plant',
            image: '../assets/PLACES/solar.jpg',
            description: 'A modern showcase of sustainable energy technology and environmental innovation. This solar facility demonstrates Tanauan\'s commitment to renewable energy and offers educational tours about clean energy solutions and environmental stewardship. Visitors can learn about solar technology, sustainability practices, and the city\'s green initiatives.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Solar+Power+Plant+Tanauan+Batangas'
        },
        'sabang-river-eco-park': {
            title: 'Sabang River Eco Park',
            image: '../assets/PLACES/sabang.jpeg',
            description: 'A serene natural retreat along the Sabang River featuring lush greenery, walking trails, and opportunities for nature observation. This eco-park promotes environmental awareness and provides a peaceful escape for nature lovers and outdoor enthusiasts. The park features native plants, wildlife observation areas, and educational displays about local ecosystems.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Sabang+River+Eco+Park+Tanauan+Batangas'
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('attractionModal');
        if (!modal) return;
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.querySelector('.modal-overlay');
        const attractionCards = document.querySelectorAll('.attraction-card');
        attractionCards.forEach(card => {
            card.addEventListener('click', function() {
                const attractionId = this.getAttribute('data-attraction');
                const attraction = attractions[attractionId];
                if (attraction) {
                    document.getElementById('modalImage').src = attraction.image;
                    document.getElementById('modalImage').alt = attraction.title;
                    document.getElementById('modalTitle').textContent = attraction.title;
                    document.getElementById('modalDescription').textContent = attraction.description;
                    document.getElementById('modalLocationText').textContent = attraction.location;
                    document.getElementById('modalLocation').href = attraction.mapUrl;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    });
})();

// --- Landmarks Modal ---
(function() {
    const landmarkModal = document.getElementById('landmarkModal');
    if (!landmarkModal) return;
    const landmarks = {
        'apolinario-mabini-shrine': {
            title: 'Apolinario Mabini Shrine',
            image: '../assets/PLACES/mabini.jpg',
            description: 'A historic shrine dedicated to the "Sublime Paralytic" and "Brains of the Revolution," Apolinario Mabini. This sacred site commemorates one of the Philippines\' greatest heroes and intellectual leaders. The shrine stands as a testament to Mabini\'s profound contributions to Philippine independence and his unwavering commitment to the nation\'s freedom. Despite his physical limitations, Mabini\'s brilliant mind and strategic thinking earned him the title "Brains of the Revolution." The shrine features exhibits showcasing his life, writings, and the pivotal role he played in shaping the Philippine Republic. Visitors can explore the historical artifacts, learn about his philosophical contributions, and pay tribute to this remarkable figure who exemplified courage, intellect, and patriotism in the face of adversity.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Apolinario+Mabini+Shrine+Tanauan+Batangas'
        },
        'san-juan-bautista-parish': {
            title: 'San Juan Bautista Parish Church',
            image: '../assets/PLACES/san-baustita-parish.jpg',
            description: 'A church that stands as a testament to Tanauan\'s deep religious heritage and architectural legacy. Built with traditional Filipino-Spanish architecture, this magnificent church serves as both a place of worship and a cultural landmark that has witnessed the city\'s growth and development over the centuries. The church features intricate architectural details, stunning stained glass windows, and beautifully crafted altars that reflect the artistic and spiritual traditions of the Spanish colonial period. The facade showcases classic Baroque elements with Filipino adaptations, while the interior houses precious religious artifacts and artwork. Throughout its history, the church has been a center for community gatherings, religious celebrations, and cultural events. Visitors can admire the beautiful architecture, experience the spiritual atmosphere that has been preserved for generations, and learn about the church\'s role in shaping Tanauan\'s cultural and religious identity.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=San+Juan+Bautista+Parish+Tanauan+Batangas'
        },
        'our-lady-of-mount-carmel': {
            title: 'Our Lady of Mount Carmel Church',
            image: '../assets/images/blog-3.jpg',
            description: 'A beautiful church dedicated to the Virgin Mary under the title of Our Lady of Mount Carmel, this architectural gem represents the deep Marian devotion of the Filipino people. The church features stunning Gothic-inspired architecture with modern Filipino elements, creating a harmonious blend of traditional and contemporary design. The interior is adorned with intricate carvings, beautiful religious paintings, and a magnificent altar dedicated to Our Lady of Mount Carmel. The church serves as a spiritual sanctuary for devotees and a cultural landmark that showcases the rich religious heritage of Tanauan. Throughout the year, the church hosts various religious celebrations, including the feast of Our Lady of Mount Carmel, which draws pilgrims and visitors from across the region. The church\'s peaceful atmosphere and beautiful surroundings make it an ideal place for prayer, reflection, and experiencing the deep spiritual traditions that have been passed down through generations.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Our+Lady+of+Mount+Carmel+Tanauan+Batangas'
        },
        'jose-p-laurel-memorial': {
            title: 'Jose P. Laurel Memorial Shrine',
            image: '../assets/PLACES/jose-p-laurel.jpg',
            description: 'A memorial shrine honoring the legacy of President Jose P. Laurel, a prominent Filipino leader, statesman, and educator who made significant contributions to Philippine history and governance. This sacred site commemorates Laurel\'s distinguished career as a lawyer, educator, and the third President of the Philippines during the Japanese occupation. The shrine features exhibits showcasing his life, achievements, and the complex historical period he navigated. Visitors can explore historical documents, photographs, and personal artifacts that tell the story of this remarkable leader. The memorial also highlights Laurel\'s role in establishing the Lyceum of the Philippines and his contributions to Philippine education and legal system. The shrine serves as an educational center where visitors can learn about this important chapter in Philippine history and reflect on the challenges and decisions faced by leaders during times of national crisis. The peaceful setting provides an ideal environment for contemplation and understanding of the nation\'s complex historical narrative.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Jose+P+Laurel+Memorial+Shrine+Tanauan+Batangas'
        },
        'tanauan-city-museum': {
            title: 'Tanauan City Museum',
            image: '../assets/PLACES/MUSEUM TANAUAN.png',
            description: 'A small but significant museum that is one of the most visited landmarks in the city as it continuously inspires and educates visitors on the rich heritage of Tanauan.',
            location: 'View in Maps',
            mapUrl: 'https://maps.google.com/?q=Tanauan+City+Museum+Tanauan+Batangas'
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('landmarkModal');
        if (!modal) return;
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.querySelector('.modal-overlay');
        const landmarkCards = document.querySelectorAll('.landmark-card');
        landmarkCards.forEach(card => {
            card.addEventListener('click', function() {
                const landmarkId = this.getAttribute('data-landmark');
                const landmark = landmarks[landmarkId];
                if (landmark) {
                    document.getElementById('modalImage').src = landmark.image;
                    document.getElementById('modalImage').alt = landmark.title;
                    document.getElementById('modalTitle').textContent = landmark.title;
                    document.getElementById('modalDescription').textContent = landmark.description;
                    document.getElementById('modalLocationText').textContent = landmark.location;
                    document.getElementById('modalLocation').href = landmark.mapUrl;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    });
})();
