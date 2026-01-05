import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

/* =========================
   IMAGE IMPORTS (VITE)
========================= */

// IIM Visit
import IIMvisit1 from "@/assets/gallery/IIMvisit_1.jpg";
import IIMvisit2 from "@/assets/gallery/IIMvisit_2.jpg";

// Founder / misc
import foundergoal from "@/assets/gallery/foundergoaljpg.jpg";

// Ewoke 24
import ewoke24_12jpg from "@/assets/gallery/ewoke24_12jpg.jpg";
import ewoke24_12 from "@/assets/gallery/ewoke24_12.jpg";
import ewoke24_11 from "@/assets/gallery/ewoke24_11.jpg";
import ewoke24_10 from "@/assets/gallery/ewoke24_10.jpg";
import ewoke24_9 from "@/assets/gallery/ewoke24_9.jpg";
import ewoke24_8 from "@/assets/gallery/ewoke24_8.jpg";
import ewoke24_7 from "@/assets/gallery/ewoke24_7.jpg";
import ewoke24_6 from "@/assets/gallery/ewoke24_6.jpg";
import ewoke24_5 from "@/assets/gallery/ewoke24_5.jpg";
import ewoke24_4 from "@/assets/gallery/ewoke24_4.jpg";
import ewoke24_3 from "@/assets/gallery/ewoke24_3.jpg";
import ewoke24_2 from "@/assets/gallery/ewoke24_2.jpg";
import ewoke24_1 from "@/assets/gallery/ewoke24_1.jpg";

// Ewoke (older)
import ewoke22 from "@/assets/gallery/ewoke22.jpg";
import ewoke_12 from "@/assets/gallery/ewoke_12.jpg";
import ewoke_11 from "@/assets/gallery/ewoke_11.jpg";
import ewoke_10 from "@/assets/gallery/ewoke_10.jpg";
import ewoke_9 from "@/assets/gallery/ewoke_9.jpg";
import ewoke_8 from "@/assets/gallery/ewoke_8.jpg";
import ewoke_7 from "@/assets/gallery/ewoke_7.jpg";
import ewoke_6 from "@/assets/gallery/ewoke_6.jpg";
import ewoke_5 from "@/assets/gallery/ewoke_5.jpg";
import ewoke_4 from "@/assets/gallery/ewoke_4.jpg";
import ewoke_3 from "@/assets/gallery/ewoke_3.jpg";
import ewoke_2 from "@/assets/gallery/ewoke_2.jpg";
import ewoke_1 from "@/assets/gallery/ewoke_1.jpg";

// Ecofusion
import ecofusion8 from "@/assets/gallery/ecofusion_8.jpg";
import ecofusion7 from "@/assets/gallery/ecofusion_7.jpg";
import ecofusion6 from "@/assets/gallery/ecofusion_6.jpg";
import ecofusion5 from "@/assets/gallery/ecofusion_5.jpg";
import ecofusion4 from "@/assets/gallery/ecofusion_4.jpg";
import ecofusion3 from "@/assets/gallery/ecofusion_3.jpg";
import ecofusion2 from "@/assets/gallery/ecofusion_2.jpg";

// BWU
import bwu12 from "@/assets/gallery/bwu_12.jpg";
import bwu11 from "@/assets/gallery/bwu_11.jpg";
import bwu10 from "@/assets/gallery/bwu_10.jpg";
import bwu9 from "@/assets/gallery/bwu_9.jpg";
import bwu8 from "@/assets/gallery/bwu_8.jpg";
import bwu7 from "@/assets/gallery/bwu_7.jpg";
import bwu6 from "@/assets/gallery/bwu_6.jpg";
import bwu5 from "@/assets/gallery/bwu_5.jpg";
import bwu4 from "@/assets/gallery/bwu_4.jpg";
import bwu3 from "@/assets/gallery/bwu_3.jpg";
import bwu2 from "@/assets/gallery/bwu_2.jpg";
import bwu1 from "@/assets/gallery/bwu_1.jpg";

// Misc
import dsc from "@/assets/gallery/DSC_0018 (2).jpg";

/* =========================
   DATA
========================= */

const galleryImages = [
  { id: 1, src: IIMvisit1, title: "IIM Visit", category: "events" },
  { id: 2, src: IIMvisit2, title: "IIM Visit", category: "events" },

  { id: 3, src: foundergoal, title: "Founders Goal", category: "team" },

  { id: 4, src: ewoke24_1, title: "Ewoke 2024", category: "events" },
  { id: 5, src: ewoke24_2, title: "Ewoke 2024", category: "events" },
  { id: 6, src: ewoke24_3, title: "Ewoke 2024", category: "events" },
  { id: 7, src: ewoke24_4, title: "Ewoke 2024", category: "events" },
  { id: 8, src: ewoke24_5, title: "Ewoke 2024", category: "events" },
  { id: 9, src: ewoke24_6, title: "Ewoke 2024", category: "events" },
  { id: 10, src: ewoke24_7, title: "Ewoke 2024", category: "events" },
  { id: 11, src: ewoke24_8, title: "Ewoke 2024", category: "events" },
  { id: 12, src: ewoke24_9, title: "Ewoke 2024", category: "events" },
  { id: 13, src: ewoke24_10, title: "Ewoke 2024", category: "events" },
  { id: 14, src: ewoke24_11, title: "Ewoke 2024", category: "events" },
  { id: 15, src: ewoke24_12, title: "Ewoke 2024", category: "events" },
  { id: 16, src: ewoke24_12jpg, title: "Ewoke 2024", category: "events" },

  { id: 17, src: ewoke22, title: "Ewoke 2022", category: "events" },

  { id: 18, src: ewoke_1, title: "Ewoke", category: "events" },
  { id: 19, src: ewoke_2, title: "Ewoke", category: "events" },
  { id: 20, src: ewoke_3, title: "Ewoke", category: "events" },
  { id: 21, src: ewoke_4, title: "Ewoke", category: "events" },
  { id: 22, src: ewoke_5, title: "Ewoke", category: "events" },
  { id: 23, src: ewoke_6, title: "Ewoke", category: "events" },
  { id: 24, src: ewoke_7, title: "Ewoke", category: "events" },
  { id: 25, src: ewoke_8, title: "Ewoke", category: "events" },
  { id: 26, src: ewoke_9, title: "Ewoke", category: "events" },
  { id: 27, src: ewoke_10, title: "Ewoke", category: "events" },
  { id: 28, src: ewoke_11, title: "Ewoke", category: "events" },
  { id: 29, src: ewoke_12, title: "Ewoke", category: "events" },

  { id: 30, src: ecofusion2, title: "Ecofusion", category: "events" },
  { id: 31, src: ecofusion3, title: "Ecofusion", category: "events" },
  { id: 32, src: ecofusion4, title: "Ecofusion", category: "events" },
  { id: 33, src: ecofusion5, title: "Ecofusion", category: "events" },
  { id: 34, src: ecofusion6, title: "Ecofusion", category: "events" },
  { id: 35, src: ecofusion7, title: "Ecofusion", category: "events" },
  { id: 36, src: ecofusion8, title: "Ecofusion", category: "events" },

  { id: 37, src: bwu1, title: "BWU Event", category: "events" },
  { id: 38, src: bwu2, title: "BWU Event", category: "events" },
  { id: 39, src: bwu3, title: "BWU Event", category: "events" },
  { id: 40, src: bwu4, title: "BWU Event", category: "events" },
  { id: 41, src: bwu5, title: "BWU Event", category: "events" },
  { id: 42, src: bwu6, title: "BWU Event", category: "events" },
  { id: 43, src: bwu7, title: "BWU Event", category: "events" },
  { id: 44, src: bwu8, title: "BWU Event", category: "events" },
  { id: 45, src: bwu9, title: "BWU Event", category: "events" },
  { id: 46, src: bwu10, title: "BWU Event", category: "events" },
  { id: 47, src: bwu11, title: "BWU Event", category: "events" },
  { id: 48, src: bwu12, title: "BWU Event", category: "events" },

  { id: 49, src: dsc, title: "EDC Moments", category: "team" },
];

const categories = ["all", "events", "team"];

/* =========================
   COMPONENT
========================= */

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            GALLERY
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments captured from our events and team activities at EDC IIEST Shibpur.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index % 3 === 0 ? "h-64" : index % 3 === 1 ? "h-80" : "h-48"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4" onClick={() => setSelectedImage(null)}>
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] rounded-xl"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
