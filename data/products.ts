export const categories = ["All","Sandwiches","Salads & Bowls","Smoothies & Juices","Desserts"] as const;
export type Product = {id:string;name:string;category:string;note:string;emoji:string};
export const products:Product[] = [
{id:"energy",name:"Chicken Energy Sandwich",category:"Sandwiches",note:"Signature favorite",emoji:"🥪"},
{id:"mediterranean",name:"Chicken Mediterranean",category:"Sandwiches",note:"Mediterranean-inspired",emoji:"🥙"},
{id:"falafel",name:"Falafel Kick",category:"Sandwiches",note:"Plant-forward",emoji:"🧆"},
{id:"salmon-sandwich",name:"Smoked Salmon Sandwich",category:"Sandwiches",note:"Fresh and balanced",emoji:"🥯"},
{id:"omega",name:"Omega Bowl",category:"Salads & Bowls",note:"Colorful everyday fuel",emoji:"🥗"},
{id:"salmon-salad",name:"Superior Salmon Salad",category:"Salads & Bowls",note:"Signature salad",emoji:"🥬"},
{id:"berries",name:"Berries Fantasy",category:"Smoothies & Juices",note:"Berry smoothie",emoji:"🫐"},
{id:"earth",name:"Earth Juice",category:"Smoothies & Juices",note:"Fresh juice",emoji:"🥤"},
{id:"banoffee",name:"Vegan Banoffee Cake",category:"Desserts",note:"Plant-based treat",emoji:"🍰"},
{id:"apple-pie",name:"Vegan Apple Pie",category:"Desserts",note:"Comforting classic",emoji:"🥧"}
];
