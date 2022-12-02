/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";

const Home: React.FC = () => {
    return (
        <div>
            <Header />

            <Hero />
        </div>
    );
};

export default Home;
