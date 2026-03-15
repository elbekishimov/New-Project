import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, Package, ShoppingCart, ArrowUpRight, 
  TrendingUp, Activity, Target
} from 'lucide-react';
// Grafiklar uchun: npm install recharts
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, Tooltip } from 'recharts';

export default function Dashboard() {
  const { t } = useTranslation();

  // 1. Indikatorlar uchun dummy ma'lumotlar
  const pieData = [
    { name: 'Sotilgan', value: 75, color: '#3b82f6' }, // Ko'k
    { name: 'Qolgan', value: 25, color: '#f1f5f9' },  // Kulrang
  ];

  const barData = [
    { name: 'Dush', value: 400 },
    { name: 'Sesh', value: 300 },
    { name: 'Chor', value: 500 },
    { name: 'Pay', value: 280 },
    { name: 'Jum', value: 590 },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900">{t('dashboard.title') || "Statistika"}</h1>
          <p className="text-slate-500 font-medium">Real vaqt rejimidagi indikatorlar.</p>
        </div>

        {/* 2. ASOSIY INDIKATORLAR (Progress Circle bilan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Progress Indikatori 1 */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Kunlik Maqsad</p>
              <h3 className="text-2xl font-black text-slate-900">75%</h3>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold mt-2">
                <TrendingUp size={14} /> +5% bugun
              </div>
            </div>
            <div className="w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={30} outerRadius={40} paddingAngle={5} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Progress Indikatori 2 */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Buyurtmalar</p>
              <h3 className="text-2xl font-black text-slate-900">45 ta</h3>
              <p className="text-xs text-slate-400 mt-2 font-medium">Oylik reja: 100 ta</p>
            </div>
            <div className="flex-1 max-w-[100px] ml-4">
               {/* Oddiy CSS Progress Line */}
               <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }}></div>
               </div>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl ml-4">
              <ShoppingCart size={20} />
            </div>
          </div>

          {/* Progress Indikatori 3 */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Faol Foydalanuvchilar</p>
              <h3 className="text-2xl font-black text-slate-900">1,234</h3>
              <div className="mt-2 flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">U</div>
                 ))}
                 <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">+8</div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* 3. KATTA GRAFIK INDIKATORI */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Activity className="text-blue-500" size={20} /> Haftalik Trafik
              </h2>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[10, 10, 10, 10]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* MAQSADLAR INDIKATORI */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-blue-400" size={20} /> Oylik Maqsad
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 font-medium">Sotuvlar</span>
                  <span className="font-bold">80%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[80%] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 font-medium">Mijozlar mamnuniyati</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[95%] shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                </div>
              </div>
            </div>
            <div className="mt-10 p-4 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed">
                Sizning oylik ko'rsatkichingiz o'tgan oyga nisbatan **15% yaxshiroq**. Shunday davom eting!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}