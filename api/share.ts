import type { VercelRequest, VercelResponse } from '@vercel/node'

type Product = {
  id: string
  name: { mr: string; en: string }
  desc: { mr: string; en: string }
  price: number
  imgs: string[]
  published: boolean
}

/**
 * Crawlable product metadata for WhatsApp and social link previews.
 * Keep this minimal catalogue aligned with src/cms.tsx until a database API exists.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const productId = String(req.query.path || '').replace(/^\\/produto\\//, '').split('/')[0]
  const origin = String(process.env.SITE_URL || 'https://masale.vercel.app').replace(/\\/$/, '')
  if (!productId || productId.includes('..')) return res.redirect(302, origin)

  const products: Product[] = [
    { id: 'kala-masala', name: { mr: 'काळा मसाला', en: 'Kala Masala' }, desc: { mr: 'भाजलेल्या मसाल्यांचा अस्सल महाराष्ट्रीयन स्वाद.', en: 'An authentic roasted Maharashtrian spice blend.' }, price: 180, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'goda-masala', name: { mr: 'गोडा मसाला', en: 'Goda Masala' }, desc: { mr: 'वरण, आमटी, उसळ आणि भाजीसाठी पारंपरिक गोडा मसाला.', en: 'A traditional Maharashtrian blend for dal, amti, usal and vegetables.' }, price: 170, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'kanda-lasun-masala', name: { mr: 'कांदा-लसूण मसाला', en: 'Onion-Garlic Masala' }, desc: { mr: 'मसालेदार भाज्या आणि रस्सेदार पदार्थांसाठी.', en: 'A bold onion-garlic blend for spicy vegetables and curries.' }, price: 160, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'red-chilli-powder', name: { mr: 'लाल मिरची पावडर', en: 'Red Chilli Powder' }, desc: { mr: 'निवडक मिरच्यांपासून तयार केलेली तिखट पूड.', en: 'Red chilli powder for colour, aroma and heat.' }, price: 120, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'turmeric-powder', name: { mr: 'हळद पावडर', en: 'Turmeric Powder' }, desc: { mr: 'दैनंदिन स्वयंपाकासाठी हळदीची पूड.', en: 'Turmeric powder for everyday cooking.' }, price: 95, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'javas-chutney', name: { mr: 'जवस चटणी', en: 'Flaxseed Chutney' }, desc: { mr: 'भाकरी आणि पोळीसोबत छान लागणारी जवस चटणी.', en: 'Traditional flaxseed chutney for bhakri and chapati.' }, price: 110, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'papad', name: { mr: 'घरगुती पापड', en: 'Homemade Papad' }, desc: { mr: 'जेवणासोबत खमंग पापड.', en: 'Crisp traditional papad for everyday meals.' }, price: 90, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'mango-pickle', name: { mr: 'आंब्याचे लोणचे', en: 'Mango Pickle' }, desc: { mr: 'मसाल्यांच्या स्वादाने भरलेले आंब्याचे लोणचे.', en: 'Traditional mango pickle with a bold spice mix.' }, price: 180, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'dry-fruits-mix', name: { mr: 'सुका मेवा मिक्स', en: 'Mixed Dry Fruits' }, desc: { mr: 'खमंग खाण्यासाठी सुका मेवा मिक्स.', en: 'A mixed dry-fruit selection for snacking and gifting.' }, price: 320, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'chakli', name: { mr: 'घरगुती चकली', en: 'Homemade Chakli' }, desc: { mr: 'चहासोबत किंवा सणासुदीला खाण्यासाठी खुसखुशीत चकली.', en: 'Crispy traditional chakli for tea-time and festive occasions.' }, price: 140, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'mutton-masala', name: { mr: 'मटण मसाला', en: 'Mutton Masala' }, desc: { mr: 'मटण आणि रस्सेदार पदार्थांसाठी मसाल्यांचे समृद्ध मिश्रण.', en: 'A robust blend for mutton and rich Maharashtrian curries.' }, price: 190, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'sambar-masala', name: { mr: 'सांबार मसाला', en: 'Sambar Masala' }, desc: { mr: 'सांबार आणि डाळींच्या पदार्थांसाठी मसाला.', en: 'A balanced spice blend for sambar and lentil dishes.' }, price: 130, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'garam-masala', name: { mr: 'गरम मसाला', en: 'Garam Masala' }, desc: { mr: 'भाजी, आमटी आणि करीसाठी सुगंधी गरम मसाला.', en: 'An aromatic finishing blend for vegetables, amti and curries.' }, price: 160, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'kashmiri-chilli-powder', name: { mr: 'काश्मिरी मिरची पावडर', en: 'Kashmiri Chilli Powder' }, desc: { mr: 'आकर्षक लाल रंग आणि सौम्य तिखटपणा देणारी पूड.', en: 'A vivid red chilli powder with gentle heat and rich colour.' }, price: 140, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'jeera-powder', name: { mr: 'जिरे पावडर', en: 'Cumin Powder' }, desc: { mr: 'भाजलेल्या जिऱ्यापासून तयार केलेली सुगंधी पूड.', en: 'Fragrant ground cumin for everyday cooking.' }, price: 100, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
    { id: 'coriander-powder', name: { mr: 'धने पावडर', en: 'Coriander Powder' }, desc: { mr: 'दैनंदिन स्वयंपाकासाठी धने पावडर.', en: 'Ground coriander for curries, vegetables and marinades.' }, price: 95, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true },
  ]
  const fallback: Product = {
    id: 'brand', name: { mr: 'मराठी मसाले', en: 'Marathi Masale' },
    desc: { mr: 'अस्सल महाराष्ट्रीयन मसाले, चटण्या, लोणची आणि घरगुती पदार्थ.', en: 'Authentic Maharashtrian masalas, chutneys, pickles and homemade foods.' },
    price: 0, imgs: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400'], published: true,
  }
  const product = products.find((item) => item.id === productId && item.published) || fallback
  const lang = String(req.query.lang || 'mr') === 'en' ? 'en' : 'mr'
  const title = product.id === 'brand' ? 'मराठी मसाले — अस्सल घरगुती मसाले' : `${product.name[lang]} | Marathi Masale`
  const description = product.desc[lang]
  const url = `${origin}/produto/${encodeURIComponent(product.id)}`
  const image = product.imgs[0] || fallback.imgs[0]
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.status(200).send(`<!doctype html>
<html lang="${lang === 'mr' ? 'mr-IN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}">
<link rel="canonical" href="${escape(url)}">
<meta property="og:type" content="product">
<meta property="og:site_name" content="Marathi Masale">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(description)}">
<meta property="og:url" content="${escape(url)}">
<meta property="og:image" content="${escape(image)}">
<meta property="og:image:secure_url" content="${escape(image)}">
<meta property="og:image:alt" content="${escape(title)}">
<meta property="product:price:amount" content="${product.price.toFixed(2)}">
<meta property="product:price:currency" content="INR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(title)}">
<meta name="twitter:description" content="${escape(description)}">
<meta name="twitter:image" content="${escape(image)}">
<meta http-equiv="refresh" content="0;url=${escape(url)}#/produto/${encodeURIComponent(product.id)}">
</head>
<body><p><a href="${escape(url)}#/produto/${encodeURIComponent(product.id)}">Continue to Marathi Masale</a></p></body>
</html>`)
}
