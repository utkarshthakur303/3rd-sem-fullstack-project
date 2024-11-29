const animeData = [
    { id: 1, title: "Attack on Titan", description: "Humanity fights for survival against man-eating giants.", episodes: 75, rating: 9.0, genres: ["Action", "Dark Fantasy", "Post-apocalyptic"], image: "https://cdn.pixabay.com/photo/2024/06/01/01/33/anime-8801333_1280.png" },
    { id: 2, title: "Death Note", description: "A high school student discovers a notebook that kills anyone whose name is written in it.", episodes: 37, rating: 8.6, genres: ["Mystery", "Psychological Thriller", "Supernatural"], image: "https://cdn.pixabay.com/photo/2020/09/03/06/05/cats-5540252_1280.jpg" },
    { id: 3, title: "Fullmetal Alchemist: Brotherhood", description: "Two brothers search for the Philosopher's Stone to restore their bodies.", episodes: 64, rating: 9.1, genres: ["Adventure", "Dark Fantasy", "Steampunk"], image: "https://cdn.pixabay.com/photo/2024/02/18/13/13/ai-generated-8581189_1280.jpg" },
    { id: 4, title: "One Punch Man", description: "A superhero who can defeat any opponent with a single punch seeks a worthy challenge.", episodes: 24, rating: 8.7, genres: ["Action", "Comedy", "Superhero"], image: "https://cdn.pixabay.com/photo/2024/01/25/14/07/gintoki-8532008_1280.jpg" },
    { id: 5, title: "My Hero Academia", description: "In a world where most people have superpowers, a boy born without them strives to become a hero.", episodes: 113, rating: 8.4, genres: ["Superhero", "Action", "School"], image: "https://cdn.pixabay.com/photo/2024/01/10/13/13/ai-generated-8499585_1280.png" },
    { id: 6, title: "Steins;Gate", description: "A group of friends accidentally create a time machine and face the consequences.", episodes: 24, rating: 9.0, genres: ["Sci-Fi", "Thriller", "Time Travel"], image: "https://cdn.pixabay.com/photo/2023/04/14/23/06/ai-generated-7926621_1280.jpg" },
    { id: 7, title: "Demon Slayer", description: "A young boy becomes a demon slayer after his family is slaughtered and his sister turned into a demon.", episodes: 44, rating: 8.7, genres: ["Action", "Dark Fantasy", "Supernatural"], image: "https://cdn.pixabay.com/photo/2024/01/19/18/03/ai-generated-8519540_1280.jpg" },
    { id: 8, title: "Code Geass", description: "An exiled prince gains the power to control minds and uses it to lead a rebellion.", episodes: 50, rating: 8.7, genres: ["Mecha", "Psychological", "Alternate History"], image: "https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750161_1280.jpg" },
    { id: 9, title: "Naruto", description: "A young ninja seeks recognition and dreams of becoming the leader of his village.", episodes: 220, rating: 8.3, genres: ["Action", "Adventure", "Martial Arts"], image: "https://cdn.pixabay.com/photo/2020/05/16/18/28/dinosaur-5178645_1280.png" },
    { id: 10, title: "Hunter x Hunter", description: "A young boy becomes a Hunter to find his missing father.", episodes: 148, rating: 9.0, genres: ["Adventure", "Fantasy", "Martial Arts"], image: "https://cdn.pixabay.com/photo/2024/03/21/15/42/anime-8648011_1280.jpg" },
    { id: 11, title: "Tokyo Ghoul", description: "A college student becomes half-ghoul after a chance encounter with one.", episodes: 48, rating: 7.9, genres: ["Dark Fantasy", "Horror", "Supernatural"], image: "https://cdn.pixabay.com/photo/2024/01/31/16/15/kitchen-8544377_1280.png" },
    { id: 12, title: "Sword Art Online", description: "Players of a virtual reality MMORPG find themselves trapped and fighting for their lives.", episodes: 96, rating: 7.5, genres: ["Action", "Adventure", "Sci-Fi"], image: "https://cdn.pixabay.com/photo/2022/12/22/18/49/forest-7672785_1280.jpg" },
    { id: 13, title: "Haikyuu!!", description: "A short volleyball player joins his high school team with dreams of becoming the ace.", episodes: 85, rating: 8.7, genres: ["Sports", "Comedy", "School"], image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300" },
    { id: 14, title: "One Piece", description: "A pirate with the power to stretch like rubber searches for the ultimate treasure.", episodes: 1000, rating: 8.7, genres: ["Adventure", "Fantasy", "Comedy"], image: "https://images.unsplash.com/photo-1627672360124-4ed09583e14c?w=300" },
    { id: 15, title: "Dragon Ball Z", description: "The adventures of Son Goku and his friends as they defend Earth against various villains.", episodes: 291, rating: 8.7, genres: ["Action", "Adventure", "Martial Arts"], image: "https://images.unsplash.com/photo-1613375371348-851363e2ef70?w=300" },
    { id: 16, title: "Neon Genesis Evangelion", description: "Teenagers pilot giant mechs to defend humanity against mysterious beings called Angels.", episodes: 26, rating: 8.5, genres: ["Psychological", "Sci-Fi", "Mecha"], image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=300" },
    { id: 17, title: "Cowboy Bebop", description: "A team of bounty hunters chase criminals across space in the year 2071.", episodes: 26, rating: 8.9, genres: ["Space Western", "Sci-Fi", "Neo-noir"], image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=300" },
    { id: 18, title: "Bleach", description: "A teenager gains the powers of a Soul Reaper and defends humanity from evil spirits.", episodes: 366, rating: 8.1, genres: ["Supernatural", "Action", "Adventure"], image: "https://images.unsplash.com/photo-1619498524240-4ca536b2320f?w=300" },
    { id: 19, title: "Death Parade", description: "Deceased humans are judged through fatal games to decide their fate in the afterlife.", episodes: 12, rating: 8.2, genres: ["Psychological", "Supernatural", "Thriller"], image: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?w=300" },
    { id: 20, title: "Psycho-Pass", description: "In a dystopian future, a special police unit suppresses crime based on people's psychological states.", episodes: 41, rating: 8.3, genres: ["Cyberpunk", "Psychological", "Crime"], image: "https://images.unsplash.com/photo-1579547621869-0592d5ead3a3?w=300" },
    { id: 21, title: "Mob Psycho 100", description: "A psychic middle school boy tries to live a normal life while working for a con artist.", episodes: 37, rating: 8.7, genres: ["Action", "Comedy", "Supernatural"], image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300" },
    { id: 22, title: "The Promised Neverland", description: "Orphans discover a dark secret about their orphanage and plan to escape.", episodes: 23, rating: 8.4, genres: ["Dark Fantasy", "Thriller", "Sci-Fi"], image: "https://images.unsplash.com/photo-1612344441937-cf249f2e045d?w=300" },
    { id: 23, title: "Erased", description: "A man travels back in time to prevent a series of kidnappings and murders, including his mother's.", episodes: 12, rating: 8.5, genres: ["Mystery", "Psychological", "Supernatural"], image: "https://images.unsplash.com/photo-1636553858368-855d8fe77c36?w=300" },
    { id: 24, title: "Violet Evergarden", description: "A former soldier becomes a ghostwriter and learns about emotions and love.", episodes: 13, rating: 8.7, genres: ["Drama", "Fantasy", "Slice of Life"], image: "https://images.unsplash.com/photo-1612487528505-d2338264c821?w=300" },
    { id: 25, title: "Your Lie in April", description: "A young pianist who lost his ability to hear the piano meets an inspirational violinist.", episodes: 22, rating: 8.6, genres: ["Drama", "Music", "Romance"], image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300" },
    { id: 26, title: "Re:Zero − Starting Life in Another World", description: "A young man is transported to a fantasy world and gains the ability to turn back time by dying.", episodes: 50, rating: 8.2, genres: ["Isekai", "Psychological", "Thriller"], image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300" },
    { id: 27, title: "Parasyte: The Maxim", description: "A high school student fights against alien parasites that take over human hosts.", episodes: 24, rating: 8.3, genres: ["Horror", "Sci-Fi", "Psychological"], image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300" },
    { id: 28, title: "Made in Abyss", description: "Orphans descend into a mysterious abyss filled with relics and dangerous creatures.", episodes: 13, rating: 8.7, genres: ["Adventure", "Dark Fantasy", "Sci-Fi"], image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300" },
    { id: 29, title: "Vinland Saga", description: "A young Viking seeks revenge against his father's killer and finds himself in a war.", episodes: 24, rating: 8.7, genres: ["Historical", "Action", "Adventure"], image: "https://images.unsplash.com/photo-1615672968435-75274dd3627d?w=300" },
    { id: 30, title: "JoJo's Bizarre Adventure", description: "The multi-generational tale of the Joestar family and their battles against supernatural foes.", episodes: 152, rating: 8.5, genres: ["Action", "Adventure", "Supernatural"], image: "https://images.unsplash.com/photo-1624217880491-0c03c9230414?w=300" },
];


function AnimeCard({ anime, inLibrary, onToggleLibrary }) {
    return React.createElement('div', { 
        className: 'anime-card fade-in',
        key: anime.id 
    },
        React.createElement('img', { 
            src: anime.image,
            alt: anime.title,
            className: 'anime-image',
            loading: 'lazy'
        }),
        React.createElement('div', { 
            className: 'anime-info'
        },
            React.createElement('h3', { 
                className: 'anime-title' 
            }, anime.title),
            React.createElement('p', { 
                className: 'anime-description' 
            }, anime.description),
            React.createElement('p', { 
                className: 'anime-stats' 
            }, `Episodes: ${anime.episodes} | Rating: ${anime.rating}/10`),
            React.createElement('div', { 
                className: 'genre-tags' 
            },
                anime.genres.map(genre => 
                    React.createElement('span', { 
                        key: genre,
                        className: 'genre-tag' 
                    }, genre)
                )
            ),
            React.createElement('button', {
                className: `library-button ${inLibrary ? 'in-library' : ''}`,
                onClick: () => onToggleLibrary(anime.id)
            }, inLibrary ? 'Remove from Library' : 'Add to Library')
        )
    );
}

function Slideshow({ animeList }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % animeList.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [animeList.length]);

    return React.createElement('div', { 
        className: 'slideshow' 
    },
        animeList.map((anime, index) => 
            React.createElement('div', {
                key: anime.id,
                className: `slide ${index === currentSlide ? 'active' : ''}`
            },
                React.createElement('img', {
                    src: anime.image,
                    alt: anime.title,
                    loading: 'lazy'
                })
            )
        )
    );
}

function App() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedGenre, setSelectedGenre] = React.useState('All');
    const [library, setLibrary] = React.useState([]);
    const [darkMode, setDarkMode] = React.useState(false);

    const genres = ['All', ...new Set(animeData.flatMap(anime => anime.genres))];

    React.useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const filteredAnime = animeData.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenre === 'All' || anime.genres.includes(selectedGenre))
    );

    const toggleLibrary = (id) => {
        setLibrary(prev => 
            prev.includes(id) ? prev.filter(animeId => animeId !== id) : [...prev, id]
        );
    };

    return React.createElement('div', { 
        className: 'container' 
    },
        React.createElement('header', null,
            React.createElement('h1', null, '✨ AnimeStream'),
            React.createElement('button', {
                className: 'dark-mode-toggle',
                onClick: () => setDarkMode(!darkMode)
            }, darkMode ? '☀️ Light Mode' : '🌙 Dark Mode')
        ),
        React.createElement(Slideshow, { 
            animeList: animeData.slice(0, 5) 
        }),
        React.createElement('div', { 
            className: 'search-filter' 
        },
            React.createElement('input', {
                type: 'text',
                placeholder: '🔍 Search anime...',
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value)
            }),
            React.createElement('select', {
                value: selectedGenre,
                onChange: (e) => setSelectedGenre(e.target.value)
            }, genres.map(genre => 
                React.createElement('option', { 
                    key: genre, 
                    value: genre 
                }, genre)
            ))
        ),
        React.createElement('div', { 
            className: 'anime-grid' 
        },
            filteredAnime.map(anime => 
                React.createElement(AnimeCard, {
                    key: anime.id,
                    anime: anime,
                    inLibrary: library.includes(anime.id),
                    onToggleLibrary: toggleLibrary
                })
            )
        )
    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);