document.addEventListener("DOMContentLoaded", () => {
    const data = [
        {
            January: [
                {
                    img: "https://images.unsplash.com/photo-1516545595035-b494dd0161e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "China street",
                    copy: "China Street Discography: A reggae punk band from Lancaster, England, consisting of members Dusty Hall and Martin Pilkington.",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/winter-landscapes",
                },
                {
                    img: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Factsheet",
                    copy: "The Shanghai Tower is a megatall skyscraper located in Lujiazui, Pudong, Shanghai, China. It stands at a height of 632 meters (2,073 ft) with 128 stories, making it the tallest building in China and one of the tallest in the world.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/new-year-artistry",
                }
            ]
        },
        {
            February: [
                {
                    img: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Saint Basil's Cathedral",
                    copy: "A UNESCO World Heritage Site and one of the most iconic landmarks in Russia, known for its colorful onion domes and rich history.",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/love-and-art",
                },
                {
                    img: "https://media.istockphoto.com/id/476902024/photo/staraya-russa.webp?b=1&s=612x612&w=0&k=20&c=d-fESUsAHLVfdINVwvqYI-abwDGkGNwNkSRhyoWPMdU=",
                    h1: "Saint Basil's Cathedral",
                    copy: "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/winter-colors",
                }
            ]
        },
        {
            March: [
                {
                    img: "https://images.unsplash.com/photo-1458107768117-48f4877a125a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Neuschwanstein Castle",
                    copy: "Located in Hohenschwangau, Germany, Neuschwanstein Castle is a 19th-century Romanesque Revival palace built by King Ludwig II of Bavaria, also known as the “Fairy Tale King”. ",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/spring-awakening",
                }
            ]
        },
        {
            April: [
                {
                    img: "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Château de Chambord",
                    copy: "Located in the Loire Valley, this majestic castle was commissioned by King Francis I and boasts an iconic double-helix staircase, 426 rooms, and 83 staircases.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/art-and-nature",
                }
            ]
        },
        {
            May: [
                {
                    img: "https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Big Ben",
                    copy: "Big Ben is the nickname of the Great Bell of the clock at the north end of the Palace of Westminster in London, England. The clock tower itself is officially known as the Elizabeth Tower, named in 2012 to commemorate the Diamond Jubilee of Queen Elizabeth II.",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/floral-inspirations",
                }
            ]
        },
        {
            June: [
                {
                    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Mount Fuji",
                    copy: "Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] ) is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the tallest mountain in Japan, the second-highest volcano located on an island in Asia ",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/summer-vibes",
                }
            ]
        },
        {
            July: [
                {
                    img: "https://media.istockphoto.com/id/1249169043/photo/symbol-of-love.webp?b=1&s=612x612&w=0&k=20&c=REpuU6BX0wI4wBgAfgcslrPVoR7YoTECJvTbcTcLfbc=",
                    h1: "The Taj Mahal",
                    copy: "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/independence-art",
                }
            ]
        },
        {
            August: [
                {
                    img: "https://images.unsplash.com/photo-1666803324218-2c06dffb1834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Darul Aman Palace",
                    copy: "Darul Aman Palace, also known as the “dwelling-place of peace,” is a historic palace located in Darulaman, a district created during the era of Amanullah Khan, outside Kabul, Afghanistan. Originally built in the 1920s, it was intended to be the seat of the new Afghan parliament, but it never served as such.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/sunset-collection",
                }
            ]
        },
        {
            September: [
                {
                    img: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Dubai",
                    copy: "Dubai (/duːˈbaɪ/, doo-BYE; Arabic: دبي, romanized: Dubayy, IPA: [dʊˈbajj], Gulf Arabic pronunciation: [dəˈbæj]) is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the country's seven emirates.",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/back-to-school-art",
                }
            ]
        },
        {
            October: [
                {
                    img: "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Sydney Opera House",
                    copy: "One of Australia’s most iconic and recognizable landmarks, the Sydney Opera House is a multi-venue performing arts centre located on Bennelong Point in Sydney, New South Wales. Designed by Danish architect Jørn Utzon, the building’s distinctive sail-like design has become a symbol of Australia and one of the most famous buildings in the world.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/autumn-colors",
                }
            ]
        },
        {
            November: [
                {
                    img: "https://media.istockphoto.com/id/623595614/photo/new-york-city-skyline-statue-of-liberty.webp?b=1&s=612x612&w=0&k=20&c=aGleBqJ1J1C7irMX1mhhtDjljamK_-oRM2wrcAVoAa0=",
                    h1: "The Statue of Liberty",
                    copy: "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor, within New York City. The copper-clad statue, a gift to the United States from the people of France, was designed by French",
                    linkLabel: "Explore More",
                    linkSrc: "https://example.com/gratitude-in-art",
                }
            ]
        },
        {
            December: [
                {
                    img: "https://plus.unsplash.com/premium_photo-1661964395684-56a1dc83bbb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    h1: "Openluchtmuseum, Arnhem",
                    copy: "Founded in 1912, the museum is home to over 80 historical buildings that show how people lived and worked in the Netherlands through various eras. Travelers can watch demonstrations of traditional crafts, farming techniques, and household chores. All combine to offer a deeper understanding of past Dutch life.",
                    linkLabel: "Discover Now",
                    linkSrc: "https://example.com/holiday-magic",
                }
            ]
        }
    ];
    const activeColors = ["#5fa5f9", "#e879f9", "#a78bfa", "#2cd4bf"];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const generatePads = (card, activePadCount, items) => {
        const rowsConfig = [7, 7, 7, 7, Math.floor(Math.random() * 3) + 2];
        const clickablePads = [];
        
        rowsConfig.forEach((padCount, rowIndex) => {
            const row = document.createElement("div");
            row.classList.add("row");
            
            for (let i = 0; i < padCount; i++) {
                const pad = document.createElement("div");
                pad.classList.add("pad");
                row.appendChild(pad);
                
                if (rowIndex !== 0 && rowIndex !== rowsConfig.length - 1) {
                    clickablePads.push(pad);
                }
            }
            card.appendChild(row);
        });

        shuffleArray(clickablePads);
        setActivePads(clickablePads, card, activePadCount, items);
    };

    const setActivePads = (clickablePads, card, activePadCount, items) => {
        clickablePads.slice(0, activePadCount).forEach((pad, i) => {
            pad.classList.add("active");
            pad.style.backgroundColor = activeColors[Math.floor(Math.random() * activeColors.length)];

            pad.addEventListener("click", () => {
                clickablePads.forEach((p) => (p.style.zIndex = "0"));
                pad.style.zIndex = "1";
                const item = items[i];
                
                const cardContent = card.querySelector(".card-content");
                cardContent.innerHTML = `
                    <button>Back</button>
                    <div class="card-item img">
                        <img src="${item.img}" alt="Image"/>
                    </div>
                    <div class="card-item copy">
                        <h1>${item.h1}</h1>
                        <p>${item.copy}</p>
                        <div class="card-item link">
                            <a href="${item.linkSrc}" target="_blank">${item.linkLabel}</a>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                `;

                gsap.to(pad, {
                    scale: 20,
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(cardContent, {
                            opacity: 1,
                            pointerEvents: "all",
                            duration: 0.075,
                        });
                        gsap.fromTo(cardContent.querySelectorAll(".card-item"), {
                            y: 100,
                            rotation: () => gsap.utils.random(-30, 30),
                            opacity: 0,
                        }, {
                            y: 0,
                            rotation: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "elastic.out",
                            stagger: 0.1,
                        });
                    }
                });

                cardContent.querySelector("button").addEventListener("click", () => {
                    gsap.to(cardContent, {
                        opacity: 0,
                        pointerEvents: "none",
                        duration: 0.2,
                        onComplete: () => {
                            gsap.to(pad, {
                                scale: 1,
                                duration: 0.3,
                                onComplete: () => {
                                    pad.style.zIndex = "0";
                                    cardContent.style.opacity = "0";
                                    cardContent.style.pointerEvents = "none";
                                    gsap.set(cardContent.querySelectorAll(".card-item"), {
                                        clearProps: "all",
                                    });
                                }
                            });
                        }
                    });
                });
            });
        });
    };

    const container = document.querySelector(".container");
    data.forEach((monthData) => {
        const month = Object.keys(monthData)[0];
        const items = monthData[month];
        
        const card = document.createElement("div");
        card.classList.add("card");

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = `<p>${month}</p>`;
        card.appendChild(cardTitle);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        card.appendChild(cardContent);
        
        generatePads(card, items.length, items);
        container.appendChild(card);
    });
});
