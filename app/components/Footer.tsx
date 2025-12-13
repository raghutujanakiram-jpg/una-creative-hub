export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 bg-black">
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} UNA Creative Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
