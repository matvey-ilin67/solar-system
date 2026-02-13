const AU = 30;
const DEG = Math.PI / 180;
const DAY_MS = 86400000;
const J2000_MS = Date.UTC(2000, 0, 1, 12, 0, 0);

const BODY_INFO = {
  sun: {
    name: "Sun", type: "Star", radius: "696,340 km", mass: "1.989 x 10^30 kg",
    gravity: "274 m/s^2", temp: "5,505 C (surface)", atmosphere: "Hydrogen, Helium",
    orbitalPeriod: "-", rotationPeriod: "25.05 days", axialTilt: "7.25",
    hasMagField: true,
    facts: [
      "The Sun contains 99.86% of all mass in the Solar System",
      "Light from the Sun takes about 8 minutes 20 seconds to reach Earth",
      "The Sun's core temperature reaches about 15 million degrees Celsius",
      "The Sun is approximately 4.6 billion years old",
      "Solar flares can release energy equivalent to millions of nuclear bombs"
    ],
    description: "The Sun is a G-type main-sequence star (G2V) at the center of our Solar System. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers, roughly 109 times that of Earth. The Sun is composed primarily of hydrogen (about 73%) and helium (about 25%), with heavier elements making up the remaining 2%. Energy is produced in its core through nuclear fusion, converting hydrogen into helium at a rate of about 600 million tons per second. The Sun's magnetic field drives the 11-year solar cycle, creating sunspots, solar flares, and coronal mass ejections that can affect space weather throughout the Solar System. The outermost layer, the corona, extends millions of kilometers into space and is mysteriously much hotter than the surface."
  },
  mercury: {
    name: "Mercury", type: "Planet", radius: "2,440 km", mass: "3.301 x 10^23 kg",
    gravity: "3.7 m/s^2", temp: "-173 to 427 C", atmosphere: "Minimal (O2, Na, H2, He)",
    orbitalPeriod: "87.97 days", rotationPeriod: "58.65 days", axialTilt: "0.034",
    hasMagField: true,
    facts: [
      "Mercury is the smallest planet in our Solar System",
      "Despite being closest to the Sun, Venus is actually hotter",
      "One solar day on Mercury lasts about 176 Earth days",
      "Mercury has virtually no atmosphere to retain heat",
      "Its surface is heavily cratered, resembling our Moon"
    ],
    description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets. Mercury has a very thin exosphere composed mostly of oxygen, sodium, hydrogen, helium, and potassium, which provides virtually no insulation. This results in the most extreme temperature variations of any planet, ranging from -173 C at night to 427 C during the day. The planet's iron core takes up about 85% of its radius, making it the most iron-rich planet in our Solar System. Mercury possesses a weak but significant magnetic field, roughly 1% the strength of Earth's, which was a surprising discovery by the Mariner 10 spacecraft. The Caloris Basin, one of the largest impact craters in the Solar System at 1,550 km wide, is a dominant feature on Mercury's heavily cratered surface."
  },
  venus: {
    name: "Venus", type: "Planet", radius: "6,052 km", mass: "4.867 x 10^24 kg",
    gravity: "8.87 m/s^2", temp: "462 C (surface avg)", atmosphere: "CO2 (96.5%), N2 (3.5%)",
    orbitalPeriod: "224.7 days", rotationPeriod: "243.02 days (retrograde)", axialTilt: "177.4",
    hasMagField: false,
    facts: [
      "Venus rotates backwards compared to most other planets",
      "A day on Venus is longer than its year",
      "Venus is the hottest planet despite not being closest to the Sun",
      "Its thick atmosphere creates a runaway greenhouse effect",
      "Surface pressure on Venus is about 92 times that of Earth"
    ],
    description: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Often called Earth's twin due to similar size and mass, Venus is dramatically different in almost every other way. The planet is shrouded in thick clouds of sulfuric acid that completely obscure its surface from view. These clouds, combined with a dense carbon dioxide atmosphere, create an extreme greenhouse effect that makes Venus the hottest planet in our Solar System with surface temperatures reaching 462 C -- hot enough to melt lead. Venus rotates in the opposite direction to most planets (retrograde rotation), and so slowly that a single Venusian day lasts 243 Earth days, longer than its orbital period of 224.7 days. Despite having a similar composition to Earth, Venus has no detectable intrinsic magnetic field, likely because its extremely slow rotation cannot sustain a geodynamo. Soviet Venera landers provided the only surface photographs we have, surviving only minutes in the extreme conditions."
  },
  earth: {
    name: "Earth", type: "Planet", radius: "6,371 km", mass: "5.972 x 10^24 kg",
    gravity: "9.81 m/s^2", temp: "-89 to 57 C", atmosphere: "N2 (78%), O2 (21%), Ar (0.93%)",
    orbitalPeriod: "365.26 days", rotationPeriod: "23.93 hours", axialTilt: "23.44",
    hasMagField: true,
    facts: [
      "Earth is the only known planet with liquid water on its surface",
      "About 71% of Earth's surface is covered by water",
      "Earth's magnetic field protects us from harmful solar radiation",
      "The planet has a single large natural satellite, the Moon",
      "Earth's atmosphere is unique in containing free oxygen"
    ],
    description: "Earth is the third planet from the Sun and the only known world to harbor life. With a mean radius of 6,371 km, Earth is the largest of the four terrestrial planets and the densest planet in the Solar System. The planet's unique combination of liquid water, a protective magnetic field, and an oxygen-rich atmosphere makes it the only place in the known universe where life has been confirmed. Earth's core generates a powerful magnetic field through convection of its liquid iron outer core, creating a magnetosphere that extends thousands of kilometers into space and shields the surface from the solar wind. The planet's moderate axial tilt of 23.44 degrees creates the seasons that drive weather patterns and biological cycles. Earth's single moon stabilizes the planet's axial tilt, contributing to a relatively stable climate over geological timescales. Plate tectonics continually reshape the surface, recycling carbon and regulating the planet's temperature through geological processes."
  },
  mars: {
    name: "Mars", type: "Planet", radius: "3,390 km", mass: "6.417 x 10^23 kg",
    gravity: "3.72 m/s^2", temp: "-153 to 20 C", atmosphere: "CO2 (95.3%), N2 (2.7%)",
    orbitalPeriod: "687.0 days", rotationPeriod: "24.62 hours", axialTilt: "25.19",
    hasMagField: false,
    facts: [
      "Mars has the largest volcano in the Solar System: Olympus Mons",
      "Valles Marineris is a canyon system stretching 4,000 km long",
      "Mars has two small moons: Phobos and Deimos",
      "Evidence suggests Mars once had rivers, lakes, and possibly oceans",
      "Mars appears red due to iron oxide (rust) on its surface"
    ],
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Known as the Red Planet due to the iron oxide prevalent on its surface, Mars has been a primary target for space exploration and the search for past microbial life. The planet hosts Olympus Mons, the tallest known mountain and volcano in the Solar System at roughly 21.9 km high, and Valles Marineris, a massive canyon system that dwarfs the Grand Canyon. Mars has a thin atmosphere composed primarily of carbon dioxide, resulting in surface pressures only about 0.6% of Earth's. While Mars currently has no global magnetic field, crustal remnant magnetism suggests it once possessed one, which would have helped maintain a thicker atmosphere. Evidence from rovers and orbiters strongly indicates that liquid water once flowed on Mars's surface, with dried river channels, mineral deposits, and polar ice caps providing compelling evidence. Mars has two small, irregularly shaped moons, Phobos and Deimos, which are likely captured asteroids."
  },
  jupiter: {
    name: "Jupiter", type: "Planet", radius: "69,911 km", mass: "1.898 x 10^27 kg",
    gravity: "24.79 m/s^2", temp: "-110 C (cloud top)", atmosphere: "H2 (89.8%), He (10.2%)",
    orbitalPeriod: "4,333 days", rotationPeriod: "9.93 hours", axialTilt: "3.13",
    hasMagField: true,
    facts: [
      "Jupiter is the largest planet in our Solar System",
      "The Great Red Spot is a storm larger than Earth, raging for centuries",
      "Jupiter has at least 95 known moons",
      "Jupiter's magnetic field is 20,000 times stronger than Earth's",
      "Jupiter acts as a cosmic vacuum cleaner, protecting inner planets from asteroids"
    ],
    description: "Jupiter is the fifth planet from the Sun and the largest in our Solar System. This gas giant has a mass more than twice that of all other planets combined, yet is composed primarily of hydrogen and helium, similar to a small star. Jupiter's rapid rotation, completing one turn in under 10 hours despite its enormous size, drives powerful atmospheric dynamics including the famous Great Red Spot -- an anticyclonic storm that has persisted for at least 350 years and is large enough to contain Earth. Jupiter possesses the strongest magnetic field of any planet, approximately 20,000 times stronger than Earth's, creating a vast magnetosphere that extends up to 100 Jupiter radii on the sunward side. This immense magnetic field accelerates charged particles to near light speed, creating intense radiation belts. Jupiter's system of at least 95 moons constitutes a miniature solar system, with the four Galilean moons -- Io, Europa, Ganymede, and Callisto -- being particularly notable. Europa's subsurface ocean is considered one of the most promising locations for extraterrestrial life."
  },
  saturn: {
    name: "Saturn", type: "Planet", radius: "58,232 km", mass: "5.683 x 10^26 kg",
    gravity: "10.44 m/s^2", temp: "-140 C (cloud top)", atmosphere: "H2 (96.3%), He (3.25%)",
    orbitalPeriod: "10,759 days", rotationPeriod: "10.66 hours", axialTilt: "26.73",
    hasMagField: true,
    facts: [
      "Saturn's rings are made primarily of ice and rock particles",
      "Saturn is the least dense planet -- it would float in water",
      "Saturn has at least 146 known moons, the most of any planet",
      "Titan, its largest moon, has a thick atmosphere and liquid methane lakes",
      "Saturn's hexagonal polar vortex is a unique atmospheric phenomenon"
    ],
    description: "Saturn is the sixth planet from the Sun and the second-largest in our Solar System. Best known for its spectacular ring system, Saturn is a gas giant composed predominantly of hydrogen and helium. The ring system, extending up to 282,000 km from the planet, is composed primarily of ice particles ranging from tiny grains to house-sized chunks, with smaller amounts of rocky debris and dust. Despite their enormous extent, the rings are remarkably thin, averaging only about 10 meters in thickness. Saturn's average density is only 0.687 g/cm^3, making it the only planet less dense than water. The planet has at least 146 known moons, including Titan, the second-largest moon in the Solar System, which possesses a dense nitrogen atmosphere and surface lakes of liquid methane and ethane. Saturn's magnetic field is weaker than Jupiter's but still considerable, approximately 580 times stronger than Earth's. A remarkable hexagonal cloud pattern at Saturn's north pole, first observed by Voyager and later confirmed by Cassini, remains one of the most unusual atmospheric phenomena in the Solar System."
  },
  uranus: {
    name: "Uranus", type: "Planet", radius: "25,362 km", mass: "8.681 x 10^25 kg",
    gravity: "8.69 m/s^2", temp: "-224 C (minimum)", atmosphere: "H2 (82.5%), He (15.2%), CH4 (2.3%)",
    orbitalPeriod: "30,687 days", rotationPeriod: "17.24 hours (retrograde)", axialTilt: "97.77",
    hasMagField: true,
    facts: [
      "Uranus rotates on its side with an axial tilt of 97.77 degrees",
      "It was the first planet discovered using a telescope (1781)",
      "Uranus has 13 known rings, discovered in 1977",
      "Its blue-green color comes from methane in the atmosphere",
      "Uranus's magnetic field is tilted 59 degrees from its rotational axis"
    ],
    description: "Uranus is the seventh planet from the Sun and the third-largest by diameter. This ice giant is distinguished by its extreme axial tilt of 97.77 degrees, effectively rolling on its side as it orbits the Sun. This unusual orientation, likely caused by a collision with an Earth-sized body early in the Solar System's history, means that each pole gets around 42 years of continuous sunlight followed by 42 years of darkness. Uranus's blue-green color results from methane in its atmosphere, which absorbs red wavelengths of sunlight and reflects blue-green light. The planet has a complex ring system consisting of 13 known rings, which are much darker than Saturn's and composed of relatively large particles. Uranus's magnetic field is remarkably unusual, being tilted 59 degrees from the rotational axis and offset from the planet's center, creating a highly asymmetric magnetosphere. The planet has 27 known moons, all named after characters from the works of Shakespeare and Alexander Pope. Uranus is the coldest planetary atmosphere in the Solar System, with minimum temperatures reaching -224 degrees Celsius."
  },
  neptune: {
    name: "Neptune", type: "Planet", radius: "24,622 km", mass: "1.024 x 10^26 kg",
    gravity: "11.15 m/s^2", temp: "-218 C (cloud top)", atmosphere: "H2 (80%), He (19%), CH4 (1.5%)",
    orbitalPeriod: "60,190 days", rotationPeriod: "16.11 hours", axialTilt: "28.32",
    hasMagField: true,
    facts: [
      "Neptune has the strongest sustained winds of any planet, reaching 2,100 km/h",
      "It was predicted mathematically before being observed",
      "Neptune has 16 known moons, including the large retrograde Triton",
      "Its vivid blue color comes from methane absorption",
      "Neptune has a faint ring system with five main rings"
    ],
    description: "Neptune is the eighth and farthest known planet from the Sun. This ice giant was the first planet to be found through mathematical prediction rather than direct observation, discovered in 1846 by Johann Galle following calculations by Urbain Le Verrier and John Couch Adams. Neptune is notable for its deep blue color, caused by methane absorption of red light in its hydrogen-helium atmosphere. The planet experiences the most violent weather in the Solar System, with wind speeds reaching up to 2,100 km/h -- the fastest recorded on any planet. Neptune's Great Dark Spot, observed by Voyager 2 in 1989, was a massive anticyclonic storm similar to Jupiter's Great Red Spot but has since disappeared, suggesting Neptune's atmosphere is highly dynamic. The planet has a magnetic field about 27 times stronger than Earth's, tilted 47 degrees from the rotational axis. Triton, Neptune's largest moon, is one of the coldest objects in the Solar System and is believed to be a captured Kuiper Belt object, orbiting Neptune in the opposite direction to the planet's rotation. Triton has active nitrogen geysers and a thin nitrogen atmosphere."
  },
  moon: {
    name: "Moon", type: "Moon (Earth)", radius: "1,737 km", mass: "7.342 x 10^22 kg",
    gravity: "1.62 m/s^2", temp: "-173 to 127 C", atmosphere: "Negligible",
    orbitalPeriod: "27.32 days", rotationPeriod: "27.32 days (synchronous)", axialTilt: "1.54",
    hasMagField: false,
    facts: [
      "The Moon is the fifth largest natural satellite in the Solar System",
      "It is tidally locked, always showing the same face to Earth",
      "The Moon is slowly moving away from Earth at 3.8 cm per year",
      "12 humans have walked on its surface during the Apollo missions",
      "The Moon has no atmosphere, resulting in extreme temperature swings"
    ],
    description: "The Moon is Earth's only natural satellite and the fifth largest moon in the Solar System. Formed approximately 4.5 billion years ago, likely from debris ejected during a massive collision between Earth and a Mars-sized body called Theia, the Moon has played a crucial role in shaping Earth's environment. Its gravitational influence stabilizes Earth's axial tilt and drives ocean tides. The Moon is tidally locked to Earth, meaning it rotates once for every orbit, always presenting the same hemisphere toward our planet. The lunar surface is divided into two main terrain types: the heavily cratered, ancient highlands (terrae) and the darker, smoother volcanic plains (maria) that were formed by ancient lava flows. The Moon has no significant atmosphere or magnetic field, leaving its surface exposed to the solar wind, cosmic rays, and meteorite impacts. Six Apollo missions successfully landed astronauts on the Moon between 1969 and 1972, returning 382 kg of lunar samples that have been invaluable for understanding the Moon's composition and history."
  },
  phobos: {
    name: "Phobos", type: "Moon (Mars)", radius: "11.3 km", mass: "1.066 x 10^16 kg",
    gravity: "0.0057 m/s^2", temp: "-40 C (avg)", atmosphere: "None",
    orbitalPeriod: "0.319 days", rotationPeriod: "0.319 days (synchronous)", axialTilt: "0",
    hasMagField: false,
    facts: [
      "Phobos orbits closer to its planet than any other known moon",
      "It completes three orbits around Mars each Martian day",
      "Phobos is slowly spiraling inward and will eventually break apart",
      "The Stickney crater covers nearly half of Phobos's surface",
      "Phobos may be a captured asteroid from the asteroid belt"
    ],
    description: "Phobos is the larger and closer of Mars's two moons, orbiting at a distance of only 6,000 km above the Martian surface. This tiny, irregularly shaped moon measures approximately 27 x 22 x 18 km and completes an orbit around Mars in just 7 hours and 39 minutes, faster than Mars rotates. As a result, Phobos rises in the west and sets in the east when viewed from Mars's surface. The moon is slowly spiraling inward due to tidal forces, losing altitude at a rate of about 1.8 cm per year. Scientists estimate that in approximately 50 million years, Phobos will either crash into Mars or, more likely, break apart to form a ring around the planet. Its surface is dominated by the Stickney crater, a 9 km impact crater so large that the impact that created it nearly destroyed Phobos. The moon's origin remains debated, with theories including capture from the asteroid belt, co-formation with Mars, or re-accretion of debris from an ancient impact."
  },
  io: {
    name: "Io", type: "Moon (Jupiter)", radius: "1,822 km", mass: "8.932 x 10^22 kg",
    gravity: "1.796 m/s^2", temp: "-143 to 1,727 C", atmosphere: "SO2 (thin)",
    orbitalPeriod: "1.77 days", rotationPeriod: "1.77 days (synchronous)", axialTilt: "0.05",
    hasMagField: false,
    facts: [
      "Io is the most volcanically active body in the Solar System",
      "It has over 400 active volcanoes",
      "Tidal heating from Jupiter drives its extreme volcanic activity",
      "Io's surface is constantly being reshaped by lava flows",
      "Io contributes material to Jupiter's magnetosphere"
    ],
    description: "Io is the innermost of Jupiter's four Galilean moons and the most volcanically active body in the Solar System. With over 400 active volcanoes, Io's surface is constantly being reshaped by volcanic eruptions that can send plumes of sulfur and sulfur dioxide hundreds of kilometers above the surface. This extreme geological activity is driven by tidal heating: the gravitational tug-of-war between Jupiter, Europa, and Ganymede generates enormous internal friction that melts Io's interior. The surface is painted in vivid yellows, oranges, reds, and whites from various sulfur compounds and silicate lavas, giving it a pizza-like appearance. Io's volcanism is so active that no impact craters have been identified on its surface -- they are continually buried by fresh lava flows. The moon ejects about one ton of material per second into space, which forms a torus of plasma around Jupiter and contributes to Jupiter's intense radiation environment."
  },
  europa: {
    name: "Europa", type: "Moon (Jupiter)", radius: "1,561 km", mass: "4.800 x 10^22 kg",
    gravity: "1.315 m/s^2", temp: "-160 C (surface)", atmosphere: "O2 (thin)",
    orbitalPeriod: "3.55 days", rotationPeriod: "3.55 days (synchronous)", axialTilt: "0.1",
    hasMagField: false,
    facts: [
      "Europa likely has a global saltwater ocean beneath its icy surface",
      "This ocean may contain more water than all of Earth's oceans combined",
      "Europa is considered one of the best candidates for extraterrestrial life",
      "Its ice surface is one of the smoothest in the Solar System",
      "Water plumes may erupt through cracks in the ice shell"
    ],
    description: "Europa is the smallest of Jupiter's four Galilean moons and one of the most intriguing objects in the Solar System for astrobiologists. Beneath its smooth, icy surface lies a global ocean of liquid saltwater estimated to contain twice the volume of all Earth's oceans combined. This ocean is maintained in liquid form by tidal heating from Jupiter's immense gravity. Europa's surface is crisscrossed with a network of dark streaks called lineae, which are thought to be cracks in the ice where warmer material has welled up from below. The ice shell is estimated to be 15-25 km thick, with the underlying ocean potentially 60-150 km deep. In 2012 and subsequent observations, the Hubble Space Telescope detected possible water vapor plumes erupting from Europa's south polar region, suggesting direct access to the subsurface ocean. The presence of liquid water, chemical energy from tidal heating, and essential chemical elements makes Europa one of the most promising places in the Solar System to search for present-day microbial life."
  },
  ganymede: {
    name: "Ganymede", type: "Moon (Jupiter)", radius: "2,634 km", mass: "1.482 x 10^23 kg",
    gravity: "1.428 m/s^2", temp: "-163 C (avg)", atmosphere: "O2, O3 (thin)",
    orbitalPeriod: "7.15 days", rotationPeriod: "7.15 days (synchronous)", axialTilt: "0.2",
    hasMagField: true,
    facts: [
      "Ganymede is the largest moon in the Solar System",
      "It is larger than the planet Mercury",
      "Ganymede is the only moon known to have its own magnetic field",
      "It likely has a subsurface saltwater ocean",
      "Its surface shows both ancient cratered terrain and younger grooved regions"
    ],
    description: "Ganymede is the largest moon in the Solar System, with a diameter of 5,268 km, making it even larger than the planet Mercury. It is the third of Jupiter's Galilean moons and the seventh-largest object in the Solar System. Ganymede is unique among moons in possessing its own intrinsic magnetic field, generated by convection within its iron-rich liquid core, creating a small magnetosphere embedded within Jupiter's massive one. This magnetic field produces aurorae observed by the Hubble Space Telescope. Evidence from the Galileo spacecraft and Hubble observations strongly suggests that Ganymede harbors a subsurface saltwater ocean, sandwiched between layers of ice at a depth of about 200 km below the surface. The surface displays two distinct terrain types: dark, heavily cratered regions that are ancient, and lighter, grooved terrain that is younger and was formed by tectonic activity. Ganymede's interior is fully differentiated into an iron core, a rocky mantle, and an ice shell, similar in structure to a rocky planet."
  },
  titan: {
    name: "Titan", type: "Moon (Saturn)", radius: "2,575 km", mass: "1.345 x 10^23 kg",
    gravity: "1.352 m/s^2", temp: "-179 C (surface)", atmosphere: "N2 (98.4%), CH4 (1.4%)",
    orbitalPeriod: "15.95 days", rotationPeriod: "15.95 days (synchronous)", axialTilt: "0.3",
    hasMagField: false,
    facts: [
      "Titan is the only moon with a dense atmosphere",
      "It has liquid methane and ethane lakes and seas on its surface",
      "Titan's atmosphere is denser than Earth's",
      "The Huygens probe successfully landed on Titan in 2005",
      "Titan's surface pressure is about 1.5 times Earth's"
    ],
    description: "Titan is Saturn's largest moon and the second-largest moon in the Solar System. It is the only moon known to have a substantial atmosphere, which is denser than Earth's and composed primarily of nitrogen with about 1.4% methane. This thick, hazy atmosphere obscures Titan's surface from visual observation, but radar mapping by the Cassini spacecraft revealed a remarkably Earth-like landscape with mountains, sand dunes, river channels, and lakes filled with liquid methane and ethane. Titan is the only other body in the Solar System besides Earth known to have stable liquid on its surface. The Huygens probe, which descended through Titan's atmosphere in January 2005, revealed a surface covered in water-ice pebbles smoothed by liquid methane flows, beneath an orange-tinted sky. Titan's methane cycle mirrors Earth's water cycle, with methane rain, rivers, and evaporation. Despite its frigid surface temperature of -179 C, some scientists speculate that Titan's complex organic chemistry and possible subsurface water ocean could potentially support exotic forms of life."
  },
  triton: {
    name: "Triton", type: "Moon (Neptune)", radius: "1,353 km", mass: "2.139 x 10^22 kg",
    gravity: "0.779 m/s^2", temp: "-235 C (surface)", atmosphere: "N2, CH4 (thin)",
    orbitalPeriod: "5.88 days (retrograde)", rotationPeriod: "5.88 days (synchronous)", axialTilt: "0",
    hasMagField: false,
    facts: [
      "Triton orbits Neptune in the opposite direction to the planet's rotation",
      "It is likely a captured Kuiper Belt object",
      "Triton has active nitrogen geysers erupting 8 km high",
      "Its surface temperature is among the coldest in the Solar System",
      "Triton will eventually spiral inward and be torn apart by Neptune's gravity"
    ],
    description: "Triton is Neptune's largest moon and the seventh-largest moon in the Solar System. It is unique among large moons for its retrograde orbit, meaning it orbits Neptune in the opposite direction to the planet's rotation. This strongly suggests that Triton was originally a Kuiper Belt object that was captured by Neptune's gravity, rather than forming in place. Triton is one of the coldest objects in the Solar System, with surface temperatures around -235 C. Despite these extreme conditions, Voyager 2 observed active nitrogen geysers erupting up to 8 km above the surface, making Triton one of the few geologically active moons in the Solar System. The surface is composed of frozen nitrogen, water ice, and carbon dioxide ice, with a relatively young surface age suggested by the sparse number of impact craters. Triton has a thin nitrogen atmosphere with trace amounts of methane. Due to its retrograde orbit, tidal interactions are gradually decaying Triton's orbit, and in the distant future it will either crash into Neptune or be torn apart to form a ring."
  },
  charon: {
    name: "Charon", type: "Moon (Pluto)", radius: "606 km", mass: "1.586 x 10^21 kg",
    gravity: "0.288 m/s^2", temp: "-220 C (surface)", atmosphere: "None",
    orbitalPeriod: "6.39 days", rotationPeriod: "6.39 days (synchronous)", axialTilt: "0",
    hasMagField: false,
    facts: [
      "Charon is so large relative to Pluto that they are sometimes called a double dwarf planet",
      "Both Pluto and Charon are tidally locked to each other",
      "Charon has a dark reddish polar cap made of tholins",
      "The system's center of gravity lies between the two bodies",
      "Charon was discovered in 1978 by James Christy"
    ],
    description: "Charon is the largest of Pluto's five known moons and is so large relative to Pluto that the pair is sometimes considered a double dwarf planet system. With a diameter of 1,212 km, Charon is about half the size of Pluto, making it the largest known satellite relative to its parent body. The two bodies are mutually tidally locked, always presenting the same face to each other as they orbit their common center of mass (barycenter), which lies in the space between them. New Horizons revealed Charon's surface in stunning detail during its 2015 flyby, showing a surprisingly diverse landscape including a vast equatorial belt of canyons and troughs, smooth plains, and a distinctive dark reddish cap at the north pole called Mordor Macula. This dark cap is thought to be composed of tholins, complex organic molecules formed when methane escaping from Pluto's atmosphere is trapped and processed by ultraviolet radiation on Charon's frigid surface."
  },
  ceres: {
    name: "Ceres", type: "Dwarf Planet", radius: "473 km", mass: "9.393 x 10^20 kg",
    gravity: "0.28 m/s^2", temp: "-106 C (avg)", atmosphere: "Water vapor (transient)",
    orbitalPeriod: "1,682 days", rotationPeriod: "9.07 hours", axialTilt: "4",
    hasMagField: false,
    facts: [
      "Ceres is the largest object in the asteroid belt",
      "It contains about one-third of the asteroid belt's total mass",
      "Bright spots on Ceres are deposits of sodium carbonate",
      "Ceres may have a subsurface ocean of liquid water",
      "It was the first dwarf planet visited by a spacecraft (Dawn, 2015)"
    ],
    description: "Ceres is the largest object in the asteroid belt between Mars and Jupiter, with a diameter of about 946 km. It was the first asteroid to be discovered, found by Giuseppe Piazzi in 1801, and was reclassified as a dwarf planet in 2006 under the same IAU resolution that reclassified Pluto. Ceres accounts for approximately one-third of the total mass of the asteroid belt. The Dawn spacecraft, which orbited Ceres from 2015 to 2018, revealed a surprisingly complex world with evidence of past and possibly present geological activity. The most striking feature discovered was a collection of bright spots in Occator Crater, identified as deposits of sodium carbonate that were brought to the surface by brine from a subsurface reservoir. This evidence, combined with detections of water vapor emission, strongly suggests that Ceres harbors liquid water beneath its surface. Ceres's composition is quite different from most asteroids, containing significant amounts of water ice and clay minerals, suggesting it formed in the outer Solar System and migrated inward."
  },
  pluto: {
    name: "Pluto", type: "Dwarf Planet", radius: "1,188 km", mass: "1.303 x 10^22 kg",
    gravity: "0.62 m/s^2", temp: "-230 C (avg)", atmosphere: "N2, CH4, CO (thin)",
    orbitalPeriod: "90,560 days", rotationPeriod: "6.39 days (retrograde)", axialTilt: "122.53",
    hasMagField: false,
    facts: [
      "Pluto was reclassified from planet to dwarf planet in 2006",
      "New Horizons revealed a heart-shaped nitrogen ice plain (Sputnik Planitia)",
      "Pluto has five known moons: Charon, Nix, Hydra, Kerberos, and Styx",
      "Its orbit is highly eccentric, sometimes bringing it closer than Neptune",
      "Pluto's atmosphere expands when closer to the Sun and may freeze when farther"
    ],
    description: "Pluto is the most famous dwarf planet, located in the Kuiper Belt beyond Neptune's orbit. Once considered the ninth planet, Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006. Despite its small size, the New Horizons flyby in July 2015 revealed Pluto to be an astonishingly complex and geologically active world. The most prominent feature is Sputnik Planitia, a vast heart-shaped plain of nitrogen ice that shows evidence of convective overturn and is remarkably free of impact craters, suggesting it is geologically young. Pluto has towering mountains of water ice up to 3,500 meters high, glaciers of nitrogen ice, and possible cryovolcanoes. Its thin atmosphere, composed primarily of nitrogen with traces of methane and carbon monoxide, creates a blue haze that extends high above the surface. Pluto has five known moons, with Charon being so large that the two bodies orbit a common center of mass between them. The dwarf planet's highly eccentric orbit occasionally brings it closer to the Sun than Neptune."
  },
  eris: {
    name: "Eris", type: "Dwarf Planet", radius: "1,163 km", mass: "1.66 x 10^22 kg",
    gravity: "0.82 m/s^2", temp: "-243 C (avg)", atmosphere: "N2/CH4 (when near Sun)",
    orbitalPeriod: "203,830 days", rotationPeriod: "25.9 hours", axialTilt: "78",
    hasMagField: false,
    facts: [
      "Eris is the most massive known dwarf planet",
      "Its discovery led directly to the reclassification of Pluto",
      "Eris is currently about three times farther from the Sun than Pluto",
      "Its moon Dysnomia helps determine Eris's mass",
      "Eris has one of the most reflective surfaces in the Solar System"
    ],
    description: "Eris is the most massive known dwarf planet in the Solar System, located in the scattered disc region beyond the Kuiper Belt. Discovered in 2005 by a team led by Mike Brown at Caltech, Eris's discovery was the catalyst that led the International Astronomical Union to formally define the term 'planet' and create the 'dwarf planet' classification. Eris is about 27% more massive than Pluto, though slightly smaller in diameter. It has an extremely eccentric and highly inclined orbit, ranging from 37.9 to 97.5 AU from the Sun with an orbital period of about 558 years. At its current distance of roughly 96 AU, Eris is one of the most distant known objects in the Solar System. Its surface is extremely reflective, likely covered in a layer of frozen nitrogen and methane that may sublime into a thin atmosphere when Eris is closest to the Sun. Eris has one known moon, Dysnomia, which orbits it every 15.8 days."
  },
  haumea: {
    name: "Haumea", type: "Dwarf Planet", radius: "816 km (avg)", mass: "4.006 x 10^21 kg",
    gravity: "0.44 m/s^2", temp: "-241 C (avg)", atmosphere: "None detected",
    orbitalPeriod: "103,774 days", rotationPeriod: "3.92 hours", axialTilt: "Unknown",
    hasMagField: false,
    facts: [
      "Haumea has one of the fastest rotation periods of any large body",
      "Its rapid spin gives it an elongated, egg-like shape",
      "Haumea has two small moons and a faint ring",
      "It is the first known Kuiper Belt object to have a ring system",
      "Haumea's surface is covered in crystalline water ice"
    ],
    description: "Haumea is a dwarf planet located in the Kuiper Belt, notable for its extremely rapid rotation and unusual elongated shape. With a rotation period of only 3.92 hours, Haumea spins faster than any other known large body in the Solar System, which has stretched it into a triaxial ellipsoid roughly twice as long as it is wide. This egg-like shape is unique among known dwarf planets. Haumea has two known moons, Hi'iaka and Namaka, and in 2017 became the first Kuiper Belt object found to have a ring system, discovered during a stellar occultation. The surface is covered in crystalline water ice, which is unusual for Kuiper Belt objects as cosmic radiation should have converted it to amorphous ice over billions of years. This suggests relatively recent resurfacing, possibly from cryovolcanic activity or collisional events. Haumea is named after the Hawaiian goddess of fertility and childbirth."
  },
  makemake: {
    name: "Makemake", type: "Dwarf Planet", radius: "715 km", mass: "~3.1 x 10^21 kg",
    gravity: "~0.50 m/s^2", temp: "-243 C (avg)", atmosphere: "N2 (transient, thin)",
    orbitalPeriod: "112,897 days", rotationPeriod: "22.83 hours", axialTilt: "Unknown",
    hasMagField: false,
    facts: [
      "Makemake is the second-brightest Kuiper Belt object after Pluto",
      "It was discovered in 2005, shortly after Eris",
      "Makemake has one known small, dark moon nicknamed MK2",
      "Its surface is covered in frozen methane and ethane",
      "Makemake lacks a significant atmosphere despite its Pluto-like surface"
    ],
    description: "Makemake is a dwarf planet located in the Kuiper Belt, and the second-brightest Kuiper Belt object as seen from Earth after Pluto. Discovered in 2005 by the same team that found Eris, Makemake was named after the creation deity of the Rapa Nui people of Easter Island. With an estimated diameter of about 1,430 km, it is roughly two-thirds the size of Pluto. Its surface is covered in frozen methane and ethane, similar to Pluto, giving it a reddish-brown color. Despite this similarity, Makemake appears to lack a significant atmosphere, which was confirmed by a stellar occultation observation in 2011. In 2016, observations with the Hubble Space Telescope revealed a small, dark moon orbiting Makemake, provisionally designated S/2015 (136472) 1 and nicknamed MK2. This moon is estimated to be only about 175 km in diameter and is remarkably dark compared to Makemake's bright surface, suggesting it may be coated in carbon-rich material."
  },
  vesta: {
    name: "Vesta", type: "Asteroid", radius: "263 km (mean)", mass: "2.590 x 10^20 kg",
    gravity: "0.25 m/s^2", temp: "-188 to -18 C", atmosphere: "None",
    orbitalPeriod: "1,326 days", rotationPeriod: "5.34 hours", axialTilt: "29",
    hasMagField: false,
    facts: [
      "Vesta is the second-largest object in the asteroid belt",
      "It has a giant impact basin (Rheasilvia) at its south pole",
      "Vesta is the brightest asteroid visible from Earth",
      "HED meteorites on Earth are believed to originate from Vesta",
      "The Dawn spacecraft orbited Vesta from 2011 to 2012"
    ],
    description: "Vesta is the second-largest object in the asteroid belt, with a mean diameter of about 525 km. It is one of the most geologically diverse objects among the asteroids, with a differentiated interior consisting of an iron core, rocky mantle, and basaltic crust, making it more similar to a terrestrial planet than a typical asteroid. Vesta's most dramatic feature is the Rheasilvia impact basin at its south pole, approximately 505 km in diameter, nearly as wide as Vesta itself. The impact that created this basin was so energetic that it excavated about 1% of Vesta's volume and ejected fragments that eventually reached Earth as HED meteorites (Howardites, Eucrites, and Diogenites). The Dawn spacecraft, which orbited Vesta from July 2011 to September 2012, revealed a complex surface with diverse mineralogy, trough systems stretching around the equator, and evidence of ancient lava flows. Vesta is the brightest asteroid visible from Earth and can occasionally be seen with the naked eye under favorable conditions."
  },
  pallas: {
    name: "Pallas", type: "Asteroid", radius: "256 km (mean)", mass: "2.04 x 10^20 kg",
    gravity: "0.21 m/s^2", temp: "-120 C (avg)", atmosphere: "None",
    orbitalPeriod: "1,686 days", rotationPeriod: "7.81 hours", axialTilt: "84",
    hasMagField: false,
    facts: [
      "Pallas has one of the most highly inclined orbits of any asteroid",
      "Its orbital inclination of nearly 35 degrees makes it hard to visit",
      "Pallas is the third-largest asteroid in the belt",
      "It may be a partially differentiated protoplanet",
      "Pallas was discovered in 1802 by Heinrich Olbers"
    ],
    description: "Pallas is the third-largest asteroid in the asteroid belt, with a mean diameter of about 512 km. Discovered in 1802 by Heinrich Wilhelm Olbers, it was the second asteroid ever found. Pallas stands out for its extremely high orbital inclination of 34.8 degrees, the highest of any known asteroid over 100 km in diameter. This steep inclination makes Pallas very difficult to visit with spacecraft, as the energy required to match its orbital plane is substantial. Pallas appears to be a partially differentiated protoplanet, meaning it began to separate into layers of different density but the process was interrupted, perhaps by the gravitational influence of Jupiter. Recent observations suggest Pallas has a heavily cratered surface, indicating it has experienced numerous violent collisions over its history. Its axial tilt of approximately 84 degrees means it essentially rolls along its orbit, similar to Uranus. Pallas is classified as a B-type asteroid, with a dark, carbon-rich surface composition."
  },
  halley: {
    name: "Halley's Comet", type: "Comet", radius: "~5.5 km", mass: "~2.2 x 10^14 kg",
    gravity: "~0.001 m/s^2", temp: "-270 to 47 C", atmosphere: "Coma (near Sun)",
    orbitalPeriod: "27,510 days (~75.3 years)", rotationPeriod: "2.2 days", axialTilt: "Unknown",
    hasMagField: false,
    facts: [
      "Halley's Comet is the most famous periodic comet, visible every 75-79 years",
      "It was last visible from Earth in 1986 and will return in 2061",
      "The Giotto spacecraft flew within 596 km of its nucleus in 1986",
      "The comet's nucleus is shaped like a peanut, about 15 x 8 km",
      "Halley is the parent body of two meteor showers: Eta Aquarids and Orionids"
    ],
    description: "Halley's Comet, officially designated 1P/Halley, is the most famous of all periodic comets, making its closest approach to the Sun roughly every 75-79 years. Named after Edmond Halley, who in 1705 first determined that the comets observed in 1531, 1607, and 1682 were actually the same object returning periodically, it was the first comet to be recognized as periodic. During its last appearance in 1986, an international armada of spacecraft was sent to study it, with the European Space Agency's Giotto probe passing within 596 km of the nucleus. These observations revealed Halley's nucleus to be a dark, peanut-shaped body approximately 15 km long and 8 km wide, with a surface darker than coal. Only about 10% of the surface was actively outgassing, with jets of gas and dust erupting from the sunlit side. Halley's orbit is retrograde, meaning it travels around the Sun in the opposite direction to the planets, with an orbital inclination of about 162 degrees. The comet produces two annual meteor showers on Earth: the Eta Aquarids in May and the Orionids in October, caused by Earth passing through trails of debris left by the comet."
  }
};

const BODIES = [
  { id: "mercury", name: "Mercury", type: "Planet", color: 0xb5b5b5, radius: 0.25, a: 0.38710, e: 0.20563, i: 7.005, omega: 29.124, Omega: 48.331, M0: 174.796, period: 87.969, tilt: 0.034, rotPeriod: 58.65 },
  { id: "venus", name: "Venus", type: "Planet", color: 0xe8cda0, radius: 0.4, a: 0.72333, e: 0.00677, i: 3.395, omega: 54.884, Omega: 76.680, M0: 50.416, period: 224.701, tilt: 177.4, rotPeriod: -243.02 },
  { id: "earth", name: "Earth", type: "Planet", color: 0x4a90d9, radius: 0.42, a: 1.00000, e: 0.01671, i: 0.000, omega: 102.937, Omega: -11.260, M0: 357.529, period: 365.256, tilt: 23.44, rotPeriod: 0.997 },
  { id: "mars", name: "Mars", type: "Planet", color: 0xc1440e, radius: 0.32, a: 1.52368, e: 0.09340, i: 1.850, omega: 286.502, Omega: 49.558, M0: 19.373, period: 686.980, tilt: 25.19, rotPeriod: 1.026 },
  { id: "jupiter", name: "Jupiter", type: "Planet", color: 0xc99039, radius: 1.2, a: 5.20260, e: 0.04849, i: 1.303, omega: 273.867, Omega: 100.464, M0: 20.020, period: 4332.589, tilt: 3.13, rotPeriod: 0.414 },
  { id: "saturn", name: "Saturn", type: "Planet", color: 0xe8d191, radius: 1.0, a: 9.55491, e: 0.05551, i: 2.489, omega: 339.391, Omega: 113.666, M0: 317.020, period: 10759.22, tilt: 26.73, rotPeriod: 0.444 },
  { id: "uranus", name: "Uranus", type: "Planet", color: 0x7ec8e3, radius: 0.7, a: 19.2184, e: 0.04630, i: 0.773, omega: 96.998, Omega: 74.006, M0: 142.238, period: 30688.5, tilt: 97.77, rotPeriod: -0.718 },
  { id: "neptune", name: "Neptune", type: "Planet", color: 0x3b5dc9, radius: 0.68, a: 30.1104, e: 0.00899, i: 1.770, omega: 276.336, Omega: 131.784, M0: 256.228, period: 60182.0, tilt: 28.32, rotPeriod: 0.671 },
  { id: "ceres", name: "Ceres", type: "Dwarf Planet", color: 0x8a8a8a, radius: 0.18, a: 2.7675, e: 0.0758, i: 10.59, omega: 72.522, Omega: 80.327, M0: 95.99, period: 1681.63, cat: "dwarfs", tilt: 4, rotPeriod: 0.378 },
  { id: "pluto", name: "Pluto", type: "Dwarf Planet", color: 0xc9b9a0, radius: 0.2, a: 39.482, e: 0.2488, i: 17.16, omega: 113.834, Omega: 110.299, M0: 14.53, period: 90560, cat: "dwarfs", tilt: 122.53, rotPeriod: -6.39 },
  { id: "eris", name: "Eris", type: "Dwarf Planet", color: 0xd0d0d0, radius: 0.2, a: 67.781, e: 0.4407, i: 44.04, omega: 151.43, Omega: 35.87, M0: 205.99, period: 203830, cat: "dwarfs", tilt: 78, rotPeriod: 1.08 },
  { id: "haumea", name: "Haumea", type: "Dwarf Planet", color: 0xbbbbbb, radius: 0.17, a: 43.218, e: 0.1912, i: 28.19, omega: 240.20, Omega: 122.17, M0: 218.2, period: 103774, cat: "dwarfs", tilt: 0, rotPeriod: 0.163 },
  { id: "makemake", name: "Makemake", type: "Dwarf Planet", color: 0xcc9977, radius: 0.17, a: 45.430, e: 0.1559, i: 28.98, omega: 297.8, Omega: 79.62, M0: 153.2, period: 112897, cat: "dwarfs", tilt: 0, rotPeriod: 0.951 },
  { id: "vesta", name: "Vesta", type: "Asteroid", color: 0xaaaaaa, radius: 0.14, a: 2.3615, e: 0.0887, i: 7.14, omega: 149.83, Omega: 103.85, M0: 20.86, period: 1325.75, cat: "asteroids", tilt: 29, rotPeriod: 0.222 },
  { id: "pallas", name: "Pallas", type: "Asteroid", color: 0x888888, radius: 0.15, a: 2.7720, e: 0.2313, i: 34.83, omega: 310.15, Omega: 173.09, M0: 78.23, period: 1686.0, cat: "asteroids", tilt: 84, rotPeriod: 0.326 },
  { id: "halley", name: "Halley", type: "Comet", color: 0x88bbdd, radius: 0.12, a: 17.834, e: 0.9671, i: 162.26, omega: 111.33, Omega: 58.42, M0: 38.38, period: 27510, cat: "comets", tilt: 0, rotPeriod: 2.2 },
];

const MOONS = [
  { id: "moon", name: "Moon", parent: "earth", color: 0xc8c8c8, radius: 0.12, dist: 0.08, period: 27.32, i: 5.14 },
  { id: "phobos", name: "Phobos", parent: "mars", color: 0x8a7766, radius: 0.05, dist: 0.04, period: 0.319, i: 1.08 },
  { id: "io", name: "Io", parent: "jupiter", color: 0xddcc44, radius: 0.1, dist: 0.12, period: 1.77, i: 0.04 },
  { id: "europa", name: "Europa", parent: "jupiter", color: 0xc8bda0, radius: 0.09, dist: 0.18, period: 3.55, i: 0.47 },
  { id: "ganymede", name: "Ganymede", parent: "jupiter", color: 0x998877, radius: 0.12, dist: 0.26, period: 7.15, i: 0.18 },
  { id: "titan", name: "Titan", parent: "saturn", color: 0xcc9955, radius: 0.11, dist: 0.2, period: 15.95, i: 0.33 },
  { id: "triton", name: "Triton", parent: "neptune", color: 0x88aacc, radius: 0.09, dist: 0.14, period: 5.88, i: 157 },
  { id: "charon", name: "Charon", parent: "pluto", color: 0x999999, radius: 0.08, dist: 0.06, period: 6.39, i: 0 },
];

let simTime = Date.now();
let timeSpeed = 1;
let isRunning = true;
let selectedBody = null;
let followBody = null;
const visibility = { star: true, planets: true, moons: true, dwarfs: true, asteroids: true, comets: true, belt: true, kuiper: true };
let activeMagField = null;

function updateDateTime() {
  const d = new Date(simTime);
  const pad = (n, l = 2) => String(n).padStart(l, "0");
  const ms = pad(d.getUTCMilliseconds(), 3);
  const str = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}.${ms} UTC`;
  document.getElementById("simDateTime").textContent = str;
  const jd = simTime / DAY_MS + 2440587.5;
  document.getElementById("simJD").textContent = `JD ${jd.toFixed(5)}`;
}

function updateSpeedLabel() {
  if (!isRunning) {
    document.querySelector(".speed-label").textContent = "PAUSED";
    return;
  }
  const dps = timeSpeed;
  let label;
  if (dps < 1) label = `${(dps * 24 * 3600).toFixed(0)} sec/s`;
  else if (dps < 365) label = `${dps} day${dps === 1 ? "" : "s"}/s`;
  else label = `${(dps / 365.25).toFixed(1)} yr/s`;
  document.querySelector(".speed-label").textContent = label;
}

function updateStatus() {
  const dot = document.getElementById("statusDot");
  const text = document.getElementById("statusText");
  if (isRunning) {
    dot.classList.remove("paused");
    text.classList.remove("paused");
    text.textContent = "RUNNING";
  } else {
    dot.classList.add("paused");
    text.classList.add("paused");
    text.textContent = "PAUSED";
  }
}

function showInfo(bodyId) {
  const info = BODY_INFO[bodyId];
  if (!info) return;
  const panel = document.getElementById("info-panel");
  panel.classList.add("visible");
  document.getElementById("infoTitle").textContent = info.name;
  document.getElementById("infoType").textContent = info.type;
  document.getElementById("infoRadius").textContent = info.radius;
  document.getElementById("infoMass").textContent = info.mass;
  document.getElementById("infoGravity").textContent = info.gravity;
  document.getElementById("infoTemp").textContent = info.temp;
  document.getElementById("infoAtmo").textContent = info.atmosphere;

  const body = BODIES.find(b => b.id === bodyId);
  const currentDist = (window._solarSystem && window._solarSystem.bodyMeshes[bodyId])
    ? (window._solarSystem.bodyMeshes[bodyId].userData.currentDist || (body ? body.a : 0))
    : (body ? body.a : 0);
  document.getElementById("infoDist").textContent = bodyId === "sun" ? "0 AU (center)" : `${currentDist.toFixed(4)} AU`;
  document.getElementById("infoPeriod").textContent = info.orbitalPeriod;
  document.getElementById("infoRotation").textContent = info.rotationPeriod;
  document.getElementById("infoEcc").textContent = body ? body.e.toFixed(4) : "-";
  document.getElementById("infoInc").textContent = body ? `${body.i.toFixed(2)}\u00B0` : "-";
  document.getElementById("infoAxialTilt").textContent = info.axialTilt ? `${info.axialTilt}\u00B0` : "-";
  document.getElementById("infoSMA").textContent = body ? `${body.a.toFixed(4)} AU` : "-";

  const factsEl = document.getElementById("infoFacts");
  factsEl.innerHTML = "<ul>" + info.facts.map(f => `<li>${f}</li>`).join("") + "</ul>";
  document.getElementById("infoDesc").textContent = info.description;

  const magBtn = document.getElementById("infoMagField");
  if (info.hasMagField) {
    magBtn.style.display = "block";
    magBtn.classList.toggle("active", activeMagField === bodyId);
    magBtn.textContent = activeMagField === bodyId ? "Hide Magnetic Field" : "Show Magnetic Field";
  } else {
    magBtn.style.display = "none";
  }

  selectedBody = bodyId;
  document.querySelectorAll(".planet-item").forEach(el => {
    el.classList.toggle("selected", el.dataset.planet === bodyId);
  });
}

document.getElementById("infoClose").addEventListener("click", () => {
  document.getElementById("info-panel").classList.remove("visible");
  selectedBody = null;
  followBody = null;
  if (window._solarSystem && activeMagField) {
    window._solarSystem.removeMagField();
    activeMagField = null;
  }
  document.querySelectorAll(".planet-item").forEach(el => el.classList.remove("selected"));
});

document.getElementById("infoFollow").addEventListener("click", () => {
  if (selectedBody) followBody = selectedBody;
});

document.getElementById("infoMagField").addEventListener("click", () => {
  if (!window._solarSystem || !selectedBody) return;
  const info = BODY_INFO[selectedBody];
  if (!info || !info.hasMagField) return;

  if (activeMagField === selectedBody) {
    window._solarSystem.removeMagField();
    activeMagField = null;
    document.getElementById("infoMagField").classList.remove("active");
    document.getElementById("infoMagField").textContent = "Show Magnetic Field";
  } else {
    window._solarSystem.removeMagField();
    window._solarSystem.showMagField(selectedBody);
    activeMagField = selectedBody;
    document.getElementById("infoMagField").classList.add("active");
    document.getElementById("infoMagField").textContent = "Hide Magnetic Field";
  }
});

document.querySelectorAll(".speed-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const speed = parseInt(btn.dataset.speed);
    if (speed === 0) {
      isRunning = !isRunning;
      btn.classList.toggle("paused", !isRunning);
      btn.innerHTML = isRunning ? "&#9646;&#9646;" : "&#9654;";
      updateStatus();
    } else {
      isRunning = true;
      timeSpeed = speed;
      const pauseBtn = document.getElementById("pauseBtn");
      pauseBtn.classList.remove("paused");
      pauseBtn.innerHTML = "&#9646;&#9646;";
      updateStatus();
    }
    document.querySelectorAll(".speed-btn:not(#pauseBtn)").forEach(b => b.classList.remove("active"));
    if (speed > 0) btn.classList.add("active");
    updateSpeedLabel();
  });
});

document.querySelectorAll(".category-item").forEach(item => {
  const cat = item.dataset.cat;
  const expandEl = item.querySelector(".cat-expand");
  if (expandEl) {
    expandEl.addEventListener("click", e => {
      e.stopPropagation();
      expandEl.classList.toggle("open");
      const lists = { star: "starList", planets: "planetList", moons: "moonList", dwarfs: "dwarfList", asteroids: "asteroidList", comets: "cometList" };
      const listEl = document.getElementById(lists[cat]);
      if (listEl) listEl.classList.toggle("open");
    });
  }
});

document.querySelectorAll("[data-toggle]").forEach(chk => {
  chk.addEventListener("click", e => {
    e.stopPropagation();
    const cat = chk.dataset.toggle;
    chk.classList.toggle("checked");
    visibility[cat] = chk.classList.contains("checked");
    if (window._solarSystem) {
      const ss = window._solarSystem;
      if (cat === "star") ss.sunGroup.visible = visibility.star;
      else if (cat === "belt") ss.beltGroup.visible = visibility.belt;
      else if (cat === "kuiper") ss.kuiperGroup.visible = visibility.kuiper;
      else if (cat === "moons") ss.moonGroup.visible = visibility.moons;
      else if (ss.categoryGroups[cat]) ss.categoryGroups[cat].visible = visibility[cat];
    }
  });
});

document.querySelectorAll(".planet-item").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.planet;
    showInfo(id);
    followBody = id;
  });
});

document.getElementById("calBtn").addEventListener("click", () => {
  const val = document.getElementById("dateInput").value;
  if (val) {
    const newDate = new Date(val + "T12:00:00Z");
    if (!isNaN(newDate.getTime())) {
      simTime = newDate.getTime();
      updateDateTime();
    }
  }
});

updateDateTime();
updateSpeedLabel();

async function init3D() {
  const THREE = await import("three");
  const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");

  function solveKepler(M, e) {
    let E = M;
    for (let i = 0; i < 30; i++) {
      const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      E -= dE;
      if (Math.abs(dE) < 1e-10) break;
    }
    return E;
  }

  function orbitalPos(a, e, iDeg, omegaDeg, OmegaDeg, M) {
    const ir = iDeg * DEG, wr = omegaDeg * DEG, Or = OmegaDeg * DEG;
    const E = solveKepler(M, e);
    const nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
    const r = a * (1 - e * Math.cos(E));
    const cosO = Math.cos(Or), sinO = Math.sin(Or);
    const cwn = Math.cos(wr + nu), swn = Math.sin(wr + nu);
    const ci = Math.cos(ir), si = Math.sin(ir);
    return { x: r * (cosO * cwn - sinO * swn * ci), y: r * swn * si, z: r * (sinO * cwn + cosO * swn * ci), r, nu };
  }

  function getMeanAnomaly(body, daysSinceJ2000) {
    const n = (2 * Math.PI) / body.period;
    let M = (body.M0 * DEG + n * daysSinceJ2000) % (2 * Math.PI);
    if (M < 0) M += 2 * Math.PI;
    return M;
  }

  function orbitPoints(body, segments = 360) {
    const pts = [];
    for (let j = 0; j <= segments; j++) {
      const M = (j / segments) * 2 * Math.PI;
      const p = orbitalPos(body.a, body.e, body.i, body.omega, body.Omega, M);
      pts.push(new THREE.Vector3(p.x * AU, p.y * AU, p.z * AU));
    }
    return pts;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020406);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 15000);
  camera.position.set(-40, 180, 320);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("canvas-container").appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 3;
  controls.maxDistance = 5000;
  controls.zoomSpeed = 0.8;
  controls.rotateSpeed = 0.5;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.AmbientLight(0x0a0a18, 0.4));
  const sunLight = new THREE.PointLight(0xfff8e8, 2.5, 5000);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  scene.add(sunLight);

  // Stars
  (function () {
    const geo = new THREE.BufferGeometry();
    const n = 15000;
    const pos = new Float32Array(n * 3);
    const cols = new Float32Array(n * 3);
    const sizes = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      const r = 2000 + Math.random() * 3000;
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
      const b = 0.4 + Math.random() * 0.6;
      const tint = Math.random();
      cols[i * 3] = tint > 0.85 ? b * 1.1 : tint > 0.7 ? b * 0.8 : b * 0.95;
      cols[i * 3 + 1] = tint > 0.5 ? b * 0.95 : b * 0.8;
      cols[i * 3 + 2] = b;
      sizes[i] = 0.5 + Math.random() * 1.5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 1.0, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.9 })));
  })();

  // Ecliptic grid
  (function () {
    const gridGroup = new THREE.Group();
    const gridMat = new THREE.LineBasicMaterial({ color: 0x0a1830, transparent: true, opacity: 0.2 });
    const extent = 1500, step = 75;
    for (let x = -extent; x <= extent; x += step) {
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, 0, -extent), new THREE.Vector3(x, 0, extent)]), gridMat));
    }
    for (let z = -extent; z <= extent; z += step) {
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-extent, 0, z), new THREE.Vector3(extent, 0, z)]), gridMat));
    }
    scene.add(gridGroup);
  })();

  function makeGlow(color, size, opacity) {
    const c = document.createElement("canvas");
    c.width = 256; c.height = 256;
    const ctx = c.getContext("2d");
    const rv = (color >> 16) & 255, gv = (color >> 8) & 255, bv = color & 255;
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, `rgba(${rv},${gv},${bv},${opacity})`);
    grad.addColorStop(0.15, `rgba(${rv},${gv},${bv},${opacity * 0.7})`);
    grad.addColorStop(0.4, `rgba(${rv},${gv},${bv},${opacity * 0.25})`);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    const sm = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const sprite = new THREE.Sprite(sm);
    sprite.scale.set(size, size, 1);
    return sprite;
  }

  // Sun
  const sunGroup = new THREE.Group();

  const sunCanvas = document.createElement("canvas");
  sunCanvas.width = 512; sunCanvas.height = 512;
  const sunCtx = sunCanvas.getContext("2d");
  const sunGrad = sunCtx.createRadialGradient(256, 256, 0, 256, 256, 256);
  sunGrad.addColorStop(0, "#fffbe6");
  sunGrad.addColorStop(0.3, "#ffe855");
  sunGrad.addColorStop(0.6, "#ffaa22");
  sunGrad.addColorStop(0.8, "#ff6600");
  sunGrad.addColorStop(1, "#cc3300");
  sunCtx.fillStyle = sunGrad;
  sunCtx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 512, y = Math.random() * 512;
    const r = Math.random() * 8 + 2;
    const a = Math.random() * 0.15;
    sunCtx.fillStyle = `rgba(255,200,50,${a})`;
    sunCtx.beginPath(); sunCtx.arc(x, y, r, 0, Math.PI * 2); sunCtx.fill();
  }
  const sunTex = new THREE.CanvasTexture(sunCanvas);

  const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2.0, 48, 48),
    new THREE.MeshBasicMaterial({ map: sunTex })
  );
  sunGroup.add(sunMesh);
  sunGroup.add(makeGlow(0xffdd44, 14, 0.6));
  sunGroup.add(makeGlow(0xffaa22, 24, 0.25));
  sunGroup.add(makeGlow(0xff6600, 36, 0.08));
  scene.add(sunGroup);

  // Create procedural textures
  function makeBodyTexture(body) {
    const c = document.createElement("canvas");
    c.width = 256; c.height = 128;
    const ctx = c.getContext("2d");
    const col = new THREE.Color(body.color);
    const r = Math.floor(col.r * 255), g = Math.floor(col.g * 255), b = Math.floor(col.b * 255);

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(0, 0, 256, 128);

    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 256, y = Math.random() * 128;
      const rr = Math.random() * 20 + 3;
      const dr = Math.floor((Math.random() - 0.5) * 30);
      ctx.fillStyle = `rgba(${Math.max(0, r + dr)},${Math.max(0, g + dr)},${Math.max(0, b + dr)},${Math.random() * 0.3 + 0.1})`;
      ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill();
    }

    if (body.id === "jupiter" || body.id === "saturn") {
      for (let y = 0; y < 128; y += 4 + Math.random() * 6) {
        const bandR = Math.max(0, Math.min(255, r + (Math.random() - 0.5) * 40));
        const bandG = Math.max(0, Math.min(255, g + (Math.random() - 0.5) * 40));
        const bandB = Math.max(0, Math.min(255, b + (Math.random() - 0.5) * 40));
        ctx.fillStyle = `rgba(${bandR},${bandG},${bandB},0.4)`;
        ctx.fillRect(0, y, 256, 3 + Math.random() * 4);
      }
    }

    if (body.id === "earth") {
      ctx.fillStyle = "rgba(30,100,40,0.3)";
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 256, Math.random() * 128, 15 + Math.random() * 25, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(220,220,240,0.25)";
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 256, Math.random() * 128, 20 + Math.random() * 30, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    return new THREE.CanvasTexture(c);
  }

  // Bodies
  const bodyMeshes = {};
  const categoryGroups = { planets: new THREE.Group(), dwarfs: new THREE.Group(), asteroids: new THREE.Group(), comets: new THREE.Group() };
  Object.values(categoryGroups).forEach(g => scene.add(g));

  BODIES.forEach(b => {
    const tex = makeBodyTexture(b);
    const mat = new THREE.MeshPhongMaterial({
      map: tex,
      shininess: 20,
      emissive: b.color,
      emissiveIntensity: 0.05
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(b.radius, 24, 24), mat);
    mesh.userData = { ...b };
    if (b.tilt) mesh.rotation.z = b.tilt * DEG;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.add(makeGlow(b.color, b.radius * 5, 0.2));

    const pts = orbitPoints(b);
    const orbitColor = b.cat === "comets" ? 0x2266aa : b.cat === "dwarfs" ? 0x223355 : b.cat === "asteroids" ? 0x334455 : 0x1a4488;
    const orbitLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: orbitColor, transparent: true, opacity: b.cat === "comets" ? 0.45 : 0.3 })
    );

    const cat = b.cat || "planets";
    const group = categoryGroups[cat] || categoryGroups.planets;
    group.add(mesh);
    group.add(orbitLine);
    bodyMeshes[b.id] = mesh;
  });

  // Saturn rings
  const ringCanvas = document.createElement("canvas");
  ringCanvas.width = 512; ringCanvas.height = 64;
  const ringCtx = ringCanvas.getContext("2d");
  for (let x = 0; x < 512; x++) {
    const t = x / 512;
    const opacity = t < 0.15 ? t / 0.15 : t > 0.85 ? (1 - t) / 0.15 : 0.6 + Math.sin(t * 40) * 0.15;
    ringCtx.fillStyle = `rgba(200,184,120,${opacity * 0.5})`;
    ringCtx.fillRect(x, 0, 1, 64);
  }
  const ringTex = new THREE.CanvasTexture(ringCanvas);
  const saturnRing = new THREE.Mesh(
    new THREE.RingGeometry(1.4, 2.4, 96),
    new THREE.MeshBasicMaterial({ map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
  );
  saturnRing.rotation.x = -Math.PI / 2 + 26.73 * DEG;
  bodyMeshes["saturn"].add(saturnRing);

  // Uranus rings (faint)
  const uranusRing = new THREE.Mesh(
    new THREE.RingGeometry(0.95, 1.15, 64),
    new THREE.MeshBasicMaterial({ color: 0x556688, side: THREE.DoubleSide, transparent: true, opacity: 0.15 })
  );
  uranusRing.rotation.x = -Math.PI / 2;
  bodyMeshes["uranus"].add(uranusRing);

  // Moons
  const moonGroup = new THREE.Group();
  const moonMeshes = {};
  MOONS.forEach(m => {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(m.radius, 12, 12),
      new THREE.MeshPhongMaterial({ color: m.color, shininess: 15 })
    );
    mesh.userData = { ...m };
    moonMeshes[m.id] = mesh;
    moonGroup.add(mesh);
  });
  scene.add(moonGroup);

  // Asteroid belt
  const beltGroup = new THREE.Group();
  (function () {
    const count = 5000, pos = new Float32Array(count * 3), cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = 2.0 + Math.random() * 1.3;
      const e = Math.random() * 0.2;
      const inc = (Math.random() - 0.5) * 25 * DEG;
      const th = Math.random() * Math.PI * 2;
      const Om = Math.random() * Math.PI * 2;
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(th));
      pos[i * 3] = r * Math.cos(th + Om) * AU;
      pos[i * 3 + 1] = r * Math.sin(inc) * Math.sin(th) * AU * 0.3;
      pos[i * 3 + 2] = r * Math.sin(th + Om) * AU;
      const c = 0.25 + Math.random() * 0.2;
      cols[i * 3] = c; cols[i * 3 + 1] = c * 0.95; cols[i * 3 + 2] = c * 0.85;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
    beltGroup.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true })));
    scene.add(beltGroup);
  })();

  // Kuiper belt
  const kuiperGroup = new THREE.Group();
  (function () {
    const count = 6000, pos = new Float32Array(count * 3), cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = 30 + Math.random() * 25;
      const e = Math.random() * 0.3;
      const inc = (Math.random() - 0.5) * 30 * DEG;
      const th = Math.random() * Math.PI * 2;
      const Om = Math.random() * Math.PI * 2;
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(th));
      pos[i * 3] = r * Math.cos(th + Om) * AU;
      pos[i * 3 + 1] = r * Math.sin(inc) * Math.sin(th) * AU * 0.25;
      pos[i * 3 + 2] = r * Math.sin(th + Om) * AU;
      const c = 0.15 + Math.random() * 0.15;
      cols[i * 3] = c * 0.8; cols[i * 3 + 1] = c * 0.85; cols[i * 3 + 2] = c;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
    kuiperGroup.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.3, vertexColors: true, transparent: true, opacity: 0.4, sizeAttenuation: true })));
    scene.add(kuiperGroup);
  })();

  // Magnetic field visualization
  let magFieldGroup = null;

  function createMagField(bodyId) {
    const mesh = bodyMeshes[bodyId] || (bodyId === "sun" ? sunMesh : null);
    if (!mesh) return;

    magFieldGroup = new THREE.Group();
    const bodyRadius = bodyId === "sun" ? 2.0 : (BODIES.find(b => b.id === bodyId)?.radius || 0.5);
    const fieldScale = bodyId === "sun" ? 4.0 : bodyId === "jupiter" ? 5.0 : bodyId === "saturn" ? 4.0 : bodyId === "ganymede" ? 2.0 : 3.0;
    const extent = bodyRadius * fieldScale;

    const lineCount = 16;
    const fieldColor = bodyId === "jupiter" ? 0x8888ff : bodyId === "saturn" ? 0xaaaa55 : bodyId === "uranus" ? 0x55dddd : bodyId === "neptune" ? 0x5555ff : bodyId === "sun" ? 0xffaa44 : 0x4488ff;

    for (let i = 0; i < lineCount; i++) {
      const phi = (i / lineCount) * Math.PI * 2;
      const startRadius = bodyRadius * 0.35;
      const pts = [];
      const steps = 80;

      for (let t = 0; t <= steps; t++) {
        const frac = t / steps;
        const theta = frac * Math.PI;
        const r = extent * Math.sin(theta) * Math.sin(theta) + bodyRadius * 0.3;
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.cos(theta);
        const z = r * Math.sin(theta) * Math.sin(phi);
        pts.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(pts);
      const curvePoints = curve.getPoints(60);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: fieldColor,
        transparent: true,
        opacity: 0.35 + Math.random() * 0.15,
        linewidth: 1
      });
      magFieldGroup.add(new THREE.Line(lineGeo, lineMat));
    }

    const particleCount = 300;
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI;
      const phi = Math.random() * Math.PI * 2;
      const r = bodyRadius + Math.random() * extent * 0.8;
      const sinT2 = Math.sin(theta) * Math.sin(theta);
      const rField = (extent * sinT2 + bodyRadius * 0.3) * (0.7 + Math.random() * 0.6);
      particlePos[i * 3] = rField * Math.sin(theta) * Math.cos(phi);
      particlePos[i * 3 + 1] = rField * Math.cos(theta);
      particlePos[i * 3 + 2] = rField * Math.sin(theta) * Math.sin(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    magFieldGroup.add(new THREE.Points(particleGeo, new THREE.PointsMaterial({
      color: fieldColor, size: 0.15, transparent: true, opacity: 0.4, sizeAttenuation: true, blending: THREE.AdditiveBlending
    })));

    mesh.add(magFieldGroup);
  }

  function removeMagField() {
    if (magFieldGroup && magFieldGroup.parent) {
      magFieldGroup.parent.remove(magFieldGroup);
      magFieldGroup.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    magFieldGroup = null;
  }

  // Raycaster
  const raycaster = new THREE.Raycaster();
  raycaster.params.Points = { threshold: 2 };
  const mouse = new THREE.Vector2();

  renderer.domElement.addEventListener("click", event => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const allMeshes = [...Object.values(bodyMeshes), ...Object.values(moonMeshes)];
    const intersects = raycaster.intersectObjects(allMeshes, false);
    const sunIntersects = raycaster.intersectObject(sunMesh, false);

    if (sunIntersects.length > 0 && (intersects.length === 0 || sunIntersects[0].distance < intersects[0].distance)) {
      showInfo("sun");
      selectedBody = "sun";
      return;
    }
    if (intersects.length > 0) {
      const body = intersects[0].object.userData;
      if (body && body.id) {
        showInfo(body.id);
        followBody = body.id;
      }
    }
  });

  window._solarSystem = {
    sunGroup, beltGroup, kuiperGroup, moonGroup, categoryGroups, bodyMeshes, moonMeshes,
    showMagField: createMagField,
    removeMagField: removeMagField
  };

  function updatePositions() {
    const days = (simTime - J2000_MS) / DAY_MS;
    BODIES.forEach(b => {
      const M = getMeanAnomaly(b, days);
      const p = orbitalPos(b.a, b.e, b.i, b.omega, b.Omega, M);
      const mesh = bodyMeshes[b.id];
      if (mesh) {
        mesh.position.set(p.x * AU, p.y * AU, p.z * AU);
        mesh.userData.currentDist = p.r;
        if (b.rotPeriod) {
          const rotSpeed = (2 * Math.PI) / (Math.abs(b.rotPeriod) * DAY_MS);
          mesh.rotation.y = (simTime * rotSpeed) % (2 * Math.PI) * (b.rotPeriod < 0 ? -1 : 1);
        }
      }
    });

    MOONS.forEach(m => {
      const parentMesh = bodyMeshes[m.parent];
      if (!parentMesh || !moonMeshes[m.id]) return;
      const moonAngle = ((simTime / DAY_MS) / m.period) * 2 * Math.PI;
      const dist = m.dist * AU;
      const moonX = parentMesh.position.x + dist * Math.cos(moonAngle);
      const moonY = parentMesh.position.y + dist * Math.sin(m.i * DEG) * Math.sin(moonAngle);
      const moonZ = parentMesh.position.z + dist * Math.sin(moonAngle);
      moonMeshes[m.id].position.set(moonX, moonY, moonZ);
    });
  }

  let lastTime = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    if (isRunning) {
      simTime += dt * timeSpeed * DAY_MS;
      updatePositions();
      updateDateTime();
    }

    if (followBody) {
      let targetPos = null;
      if (followBody === "sun") {
        targetPos = new THREE.Vector3(0, 0, 0);
      } else if (bodyMeshes[followBody]) {
        targetPos = bodyMeshes[followBody].position.clone();
      } else if (moonMeshes[followBody]) {
        targetPos = moonMeshes[followBody].position.clone();
      }
      if (targetPos) controls.target.lerp(targetPos, 0.05);
    }

    if (magFieldGroup) {
      magFieldGroup.rotation.y += dt * 0.3;
    }

    sunMesh.rotation.y += dt * 0.08;
    controls.update();
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  updatePositions();
  requestAnimationFrame(animate);
}

init3D().catch(err => {
  console.warn("3D rendering unavailable:", err.message);
  document.getElementById("canvas-container").innerHTML = '<div style="position:absolute;top:50%;left:55%;transform:translate(-50%,-50%);color:#3a5878;font-size:14px;text-align:center;max-width:400px;">WebGL is required for 3D rendering.<br>Please use a modern browser with hardware acceleration enabled.</div>';
});
