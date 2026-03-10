import { Link } from 'react-router-dom';
import post5 from '../../IMG/post5.png'
export default function About() {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1">
                    <img
                        src={post5}
                        alt="About Medical Service"
                        className="w-full rounded-2xl shadow-xl"
                    />
                </div>

                <div className="flex-1 space-y-6 text-center md:text-left">

                    <h2 className="text-4xl font-bold text-slate-900">
                        About <span className="text-sky-500">Our Company</span>
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        We provide professional Revenue Cycle Management services for
                        healthcare providers. Our goal is to help clinics and hospitals
                        improve their billing process and increase their revenue.
                    </p>

                    <p className="text-slate-600 leading-relaxed">
                        Our team works with modern tools and efficient systems to
                        reduce claim errors and speed up payment processing.
                    </p>

                    <p className="text-slate-600 leading-relaxed">
                        We focus on accuracy, security, and fast support to ensure
                        the best service for our clients.
                    </p>

                    <Link to={'/aboutmore'} className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                        Learn More
                    </Link>

                </div>
            </div>
        </section>
    );
}