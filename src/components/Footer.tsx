import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">ToxTweak</span>
            </div>
            <p className="text-gray-400">
              Advanced system optimization tools for gamers and power users.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/pro-details" className="hover:text-white transition-colors">Free Package</Link></li>
              <li><Link to="/ultimate-details" className="hover:text-white transition-colors">Ultimate Package</Link></li>
              <li><a href="#download" className="hover:text-white transition-colors">Coming soon</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 ToxTweak. All rights reserved.</p>
          <div className="flex gap-6">
<a href="https://discord.gg/toxtweaks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
  Discord
</a>
<a href="https://www.youtube.com/toxtweak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
  YouTube
</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
