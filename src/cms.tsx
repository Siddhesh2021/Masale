import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'mr' | 'en'
export type L = { mr: string; en: string }
const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`

// Reset the UAT persistence namespace after the Marathi Masale rebrand.
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
 {id:'goda',name:{mr:'गोडा मसाला',en:'Goda Masala'},notes:{mr:'धने · जिरे · खोबरे · पारंपरिक चव',en:'Coriander · cumin · coconut · traditional flavour'},desc:{mr:'महाराष्ट्रीयन पदार्थांना खास सुगंध आणि चव देणारा पारंपरिक मसाला.',en:'A traditional Maharashtrian blend for everyday cooking.'},bg:'#F5E8CF',ink:'#3A241A',accent:'#9A4B27',img:IMG.candleTable},
 {id:'kala',name:{mr:'काळा मसाला',en:'Kala Masala'},notes:{mr:'भाजलेले मसाले · अस्सल महाराष्ट्रीयन चव',en:'Roasted spices · authentic Maharashtrian flavour'},desc:{mr:'भाजी, उसळ आणि आमटीसाठी रुचकर काळा मसाला.',en:'A roasted spice blend for vegetables, curries and usal.'},bg:'#E8D5BD',ink:'#34241D',accent:'#75432E',img:IMG.candleLit},
 {id:'kanda-lasun',name:{mr:'कांदा-लसूण मसाला',en:'Onion-Garlic Masala'},notes:{mr:'कांदा · लसूण · तिखट मसाले',en:'Onion · garlic · warming spices'},desc:{mr:'दैनंदिन स्वयंपाकाला झणझणीत चव देणारे मिश्रण.',en:'A savoury blend for everyday cooking.'},bg:'#F3D8C8',ink:'#3A241A',accent:'#A7432B',img:IMG.candleClose},
 {id:'tikhat',name:{mr:'लाल मिरची पावडर',en:'Red Chilli Powder'},notes:{mr:'रंग · तिखटपणा · सुगंध',en:'Colour · heat · aroma'},desc:{mr:'आवडीनुसार तिखटपणा आणण्यासाठी निवडक मिरची पूड.',en:'Chilli powder for colour, aroma and heat.'},bg:'#F4D3C8',ink:'#421C19',accent:'#B83227',img:IMG.candleMany},
 {id:'halad',name:{mr:'हळद पावडर',en:'Turmeric Powder'},notes:{mr:'मातीचा सुगंध · उबदार रंग',en:'Earthy aroma · warm colour'},desc:{mr:'दररोजच्या स्वयंपाकासाठी हळदीची पूड.',en:'Turmeric powder for everyday cooking.'},bg:'#F7E7B4',ink:'#45321A',accent:'#CA9219',img:IMG.vase},
]
export type Category = 'masale'|'powders'|'chutneys'|'papad'|'pickles'|'dry-fruits'|'snacks'
export type CategoryItem = {id:Category;name:L}
export const CATEGORIES:CategoryItem[] = [
 {id:'masale',name:{mr:'मसाले',en:'Masala Blends'}},{id:'powders',name:{mr:'पावडर',en:'Spice Powders'}},{id:'chutneys',name:{mr:'चटण्या',en:'Chutneys'}},{id:'papad',name:{mr:'पापड व कुरडई',en:'Papad & Kurdai'}},{id:'pickles',name:{mr:'लोणची',en:'Pickles'}},{id:'dry-fruits',name:{mr:'सुका मेवा',en:'Dry Fruits'}},{id:'snacks',name:{mr:'फराळाचे पदार्थ',en:'Traditional Snacks'}}
]
export type Product = {id:string;sku:string;name:L;cat:Category;frag:string;size:string;price:number;promo?:number;desc:L;imgs:string[];stock:boolean;published:boolean;featured:boolean}
export const PRODUCTS:Product[] = [
 {id:'kala-masala',sku:'MM-MAS-001',name:{mr:'काळा मसाला',en:'Kala Masala'},cat:'masale',frag:'kala',size:'250 g',price:180,desc:{mr:'भाजलेल्या मसाल्यांचा अस्सल महाराष्ट्रीयन स्वाद. भाजी, उसळ आणि आमटीसाठी उत्तम.',en:'An authentic Maharashtrian spice blend for curries, vegetables and usal.'},imgs:[IMG.candleLit,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:true},
 {id:'goda-masala',sku:'MM-MAS-002',name:{mr:'गोडा मसाला',en:'Goda Masala'},cat:'masale',frag:'goda',size:'250 g',price:170,desc:{mr:'वरण, आमटी, उसळ आणि भाजीला खास घरगुती चव देणारा गोडा मसाला.',en:'A classic Maharashtrian blend for dal, amti, usal and vegetables.'},imgs:[IMG.candleTable,IMG.candleMany,IMG.candleLit],stock:true,published:true,featured:true},
 {id:'kanda-lasun-masala',sku:'MM-MAS-003',name:{mr:'कांदा-लसूण मसाला',en:'Onion-Garlic Masala'},cat:'masale',frag:'kanda-lasun',size:'250 g',price:160,desc:{mr:'मसालेदार भाज्या आणि रस्सेदार पदार्थांसाठी कांदा-लसूण मसाला.',en:'A bold onion-garlic blend for spicy vegetables and curries.'},imgs:[IMG.candleMany,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'red-chilli-powder',sku:'MM-PWD-001',name:{mr:'लाल मिरची पावडर',en:'Red Chilli Powder'},cat:'powders',frag:'tikhat',size:'250 g',price:120,desc:{mr:'निवडक मिरच्यांपासून तयार केलेली तिखट पूड.',en:'Red chilli powder for colour, aroma and heat.'},imgs:[IMG.candleMany,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'turmeric-powder',sku:'MM-PWD-002',name:{mr:'हळद पावडर',en:'Turmeric Powder'},cat:'powders',frag:'halad',size:'250 g',price:95,desc:{mr:'दैनंदिन स्वयंपाकासाठी हळदीची पूड.',en:'Turmeric powder for daily cooking.'},imgs:[IMG.vase,IMG.candleTable,IMG.candleLit],stock:true,published:true,featured:false},
 {id:'javas-chutney',sku:'MM-CHT-001',name:{mr:'जवस चटणी',en:'Flaxseed Chutney'},cat:'chutneys',frag:'kala',size:'200 g',price:110,desc:{mr:'भाकरी, पोळी आणि वरण-भातासोबत छान लागणारी जवस चटणी.',en:'Traditional flaxseed chutney for bhakri, chapati and rice.'},imgs:[IMG.candleLit,IMG.candleMany,IMG.candleTable],stock:true,published:true,featured:false},
 {id:'papad',sku:'MM-PAP-001',name:{mr:'घरगुती पापड',en:'Homemade Papad'},cat:'papad',frag:'goda',size:'200 g',price:90,desc:{mr:'जेवणासोबत खमंग पापड.',en:'Crisp traditional papad for everyday meals.'},imgs:[IMG.soap,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:false},
 {id:'mango-pickle',sku:'MM-PKL-001',name:{mr:'आंब्याचे लोणचे',en:'Mango Pickle'},cat:'pickles',frag:'kanda-lasun',size:'500 g',price:180,desc:{mr:'मसाल्यांच्या स्वादाने भरलेले आंब्याचे लोणचे.',en:'Traditional mango pickle with a bold spice mix.'},imgs:[IMG.bath,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'dry-fruits-mix',sku:'MM-DRY-001',name:{mr:'सुका मेवा मिक्स',en:'Mixed Dry Fruits'},cat:'dry-fruits',frag:'goda',size:'250 g',price:320,desc:{mr:'खमंग खाण्यासाठी सुका मेवा मिक्स.',en:'A mixed dry-fruit selection for snacking and gifting.'},imgs:[IMG.vase,IMG.candleTable,IMG.candleMany],stock:true,published:true,featured:false},
 {id:'chakli',sku:'MM-SNK-001',name:{mr:'घरगुती चकली',en:'Homemade Chakli'},cat:'snacks',frag:'kala',size:'250 g',price:140,desc:{mr:'चहासोबत किंवा सणासुदीला खाण्यासाठी खुसखुशीत चकली.',en:'Crispy traditional chakli for tea-time and festive occasions.'},imgs:[IMG.soap,IMG.candleMany,IMG.candleTable],stock:true,published:true,featured:false},
 {id:'mutton-masala',sku:'MM-MAS-004',name:{mr:'मटण मसाला',en:'Mutton Masala'},cat:'masale',frag:'kala',size:'250 g',price:190,desc:{mr:'मटण आणि रस्सेदार पदार्थांसाठी मसाल्यांचे समृद्ध मिश्रण.',en:'A robust spice blend for mutton and rich Maharashtrian curries.'},imgs:[IMG.candleLit,IMG.candleClose,IMG.candleMany],stock:true,published:true,featured:true},
 {id:'sambar-masala',sku:'MM-MAS-005',name:{mr:'सांबार मसाला',en:'Sambar Masala'},cat:'masale',frag:'goda',size:'250 g',price:130,desc:{mr:'सांबार आणि डाळींच्या पदार्थांना खास चव देणारे मिश्रण.',en:'A balanced spice blend for sambar and lentil dishes.'},imgs:[IMG.candleTable,IMG.candleMany,IMG.candleClose],stock:true,published:true,featured:false},
 {id:'garam-masala',sku:'MM-MAS-006',name:{mr:'गरम मसाला',en:'Garam Masala'},cat:'masale',frag:'goda',size:'250 g',price:160,desc:{mr:'भाजी, आमटी आणि करीसाठी सुगंधी गरम मसाला.',en:'An aromatic finishing blend for vegetables, amti and curries.'},imgs:[IMG.candleClose,IMG.candleLit,IMG.candleTable],stock:true,published:true,featured:true},
 {id:'kashmiri-chilli-powder',sku:'MM-PWD-003',name:{mr:'काश्मिरी मिरची पावडर',en:'Kashmiri Chilli Powder'},cat:'powders',frag:'tikhat',size:'250 g',price:140,desc:{mr:'पदार्थांना आकर्षक लाल रंग आणि सौम्य तिखटपणा देणारी मिरची पूड.',en:'A vivid red chilli powder with gentle heat and rich colour.'},imgs:[IMG.candleMany,IMG.candleClose,IMG.candleLit],stock:true,published:true,featured:true},
 {id:'jeera-powder',sku:'MM-PWD-004',name:{mr:'जिरे पावडर',en:'Cumin Powder'},cat:'powders',frag:'goda',size:'200 g',price:100,desc:{mr:'भाजलेल्या जिऱ्यापासून तयार केलेली सुगंधी पूड.',en:'Fragrant ground cumin for everyday cooking.'},imgs:[IMG.candleTable,IMG.candleClose,IMG.candleLit],stock:true,published:true,featured:false},
 {id:'coriander-powder',sku:'MM-PWD-005',name:{mr:'धने पावडर',en:'Coriander Powder'},cat:'powders',frag:'goda',size:'250 g',price:95,desc:{mr:'दैनंदिन स्वयंपाकासाठी धने पावडर.',en:'Ground coriander for curries, vegetables and marinades.'},imgs:[IMG.candleTable,IMG.candleMany,IMG.candleLit],stock:true,published:true,featured:false},

]
export type Review = {id:string;name:string;rating:number;date:string;product:string;text:L;photo?:string;approved:boolean;featured:boolean}
export const REVIEWS: Review[] = []
export type Post = {id:string;type:'post'|'reel';title:string;col:number;row:number;url:string;featured:boolean}
export const POSTS:Post[] = [
 [0,0,'post','घरगुती मसाले'],[3,0,'reel','ताज्या मसाल्यांचा सुगंध'],[5,0,'post','महाराष्ट्रीयन चव'],[1,1,'reel','घरगुती पदार्थ'],[2,1,'post','मसाल्यांची तयारी'],[3,1,'post','पापड आणि लोणची'],[4,1,'post','पारंपरिक चव'],[0,2,'reel','फराळ स्पेशल'],[1,2,'post','घरचा स्वाद'],[4,2,'post','सणासुदीचे पदार्थ']
].map(([c,r,t,title],i)=>({id:'post'+i,col:c as number,row:r as number,type:t as 'post'|'reel',title:title as string,url:'https://wa.me/919004859475',featured:i<8}))
export type NavItem = {id:string;label:L;url:string;order:number;visible:boolean;external:boolean}
export const NAV:NavItem[] = [
{id:'n1',label:{mr:'मुख्यपृष्ठ',en:'Home'},url:'/',order:1,visible:true,external:false},{id:'n2',label:{mr:'उत्पादने',en:'Products'},url:'/produtos',order:2,visible:true,external:false},{id:'n3',label:{mr:'आमच्याबद्दल',en:'Our Story'},url:'/sobre',order:3,visible:true,external:false},{id:'n4',label:{mr:'अभिप्राय',en:'Reviews'},url:'/avaliacoes',order:4,visible:true,external:false},{id:'n5',label:{mr:'संपर्क',en:'Contact'},url:'/contato',order:5,visible:true,external:false}
]
export const SETTINGS = {brand: 'Marathi Masale',whatsapp: '919004859475',phone: '+91 90048 59475',email:'',address:'महाराष्ट्र, भारत · Maharashtra, India',instagram:'',facebook:'',mapUrl:'',hours:{mr:'सोमवार ते शनिवार · सकाळी ९ ते संध्याकाळी ६',en:'Monday to Saturday · 9 AM to 6 PM'} as L,currency: 'INR',defaultLang: 'mr' as Lang}
export const SECTIONS = [{id:'hero',label:'Hero',on:true},{id:'story',label:'Our Story',on:true},{id:'collection',label:'Featured Products',on:true},{id:'fragrances',label:'Masala Collections',on:true},{id:'why',label:'Why Marathi Masale',on:true},{id:'lifestyle',label:'Food Story',on:true},{id:'reviews',label:'Customer Reviews',on:true},{id:'instagram',label:'From Our Kitchen',on:false},{id:'cta',label:'CTA',on:true}]
export type CustomerDetails = {name:string;phone:string;cep:string;street:string;number:string;comp:string;district:string;city:string;state:string;notes:string;email:string}
export type OrderLead = {id:string;customer:CustomerDetails;items:{id:string;name:string;qty:number;price:number}[];total:number;date:string;status:'Novo'|'Confirmado'|'Enviado'|'Entregue'}

export const T: Record<string, [string, string]> = {
 'nav.cart':['पिशवी','Cart'],'nav.menu':['मेनू','Menu'],'nav.close':['बंद करा','Close'],
 'hero.label':['घरगुती महाराष्ट्रीयन चव','Authentic Maharashtrian flavours'],'hero.title1':['घरगुती चवीचा','Homemade flavour'],'hero.title2':['अस्सल स्वाद.','Made authentic.'],'hero.sub':['निवडक मसाले, पारंपरिक चटण्या, लोणची आणि घरगुती पदार्थ — प्रत्येक घासात महाराष्ट्राची चव.','Carefully selected spices, traditional chutneys, pickles and homemade foods — bringing the flavour of Maharashtra to every meal.'],'hero.cta':['मसाले पाहा','Explore masalas'],'hero.cta2':['आमची गोष्ट','Our story'],'hero.scroll':['पुढे पाहा','Scroll'],
 'story.t1':['परंपरेची चव.','The flavour of tradition.'],'story.t2':['घरची आपुलकी.','Made with warmth.'],'story.body':['महाराष्ट्राच्या स्वयंपाकघरातून प्रेरित मसाले आणि पारंपरिक पदार्थ. रोजच्या जेवणाला खास चव देण्यासाठी निवडक साहित्य आणि घरगुती आपुलकी.','Inspired by Maharashtrian kitchens, our spices and traditional foods bring extra flavour to everyday meals.'],'story.quote':['प्रत्येक घासात महाराष्ट्र.','A little Maharashtra in every bite.'],
 'col.title':['आमचे खास मसाले','Our signature masalas'],'col.sub':['काळा मसाला, गोडा मसाला, तिखट, लोणची आणि घरगुती पदार्थ — तुमच्या स्वयंपाकघरासाठी.','Kala masala, goda masala, chilli powder, pickles and homemade favourites for your kitchen.'],'col.drag':['पाहा','Explore'],'frag.title':['तुमच्या स्वयंपाकघरासाठी','Made for your kitchen'],'frag.cta':['उत्पादने पाहा','Browse products'],
 'why.title':['मराठी मसाले का?','Why Marathi Masale?'],'why.1':['अस्सल महाराष्ट्रीयन चव','Authentic Maharashtrian flavour'],'why.1d':['पारंपरिक पदार्थांसाठी परिचित आणि आवडते मसाल्यांचे मिश्रण.','Familiar spice blends made for traditional Maharashtrian dishes.'],'why.2':['निवडक साहित्य','Carefully selected ingredients'],'why.2d':['प्रत्येक उत्पादनासाठी योग्य साहित्य आणि स्पष्ट माहिती.','Thoughtfully selected ingredients and clear product information.'],'why.3':['घरगुती पदार्थ','Homemade favourites'],'why.3d':['मसाल्यांसोबत लोणची, पापड आणि इतर पारंपरिक पदार्थही.','Alongside spices, discover pickles, papad and other traditional foods.'],'why.4':['आपुलकीने सेवा','Personal service'],'why.4d':['WhatsApp वर ऑर्डरबाबत थेट संवाद आणि पुष्टी.','Direct WhatsApp support for order details and confirmation.'],
 'life.t1':['महाराष्ट्राची चव','The taste of Maharashtra'],'life.t2':['तुमच्या घरी.','At your table.'],'life.body':['रोजच्या जेवणापासून सणासुदीच्या मेजवानीपर्यंत — पारंपरिक चवींची साथ.','From everyday meals to festive spreads, bring traditional flavours to the table.'],
 'rev.title1':['ग्राहकांचा विश्वास','Trust from our customers'],'rev.title2':['आणि घरची चव','Loved at home'],'rev.all':['सर्व अभिप्राय पाहा','Read reviews'],'rev.bought':['खरेदी केले','Purchased'],'ig.title':['आमच्या स्वयंपाकघरातून','From our kitchen'],'ig.view':['WhatsApp वर विचारा','Ask on WhatsApp'],
 'cta.t1':['आजच आणा','Bring home'],'cta.t2':['महाराष्ट्राची चव','Maharashtrian flavour'],'cta.t3':['तुमच्या घरी.','today.'],'cta.btn':['सर्व उत्पादने पाहा','Explore all products'],
 'prod.title':['आमची उत्पादने','Our products'],'prod.sub':['मसाले, चटण्या, पापड, लोणची आणि घरगुती पदार्थ निवडा.','Explore masalas, chutneys, papad, pickles and homemade foods.'],'prod.add':['पिशवीत जोडा','Add to cart'],'prod.all':['सर्व','All'],'prod.allFrag':['सर्व प्रकार','All blends'],'prod.count':['उत्पादने','products'],'prod.view':['उत्पादन पाहा','View product'],'prod.quick':['झटपट पाहा','Quick view'],'prod.in':['उपलब्ध','In stock'],'prod.out':['सध्या उपलब्ध नाही','Out of stock'],'prod.empty':['उत्पादने सापडली नाहीत','No products found'],'prod.emptyD':['वेगळी श्रेणी निवडून पाहा.','Try another category.'],'prod.clear':['फिल्टर काढा','Clear filters'],
 'pdp.size':['पॅकचे वजन','Pack size'],'pdp.qty':['प्रमाण','Quantity'],'pdp.add':['पिशवीत जोडा','Add to cart'],'pdp.wa':['WhatsApp वर ऑर्डर करा','Order on WhatsApp'],'pdp.notes':['मसाल्याची माहिती','Blend details'],'pdp.details':['उत्पादनाची माहिती','Product details'],'pdp.detailsD':['पॅकवरील घटक, निव्वळ वजन आणि साठवण सूचना तपासा.','Check the package for ingredients, net weight and storage guidance.'],'pdp.ship':['डिलिव्हरी','Delivery'],'pdp.shipD':['डिलिव्हरी शुल्क आणि वेळ WhatsApp वर PIN कोडनुसार पुष्टी केली जाईल.','Delivery charges and timing are confirmed on WhatsApp based on your PIN code.'],'pdp.care':['साठवण','Storage'],'pdp.careD':['कोरड्या, स्वच्छ जागी ठेवा आणि पॅकवरील सूचना तपासा.','Store in a clean, dry place and follow package instructions.'],'pdp.related':['हेही आवडू शकते','You may also like'],'pdp.added':['पिशवीत जोडले','added to cart'],'pdp.unavailable':['हे उत्पादन सध्या उपलब्ध नाही. WhatsApp वर संपर्क साधा.','This product is currently unavailable. Contact us on WhatsApp.'],
 'cart.title':['तुमची पिशवी','Your cart'],'cart.empty':['पिशवी रिकामी आहे','Your cart is empty'],'cart.emptyD':['आवडते मसाले आणि पदार्थ शोधा.','Explore masalas and homemade favourites.'],'cart.subtotal':['एकूण','Subtotal'],'cart.note':['डिलिव्हरी शुल्क आणि उपलब्धता WhatsApp वर पुष्टी होईल.','Delivery charges and availability are confirmed on WhatsApp.'],'cart.checkout':['WhatsApp वर पुढे जा','Continue to WhatsApp'],'cart.remove':['काढून टाका','Remove'],
 'form.title':['डिलिव्हरीची माहिती','Delivery details'],'form.sub':['ही माहिती WhatsApp ऑर्डर संदेशासोबत पाठवली जाईल.','These details will be included in your WhatsApp order message.'],'form.name':['पूर्ण नाव','Full name'],'form.phone':['मोबाईल क्रमांक','Mobile number'],'form.email':['ई-मेल (ऐच्छिक)','Email (optional)'],'form.cep':['पिन कोड','PIN code'],'form.street':['पत्ता','Address'],'form.number':['घर / फ्लॅट क्रमांक','House / flat number'],'form.comp':['अतिरिक्त माहिती','Address line 2'],'form.district':['परिसर','Area'],'form.city':['शहर','City'],'form.state':['राज्य','State'],'form.notes':['ऑर्डरविषयी सूचना','Order notes'],'form.save':['ही माहिती या उपकरणावर जतन करा','Save these details on this device'],'form.back':['मागे जा','Back'],'form.send':['WhatsApp वर ऑर्डर संदेश पाठवा','Send order message on WhatsApp'],'form.required':['हे फील्ड आवश्यक आहे','This field is required'],'form.invalidEmail':['ई-मेल योग्य नाही','Invalid email'],'form.invalidPhone':['मोबाईल क्रमांक योग्य नाही','Please enter a valid mobile number'],
 'wa.hello':['नमस्कार! मला मराठी मसाले येथून ऑर्डर करायची आहे:','Hello! I would like to order from Marathi Masale:'],'wa.data':['ग्राहकाची माहिती:','Customer details:'],'wa.confirm':['कृपया उपलब्धता, डिलिव्हरी शुल्क आणि अंतिम रक्कम कळवा.','Please confirm availability, delivery charges and final amount.'],'wa.product':['नमस्कार! मला या उत्पादनाबद्दल माहिती हवी आहे:','Hello! I would like to know more about this product:'],
 'about.t1':['आमच्याबद्दल','About'],'about.t2':['मराठी मसाले','Marathi Masale'],'about.sub':['महाराष्ट्राच्या पारंपरिक चवींची ओळख.','A taste of traditional Maharashtrian cooking.'],'about.h1':['आमची गोष्ट','Our Story'],'about.b1':['महाराष्ट्रीयन स्वयंपाकघरातील मसाले आणि पारंपरिक पदार्थांमधून प्रेरित.','Inspired by Maharashtrian kitchens and regional favourites.'],'about.h2':['आमची निवड','Our Selection'],'about.b2':['मसाले, चटण्या, लोणची, पापड आणि इतर पदार्थ.','Spice blends, chutneys, pickles, papad and more.'],'about.h3':['परंपरेचा स्वाद','Traditional flavour'],'about.b3':['काळा मसाला, गोडा मसाला आणि घरगुती चटण्या रोजच्या जेवणात खास चव आणतात.','Kala masala, goda masala and chutneys add character to everyday cooking.'],'about.h4':['ग्राहक सेवा','Customer care'],'about.b4':['ऑर्डर आणि डिलिव्हरीसाठी WhatsApp वर संपर्क साधा.','Contact us on WhatsApp for orders and delivery.'],'about.btn':['संपर्क साधा','Contact us'],'about.cta':['ऑर्डरबद्दल बोलूया?','Let’s talk about your order'],'about.admin':['व्यवस्थापन','Admin'],
 'reviews.t1':['ग्राहकांचे अनुभव','Customer experiences'],'reviews.t2':['आणि अभिप्राय','and reviews'],'reviews.avg':['सरासरी रेटिंग','Average rating'],'reviews.total':['अभिप्राय','reviews'],'reviews.empty':['या श्रेणीत अभिप्राय नाहीत.','No reviews in this category yet.'],'reviews.see':['उत्पादन पाहा','View product'],
 'contact.t1':['संपर्क','Contact'],'contact.t2':['साधा.','us.'],'contact.sub':['उत्पादन, उपलब्धता किंवा डिलिव्हरीविषयी विचारा.','Questions about products, availability or delivery? Get in touch.'],'contact.subject':['विषय','Subject'],'contact.message':['संदेश','Message'],'contact.send':['संदेश तयार करा','Compose message'],'contact.wa':['WhatsApp वर बोला','Chat on WhatsApp'],'contact.sent':['WhatsApp वर तुमचा संदेश तयार करा.','Your message is ready to send on WhatsApp.'],'contact.hours':['व्यवसायाची वेळ','Business hours'],'contact.address':['पत्ता','Location'],
 'footer.statement':['घरगुती महाराष्ट्रीयन चव — प्रत्येक पदार्थात.','Homemade Maharashtrian flavour in every meal.'],'footer.nav':['नेव्हिगेशन','Navigation'],'footer.service':['संपर्क','Contact'],'footer.social':['सोशल','Social'],'footer.news':['नवीन पदार्थांची माहिती मिळवा.','Hear about new products.'],'footer.newsBtn':['माहिती मिळवा','Sign up'],'footer.newsOk':['धन्यवाद!','Thanks!'],'footer.privacy':['गोपनीयता धोरण','Privacy policy'],'footer.terms':['अटी व शर्ती','Terms and conditions'],'footer.rights':['सर्व हक्क राखीव.','All rights reserved.'],'404.title':['पान सापडले नाही','Page not found'],'404.sub':['हे पान उपलब्ध नाही किंवा पत्ता बदलला आहे.','This page is unavailable or has moved.'],'404.cta':['मुख्यपृष्ठावर जा','Back to home'],
 'seo.home':['मराठी मसाले — अस्सल घरगुती मसाले आणि पारंपरिक पदार्थ','Marathi Masale — Maharashtrian spices and homemade foods']
}

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
const STORAGE_KEY = 'marathi-masale-uat-v2'
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
