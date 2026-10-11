import { createContext, useContext, useEffect, useState, type Context, type ReactNode } from 'react'
import igGrid from './imports/Screenshot_2026-10-05_231343.png'
import logo from './imports/623959740_17842566177686511_6336884742571772822_n.jpg'

export type Lang = 'mr' | 'en'
export type L = { mr: string; en: string }
const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`

export const IMG = {
  hero: u('1596040033229-a9821ebd058d', 2200),
  candleTable: u('1596040033229-a9821ebd058d'),
  candleClose: u('1604908176997-125f25cc6f3d'),
  candleTea: u('1601050690597-df0568f70950'),
  candleMany: u('1615485290382-441e4d049cb5', 2000),
  candleLit: u('1599909533609-3ab7e4e8b591'),
  diffuser: u('1603894584373-5ac82b2ae398'), shelf: u('1604908176997-125f25cc6f3d'),
  vase: u('1596040033229-a9821ebd058d'), soap: u('1601050690597-df0568f70950'),
  soapSink: u('1601050690117-94f5f6fa8bd7'), bath: u('1601050690597-df0568f70950'),
  vanity: u('1596040033229-a9821ebd058d'), spray: u('1604908176997-125f25cc6f3d'),
  bottle: u('1615485290382-441e4d049cb5'), living: u('1596040033229-a9821ebd058d',2200),
  sofa: u('1601050690117-94f5f6fa8bd7',2000), chest: u('1604908176997-125f25cc6f3d'),
  fire: u('1615485290382-441e4d049cb5',2000), igGrid: u('1596040033229-a9821ebd058d',1400), logo: '',
}
export type Fragrance = { id: string; name: L; notes: L; desc: L; bg: string; ink: string; accent: string; img: string }
export const FRAGRANCES: Fragrance[] = [
 {id:'goda',name:{pt:'गोडा मसाला',en:'Goda Masala'},notes:{pt:'धने · जिरे · खोबरे · पारंपरिक चव',en:'Coriander · cumin · coconut · traditional flavour'},desc:{pt:'महाराष्ट्रीयन पदार्थांना खास सुगंध आणि चव देणारा पारंपरिक मसाला.',en:'A traditional Maharashtrian blend for everyday cooking.'},bg:'#F5E8CF',ink:'#3A241A',accent:'#9A4B27',img:IMG.candleTable},
 {id:'kala',name:{pt:'काळा मसाला',en:'Kala Masala'},notes:{pt:'भाजलेले मसाले · अस्सल महाराष्ट्रीयन चव',en:'Roasted spices · authentic Maharashtrian flavour'},desc:{pt:'भाजी, उसळ आणि आमटीसाठी रुचकर काळा मसाला.',en:'A roasted spice blend for vegetables, curries and usal.'},bg:'#E8D5BD',ink:'#34241D',accent:'#75432E',img:IMG.candleLit},
 {id:'kanda-lasun',name:{pt:'कांदा-लसूण मसाला',en:'Onion-Garlic Masala'},notes:{pt:'कांदा · लसूण · तिखट मसाले',en:'Onion · garlic · warming spices'},desc:{pt:'दैनंदिन स्वयंपाकाला झणझणीत चव देणारे मिश्रण.',en:'A savoury blend for everyday cooking.'},bg:'#F3D8C8',ink:'#3A241A',accent:'#A7432B',img:IMG.candleClose},
 {id:'tikhat',name:{pt:'लाल मिरची पावडर',en:'Red Chilli Powder'},notes:{pt:'रंग · तिखटपणा · सुगंध',en:'Colour · heat · aroma'},desc:{pt:'आवडीनुसार तिखटपणा आणण्यासाठी निवडक मिरची पूड.',en:'Chilli powder for colour, aroma and heat.'},bg:'#F4D3C8',ink:'#421C19',accent:'#B83227',img:IMG.candleMany},
 {id:'halad',name:{pt:'हळद पावडर',en:'Turmeric Powder'},notes:{pt:'मातीचा सुगंध · उबदार रंग',en:'Earthy aroma · warm colour'},desc:{pt:'दररोजच्या स्वयंपाकासाठी हळदीची पूड.',en:'Turmeric powder for everyday cooking.'},bg:'#F7E7B4',ink:'#45321A',accent:'#CA9219',img:IMG.vase},
]
export type Category = 'masale'|'powders'|'chutneys'|'papad'|'pickles'|'dry-fruits'|'snacks'
export type CategoryItem = {id:Category;name:L}
export const CATEGORIES:CategoryItem[] = [
 {id:'masale',name:{pt:'मसाले',en:'Masala Blends'}},{id:'powders',name:{pt:'पावडर',en:'Spice Powders'}},{id:'chutneys',name:{pt:'चटण्या',en:'Chutneys'}},{id:'papad',name:{pt:'पापड व कुरडई',en:'Papad & Kurdai'}},{id:'pickles',name:{pt:'लोणची',en:'Pickles'}},{id:'dry-fruits',name:{pt:'सुका मेवा',en:'Dry Fruits'}},{id:'snacks',name:{pt:'फराळाचे पदार्थ',en:'Traditional Snacks'}}
]
export type Product = {id:string;sku:string;name:L;cat:Category;frag:string;size:string;price:number;promo?:number;desc:L;imgs:string[];stock:boolean;published:boolean;featured:boolean}
export const PRODUCTS:Product[] = [
 {id:'kala-masala',sku:'MM-MAS-001',name:{pt:'काळा मसाला',en:'Kala Masala'},cat:'masale',frag:'kala',size:'250 g',price:180,desc:{pt:'भाजलेल्या मसाल्यांचा अस्सल महाराष्ट्रीयन स्वाद. भाजी, उसळ आणि आमटीसाठी उत्तम.',en:'An authentic Maharashtrian spice blend for curries, vegetables and usal.'},imgs:[IMG.candleLit,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:true},
 {id:'goda-masala',sku:'MM-MAS-002',name:{pt:'गोडा मसाला',en:'Goda Masala'},cat:'masale',frag:'goda',size:'250 g',price:170,desc:{pt:'वरण, आमटी, उसळ आणि भाजीला खास घरगुती चव देणारा गोडा मसाला.',en:'A classic Maharashtrian blend for dal, amti, usal and vegetables.'},imgs:[IMG.candleTable,IMG.candleMany,IMG.candleLit],stock:true,published:true,featured:true},
 {id:'kanda-lasun-masala',sku:'MM-MAS-003',name:{pt:'कांदा-लसूण मसाला',en:'Onion-Garlic Masala'},cat:'masale',frag:'kanda-lasun',size:'250 g',price:160,desc:{pt:'मसालेदार भाज्या आणि रस्सेदार पदार्थांसाठी कांदा-लसूण मसाला.',en:'A bold onion-garlic blend for spicy vegetables and curries.'},imgs:[IMG.candleMany,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'red-chilli-powder',sku:'MM-PWD-001',name:{pt:'लाल मिरची पावडर',en:'Red Chilli Powder'},cat:'powders',frag:'tikhat',size:'250 g',price:120,desc:{pt:'निवडक मिरच्यांपासून तयार केलेली तिखट पूड.',en:'Red chilli powder for colour, aroma and heat.'},imgs:[IMG.candleMany,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'turmeric-powder',sku:'MM-PWD-002',name:{pt:'हळद पावडर',en:'Turmeric Powder'},cat:'powders',frag:'halad',size:'250 g',price:95,desc:{pt:'दैनंदिन स्वयंपाकासाठी हळदीची पूड.',en:'Turmeric powder for daily cooking.'},imgs:[IMG.vase,IMG.candleTable,IMG.candleLit],stock:true,published:true,featured:false},
 {id:'javas-chutney',sku:'MM-CHT-001',name:{pt:'जवस चटणी',en:'Flaxseed Chutney'},cat:'chutneys',frag:'kala',size:'200 g',price:110,desc:{pt:'भाकरी, पोळी आणि वरण-भातासोबत छान लागणारी जवस चटणी.',en:'Traditional flaxseed chutney for bhakri, chapati and rice.'},imgs:[IMG.candleLit,IMG.candleMany,IMG.candleTable],stock:true,published:true,featured:false},
 {id:'papad',sku:'MM-PAP-001',name:{pt:'घरगुती पापड',en:'Homemade Papad'},cat:'papad',frag:'goda',size:'200 g',price:90,desc:{pt:'जेवणासोबत खमंग पापड.',en:'Crisp traditional papad for everyday meals.'},imgs:[IMG.soap,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:false},
 {id:'mango-pickle',sku:'MM-PKL-001',name:{pt:'आंब्याचे लोणचे',en:'Mango Pickle'},cat:'pickles',frag:'kanda-lasun',size:'500 g',price:180,desc:{pt:'मसाल्यांच्या स्वादाने भरलेले आंब्याचे लोणचे.',en:'Traditional mango pickle with a bold spice mix.'},imgs:[IMG.bath,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'dry-fruits-mix',sku:'MM-DRY-001',name:{pt:'सुका मेवा मिक्स',en:'Mixed Dry Fruits'},cat:'dry-fruits',frag:'goda',size:'250 g',price:320,desc:{pt:'खमंग खाण्यासाठी सुका मेवा मिक्स.',en:'A mixed dry-fruit selection for snacking and gifting.'},imgs:[IMG.vase,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:false},
 {id:'chakli',sku:'MM-SNK-001',name:{pt:'घरगुती चकली',en:'Homemade Chakli'},cat:'snacks',frag:'kala',size:'250 g',price:140,desc:{pt:'चहासोबत किंवा सणासुदीला खाण्यासाठी खुसखुशीत चकली.',en:'Crispy traditional chakli for tea-time and festive occasions.'},imgs:[IMG.soap,IMG.candleMany,IMG.candleTable],stock:true,published:true,featured:false},
]
export type Review = {id:string;name:string;rating:number;date:string;product:string;text:L;photo?:string;approved:boolean;featured:boolean}
export const REVIEWS:Review[] = [
 {id:'r1',name:'ग्राहक',rating:5,date:'2026-09-12',product:'kala-masala',text:{pt:'मसाल्याची चव छान आहे आणि पदार्थांना घरगुती स्वाद मिळतो.',en:'The masala tastes great and adds a homemade flavour to meals.'},photo:IMG.candleTable,approved:true,featured:true},
 {id:'r2',name:'ग्राहक',rating:5,date:'2026-08-28',product:'goda-masala',text:{pt:'गोडा मसाला आमटी आणि भाजीसाठी खूप छान आहे.',en:'Goda masala works beautifully in amti and vegetables.'},photo:IMG.candleTable,approved:true,featured:true},
 {id:'r3',name:'ग्राहक',rating:5,date:'2026-08-10',product:'mango-pickle',text:{pt:'लोणच्याचा मसाला खमंग आहे.',en:'The pickle has a fragrant, balanced spice mix.'},photo:IMG.bath,approved:true,featured:true},
]
export type Post = {id:string;type:'post'|'reel';title:string;col:number;row:number;url:string;featured:boolean}
export const POSTS:Post[] = [
 [0,0,'post','घरगुती मसाले'],[3,0,'reel','ताज्या मसाल्यांचा सुगंध'],[5,0,'post','महाराष्ट्रीयन चव'],[1,1,'reel','घरगुती पदार्थ'],[2,1,'post','मसाल्यांची तयारी'],[3,1,'post','पापड आणि लोणची'],[4,1,'post','पारंपरिक चव'],[0,2,'reel','फराळ स्पेशल'],[1,2,'post','घरचा स्वाद'],[4,2,'post','सणासुदीचे पदार्थ']
].map(([c,r,t,title],i)=>({id:'post'+i,col:c as number,row:r as number,type:t as 'post'|'reel',title:title as string,url:'https://wa.me/919004859475',featured:i<8}))
export type NavItem = {id:string;label:L;url:string;order:number;visible:boolean;external:boolean}
export const NAV:NavItem[] = [
{id:'n1',label:{pt:'मुख्यपृष्ठ',en:'Home'},url:'/',order:1,visible:true,external:false},{id:'n2',label:{pt:'उत्पादने',en:'Products'},url:'/produtos',order:2,visible:true,external:false},{id:'n3',label:{pt:'आमच्याबद्दल',en:'Our Story'},url:'/sobre',order:3,visible:true,external:false},{id:'n4',label:{pt:'अभिप्राय',en:'Reviews'},url:'/avaliacoes',order:4,visible:true,external:false},{id:'n5',label:{pt:'संपर्क',en:'Contact'},url:'/contato',order:5,visible:true,external:false}
]
export const SETTINGS = {brand:'Marathi Masale',whatsapp:'919004859475',phone:'+91 90048 59475',email:'',address:'महाराष्ट्र, भारत · Maharashtra, India',instagram:'',facebook:'',mapUrl:'',hours:{pt:'सोमवार ते शनिवार · सकाळी ९ ते संध्याकाळी ६',en:'Monday to Saturday · 9 AM to 6 PM'} as L,currency:'INR',defaultLang:'mr' as Lang}
export const SECTIONS = [{id:'hero',label:'Hero',on:true},{id:'story',label:'Our Story',on:true},{id:'collection',label:'Featured Products',on:true},{id:'fragrances',label:'Masala Collections',on:true},{id:'why',label:'Why Marathi Masale',on:true},{id:'lifestyle',label:'Food Story',on:true},{id:'reviews',label:'Customer Reviews',on:true},{id:'instagram',label:'From Our Kitchen',on:false},{id:'cta',label:'CTA',on:true}]
export type CustomerDetails = {name:string;phone:string;cep:string;street:string;number:string;comp:string;district:string;city:string;state:string;notes:string;email:string}
export type OrderLead = {id:string;customer:CustomerDetails;items:{id:string;name:string;qty:number;price:number}[];total:number;date:string;status:'Novo'|'Confirmado'|'Enviado'|'Entregue'}
export type Store = {
  lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; tr: (l: L) => string
  dict: typeof T; setDict: (d: typeof T) => void
  products: Product[]; setProducts: (p: Product[]) => void
  reviews: Review[]; setReviews: (r: Review[]) => void
  posts: Post[]; setPosts: (p: Post[]) => void
  nav: NavItem[]; setNav: (n: NavItem[]) => void
  settings: typeof SETTINGS; setSettings: (s: typeof SETTINGS) => void
  sections: typeof SECTIONS; setSections: (s: typeof SECTIONS) => void
  fragrances: Fragrance[]; setFragrances: (f: Fragrance[]) => void
  categories: CategoryItem[]; setCategories: (c: CategoryItem[]) => void
  assets: typeof IMG; setAssets: (a: typeof IMG) => void
  leads: OrderLead[]; setLeads: (l: OrderLead[]) => void; addLead: (l: OrderLead) => void
}
const Ctx = createContext<Store | null>(null)
export const useCMS = () => {
  const store = useContext(Ctx)
  if (!store) throw new Error('useCMS must be used inside CMSProvider')
  return store
}

type PersistedCMS = {
  dict: typeof T; products: Product[]; reviews: Review[]; posts: Post[]; nav: NavItem[]
  settings: typeof SETTINGS; sections: typeof SECTIONS; fragrances: Fragrance[]
  categories: CategoryItem[]; assets: typeof IMG; leads: OrderLead[]
}
const STORAGE_KEY = 'marathi-masale-cms-v1'
const loadCMS = (): Partial<PersistedCMS> => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  catch { return {} }
}

export function CMSProvider({ children }: { children: ReactNode }) {
  const [saved] = useState(loadCMS)
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('mm-lang') as Lang) || saved.settings?.defaultLang || 'mr')
  const [dict, setDict] = useState(() => ({ ...T, ...saved.dict }))
  const [products, setProducts] = useState(() => saved.products || PRODUCTS)
  const [reviews, setReviews] = useState(() => saved.reviews || REVIEWS)
  const [posts, setPosts] = useState(() => saved.posts || POSTS)
  const [nav, setNav] = useState(() => saved.nav || NAV)
  const [settings, setSettings] = useState(() => ({ ...SETTINGS, ...saved.settings }))
  const [sections, setSections] = useState(() => saved.sections || SECTIONS)
  const [fragrances, setFragrances] = useState(() => saved.fragrances || FRAGRANCES)
  const [categories, setCategories] = useState(() => saved.categories || CATEGORIES)
  const [assets, setAssets] = useState(() => ({ ...IMG, ...saved.assets }))
  const [leads, setLeads] = useState<OrderLead[]>(() => saved.leads || [])
  useEffect(() => {
    const index = lang === 'mr' ? 0 : 1
    const title = dict['seo.home']?.[index] || 'मराठी मसाले — घरगुती महाराष्ट्रीयन मसाले'
    const description = dict['hero.sub']?.[index] || 'Authentic Maharashtrian masalas, pickles and homemade foods.'
    document.documentElement.lang = lang === 'mr' ? 'mr-IN' : 'en'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    // Client-side title updates help browser tabs and crawlers that execute JS.
    // WhatsApp also requires the static fallback tags in index.html (and the
    // route-specific crawler response for per-product previews).
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [lang, dict])
  useEffect(() => { localStorage.setItem('mm-lang', lang) }, [lang])
  useEffect(() => {
    const data: PersistedCMS = { dict, products, reviews, posts, nav, settings, sections, fragrances, categories, assets, leads }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [dict, products, reviews, posts, nav, settings, sections, fragrances, categories, assets, leads])
  const i = lang === 'mr' ? 0 : 1
  const t = (k: string) => dict[k]?.[i] ?? k
  const tr = (l: L) => l[lang]
  const addLead = (lead: OrderLead) => setLeads((current) => [lead, ...current])
  return <Ctx.Provider value={{ lang, setLang, t, tr, dict, setDict, products, setProducts, reviews, setReviews, posts, setPosts, nav, setNav, settings, setSettings, sections, setSections, fragrances, setFragrances, categories, setCategories, assets, setAssets, leads, setLeads, addLead }}>{children}</Ctx.Provider>
}

export const brl = (n: number) => n.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 })
