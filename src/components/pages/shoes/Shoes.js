
import ProductDetails from "../productDetails/ProductDetails";
import { memo } from "react";

const shoes = [{
    image: "http://media.gq.com/photos/57d9ad6e436f78925d2b25a1/16:9/w_2560%252Cc_limit/1016-GQ-FAJM07-01-james-marsden.jpg",
    price: "39.90$",
    description: "Jeans midi cocktail dress",
    id: 19,
    category: "shoes"
},
{
    image: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2015/02/hm-shoe-guide-hm-sean-opry-004.jpg?fit=978%2C570",
    price: "56.10$",
    description: "Jeans midi cocktail dress",
    id: 20,
    category: "shoes"
},
{
    image: "http://albetekstil.com/images/urun_gomlek_1.jpg",
    price: "36.70$",
    description: "Jeans midi cocktail dress",
    id: 21,
    category: "shoes"
},
{
    image: "https://www.ascalini.ru/wp-content/uploads/2021/09/ava.jpg",
    price: "29.30$",
    description: "Jeans midi cocktail dress",
    id: 22,
    category: "shoes"
},
{
    image: "http://patricianoivasefestas.com.br/wp-content/uploads/como-amaciar-sapatos-apertados-em-6-dicas-patricia-noivas-e-festas-img-01.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    id: 23,
    category: "shoes"
},
{
    image: "https://sun6-21.userapi.com/s/v1/if1/Vj3VgPt-9qBUZasAUoCos0ESlOk_inTl1MrUjv84ocVS7KcKIpi4CXQ9005ocYtzhBcNKfhs.jpg?size=1998x2000&quality=96&crop=430,12,1998,2000&ava=1",
    price: "42.80$",
    description: "Jeans midi cocktail dress",
    id: 24,
    category: "shoes"
},
]

function Shoes() {
    return <ProductDetails data={shoes}/>
}

export default memo(Shoes);