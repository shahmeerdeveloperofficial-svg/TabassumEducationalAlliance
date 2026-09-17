import HeroHeader from "@/components/HeroHeader";

const ContactUs = () => {
  return (
    <main>
      <HeroHeader
        title={"Contact Us"}
        description="Tabassum Educational Alliance Regd. — Since 2008"
      />

      <section className="maxWSec px-6 sm:px-12 py-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-grayL p-8 bg-white shadow-sm">
          <h2 className="h3 mb-4">Contact Information</h2>
          <div className="space-y-4 text-base sm:text-lg text-grayD">
            <p>
              <span className="font-semibold text-dark">Network:</span>{" "}
              Tabassum Educational Alliance Regd.
            </p>
            <p>
              <span className="font-semibold text-dark">Tagline:</span>{" "}
              The Fastest Growing Educational Network All Over Pakistan (Since 2008)
            </p>
            <p>
              <span className="font-semibold text-dark">Head Office:</span>{" "}
              St.4 Mian Colony, Beghum Kot, Shahdara, Lahore
            </p>
            <p>
              <span className="font-semibold text-dark">Phone:</span>{" "}
              <a href="tel:03008847670" className="text-main hover:underline">
                0300-8847670
              </a>{" "}
              /{" "}
              <a href="tel:03338133889" className="text-main hover:underline">
                0333-8133889
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">Email:</span>{" "}
              <a
                href="mailto:tabassumeducationalalliance1@gmail.com"
                className="text-main hover:underline break-all"
              >
                tabassumeducationalalliance1@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/share/1JgUk1Qoy7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline break-all"
              >
                Official Facebook Page
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">YouTube:</span>{" "}
              <a
                href="https://youtube.com/@tabassumeducationalalliancereg?si=sm-YKvKdEI8tg5nf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline break-all"
              >
                Official YouTube Channel
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-sec text-light p-8 flex flex-col justify-between">
          <div>
            <h2 className="h3 mb-4">Admissions & Alliance Network</h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/90">
              For franchise inquiries, project collaborations, school admissions,
              or skills training registration across our nationwide institutions,
              get in touch with our central head office in Lahore.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/OnlineAdmission"
              className="rounded-full bg-main px-5 py-3 font-medium text-white hover:opacity-90 transition"
            >
              Online Admission
            </a>
            <a
              href="tel:03008847670"
              className="rounded-full border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Call 0300-8847670
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
