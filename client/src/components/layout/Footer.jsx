const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <h2 className="text-2xl font-bold">
          RentWise
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl">
          Helping renters make smarter decisions through
          transparent property insights, verified reviews,
          and rental intelligence.
        </p>

        <hr className="my-8 border-slate-700" />

        <div className="flex justify-between">

          <p className="text-gray-400">
            © 2026 RentWise. All rights reserved.
          </p>

          <p className="text-gray-400">
            Built using React & Node.js
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;