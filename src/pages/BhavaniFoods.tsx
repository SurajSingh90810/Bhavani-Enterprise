import { useState, useEffect, type FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCertificate,
  FaBuilding,
  FaRegCalendarCheck,
} from "react-icons/fa";

// 1. IMPORT THE LOGO HERE (Adjust the path if your component is in a different folder)
import logoImg from "../assets/logo.png";

// --- 3-COLOR PALETTE ---
const colors = {
  white: "#FFFFFF",
  dark: "#1F2937",
  accent: "#CC0000",
};

const BhavaniFoods = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. CAROUSEL DATA
  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1920",
      title: "Purity In Every Drop",
      sub: "Premium refined oils processed for a healthier heart and superior taste in every meal.",
    },
    {
      url: "https://www.dineshflourmills.com/cdn/shop/files/Basmati_Rice_6.png?v=1773821286",
      title: "Finest Basmati Grains",
      sub: "Long-grain aromatic rice, aged naturally to bring a touch of perfection to your dining table.",
    },
    {
      url: "https://m.media-amazon.com/images/I/81kJKy2+faL.jpg",
      title: "Golden Sunflower Choice",
      sub: "Light, healthy, and enriched with Vitamin A & D to support your family's overall wellness.",
    },
    {
      url: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "The Heart of Tradition",
      sub: "Sourcing only the finest paddy from local farms to ensure an authentic and rich flavor.",
    },
    {
      url: "https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Trusted Quality Control",
      sub: "Strict testing standards at Bhavani Enterprise to guarantee 100% pure and safe results.",
    },
  ];

  // 2. KITCHEN ITEMS
  const kitchenItems = [
    {
      name: "Premium Refined Sunflower Oil",
      desc: "Our signature Sunflower oil is designed for modern health-conscious kitchens. It features a high smoke point perfect for deep frying while remaining low in saturated fats. Enriched with natural antioxidants, it helps maintain lower cholesterol levels and ensures that the natural aroma of your ingredients remains the star of the dish without any greasy aftertaste.",
      img: "https://t3.ftcdn.net/jpg/01/66/19/74/360_F_166197465_Cn1NwH2TL88xid0w3iED4flIKYLChy5j.jpg",
    },
    {
      name: "Aged XXL Long Grain Basmati",
      desc: "Bhavani’s XXL Basmati is the gold standard for celebrations. Sourced from the foothills of the Himalayas, every grain is aged for a minimum of 24 months to achieve its characteristic sweet aroma and slender length. When cooked, the grains stay separate and fluffy, making it the absolute best choice for royal biryanis, aromatic pulaos, and daily steam rice.",
      img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=800",
    },
    {
      name: "Kachi Ghani Mustard Oil",
      desc: "Experience the sharp, authentic pungency of traditional cold-pressed mustard oil. We use a slow-extraction process that preserves the natural vitamins and essential minerals often lost in industrial heat processing. It is not just an oil but a wellness supplement that aids digestion, improves circulation, and brings that unmistakable local flavor to your traditional curries.",
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/38980cd2-ef8d-4502-bab0-e36a157fa2ef.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    },
    {
      name: "Pure Traditional Sona Masoori",
      desc: "A lightweight and aromatic medium-grain rice that is a staple for daily nutrition. Our Sona Masoori is double-polished to ensure every grain is clean and consistent. It is low in starch and easy to digest, making it an ideal choice for the entire family, from children to elders. We ensure that our milling process retains the natural nutrients of the grain.",
      img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800",
    },
  ];

  // AUTO-CAROUSEL LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // SMOOTH SCROLL FUNCTION
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Form Submission Handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success(
      "Thank you for filling the form, we will shortly connect with you.",
      {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: colors.dark,
          color: colors.white,
          fontWeight: "bold",
          borderRadius: "1rem",
        },
      },
    );

    e.currentTarget.reset();
  };

  const navLinks = ["HOME", "ABOUT", "OIL RANGE", "RICE VARIETIES", "QUALITY"];

  const getSectionId = (link: string) => {
    if (link === "HOME") return "hero";
    if (link === "ABOUT") return "about";
    return "kitchen";
  };

  return (
    <div
      className="font-sans min-h-screen"
      style={{ backgroundColor: colors.white }}
    >
      <Toaster />

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between">
          {/* Logo Area */}
          <div
            className="flex flex-col leading-none cursor-pointer z-50"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="flex items-center gap-2">
              <img
                src={logoImg} // 2. USE THE IMPORTED VARIABLE HERE
                alt="Logo"
                className="h-12 md:h-10 w-auto"
              />
              <span
                className="text-2xl md:text-3xl font-black uppercase tracking-tight"
                style={{ color: colors.accent }}
              >
                GOALDEX
              </span>
            </div>
          </div>

          {/* Desktop Navigation Area */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(getSectionId(link))}
                className="text-[13px] font-black tracking-widest uppercase hover:opacity-60 transition"
                style={{ color: colors.dark }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[13px] font-black tracking-widest uppercase hover:opacity-60 transition"
              style={{ color: colors.dark }}
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: colors.dark }}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-white shadow-lg border-b border-gray-100 lg:hidden flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(getSectionId(link))}
                className="text-[15px] font-black tracking-widest uppercase hover:opacity-60 transition"
                style={{ color: colors.dark }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[15px] font-black tracking-widest uppercase hover:opacity-60 transition"
              style={{ color: colors.dark }}
            >
              CONTACT
            </button>
          </div>
        )}
      </header>

      {/* --- HERO CAROUSEL --- */}
      <section
        id="hero"
        className="relative h-[85vh] w-full overflow-hidden pt-[90px] bg-[#111]"
      >
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
            }}
          >
            <img
              src={slide.url}
              className="w-full h-full object-cover object-center"
              alt={slide.title}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4 mt-16 md:mt-0">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-none uppercase drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-2xl font-medium opacity-90 max-w-2xl mx-auto drop-shadow-md">
                  {slide.sub}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {carouselImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="h-1.5 cursor-pointer transition-all duration-500 rounded-full"
              style={{
                width: i === currentSlide ? "32px" : "16px",
                backgroundColor:
                  i === currentSlide ? colors.white : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </section>

      {/* --- ABOUT US / MSME SECTION --- */}
      <section
        id="about"
        className="bg-white py-16 md:py-24 border-b border-gray-100 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* About Text Content */}
            <div className="lg:col-span-5">
              <span
                className="text-sm font-black tracking-[0.3em] uppercase mb-4 block"
                style={{ color: colors.accent }}
              >
                About Our Enterprise
              </span>
              <h2
                className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase"
                style={{ color: colors.dark }}
              >
                Certified Quality & Trust
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium mb-6">
                Operating as <strong>Bhavani Services</strong>, we are an
                officially recognized micro-enterprise proudly registered under
                the Ministry of Micro, Small and Medium Enterprises (MSME),
                Government of India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium mb-6">
                Since our commencement in April 2022, we have been dedicated to
                maintaining rigorous national trading standards. Our primary
                focus is the retail distribution of high-quality food products,
                guaranteeing purity from our store to your kitchen table.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8">
                Situated in the heart of Surat, Gujarat, we operate with a
                commitment to priority sector values, ensuring transparency and
                trust in every transaction.
              </p>
            </div>

            {/* Certificate Data Card */}
            <div className="lg:col-span-7 bg-gray-50 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200 relative overflow-hidden">
              {/* Decorative Icon */}
              <FaCertificate
                className="absolute -top-10 -right-10 text-[12rem] opacity-5 pointer-events-none"
                style={{ color: colors.dark }}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-gray-300 pb-6 relative z-10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                  alt="Gov of India"
                  className="h-14 w-auto opacity-80"
                />
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight"
                    style={{ color: colors.dark }}
                  >
                    Udyam Registration
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mt-1">
                    Ministry of Micro, Small & Medium Enterprises
                  </p>
                </div>
              </div>

              {/* Core Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 relative z-10 mb-8">
                <div className="col-span-2 sm:col-span-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Registration Number
                  </p>
                  <p
                    className="text-lg sm:text-xl font-black uppercase tracking-wide"
                    style={{ color: colors.accent }}
                  >
                    UDYAM-GJ-22-0144173
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Enterprise Name
                  </p>
                  <p
                    className="text-sm sm:text-base font-bold uppercase"
                    style={{ color: colors.dark }}
                  >
                    Bhavani Services
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Enterprise Type
                  </p>
                  <p
                    className="text-sm sm:text-base font-bold uppercase"
                    style={{ color: colors.dark }}
                  >
                    Micro
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Major Activity
                  </p>
                  <p
                    className="text-sm sm:text-base font-bold uppercase"
                    style={{ color: colors.dark }}
                  >
                    Trading
                  </p>
                </div>
              </div>

              {/* Timeline & Category */}
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm mb-8 relative z-10">
                <h4
                  className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2"
                  style={{ color: colors.dark }}
                >
                  <FaRegCalendarCheck className="text-gray-400" /> Key Dates &
                  Info
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Incorporation
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.dark }}
                    >
                      10/04/2022
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Commencement
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.dark }}
                    >
                      10/04/2022
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Registration
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.dark }}
                    >
                      21/04/2022
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Social Category
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors.dark }}
                    >
                      SC
                    </p>
                  </div>
                </div>
              </div>

              {/* NIC Codes Section */}
              <div
                className="relative z-10 mb-8 border-l-4 pl-4"
                style={{ borderColor: colors.accent }}
              >
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                  National Industry Classification
                </p>
                <ul className="space-y-3">
                  <li>
                    <span
                      className="text-sm font-bold block"
                      style={{ color: colors.dark }}
                    >
                      NIC 2-Digit:{" "}
                      <span className="font-medium text-gray-600">
                        47 - Retail trade, except of motor vehicles &
                        motorcycles
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-sm font-bold block"
                      style={{ color: colors.dark }}
                    >
                      NIC 4-Digit:{" "}
                      <span className="font-medium text-gray-600">
                        4721 - Retail sale of food in specialized stores
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-sm font-bold block"
                      style={{ color: colors.dark }}
                    >
                      NIC 5-Digit:{" "}
                      <span className="font-medium text-gray-600">
                        47219 - Retail sale of other food products n.e.c.
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Admin Info */}
              <div className="flex flex-col sm:flex-row justify-between pt-6 border-t border-gray-300 relative z-10 gap-4">
                <div className="flex items-start gap-2">
                  <FaBuilding className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      District Industries Centre
                    </p>
                    <p
                      className="text-xs font-bold uppercase"
                      style={{ color: colors.dark }}
                    >
                      Surat (Gujarat)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaBuilding className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      MSME-DFO
                    </p>
                    <p
                      className="text-xs font-bold uppercase"
                      style={{ color: colors.dark }}
                    >
                      Ahmedabad (Gujarat)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FRESH FROM OUR KITCHEN --- */}
      <section
        id="kitchen"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4"
              style={{ color: colors.dark }}
            >
              Fresh from Our Kitchen
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
              Bhavani Enterprise brings you a curated selection of cooking
              essentials. From the golden clarity of our refined oils to the
              long-grain purity of our basmati, we ensure your kitchen is always
              stocked with the best.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-black tracking-widest uppercase flex items-center group"
            style={{ color: colors.accent }}
          >
            View All Products{" "}
            <span className="ml-2 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {kitchenItems.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-2xl aspect-[16/10] mb-6 md:mb-8 group bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="px-2">
                <h3
                  className="text-2xl md:text-3xl font-black tracking-tight mb-3 md:mb-4 uppercase"
                  style={{ color: colors.dark }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.accent }}
                  ></div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
                    100% Purity Certified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT PAGE SECTION --- */}
      <section
        id="contact"
        className="bg-gray-50 py-16 md:py-24 border-t border-gray-100 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[4rem] shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 md:mb-8 uppercase">
                Direct Inquiry
              </h2>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 md:py-5 bg-gray-50 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-red-500 font-bold"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Contact No"
                    className="w-full px-6 py-4 md:py-5 bg-gray-50 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-red-500 font-bold"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 md:py-5 bg-gray-50 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-red-500 font-bold"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full px-6 py-4 md:py-5 bg-gray-50 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-red-500 font-bold"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-5 md:py-6 rounded-xl md:rounded-2xl text-white font-black tracking-widest uppercase transition-all hover:brightness-110 active:scale-95 shadow-xl"
                  style={{ backgroundColor: colors.accent }}
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="py-6 md:py-10">
              <span
                className="text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-4 block"
                style={{ color: colors.accent }}
              >
                Bhavani Services
              </span>
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 md:mb-8"
                style={{ color: colors.dark }}
              >
                Delivering <br /> Purity Daily.
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium mb-8 md:mb-12">
                For over two decades, we have been the silent strength behind
                every delicious meal in Surat. Our commitment to high-quality
                oil and rice remains unwavering.
              </p>

              <div className="space-y-4 md:space-y-6">
                <p
                  className="text-base md:text-lg font-bold flex items-start gap-3"
                  style={{ color: colors.dark }}
                >
                  <FaMapMarkerAlt
                    className="text-xl mt-1 flex-shrink-0"
                    style={{ color: colors.accent }}
                  />
                  <span>
                    Headquarters: 240 Bhavani Services, Soham Arcade, Gree City
                    Road Pal, Surat, Gujarat, India - Pin 395009
                  </span>
                </p>
                <p
                  className="text-base md:text-lg font-bold flex items-center gap-3"
                  style={{ color: colors.dark }}
                >
                  <FaPhoneAlt
                    className="text-xl flex-shrink-0"
                    style={{ color: colors.accent }}
                  />
                  Wholesale & Mobile: +91 7434050460
                </p>
                <p
                  className="text-base md:text-lg font-bold flex items-center gap-3 break-all"
                  style={{ color: colors.dark }}
                >
                  <FaEnvelope
                    className="text-xl flex-shrink-0"
                    style={{ color: colors.accent }}
                  />
                  Contact: kashisheer@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Block Footnote (Red Version) */}
      <div className="py-8 md:py-12 text-center bg-black text-[#FF0000] text-[16px] sm:text-[20px] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase px-4">
        © {new Date().getFullYear()} Bhavani Services • Tradition of Trust
      </div>
    </div>
  );
};

export default BhavaniFoods;
