// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://source.unsplash.com/random/1000x1000/?sky',
  'https://source.unsplash.com/random/1000x1000/?landscape',
  'https://source.unsplash.com/random/1000x1000/?ocean',
  'https://source.unsplash.com/random/1000x1000/?moutain',
  'https://source.unsplash.com/random/1000x1000/?forest'
];

const TEST_DATA = [
  {
      JobTitle: 'Library Custodian',
      Company: 'Smith Library',
      JobDescription: [
        'Strong sense of Responsibility', 
        'Proficient with Excel',
        'Perform general custodial duties',
        'Police Grounds as Needed',
        'Reshelve books and Media Objects',
        'Keep Space Organized and Clean'
      ],
      PayRate: '14-16/hr',
      Hours:'40',
      Location:'Greensboro,NC',
      id: 123,
     
    

  },

  {
    JobTitle: 'Janitor',
      Company:'Lance Corp',
      JobDescription: ['Manage Time Well', 
      'Able to lift 25lbs', 
      'Proficient with House Cleaning Tools',
      'Follows instructions from head janitor',
      'Takes out the trash and recycling',
      'Basic Maintenance and Repairs'],

      PayRate: '12-16/hr',
      Hours:'30',
      Location:'Cary,NC',
      id: 124,
    },
    
    {
      JobTitle: 'Hotel Front Desk',
      Company: 'Red Roof Inn',
      JobDescription: [
        'Strong sense of Responsibility', 
      'Proficient with Excel',
      'Comfortable with Assisting People',
      'Able to work with Computer Programs',
      'Basic Maths for Billing Guests'],
      PayRate: '15-16/hr',
      Hours:'20',
      Location:'Asheville,NC',
      id: 125,

  },

  {
    JobTitle: 'Mall Security Guard',
    Company:'NordStrom',
    JobDescription: ['Patrol the mall to act as a deterrent',
     'Perform crowd control duties',
     'Verbally Capable with answering questions',
     'Communicate with local law as necessary',
     'Great Sense of Time and Ethics'],
    PayRate: '13-16/hr',
    Hours:'20',
    Location:'Durham,NC',
    id: 126,

},

{
  JobTitle: 'Entry-Level Electrician',
  Company:'Gatlinburg Municipal',
  JobDescription: ['Strong sense of Responsibility', 'Certified in related fields',
    'Install, repair and maintain electicals','Follows instructions of senior electrician',
    'Ensures equipment meet safety codes'],
  PayRate: '17-20/hr',
  Hours:'15',
  Location:'Gatlinburg,TN',
  id: 127,

},

{
  JobTitle: 'Self Storage Manager',
  Company:'StoreSmart',
  JobDescription: ['Able to frequently lift, bend, twist',
  'Proficient with Computers and Smart Phones', 'Able to work on call',
  'Strong Communication Skills', 'Experienced in Customer Services'],
  
  PayRate: '16/hr',
  Hours:'40',
  Location:'Wilkesboro,NC',
  id: 128,

},

{
  JobTitle: 'Parking Ambassador',
  Company:'UNC-Chapel Hill',
  JobDescription: [
    'Customer service savvy',
    'Able to follow directions',
    'Excellent Communication skills',
    'Able to stand for long periods of time',
    'Willing to work in weatherous conditions'],
  PayRate: '15/hr',
  Hours:'10',
  Location:'Chapel Hill,NC',
  id: 129,

},

{
  JobTitle: 'Data Entry Clerk',
  Company:'Municipal Services',
  JobDescription: [
    'Able to type at least 50 wpm',
    'Proficient with Microsoft Products',
    'Great Transcribing Skills',
    'Able to work independently',
    'Great Communication skills'],
  PayRate: '18/hr',
  Hours:'40',
  Location:'Raleigh,NC',
  id: 130,

},

{
  JobTitle: 'Parks Coordinator',
  Company:'Orange County',
  JobDescription: [
    'Thorough knowledge of Sports Fields',
    'Thorough knowledge of parks',
    'General knowledge of plant and animal life',
    'Able to perform general maintenance',
    'Able to communicate orally'],
  PayRate: '15/hr',
  Hours:'35',
  Location:'Hillsborough,NC',
  id: 131,

},

{
  JobTitle: 'Park Assistant Manager',
  Company:'Asotea ThemePark',
  JobDescription: [
    'Experience in hospitality',
    'Background Check Required',
    'Able to work during weekend',
    'Professional, motivated and energetic',
    'Able to communicate orally'],
  PayRate: '19/hr',
  Hours:'40',
  Location:'Morrisville,NC',
  id: 132,

},

{
  JobTitle: 'Cashier',
  Company:'Walmart',
  JobDescription: [
    'Smile, greet customers positively',
    'Keep Clean and Organized',
    'Great Verbal Skills and Experience',
    'Able to stand for long periods',
    'Retain a positive attitude'],
  PayRate: '15/hr',
  Hours:'40',
  Location:'Raleigh,NC',
  id: 133,

},






];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    dataObj: TEST_DATA[cardCount % TEST_DATA.length],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
  
}

// first 5 cards
for (let i = 0; i < TEST_DATA.length+1; i++) {
  appendNewCard();
}

