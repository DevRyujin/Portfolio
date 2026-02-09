const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-6 flex flex-col items-center text-sm text-muted-foreground">
        <p className="text-center">
          © {new Date().getFullYear()} | Jade Andrei Santos
        </p>
        {/* Optional: Add social links */}
        <div className="flex gap-4 mt-2">
          {/* Example:
          <a href="#" className="hover:text-white transition">GitHub</a>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
