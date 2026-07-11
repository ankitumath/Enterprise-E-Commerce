const TrendingProducts = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Trending Products
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="border rounded-xl p-6">Product 1</div>
          <div className="border rounded-xl p-6">Product 2</div>
          <div className="border rounded-xl p-6">Product 3</div>
          <div className="border rounded-xl p-6">Product 4</div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;