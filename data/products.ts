export type Category = 'Sandwiches' | 'Salads & Bowls' | 'Smoothies & Juices' | 'Desserts';
export type Product = { id:string; name:string; category:Category; note:string; emoji:string; ingredients?:string; price?:number; };
// Demo product listing. Names reflect known brand items. Prices and detailed nutrition deliberately omitted until verified.
export const products: Product[] = [
  {id:'chicken-energy',name:'Chicken Energy Sandwich',category:'Sandwiches',note:'Signature favorite',emoji:'🥪'},
  {id:'chicken-mediterranean',name:'Chicken Mediterranean',category:'Sandwiches',note:'Mediterranean-inspired',emoji:'🥙',ingredients:'Chicken breast, basil pesto, arugula, sun-dried tomato, mozzarella, house hummus, dill'},
  {id:'falafel-kick',name:'Falafel Kick',category:'Sandwiches',note:'Plant-forward',emoji:'🧆'},
  {id:'smoked-salmon',name:'Smoked Salmon Sandwich',category:'Sandwiches',note:'Fresh & balanced',emoji:'🥯'},
  {id:'omega-bowl',name:'Omega Bowl',category:'Salads & Bowls',note:'Colorful everyday fuel',emoji:'🥗'},
  {id:'superior-salmon',name:'Superior Salmon Salad',category:'Salads & Bowls',note:'Signature salad',emoji:'🥬'},
  {id:'berries-fantasy',name:'Berries Fantasy',category:'Smoothies & Juices',note:'Berry smoothie',emoji:'🫐'},
  {id:'earth-juice',name:'Earth Juice',category:'Smoothies & Juices',note:'Fresh juice',emoji:'🥤'},
  {id:'banoffee',name:'Vegan Banoffee Cake',category:'Desserts',note:'Plant-based treat',emoji:'🍰'},
  {id:'apple-pie',name:'Vegan Apple Pie',category:'Desserts',note:'Comforting classic',emoji:'🥧'},
];
export const categories = ['All','Sandwiches','Salads & Bowls','Smoothies & Juices','Desserts'] as const;
