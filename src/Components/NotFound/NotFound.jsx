import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Animatsiya uchun
import { Home, ArrowLeft } from 'lucide-react'; // Ikonkalar uchun

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 overflow-hidden relative">
      
      {/* Orqa fondagi dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="text-center relative z-10">
        
        {/* 404 Raqami animatsiyasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-[12rem] md:text-[16rem] font-black text-slate-900 leading-none tracking-tighter select-none">
            404
          </h1>
          {/* Suzib yuruvchi kichik nuqta */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-200"
          ></motion.div>
        </motion.div>

        {/* Sarlavha */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-black mt-4 text-slate-800"
        >
          {t('notFound.title') || "Sahifa topilmadi"}
        </motion.h2>

        {/* Tavsif */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 mt-4 max-w-md mx-auto font-medium leading-relaxed"
        >
          {t('notFound.desc') || "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirib yuborilgan."}
        </motion.p>

        {/* Tugmalar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-200"
          >
            <Home size={20} />
            {t('notFound.button') || "Bosh sahifa"}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
          >
            <ArrowLeft size={20} />
            {t('common.back') || "Orqaga"}
          </button>
        </motion.div>

        {/* Error Code Tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]"
        >
          Error Status: Page Not Found
        </motion.div>

      </div>
    </div>
  );
}