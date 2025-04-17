import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wide">
                    <h1 className="hover:text-blue-300 transition">Atividade PWB - João Vitor</h1>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-blue-300 transition duration-300">Home</a>
                    <a href="/" className="hover:text-blue-300 transition duration-300">Sobre</a>
                    <a href="/" className="hover:text-blue-300 transition duration-300">Contato</a>
                </nav>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    <img
                        src="/images/menu.png"
                        alt="Menu"
                        className="w-6 h-6 max-w-[35px] max-h-[35px] transition-transform duration-300 transform hover:scale-110"
                    />
                </button>
            </div>

            {isOpen && (
                <div className="flex justify-center bg-gradient-menu py-4 space-x-6">
                    <a
                        href="/"
                        className="text-menu transition no-underline font-medium margin-rigth margin-left margin-top"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Página 'Sobre': não implementei!");
                        }}
                        className="text-menu transition no-underline font-medium margin-rigth margin-left margin-top"
                    >
                        Sobre
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Página 'Contato': não implementei!");
                        }}
                        className="text-menu transition no-underline font-medium margin-rigth margin-left margin-top"
                    >
                        Contato
                    </a>
                </div>
            )}

        </header>
    );
};

export default Header;
