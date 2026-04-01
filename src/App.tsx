/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  PenTool, 
  MapPin, 
  Layout, 
  MessageSquare, 
  Zap,
  AlertCircle,
  ChevronRight
} from "lucide-react";

const BRAND_PRIMARY = "#2563EB"; // Blue 600
const BRAND_DARK = "#0F172A";    // Slate 900
const BRAND_MUTED = "#F8FAFC";   // Slate 50
const BRAND_SUCCESS = "#10B981"; // Emerald 500

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-mono text-lg" style={{ backgroundColor: BRAND_PRIMARY }}>1</div>
            BRAND <span style={{ color: BRAND_PRIMARY }}>ONE</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-500">
            <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#pain-point" className="hover:text-blue-600 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-blue-600 transition-colors">Solution</a>
            <a href="#price" className="hover:text-blue-600 transition-colors">Price</a>
          </div>
          <a 
            href="https://open.kakao.com/o/sBRANDONE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            style={{ backgroundColor: BRAND_PRIMARY }}
          >
            상담 신청하기
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="w-12 h-[1px] bg-blue-600"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 font-mono">
                  Integrated Brand Management
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-slate-900">
                브랜드의 4대 핵심 접점을<br />
                <span className="text-blue-600">하나로 완성합니다.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light">
                홈페이지, 블로그, 플레이스, 오프라인 콘텐츠까지.<br />
                흩어진 브랜드의 인상을 하나의 흐름으로 연결하고 기획부터 제작까지 깊게 개입합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-xl text-lg font-bold text-white flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-blue-500/30"
                  style={{ backgroundColor: BRAND_PRIMARY }}
                >
                  서비스 시작하기 <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600">
                  포트폴리오 보기
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Pain Point Section */}
      <section id="pain-point" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6 text-slate-900">
                혹시 우리 브랜드도<br />
                <span className="text-blue-600">제각각인가요?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                디자인은 계속 만들고 있지만, 무엇을 어떤 방향으로 보여줄지 기준이 정리되어 있지 않아 브랜드가 일관되게 쌓이지 못하고 있지는 않으신가요?
              </p>
              <div className="space-y-6">
                {[
                  "채널마다 말투와 디자인이 달라서 고객이 혼란을 느낌",
                  "여러 업체와 작업하며 전체 브랜드 흐름이 정리되지 않음",
                  "방향은 있지만 실제 제작물에 반영되지 않는 괴리감",
                  "브랜드 확장 과정에서 표현이 점점 파편화됨"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${BRAND_PRIMARY}10`, color: BRAND_PRIMARY }}>
                      <AlertCircle size={20} />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                  <Monitor size={40} className="mb-6 text-blue-600" />
                  <span className="text-lg font-bold text-slate-900">홈페이지</span>
                </div>
                <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center translate-y-12">
                  <PenTool size={40} className="mb-6 text-blue-600" />
                  <span className="text-lg font-bold text-slate-900">블로그</span>
                </div>
                <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                  <MapPin size={40} className="mb-6 text-blue-600" />
                  <span className="text-lg font-bold text-slate-900">플레이스</span>
                </div>
                <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center translate-y-12">
                  <Layout size={40} className="mb-6 text-blue-600" />
                  <span className="text-lg font-bold text-slate-900">오프라인</span>
                </div>
              </div>
              {/* Connector lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-blue-500/50 z-20">
                ONE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">4대 핵심 접점 통합 관리 프로세스</h2>
              <p className="text-lg text-slate-500 leading-relaxed">기획에서 끝내지 않고 실제 운영물 제작까지 깊게 개입합니다.</p>
            </div>
            <div className="hidden md:block text-sm font-mono text-slate-400 uppercase tracking-widest">Intervention Strategy</div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: "현재 상태 점검",
                desc: "브랜드가 어떻게 보이고 있는지, 무엇이 흩어져 있는지 점검합니다.",
                icon: <Zap size={28} />
              },
              {
                title: "방향과 기준 정리",
                desc: "어떤 인상으로 남아야 하는지, 무엇을 보여줄지 기준을 세웁니다.",
                icon: <PenTool size={28} />
              },
              {
                title: "우선순위 연결",
                desc: "홈페이지, 콘텐츠 등 가장 시급한 접점부터 제작에 들어갑니다.",
                icon: <Monitor size={28} />
              },
              {
                title: "일관성 관리",
                desc: "결과물이 따로 놀지 않도록 전체 흐름을 다시 점검합니다.",
                icon: <CheckCircle2 size={28} />
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/20" style={{ backgroundColor: BRAND_MUTED, color: BRAND_PRIMARY }}>
                  {step.icon}
                </div>
                <div className="text-sm font-bold mb-3 text-blue-600 font-mono">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 rounded-[48px] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl font-bold mb-6">BRAND ONE의 차별점</h3>
              <div className="grid sm:grid-cols-1 gap-5">
                {[
                  "온라인과 오프라인의 접점을 따로 보지 않습니다.",
                  "브랜드 기획에서 끝나지 않고 실제 운영물까지 연결합니다.",
                  "보기 좋은 결과물보다 오래 유지되고 쌓일 수 있는 방향을 우선합니다."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: BRAND_SUCCESS }}>
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-base text-slate-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 shrink-0 text-center lg:text-right">
              <div className="text-5xl font-black italic opacity-10 mb-3 select-none">TRUST</div>
              <p className="text-slate-400 font-mono text-xs tracking-widest">SINCE 2026</p>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">고객 상태별 서비스 가이드</h2>
            <p className="text-lg text-slate-500 leading-relaxed">투명하고 직관적인 3단계 맞춤형 솔루션으로 브랜드의 가치를 극대화합니다.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                level: "STAGE 01",
                title: "방향성 수립",
                target: "브랜드 방향이 아직 분명하지 않은 상태",
                desc: "무엇을 어떤 방향으로 보여줘야 할지 기준부터 먼저 정리합니다.",
                price: "150만원 ~",
                accent: false
              },
              {
                level: "STAGE 02",
                title: "통합 재정비",
                target: "방향은 있지만 표현과 운영물이 제각각인 상태",
                desc: "흩어진 표현과 운영물을 핵심 접점부터 다시 하나로 정리합니다.",
                price: "별도 협의",
                accent: true
              },
              {
                level: "STAGE 03",
                title: "일관성 관리",
                target: "기준은 있지만 유지·확장 관리가 필요한 상태",
                desc: "새로운 작업물도 기존 흐름 안에서 이어질 수 있도록 관리합니다.",
                price: "월 50만원 ~",
                accent: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx}
                className={`p-10 rounded-[32px] flex flex-col border transition-all duration-500 ${plan.accent ? 'bg-white shadow-2xl shadow-blue-500/10 border-blue-100 scale-105 z-10' : 'bg-white border-slate-200'}`}
              >
                <div className="text-xs font-bold tracking-widest mb-4 font-mono" style={{ color: plan.accent ? BRAND_PRIMARY : '#94A3B8' }}>{plan.level}</div>
                <h3 className="text-2xl font-black mb-6 text-slate-900">{plan.title}</h3>
                <div className="p-4 rounded-xl bg-slate-50 text-xs font-bold mb-6 text-slate-500 border border-slate-100">
                  {plan.target}
                </div>
                <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow">
                  {plan.desc}
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Starting from</div>
                    <div className="text-2xl font-black text-slate-900">{plan.price}</div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${plan.accent ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center text-slate-400 font-medium">
            * 실제 견적은 프로젝트의 규모와 난이도에 따라 유동적으로 조정됩니다.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 rounded-[64px] relative overflow-hidden text-center bg-blue-600"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                당신의 브랜드는<br />
                <span className="text-blue-100">하나로 연결되어 있나요?</span>
              </h2>
              <p className="text-blue-100/70 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
                지금 바로 전문가와 상담하고 브랜드의 4대 핵심 접점을 완벽하게 통합하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://open.kakao.com/o/sBRANDONE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-xl text-xl font-bold text-blue-600 bg-white flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
                >
                  <MessageSquare size={24} /> 카카오톡 상담
                </a>
                <button className="px-10 py-5 rounded-xl text-xl font-bold text-white border border-white/30 hover:bg-white/10 transition-colors">
                  무료 진단 신청
                </button>
              </div>
            </div>
            
            {/* Abstract background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[120%] rounded-full bg-white blur-[120px]"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[120%] rounded-full bg-blue-900 blur-[120px]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono text-xl bg-slate-900">1</div>
                BRAND <span className="text-blue-600">ONE</span>
              </div>
              <p className="text-slate-500 max-w-xs leading-relaxed">
                브랜드의 4대 핵심 접점을 하나로 연결하여 비즈니스의 가치를 증명합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div>
                <h4 className="font-bold mb-6 text-slate-900">Service</h4>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li><a href="#" className="hover:text-blue-600">홈페이지 기획</a></li>
                  <li><a href="#" className="hover:text-blue-600">블로그 콘텐츠</a></li>
                  <li><a href="#" className="hover:text-blue-600">플레이스 관리</a></li>
                  <li><a href="#" className="hover:text-blue-600">오프라인 제작</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-slate-900">Company</h4>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold mb-6 text-slate-900">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><Monitor size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><PenTool size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><Zap size={18} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <div>© 2026 BRAND ONE. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
