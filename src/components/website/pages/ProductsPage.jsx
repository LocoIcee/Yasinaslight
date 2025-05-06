import React, { useState, useEffect } from "react";
import ImagePlaceholders from "../utils/ImagePlaceholders";
import { colors } from "../utils/constants";

const ProductsPage = () => {
  // Product categories
  const categories = ["all", "crystals", "oils", "incense", "books", "jewelry"];
  
  // Sort options
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
  ];
  
  // State for filtering and sorting
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("featured");
  const [products, setProducts] = useState([]);
  
  // Product data (mock data)
  const productData = [
    {
      id: "amethyst-points",
      name: "Amethyst Crystal Points",
      category: "crystals",
      price: 24.99,
      featured: true,
      isNew: false,
      description: "Natural amethyst points for healing, meditation, and spiritual growth. Each crystal is unique and carefully selected.",
    },
    {
      id: "sage-bundle",
      name: "White Sage Smudge Bundle",
      category: "incense",
      price: 12.50,
      featured: true,
      isNew: false,
      description: "Traditional white sage smudge bundle for cleansing energy and purifying spaces.",
    },
    {
      id: "chakra-bracelet",
      name: "7 Chakra Healing Bracelet",
      category: "jewelry",
      price: 29.99,
      featured: false,
      isNew: true,
      description: "Handcrafted bracelet with 7 natural stone beads representing each chakra energy center.",
    },
    {
      id: "essential-oil-set",
      name: "Essential Oil Starter Set",
      category: "oils",
      price: 45.99,
      featured: true,
      isNew: true,
      description: "Set of 6 pure essential oils including lavender, eucalyptus, tea tree, lemon, peppermint, and frankincense.",
    },
    {
      id: "tarot-deck",
      name: "Ethereal Light Tarot Deck",
      category: "books",
      price: 32.50,
      featured: false,
      isNew: false,
      description: "78-card tarot deck with intuitive imagery and guidebook for spiritual readings and self-discovery.",
    },
    {
      id: "selenite-wand",
      name: "Selenite Cleansing Wand",
      category: "crystals",
      price: 18.99,
      featured: true,
      isNew: false,
      description: "Natural selenite wand for energy clearing, chakra alignment, and amplifying healing energies.",
    },
    {
      id: "meditation-book",
      name: "Introduction to Energy Meditation",
      category: "books",
      price: 22.95,
      featured: false,
      isNew: true,
      description: "Comprehensive guide to energy meditation techniques with practical exercises for beginners.",
    },
    {
      id: "palo-santo",
      name: "Palo Santo Wood Sticks",
      category: "incense",
      price: 14.50,
      featured: true,
      isNew: false,
      description: "Sustainably harvested palo santo wood sticks for sacred cleansing rituals and aromatherapy.",
    },
    {
      id: "moon-necklace",
      name: "Lunar Phase Necklace",
      category: "jewelry",
      price: 38.00,
      featured: false,
      isNew: true,
      description: "Sterling silver necklace featuring delicate moon phases, symbolizing personal growth and transformation.",
    },
    {
      id: "lavender-oil",
      name: "Organic Lavender Essential Oil",
      category: "oils",
      price: 16.99,
      featured: false,
      isNew: false,
      description: "100% pure therapeutic grade lavender essential oil for relaxation, sleep support, and aromatherapy.",
    },
    {
      id: "rose-quartz",
      name: "Rose Quartz Heart Stone",
      category: "crystals",
      price: 15.50,
      featured: true,
      isNew: false,
      description: "Polished rose quartz heart, known as the stone of unconditional love and emotional healing.",
    },
    {
      id: "chakra-guide",
      name: "Chakra Balancing Guide",
      category: "books",
      price: 19.99,
      featured: false,
      isNew: false,
      description: "Illustrated guide to understanding and balancing the seven chakras with practical healing techniques.",
    },
  ];
  
  // Filter and sort products
  useEffect(() => {
    let filtered = [...productData];
    
    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Apply sorting
    switch (activeSort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setProducts(filtered);
  }, [activeCategory, activeSort]);
  
  return (
    <div>
      {/* Page Header */}
      <div
        className="py-12 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.primary}DD)`,
        }}
      >
        {/* Sacred geometry overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(/assets/website/sacred-geometry.png)`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        ></div>

        <h1
          className="text-3xl md:text-4xl relative z-10"
          style={{ color: colors.neutral, fontFamily: "'Cormorant Garamond', serif" }}
        >
          HOLISTIC PRODUCTS
        </h1>
        <p
          className="mt-2 text-lg relative z-10"
          style={{ color: `${colors.neutral}DD` }}
        >
          Tools for Your Healing Journey
        </p>
      </div>

      {/* Products Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2
            className="text-xl md:text-2xl mb-4"
            style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
            CURATED WITH INTENTION
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
          </h2>
          <p style={{ color: colors.text, lineHeight: "1.8" }}>
            Each product in our collection has been thoughtfully selected to support your spiritual practice
            and healing journey. From ethically sourced crystals to organic essential oils, we offer only
            the highest quality holistic tools to enhance your well-being.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category ? "shadow-md" : ""
                }`}
                style={{
                  backgroundColor: activeCategory === category ? colors.primary : `${colors.primary}20`,
                  color: activeCategory === category ? colors.neutral : colors.primary,
                  border: activeCategory === category ? "none" : `1px solid ${colors.primary}40`,
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="pl-4 pr-10 py-2 rounded-md appearance-none cursor-pointer"
              style={{
                backgroundColor: colors.neutral,
                border: `1px solid ${colors.secondary}40`,
                color: colors.text,
                outline: "none",
              }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              style={{ color: colors.secondary }}
            >
              ▼
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.neutral,
                border: `1px solid ${colors.secondary}30`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              {/* Product Image */}
              <div className="relative">
                <ImagePlaceholders.ProductImage name={product.name} />
                
                {/* Product Tags */}
                <div className="absolute top-0 left-0 p-2 flex gap-2">
                  {product.isNew && (
                    <span
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: colors.accent,
                        color: colors.text,
                      }}
                    >
                      New
                    </span>
                  )}
                  {product.featured && !product.isNew && (
                    <span
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: `${colors.primary}E6`,
                        color: colors.neutral,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </h3>
                
                <span
                  className="text-xs"
                  style={{ color: `${colors.text}70` }}
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                
                <p 
                  className="mt-2 text-sm" 
                  style={{ color: `${colors.text}99`, maxHeight: "3em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
                >
                  {product.description}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span
                    className="font-bold"
                    style={{ color: colors.primary }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  
                  <button
                    className="px-4 py-1 rounded-full text-sm transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.neutral,
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {products.length === 0 && (
          <div 
            className="text-center py-16"
            style={{ color: colors.text }}
          >
            <h3 className="text-xl mb-2">No products found</h3>
            <p>Please try another category or reset your filters.</p>
          </div>
        )}
        
        {/* Featured Collection Banner */}
        <div 
          className="mt-16 p-8 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <ImagePlaceholders.ProductImage name="Crystal Collection" />
            </div>
            <div className="w-full md:w-2/3">
              <h3
                className="text-xl md:text-2xl mb-3"
                style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
              >
                Featured Collection: Healing Crystal Sets
              </h3>
              <p className="mb-4" style={{ color: colors.text }}>
                Discover our curated crystal collections, designed to support specific healing intentions.
                Each set includes ethically sourced crystals, a cleansing kit, and a detailed guide on
                how to work with your crystals for maximum benefit.
              </p>
              <a
                href="/products/collections/healing-crystals"
                className="inline-block px-6 py-2 rounded-md transition-all hover:shadow-md"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.neutral,
                }}
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;