export default function Home() {
  return (
    <div className="container mx-auto px-5 space-y-20">
      {/* 1️ Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-lg text-gray-700">This is a simple Next.js Landing Page</p>
      </section>

      {/* 2️ About Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">About Us</h2>
        <p>We provide the best products for our customers with quality and reliability.</p>
      </section>

      {/* 3️ Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Features</h2>
        <ul className="list-disc ml-5">
          <li>Fast and responsive</li>
          <li>Easy to use</li>
          <li>Secure authentication</li>
        </ul>
      </section>

      {/* 4️ Services Section */} 
      <section>
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p>We offer product listing, details, and admin controls for logged-in users.</p>
      </section>

      {/* 5️ Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
        <p>"Excellent service and fast delivery!" - Customer A</p>
        <p>"I love the simplicity of this app." - Customer B</p>
      </section>

      {/* 6️ FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">FAQ</h2>
        <p>Q: Do I need an account to view items? <br /> A: No, you can view items without login.</p>
        <p>Q: Can I add items? <br /> A: Only after login.</p>
      </section>

      {/* 7️ Contact Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p>Email: contact@myapp.com</p>
        <p>Phone: +880 123456789</p>
      </section>
    </div>
  );
}
