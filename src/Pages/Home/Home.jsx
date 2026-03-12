import { Link, Outlet } from "react-router-dom";
import unnamed from "../../IMG/unnamed.png"
import Practic from "./_components/Practic";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Medical Center Exterior"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            src={unnamed}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl space-y-8">

            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">
                2026-yilgi eng yaxshi RCM xizmati
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
              Advancing Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Through Innovation
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              Biz 1985-yildan beri tibbiy billing va moliya sohasida dunyo miqyosidagi aniqlikni taqdim etamiz. Tibbiyot muassasangiz daromadini professional darajaga ko'taramiz.
            </p>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white bg-white/5 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sky-400 font-bold text-xl">JCI</span>
                  <span className="text-[10px] leading-tight text-slate-400 uppercase font-bold">Accredited <br />Authority</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/5 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sky-400 font-bold text-xl">ISO</span>
                  <span className="text-[10px] leading-tight text-slate-400 uppercase font-bold">9001:2015 <br />Certified</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link to={'/sign-up'} className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-sky-500/30 transform hover:-translate-y-1">
                  Ishni Boshlash
                </Link>
                <Link to={'/about'} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all">
                  Biz haqimizda
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce-slow">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl space-y-4 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <p className="text-white font-medium">System Online</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-white">99.8%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-10">
        <Practic />
      </div>

      <main>
        <Outlet />
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}} />
    </>
  );
}