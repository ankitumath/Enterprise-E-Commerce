const Newsletter = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Subscribe
        </h2>

        <p className="mt-4">
          Get updates about new arrivals and offers.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 rounded mt-6 w-full text-black"
        />
      </div>
    </section>
  );
};

export default Newsletter;