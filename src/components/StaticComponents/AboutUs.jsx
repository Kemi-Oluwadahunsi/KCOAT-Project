import { Link } from "react-router-dom";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scroll animation
    });
  };
  return (
    <div className="border-l-8 border-simple1 pt-[8rem] px-[20em] pb-[4em] text-justify flex flex-col gap-[2rem] font-oxygen text-categoryborder">
      <div className="flex flex-col gap-[2em]">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[2rem]">
            About US: “Expanding your fashion brand online”
          </h2>
          <p className="text-[1.2em]">
            Welcome to KCOAT, your one-stop shop for discovering and acquiring
            the perfect pieces to express your unique style with effortless
            confidence.
          </p>
          <p className="text-[1.2em]">
            We are passionate about fashion and believe that everyone deserves
            to feel empowered by the clothes they wear. That&apos;s why
            we&apos;ve meticulously curated a collection of high-quality pieces
            that are both stylish and versatile.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5em]">
            Here&apos;s what sets KCOAT apart:
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-[1.2em]">
              <strong>Effortless Discovery:</strong> Our user-friendly website
              and advanced search functionalities make finding the perfect
              outfit a breeze. Browse by category or product and get inspired by
              our curated collections.
            </p>
            <p className="text-[1.2em]">
              <strong>Unwavering Quality:</strong> We partner with talented
              designers and source garments made with exceptional materials and
              construction. You can feel confident knowing you&apos;re investing
              in pieces that will last.
            </p>
            <p className="text-[1.2em]">
              <strong>Empowering Style Expression:</strong> We go beyond just
              selling clothes. We offer styling tips, inspiration guides, and a
              platform for user-generated content to help you discover and
              express your unique fashion identity.
            </p>
          </div>
        </div>

        <p className="text-[1.2em]">
          We invite you to explore our collections, discover your perfect style,
          and join our vibrant community of fashion-forward individuals. Follow
          us on social media for styling tips, new arrivals, and exclusive
          promotions.
        </p>

        <p className="text-[1.2em]">
          Shop <Link to="/all-products" className="text-tertiary font-tertiary cursor-pointer" onClick={scrollToTop}>KCOAT </Link> today and embark on a journey of effortless
          style and confident expression.
        </p>
      </div>
    </div>
  );
};

<body></body>;

export default AboutUs;
