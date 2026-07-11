const categories = [
  "Electronics",
  "Fashion",
  "Shoes",
  "Books",
  "Gaming",
  "Furniture",
];

function Categories() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6">
        Categories
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-blue-100 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;