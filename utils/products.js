import dunk_low_retro from '../assets/shoes/dunk_low_retro.png'
import jordan_1_retro from '../assets/shoes/jordan_1_retro.png'
import jordan_1_low from '../assets/shoes/jordan_1_low.png'
import jordan_4_retro from '../assets/shoes/jordan_4_retro.png'
import air_max_270 from '../assets/shoes/air_max_270.png'
import offcourt_adjust from '../assets/shoes/offcourt_adjust.png'
import jordan_1_g from '../assets/shoes/jordan_1_g.jpg'
import air_force_1_low_retro from '../assets/shoes/air_force_1_low_retro.png'
import air_force_1_07 from '../assets/shoes/air_force_1_07.png'
import jordan_4_retro_oxidized from '../assets/shoes/jordan_4_retro_oxidized.png'


export const products = [
   {
      id: '1',
      name: 'Nike Dunk Low Retro',
      description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century..",
      price: '115',
      image: dunk_low_retro,
      favourite: true,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '2',
      name: 'Air Jordan 1 Retro High OG "Black and Gold"',
      description: "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colors and textures give modern expression to an all-time favorite.",
      price: '180',
      image: jordan_1_retro,
      favourite: false,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '3',
      name: 'Air Jordan 1 Low OG "Wolf Grey"',
      description: "The Air Jordan 1 Low OG remakes the classic sneaker with new colors and textures. Premium materials and accents give fresh expression to an all-time favorite.",
      price: '140',
      image: jordan_1_low,
      favourite: false,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '4',
      name: 'Air Jordan 4 Retro "White Thunder"',
      description: "Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in '89.",
      price: '215',
      image: jordan_4_retro,
      favourite: true,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '5',
      name: 'Nike Air Max 270',
      description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      price: '160',
      image: air_max_270,
      favourite: true,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '6',
      name: "Nike Air Force 1 Low Retro",
      description: "Debuting in 1982 as a basketball must-have, the Air Force 1 came into its own in the '90s. The clean look of the classic white-on-white AF1 was endorsed from the basketball courts to the block and beyond. Finding its rhythm in hip-hop culture, releasing limited collabs and colorways, Air Force 1 became an iconic sneaker around the globe. And with over 2000 iterations of this staple, its impact on fashion, music and sneaker culture can’t be denied.",
      price: '150',
      image: air_force_1_low_retro,
      favourite: false,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '7',
      name: "Nike Air Force 1 '07",
      description: "Comfortable, durable and timeless—it’s number 1 for a reason. The classic ‘80s construction pairs with bold details for style that tracks whether you’re on court or on the go. This basketball icon puts a fresh spin on what you know best: Durable materials, rich colors and the perfect amount of flash to make you shine.",
      price: '120',
      image: air_force_1_07,
      favourite: true,
      cart: {
         istrue: true,
         quantity: 1
      }
   },
   {
      id: '8',
      name: 'Nike Offcourt Adjust',
      description: "Post game, errands and more—adjust your comfort on the go. The adjustable, padded strap lets you perfect your fit, while the lightweight foam midsole brings first-class comfort to your feet.",
      price: '40',
      image: offcourt_adjust,
      favourite: false,
      cart: {
         istrue: true,
         quantity: 2
      }
   },
   {
      id: '9',
      name: 'Air Jordan 4 Retro "Oxidized Green"',
      description: "Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in '89.",
      price: '215',
      image: jordan_4_retro_oxidized,
      favourite: true,
      cart: {
         istrue: false,
         quantity: 0
      }
   },
   {
      id: '10',
      name: 'Air Jordan I High G',
      description: "Feel unbeatable, from the tee box to the final putt. Inspired by one of the most iconic sneakers of all time, the Air Jordan 1 G is an instant classic on the course. With Air cushioning underfoot, a Wings logo on the heel and an integrated traction pattern to help you power through your swing, it delivers all the clubhouse cool of the original AJ1—plus everything you need to play 18 holes in comfort.",
      price: '190',
      image: jordan_1_g,
      favourite: false,
      cart: {
         istrue: true,
         quantity: 1
      }
   }
]