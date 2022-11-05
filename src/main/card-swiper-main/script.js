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
      JobDescription: [
        'Strong sense of Responsibility', 
        'Proficient with Excel',
        'Performs general custodial duties',
        'Policing Grounds as Needed'
      ],
      PayRate: '14-16/hr',
      Hours:'40',
      id: 123,
     
    

  },

  {
    JobTitle: 'Janitor',
      JobDescription: ['Manage Time Well', 
      'Able to lift 25lbs', 
      'Proficient with House Cleaning Tools',
      'Follows instructions from head janitor',
      'Takes out the trash and recycling',
      'Basic Maintenance and Repairs'],

      PayRate: '12-16/hr',
      Hours:'30',
      id: 124,
    },
    
    {
      JobTitle: 'Hotel Front Desk',
      JobDescription: [
        'Strong sense of Responsibility', 
      'Proficient with Excel',
      'Comfortable with Assisting People',
      'Able to work with Computer Programs',
      'Basic Maths for Billing Guests'],
      PayRate: '15-16/hr',
      Hours:'20',
      id: 125,

  },

  {
    JobTitle: 'Mall Security Guard',
    JobDescription: ['Patrol the mall to act as a deterrent',
     'Perform crowd control duties',
     'Verbally Capable with answering questions',
     'Communicate with local law as necessary'],
    PayRate: '13-16/hr',
    Hours:'20',
    id: 126,

},

{
  JobTitle: 'Entry-Level Electrician',
  JobDescription: ['Strong sense of Responsibility', 'Certified in related fields',
    'Install, repair and maintain electicals','Follows instructions of senior electrician',
    'Ensures equipment meet safety codes'],
  PayRate: '17-20/hr',
  Hours:'15',
  id: 127,

},




];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    dataObj: TEST_DATA[cardCount % 5],
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
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

