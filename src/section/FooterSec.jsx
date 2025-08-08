const FooterSec = () => {
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          className="absolute top-0 object-contain mix-blend-lighten"
        />

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" />
          </div>

          <div className="social-btn">
            <img src="/images/insta.svg" />
          </div>
        </div>

        <div className="mt-40 px-5 md:px-10 flex gap-10 flex-col md:flex-row text-milk justify-between font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talks</p>
            </div>
          </div>

          <div className="md:max-w-lg ">
            <p>
              Get Exclusive Early Access and stay Informed About Product
              Updates, Events and More!
            </p>

            <div className="flex justify-between items-center border-b border-[#d9d9d9] py-5 md:mt-10">
              <input type="email" placeholder="Enter your email" className="w-full placeholder:font-sans " />
              <img src="/images/arrow.svg"/>
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 SPYLT - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSec;
 