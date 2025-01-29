import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [activeTab, setActiveTab] = useState('stopwatch');

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-center space-x-6">
                <Link
                    to="/stopwatch"
                    className={`px-4 py-2 rounded-md ${activeTab === 'stopwatch' ? 'bg-blue-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => setActiveTab('stopwatch')}
                >
                    Stopwatch
                </Link>
                <Link
                    to="/chessboard"
                    className={`px-4 py-2 rounded-md ${activeTab === 'chessboard' ? 'bg-blue-600' : 'hover:bg-gray-700'
                        }`}
                    onClick={() => setActiveTab('chessboard')}
                >
                    Chessboard
                </Link>
            </nav>
        </header>
    );
}

export default Header; 