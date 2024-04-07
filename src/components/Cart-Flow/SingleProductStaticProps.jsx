import axios from "axios";

export async function getStaticPaths() {
  // Fetch all product IDs from your API
  const response = await axios.get(`https://kcoat.onrender.com/products`);
  const products = response.data;

  // Generate paths for each product ID
  const paths = products.map((product) => ({
    params: { Productid: product.id.toString() },
  }));

  return {
    paths,
    fallback: true, // true enables incremental static regeneration
  };
}

export async function getStaticProps({ params }) {
  // Fetch product details based on the Productid param
  const { Productid } = params;
  try {
    const response = await axios.get(
      `https://kcoat.onrender.com/products/${Productid}`
    );
    const product = response.data;
    return {
      props: {
        product,
      },
      revalidate: 60, // Re-generate the page every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}
