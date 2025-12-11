import { useOutletContext } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
    const { data } = useOutletContext();
    console.log(data);
    
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to FoodHub</h1>
                    <p>Your Gateway to Delicious Restaurant Management</p>
                    <button className="cta-button">Explore Restaurants</button>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop" 
                        alt="Delicious food"
                        onError={(e) => e.target.src = "https://via.placeholder.com/500x400?text=Restaurant+Food"}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose FoodHub?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <img 
                            src="https://images.unsplash.com/photo-1556910103-1c02745aefb4?w=300&h=300&fit=crop" 
                            alt="Easy Management"
                            onError={(e) => e.target.src = "https://via.placeholder.com/300x300?text=Easy+Management"}
                        />
                        <h3>Easy Management</h3>
                        <p>Manage all your restaurant operations in one place with our intuitive interface.</p>
                    </div>

                    <div className="feature-card">
                        <img 
                            src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=300&h=300&fit=crop" 
                            alt="Fast Delivery"
                            onError={(e) => e.target.src = "https://via.placeholder.com/300x300?text=Fast+Delivery"}
                        />
                        <h3>Quick Orders</h3>
                        <p>Process orders quickly and efficiently to keep your customers satisfied.</p>
                    </div>

                    <div className="feature-card">
                        <img 
                            src="https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=300&h=300&fit=crop" 
                            alt="Analytics"
                            onError={(e) => e.target.src = "https://via.placeholder.com/300x300?text=Analytics"}
                        />
                        <h3>Smart Analytics</h3>
                        <p>Track sales, inventory, and customer preferences with real-time analytics.</p>
                    </div>

                    <div className="feature-card">
                        <img 
                            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=300&fit=crop" 
                            alt="24/7 Support"
                            onError={(e) => e.target.src = "https://via.placeholder.com/300x300?text=Support"}
                        />
                        <h3>24/7 Support</h3>
                        <p>Our dedicated support team is always available to help you succeed.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Transform Your Restaurant?</h2>
                <p>Join thousands of restaurants already using FoodHub to grow their business.</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </section>
        </div>
    );
};

export default Home;