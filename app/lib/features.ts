export type FeatureTheme = "blue" | "dark" | "lime" | "mint";

export type FeatureStep = {
  number: string;
  title: string;
  description: string;
};

export type FeatureShowcase = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type FeatureFaq = {
  question: string;
  answer: string;
};

export type FeatureRecord = {
  slug: string;
  name: string;
  navLabel: string;
  seoTitle: string;
  titleLead: string;
  titleEmphasis: string;
  description: string;
  intro: string;
  theme: FeatureTheme;
  heroImage: string;
  heroAlt: string;
  facts: { value: string; label: string }[];
  steps: FeatureStep[];
  showcases: FeatureShowcase[];
  limitationsTitle: string;
  limitations: string[];
  faqs: FeatureFaq[];
  relatedFeatures: string[];
  relatedArticles: string[];
};

export const features: FeatureRecord[] = [
  {
    slug: "grocery-prices",
    name: "Grocery price comparison",
    navLabel: "Grocery prices",
    seoTitle: "Compare Grocery Prices at Coles, Woolworths & Aldi",
    titleLead: "Compare grocery prices before",
    titleEmphasis: "you choose the store.",
    description:
      "Compare grocery prices across Coles, Woolworths and Aldi with weekly price updates, current specials and clear product-level detail in Tallo.",
    intro:
      "Search a product, browse a category or start with this week’s specials. Tallo brings the available prices into one view so you can compare the product you actually want without jumping between three retailer sites.",
    theme: "blue",
    heroImage: "/screenshots/price-comparison.png",
    heroAlt:
      "Tallo product price comparison showing grocery prices from supported supermarkets",
    facts: [
      { value: "3", label: "grocery retailers" },
      { value: "Weekly", label: "price refresh" },
      { value: "AU", label: "available Australia-wide" },
    ],
    steps: [
      {
        number: "01",
        title: "Search or browse",
        description:
          "Find a product by name, browse grocery categories or open the weekly-specials view.",
      },
      {
        number: "02",
        title: "Compare available prices",
        description:
          "See supported store prices, current specials, pack information and unit-price context where available.",
      },
      {
        number: "03",
        title: "Add the right product",
        description:
          "Add your chosen item to My Shop, a favourite list or another reusable custom list.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/home-specials.png",
        alt: "Weekly grocery specials in Tallo",
        eyebrow: "This week",
        title: "Current specials without the catalogue shuffle.",
        description:
          "Displayed grocery prices are refreshed weekly in line with new specials. Filter the offers, then compare the products that belong on your list.",
      },
      {
        image: "/screenshots/product-detail.png",
        alt: "A grocery product detail screen in Tallo",
        eyebrow: "Product detail",
        title: "The price needs context.",
        description:
          "Open a product to review the available retailers, pack details and price information before deciding where it fits into the shop.",
      },
    ],
    limitationsTitle: "What a trustworthy price comparison should tell you",
    limitations: [
      "Displayed grocery prices are refreshed weekly rather than presented as live checkout quotes.",
      "Price, range and stock can still change after the latest refresh or vary by store.",
      "Exact branded products are easier to compare than private-label alternatives; substitutes should be chosen deliberately.",
      "Check pack size and unit price when two products appear similar but are not identical.",
    ],
    faqs: [
      {
        question: "Which supermarkets does Tallo compare?",
        answer:
          "Tallo compares groceries across Coles, Woolworths and Aldi.",
      },
      {
        question: "How often are grocery prices updated?",
        answer:
          "Displayed grocery prices are updated weekly and include the weekly specials available in Tallo.",
      },
      {
        question: "Does Tallo compare the same product at every store?",
        answer:
          "Tallo uses exact product matches where available. Private-label products and different pack sizes may require a broader alternative rather than an exact match.",
      },
      {
        question: "Can I add a compared product to a shopping list?",
        answer:
          "Yes. Products can be added to My Shop and to reusable custom or favourite lists.",
      },
    ],
    relatedFeatures: ["myshop", "barcode-scanner"],
    relatedArticles: ["weekly-specials", "cheapest-supermarket-australia"],
  },
  {
    slug: "myshop",
    name: "My Shop and Multi-shop",
    navLabel: "My Shop",
    seoTitle: "Smart Grocery List App with Store Price Comparison",
    titleLead: "Price the whole list,",
    titleEmphasis: "not just one bargain.",
    description:
      "Build a grocery list, compare complete store totals and use Multi-shop to see whether splitting the shop across Coles, Woolworths and Aldi is worthwhile.",
    intro:
      "My Shop turns a product list into a practical shopping plan. Compare individual store totals, review a Multi-shop split and then take a category-sorted list into the aisle.",
    theme: "dark",
    heroImage: "/screenshots/my-shop.png",
    heroAlt:
      "My Shop in Tallo showing a grocery list and supermarket totals",
    facts: [
      { value: "3", label: "single-store totals" },
      { value: "Split", label: "cheapest multi-store option" },
      { value: "Share", label: "lists by link" },
    ],
    steps: [
      {
        number: "01",
        title: "Build the list",
        description:
          "Add products from search, barcode scanning, recipes or saved lists and set the quantities you need.",
      },
      {
        number: "02",
        title: "Compare the totals",
        description:
          "Review Coles, Woolworths and Aldi totals, then see how Multi-shop would divide comparable items.",
      },
      {
        number: "03",
        title: "Shop with a running plan",
        description:
          "Start a shopping session, tick off category-sorted items, adjust quantities and keep the running total visible.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/multishop.png",
        alt: "Tallo Multi-shop splitting a grocery list between supermarkets",
        eyebrow: "Multi-shop",
        title: "See when a sensible split costs less.",
        description:
          "Multi-shop assigns comparable items to the supported supermarket with the lower available price and shows the result beside the best single-store option.",
      },
      {
        image: "/screenshots/shopping-list-v2.png",
        alt: "A category-sorted shopping list in Tallo",
        eyebrow: "In the aisle",
        title: "A list designed for the actual shop.",
        description:
          "Keep products grouped into useful categories, change quantities as you go and save the completed shop to review later.",
      },
    ],
    limitationsTitle: "The total is a planning guide, not a checkout receipt",
    limitations: [
      "Totals use the latest displayed prices and the quantities recorded in your list.",
      "A missing or unavailable match is shown instead of silently pretending the item has been priced.",
      "Items sold by variable weight use the available per-weight price; the final amount can change with the weight chosen at the store.",
      "Multi-shop shows a price difference, but only you can decide whether another stop is worth the time and travel.",
    ],
    faqs: [
      {
        question: "What is My Shop?",
        answer:
          "My Shop is Tallo’s shopping-list area. It prices list items across supported grocery stores and keeps the list organised for shopping.",
      },
      {
        question: "How does Multi-shop work?",
        answer:
          "Multi-shop compares available matches for the items in your list and shows a lower-price split across Coles, Woolworths and Aldi when one is available.",
      },
      {
        question: "Can I share a Tallo shopping list?",
        answer:
          "Yes. A custom or favourite list can be shared using a link that another Tallo user can import.",
      },
      {
        question: "Are completed shops saved?",
        answer:
          "Yes. Completed shops can be reviewed later and contribute to the savings history shown in Tallo.",
      },
    ],
    relatedFeatures: ["grocery-prices", "meal-planner"],
    relatedArticles: [
      "cheapest-supermarket-australia",
      "how-to-save-money-groceries",
    ],
  },
  {
    slug: "liquor-prices",
    name: "Liquor price comparison",
    navLabel: "Liquor prices",
    seoTitle: "Compare BWS, Liquorland & Dan Murphy's Prices",
    titleLead: "Compare liquor prices",
    titleEmphasis: "with location in mind.",
    description:
      "Compare available liquor prices across BWS, Liquorland and Dan Murphy's, browse the stocked catalogue and build a reusable liquor list in Tallo.",
    intro:
      "Tallo brings the supported liquor catalogues into one searchable view. Compare available prices, browse by category and add products to a list before choosing a retailer.",
    theme: "lime",
    heroImage: "/screenshots/liquor-home.png",
    heroAlt:
      "Tallo liquor comparison showing BWS, Liquorland and Dan Murphy's",
    facts: [
      { value: "3", label: "liquor retailers" },
      { value: "Weekly", label: "displayed price refresh" },
      { value: "18+", label: "adults only" },
    ],
    steps: [
      {
        number: "01",
        title: "Search the stocked catalogue",
        description:
          "Find a product or browse beer and cider, wine, spirits, premixed drinks and zero-alcohol options.",
      },
      {
        number: "02",
        title: "Review available retailers",
        description:
          "Compare the displayed prices for BWS, Liquorland and Dan Murphy’s where the product is stocked.",
      },
      {
        number: "03",
        title: "Build a liquor list",
        description:
          "Save selected products to a list and review the available store totals before shopping.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/favourite-list.jpg",
        alt: "A saved list in the Tallo app",
        eyebrow: "Save for later",
        title: "Keep the regular order ready.",
        description:
          "Create a reusable list for favourite products, then bring it back when prices change or the next occasion comes around.",
      },
      {
        image: "/screenshots/my-list.png",
        alt: "A product list in Tallo",
        eyebrow: "List totals",
        title: "Move from one price to the full list.",
        description:
          "The cheapest bottle does not decide the cheapest order. Review the products together before choosing where to shop.",
      },
    ],
    limitationsTitle: "Liquor prices are especially location-dependent",
    limitations: [
      "Displayed liquor prices are refreshed weekly, but they can vary by state, store and location.",
      "Availability and local promotions can change after the latest refresh.",
      "A product must be stocked by more than one supported retailer to produce a direct multi-store comparison.",
      "Liquor content is intended for adults aged 18 and over. Drink responsibly.",
    ],
    faqs: [
      {
        question: "Which liquor stores does Tallo compare?",
        answer:
          "Tallo compares supported products across BWS, Liquorland and Dan Murphy’s.",
      },
      {
        question: "Are liquor prices the same across Australia?",
        answer:
          "Not always. Liquor prices and availability can vary by state, store and location, so check the price shown for your area.",
      },
      {
        question: "Can I make a liquor shopping list?",
        answer:
          "Yes. Products from the liquor catalogue can be added to a list and reviewed by supported retailer.",
      },
      {
        question: "Does Tallo include zero-alcohol products?",
        answer:
          "The liquor catalogue includes a zero-alcohol category where supported products are available.",
      },
    ],
    relatedFeatures: ["grocery-prices", "myshop"],
    relatedArticles: ["weekly-specials"],
  },
  {
    slug: "meal-planner",
    name: "Meal planner and recipes",
    navLabel: "Meal planner",
    seoTitle: "Meal Planner and Recipe App with Grocery Prices",
    titleLead: "Turn meal ideas into",
    titleEmphasis: "a priced weekly plan.",
    description:
      "Browse recipes, view matched ingredient prices, plan breakfast, lunch and dinner, create recipes and import supported links with Tallo.",
    intro:
      "Tallo connects recipes to the weekly shop. Browse a recipe, review matched ingredient prices, add what you need to My Shop and place meals into the week ahead.",
    theme: "mint",
    heroImage: "/screenshots/meal-planner.png",
    heroAlt: "A weekly meal plan in Tallo",
    facts: [
      { value: "7 days", label: "meal planning" },
      { value: "3", label: "daily meal slots" },
      { value: "Links", label: "supported recipe imports" },
    ],
    steps: [
      {
        number: "01",
        title: "Choose or create a recipe",
        description:
          "Browse Tallo recipes, create your own or import a supported recipe link into your cookbook.",
      },
      {
        number: "02",
        title: "Review ingredient matches",
        description:
          "See matched grocery products and available prices, then adjust a match where a different product suits you better.",
      },
      {
        number: "03",
        title: "Plan and shop",
        description:
          "Add meals to breakfast, lunch or dinner slots and send the required ingredients into My Shop.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/recipe-detail.png",
        alt: "A recipe in Tallo showing matched ingredient prices",
        eyebrow: "Priced recipes",
        title: "Know more before adding every ingredient.",
        description:
          "Recipe pages connect ingredient requests to available catalogue products so you can review the match and shop with clearer price context.",
      },
      {
        image: "/screenshots/recipe-import.png",
        alt: "Recipe import in Tallo",
        eyebrow: "Import a link",
        title: "Bring useful recipes into your own cookbook.",
        description:
          "Import from supported recipe websites and selected social or video links, then keep the structured recipe available with the rest of your collection.",
      },
    ],
    limitationsTitle: "Recipe pricing depends on good ingredient matches",
    limitations: [
      "Not every ingredient has an exact packaged equivalent across every supermarket.",
      "Variable-weight ingredients and quantities can make the final checkout amount differ from the displayed planning price.",
      "Imported recipes depend on the source page containing enough accessible recipe information.",
      "Review ingredient matches and quantities before adding a full recipe to My Shop.",
    ],
    faqs: [
      {
        question: "Can Tallo plan a full week of meals?",
        answer:
          "Yes. Meals can be added across the week in breakfast, lunch and dinner slots.",
      },
      {
        question: "Can I create my own recipes?",
        answer:
          "Yes. You can create and save personal recipes in your Tallo cookbook.",
      },
      {
        question: "Can Tallo import a recipe from a link?",
        answer:
          "Tallo supports imports from many recipe websites and selected social or video links. Some sources may not provide enough accessible information to import successfully.",
      },
      {
        question: "Can recipe ingredients be added to My Shop?",
        answer:
          "Yes. Matched ingredients can be added to My Shop for grocery-price comparison.",
      },
    ],
    relatedFeatures: ["myshop", "grocery-prices"],
    relatedArticles: ["how-to-save-money-groceries"],
  },
  {
    slug: "barcode-scanner",
    name: "Grocery barcode scanner",
    navLabel: "Barcode scanner",
    seoTitle: "Grocery Barcode Scanner and Price Comparison App",
    titleLead: "Scan the product in front of you.",
    titleEmphasis: "Compare from there.",
    description:
      "Scan common grocery barcodes to find products in Tallo, review available prices and add recognised items to My Shop or a reusable list.",
    intro:
      "The barcode scanner gives you a direct way into the product catalogue. Scan a packet from the pantry or aisle, open a recognised product and decide where it belongs in the shop.",
    theme: "blue",
    heroImage: "/screenshots/scanner.jpg",
    heroAlt: "The grocery barcode scanner in Tallo",
    facts: [
      { value: "Scan", label: "from pantry or aisle" },
      { value: "Compare", label: "recognised products" },
      { value: "Add", label: "missing barcodes for review" },
    ],
    steps: [
      {
        number: "01",
        title: "Allow camera access",
        description:
          "Open the scanner and point the camera at a supported grocery barcode.",
      },
      {
        number: "02",
        title: "Open the recognised product",
        description:
          "Review the catalogue result, available store prices and product details.",
      },
      {
        number: "03",
        title: "Contribute a missing barcode",
        description:
          "If the barcode is not recognised, submit a product or link the code to an existing product for review.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/product-detail.png",
        alt: "A recognised grocery product in Tallo",
        eyebrow: "Recognised",
        title: "Move from barcode to useful product detail.",
        description:
          "A successful scan opens the same product information used elsewhere in Tallo, including available prices and list actions.",
      },
      {
        image: "/screenshots/search.png",
        alt: "Product search results in Tallo",
        eyebrow: "Find an existing product",
        title: "Help connect a barcode without creating a duplicate.",
        description:
          "When a barcode is missing, search the existing catalogue first. Submitted contributions are reviewed before becoming catalogue data.",
      },
    ],
    limitationsTitle: "A scan is only as useful as the catalogue match",
    limitations: [
      "Camera permission is required to scan a physical barcode.",
      "Some retailer or multipack products can carry different legitimate barcodes.",
      "An unrecognised barcode does not mean the product is unavailable; it may need to be linked or added.",
      "Community barcode and product contributions are reviewed before they become trusted catalogue data.",
    ],
    faqs: [
      {
        question: "What happens when Tallo recognises a barcode?",
        answer:
          "Tallo opens the matching product so you can review available prices and add it to a list.",
      },
      {
        question: "What if a barcode is not recognised?",
        answer:
          "You can search for the existing product and submit the barcode link, or contribute a new product for review.",
      },
      {
        question: "Can I scan products from my pantry?",
        answer:
          "Yes. The scanner can be used on supported grocery barcodes at home or while shopping.",
      },
      {
        question: "Are contributed products added immediately?",
        answer:
          "Submissions are reviewed before they become trusted catalogue entries.",
      },
    ],
    relatedFeatures: ["grocery-prices", "myshop"],
    relatedArticles: ["how-to-save-money-groceries"],
  },
  {
    slug: "fuel-checker",
    name: "Nearby fuel prices",
    navLabel: "Fuel checker",
    seoTitle: "Find Nearby Fuel Prices in Australia with Tallo",
    titleLead: "See nearby fuel prices",
    titleEmphasis: "in a list or on the map.",
    description:
      "Use Tallo to view supported nearby fuel prices, filter by fuel type and distance, inspect freshness, save favourites and open directions.",
    intro:
      "Fuel Checker combines nearby station results with source-freshness information. Sort the list, switch to the map, inspect a station and open directions when you are ready to go.",
    theme: "dark",
    heroImage: "/screenshots/fuel-map.png",
    heroAlt: "Nearby fuel prices displayed on the Tallo fuel map",
    facts: [
      { value: "List", label: "price-led results" },
      { value: "Map", label: "nearby stations" },
      { value: "Freshness", label: "shown by state source" },
    ],
    steps: [
      {
        number: "01",
        title: "Choose fuel and distance",
        description:
          "Use your location, select the fuel type and set a useful search radius.",
      },
      {
        number: "02",
        title: "Compare list or map results",
        description:
          "Review station prices, distance and source freshness, with clustered map results where needed.",
      },
      {
        number: "03",
        title: "Save or navigate",
        description:
          "Keep useful stations as favourites, open station details or hand the location to your maps app for directions.",
      },
    ],
    showcases: [
      {
        image: "/screenshots/fuel-list.png",
        alt: "Nearby fuel prices shown as a list in Tallo",
        eyebrow: "List view",
        title: "Start with the number that matters.",
        description:
          "The list keeps price and distance easy to scan while preserving the freshness information supplied for the relevant state feed.",
      },
      {
        image: "/screenshots/fuel-map.png",
        alt: "Fuel stations and prices on a map in Tallo",
        eyebrow: "Map view",
        title: "Price makes more sense beside the route.",
        description:
          "Use the map to understand where the station sits, open a nearby result and decide whether the difference is worth the drive.",
      },
    ],
    limitationsTitle: "Fuel data is only useful when its freshness is visible",
    limitations: [
      "Fuel availability depends on supported state data feeds and your location.",
      "Some state feeds are close to real time while delayed sources are labelled with older freshness information.",
      "Pump prices can change after the source snapshot was collected.",
      "Location permission is required for nearby results; directions open in an external maps app.",
    ],
    faqs: [
      {
        question: "Does Tallo show fuel prices on a map?",
        answer:
          "Yes. Nearby supported stations can be viewed in a list or on a map.",
      },
      {
        question: "Can I choose a fuel type and distance?",
        answer:
          "Yes. Fuel Checker supports fuel-type and distance controls for nearby results.",
      },
      {
        question: "How current are the fuel prices?",
        answer:
          "Freshness depends on the relevant state source. Tallo labels results as recently updated or delayed where applicable.",
      },
      {
        question: "Can I save a petrol station?",
        answer:
          "Yes. Stations can be saved as favourites and reopened from the Tallo profile area.",
      },
    ],
    relatedFeatures: ["grocery-prices", "myshop"],
    relatedArticles: ["how-to-save-money-groceries"],
  },
];

export function getFeature(slug: string): FeatureRecord | undefined {
  return features.find((feature) => feature.slug === slug);
}

export function getRelatedFeatures(feature: FeatureRecord): FeatureRecord[] {
  return feature.relatedFeatures
    .map((slug) => getFeature(slug))
    .filter((related): related is FeatureRecord => related !== undefined);
}
