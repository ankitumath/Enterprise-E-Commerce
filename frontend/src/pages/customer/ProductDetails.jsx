import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProducts";
const ProductDetails = () => {

    const { id } = useParams();

   const { product, loading } = useProduct(id);

    if (loading) {

        return <h1>Loading...</h1>;

    }

    if (!product) {

        return <h1>Product not found.</h1>;

    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="grid md:grid-cols-2 gap-10">

                <img
                    src={
                        product.images?.[0]?.url ||
                        "https://via.placeholder.com/500"
                    }
                    alt={product.title}
                    className="rounded-xl shadow"
                />

                <div>

                    <h1 className="text-4xl font-bold">

                        {product.title}

                    </h1>

                    <h2 className="text-3xl mt-5 text-orange-600">

                        ₹ {product.price}

                    </h2>

                    <p className="mt-6 text-gray-600">

                        {product.description}

                    </p>

                    <button
                        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;