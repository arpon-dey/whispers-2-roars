import bannerImage from '../../assets/bg.jpg';

const Benefits = () => {
    return (
        <div className="mx-auto" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="p-3">
                <h1 className="text-white text-center font-bold text-4xl">Discover the Advantages</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 px-8">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">For Developers</h2>
                        <p>
                            Our application simplifies coding, encourages collaboration among professionals, and ensures accuracy in the banking sector. Customizable and efficient, it optimizes tasks for various industries.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">For Corporate Professionals</h2>
                        <p>
                            The application centralizes tasks for professionals, facilitating seamless communication and collaboration. Reporting features provide teams with valuable insights for data-driven decisions and goal achievement.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">For Bankers</h2>
                        <p>
                            In the banking sector, our application is crucial for managing client interactions, transactions, and compliance. With reminders and prioritization, bankers stay organized, ensuring exceptional service and confident navigation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
