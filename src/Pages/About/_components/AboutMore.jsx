import aboutImg from "../../../IMG/post3.png";

export default function AboutMore() {
    return (
        <>
            <section className="py-16 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1">
                        <img
                            src={aboutImg}
                            alt="Medical RCM Services"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>

                    <div className="flex-1 space-y-6 text-center md:text-left">

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Learn More <span className="text-sky-500">About Us</span>
                        </h1>

                        <p className="text-slate-600 leading-relaxed">
                            Our company provides professional Revenue Cycle Management
                            services for healthcare providers. We help clinics and
                            hospitals manage their billing processes more efficiently
                            and reduce administrative workload.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Our experienced team works with modern technologies and
                            secure systems to ensure that every claim is processed
                            correctly. We focus on accuracy, transparency, and
                            reliable communication with our clients.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            By improving billing workflows and reducing claim errors,
                            we help medical organizations increase revenue and
                            receive payments faster.
                        </p>

                    </div>

                </div>
            </section>


            <section className="py-10 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-sky-500 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-slate-600">
                            Our mission is to simplify medical billing processes and
                            help healthcare providers focus more on patient care.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-sky-500 mb-4">
                            Our Experience
                        </h3>
                        <p className="text-slate-600">
                            Our team has strong knowledge in medical billing,
                            insurance verification, and claims management.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-sky-500 mb-4">
                            Our Goal
                        </h3>
                        <p className="text-slate-600">
                            We aim to provide efficient, accurate, and reliable
                            Revenue Cycle Management services for every client.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}