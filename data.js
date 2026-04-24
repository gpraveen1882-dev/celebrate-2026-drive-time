// Celebrate 2026 · Drive Time — Guest Data
// Update episode_url and soundbite_url as episodes go live
// Add headshot filenames to assets/headshots/ (e.g. "victor-hill.jpg")

const SHOW = {
  title: "Celebrate 2026",
  series: "Drive Time",
  tagline: "Peer-nominated. Peer-interviewed. No scripts—just real stories.",
  description: "UCLA Anderson's EMBA & FEMBA Class of 2026",
  season: 1
};

const HOSTS = [
  { id: "alexa-tralla",     name: "Alexa Tralla",     program: "EMBA",  year: "2026", headshot: "" },
  { id: "salo-steinvortz",  name: "Salo Steinvortz",  program: "FEMBA", year: "2026", headshot: "" },
  { id: "becky-wai-host",   name: "Becky Wai",        program: "EMBA",  year: "2026", headshot: "" },
  { id: "praveen-gangaraju",name: "Praveen Gangaraju", program: "EMBA",  year: "2026", headshot: "" },
  { id: "erin-hiley-host",  name: "Erin Hiley",       program: "EMBA",  year: "2026", headshot: "" },
  { id: "dylan-stafford",   name: "Dylan Stafford",   program: "FEMBA", year: "",     headshot: "" }
];

const GUESTS = [
  {
    id: "victor-hill", ep: 109, week: 1, release: "April 2",
    name: "Victor Hill", title: "Managing Partner", company: "The Eighty-Three K Group",
    program: "EMBA", year: 2026, host: "Alexa Tralla", status: "released",
    linkedin: "https://www.linkedin.com/in/victorahill/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "jon-muth", ep: 110, week: 1, release: "April 2",
    name: "Jon Muth", title: "Founder & CEO", company: "Unbound Brews",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "released",
    linkedin: "https://www.linkedin.com/in/jon-muth/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "jonathan-liu", ep: 111, week: 2, release: "April 9",
    name: "Jonathan Liu", title: "Physician Exec & Investor", company: "Bright Beyond Ventures",
    program: "EMBA", year: 2026, host: "Becky Wai", status: "released",
    linkedin: "https://www.linkedin.com/in/jonathan-liu-md/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "barbara-alves", ep: 112, week: 2, release: "April 9",
    name: "Barbara Alves", title: "Senior Manager", company: "United States Olympic and Paralympic Properties",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "released",
    linkedin: "https://www.linkedin.com/in/barbara-ralves/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "perry-poussard", ep: 113, week: 2, release: "April 9",
    name: "Perry Poussard", title: "Board Member", company: "Tenacity Artistic Productions Ltd.",
    program: "FEMBA", year: 2021, host: "Dylan Stafford", status: "released",
    linkedin: "https://www.linkedin.com/in/perrypoussardjr/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "vishnu-marisa", ep: 114, week: 3, release: "April 16",
    name: "Vishnu Singh & Marisa Lue", title: "Associate Counsel / Staff Program Manager",
    company: "Access-Information Management / Illumina",
    program: "EMBA", year: 2026, host: "Praveen Gangaraju", status: "released",
    linkedin: "", episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [],
    duo: {
      g1: { name: "Vishnu Singh",  title: "Associate Counsel",      company: "Access-Information Management", linkedin: "https://www.linkedin.com/in/vishnugsingh/", headshot: "" },
      g2: { name: "Marisa Lue",    title: "Staff Program Manager",   company: "Illumina",                      linkedin: "https://www.linkedin.com/in/marisalue/",   headshot: "" }
    }
  },
  {
    id: "robert-morrison", ep: 115, week: 3, release: "April 16",
    name: "Robert Morrison", title: "Deputy Executive Director", company: "Housing Works",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "released",
    linkedin: "https://www.linkedin.com/in/robert-morrison-108218143/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "stephen-johnson", ep: 116, week: 3, release: "April 16",
    name: "Stephen Johnson", title: "Founder", company: "AptivPrep & Ymeon Capital",
    program: "FEMBA", year: 2021, host: "Dylan Stafford", status: "released",
    linkedin: "https://www.linkedin.com/in/stephenajohnson1/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "teresa-prindle", ep: 117, week: 4, release: "April 23",
    name: "Teresa Prindle", title: "Director", company: "LMW",
    program: "EMBA", year: 2026, host: "Erin Hiley", status: "released",
    linkedin: "https://www.linkedin.com/in/teresaprindle/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "logan-wood", ep: 118, week: 4, release: "April 23",
    name: "Logan Wood", title: "Senior Product Manager", company: "InMarket",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "released",
    linkedin: "https://www.linkedin.com/in/logan-john-wood/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "joel-rubin", ep: 119, week: 5, release: "April 30",
    name: "Joel Rubin", title: "VP of Content", company: "Lubetzky Family Foundation",
    program: "EMBA", year: 2026, host: "Alexa Tralla", status: "upcoming",
    linkedin: "https://www.linkedin.com/in/joel-rubin/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "frankie-coelho", ep: 120, week: 5, release: "April 30",
    name: "Frankie Coelho", title: "VP of Inclusive Excellence", company: "UCLA Anderson FEMBA",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "upcoming",
    linkedin: "https://www.linkedin.com/in/francescacoelho/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "erin-hiley", ep: 121, week: 6, release: "May 7",
    name: "Erin Hiley", title: "Chief Legal Officer", company: "American Specialty Health",
    program: "EMBA", year: 2026, host: "Praveen Gangaraju", status: "upcoming",
    linkedin: "https://www.linkedin.com/in/erin-l-hiley/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "alex-rayis", ep: 122, week: 6, release: "May 7",
    name: "Alex Rayis", title: "Sr. VDC Manager", company: "Gilbane Building Company",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "upcoming",
    linkedin: "https://www.linkedin.com/in/alexander-rayis/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "irma-trapero", ep: 123, week: 7, release: "May 14",
    name: "Irma Trapero", title: "CEO", company: "LatinoLEAD",
    program: "EMBA", year: 2026, host: "Alexa Tralla", status: "production",
    linkedin: "https://www.linkedin.com/in/irmamarqueztrapero/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "bill-auxier", ep: 124, week: 7, release: "May 14",
    name: "Bill Auxier", title: "President", company: "Sunset Spirits",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "production",
    linkedin: "https://www.linkedin.com/in/william-auxier/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "becky-wai", ep: null, week: 8, release: "May 28",
    name: "Becky Wai", title: "CSO", company: "VSee",
    program: "EMBA", year: 2026, host: "Praveen Gangaraju", status: "production",
    linkedin: "https://www.linkedin.com/in/beckywai/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "joshua-burrell", ep: null, week: 8, release: "May 21",
    name: "Joshua Burrell", title: "Senior Creative Account Lead", company: "The Walt Disney Studios",
    program: "EMBA", year: 2026, host: "Erin Hiley", status: "scheduled",
    linkedin: "https://www.linkedin.com/in/joshua-burrell-13616926/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "ishan-asokan", ep: null, week: null, release: "TBD",
    name: "Ishan Asokan", title: "Hospitalist", company: "Providence Health",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "production",
    linkedin: "https://www.linkedin.com/in/ishan-asokan-md-msc-b8280855/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "michelle-fan", ep: null, week: null, release: "TBD",
    name: "Michelle Fan", title: "Senior Engineer", company: "Gilead Sciences",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "production",
    linkedin: "https://www.linkedin.com/in/michelle-fan-0613/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "grady-smith", ep: null, week: null, release: "TBD",
    name: "Grady Smith", title: "Founder", company: "GrayShell Ventures LLC",
    program: "FEMBA", year: 2001, host: "Dylan Stafford", status: "production",
    linkedin: "https://www.linkedin.com/in/grady-m-smith-b775b/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "leah-torres", ep: null, week: null, release: "TBD",
    name: "Leah Torres", title: "", company: "",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "production",
    linkedin: "https://www.linkedin.com/in/leah-torres/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  },
  {
    id: "jordan-hutkin-schwartz", ep: null, week: null, release: "TBD",
    name: "Jordan Hutkin-Schwartz", title: "Associate Director", company: "UCLA Chancellor's Society",
    program: "FEMBA", year: 2026, host: "Salo Steinvortz", status: "scheduled",
    linkedin: "https://www.linkedin.com/in/jordan-hutkin-schwartz/",
    episode_url: "", soundbite_url: "", bio: "", headshot: "", adjectives: [], duo: null
  }
];
