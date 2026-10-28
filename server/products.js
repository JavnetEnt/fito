// Product catalogue. Images live in client/public/images/products/
// `look` is a fallback gradient shown while an image loads (or if it's missing).
// Optional `fit`: "cover" (default, fills the card) or "contain" (for cut-out images).
export const products = [
  { id: 1, name: "Apex Compression Tee", category: "Men · Training", price: 58, tag: "New",
    image: "/images/products/apex-compression-tee.webp",
    look: "linear-gradient(160deg,#1c1c1c,#0d0d0d 60%,#2b3300)" },
  { id: 2, name: "Surge Seamless Legging", category: "Women · Training", price: 84, tag: "",
    image: "/images/products/surge-seamless-legging.webp",
    look: "linear-gradient(160deg,#222,#0b0b0b 55%,#3a4a00)" },
  { id: 3, name: "Forge Tapered Jogger", category: "Men · Studio", price: 96, tag: "",
    image: "/images/products/forge-tapered-jogger.webp",
    look: "linear-gradient(160deg,#181818,#111 50%,#242424)" },
  { id: 4, name: "Volt Longline Bra", category: "Women · Studio", price: 62, tag: "New",
    image: "/images/products/volt-longline-bra.webp",
    look: "linear-gradient(160deg,#2a3300,#101010 60%,#0a0a0a)" },
  { id: 5, name: "Titan Stringer", category: "Men · Lifting", price: 44, tag: "",
    image: "/images/products/titan-stringer.webp",
    look: "linear-gradient(160deg,#202020,#0c0c0c 70%,#1c2400)" },
  { id: 6, name: "Core Shell Jacket", category: "Unisex · Outerwear", price: 148, tag: "",
    image: "/images/products/core-shell-jacket.webp",
    look: "linear-gradient(160deg,#161616,#0a0a0a 50%,#333c0a)" },
];
