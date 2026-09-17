import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const AccessLMS = () => {
  return (
    <section id="LMS" className="maxWSec w-full px-6 sm:px-12 py-12 flex">
      <div className="w-full flex bg-gradient-to-br from-main/10 via-sky-50 to-blue-50/40 rounded-3xl max-sm:flex-col border border-sky-100 shadow-sm overflow-hidden">
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 gap-4">
          <h2 className="h2 text-slate-900">
            Admissions and <br />
            <span className="text-main">Parent Support</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-[50ch] mb-4">
            Need help with admission, class information, or general school
            guidance? Reach out directly and our team will help you with the
            next step.
          </p>

          <div className="flex flex-row gap-4 mt-2 flex-wrap">
            <a href="/OnlineAdmission">
              <Button>
                <span>Open Admission Form</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>

            <a href="tel:03008847670">
              <Button
                btnType="custom"
                className="bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
              >
                <span>Call 0300-8847670</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>

        {/* Right Student Photo Showcase with Circular Logo Badge */}
        <div className="flex-1 min-h-[320px] relative overflow-hidden flex items-center justify-center p-6">
          <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
            <Image
              src="/tea_student2.jpg"
              alt="Tabassum Educational Alliance Students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Floating Logo Badge */}
            <div className="absolute top-4 right-4 bg-white/95 p-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white">
              <Image
                src="/tea-logo.png"
                width={80}
                height={80}
                alt="TEA Logo"
                className="w-12 h-12 rounded-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">Admissions Open</p>
              <h4 className="font-berlin text-xl font-bold">Tabassum Educational Alliance</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessLMS;
