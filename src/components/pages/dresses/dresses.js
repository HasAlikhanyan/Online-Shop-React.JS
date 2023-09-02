
import ProductDetails from "../productDetails/ProductDetails";
import { memo } from "react";

const dresses = [{
    image: "https://www.1zoom.me/big2/588/246489-frederika.jpg",
    price: "39.90$",
    description: "Jeans midi cocktail dress",
    id: 25,
    category: "woman",
},
{
    image: "https://w.forfun.com/fetch/03/0367a9442c2b8e5d06d15e9e49be043b.jpeg",
    price: "56.10$",
    description: "Jeans midi cocktail dress",
    id: 26,
    category: "woman",
},
{
    image: "https://images.hdqwalls.com/download/women-dress-bokeh-sitting-stilettos-model-stairs-xc-2560x1440.jpg",
    price: "36.70$",
    description: "Jeans midi cocktail dress",
    id: 27,
    category: "woman",
},
{
    image: "https://w.forfun.com/fetch/6f/6f15750557302af0248c43f989aa734d.jpeg",
    price: "29.30$",
    description: "Jeans midi cocktail dress",
    id: 28,
    category: "woman",
},
{
    image: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612282842_10-p-zhenshchina-na-fioletovom-fone-17.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    id: 29,
    category: "woman",
},
{
    image: "https://i.pinimg.com/originals/cf/ac/17/cfac17d5150fad7da31225b5402d8ac6.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    id: 30,
    category: "woman",
},
]

function Dresses() {
    return <ProductDetails data={dresses}/>
    }

export default memo(Dresses);