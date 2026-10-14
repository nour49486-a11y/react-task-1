import { createRoot } from "react-dom/client";
import "./index.css";
import "./animations.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

createRoot(document.getElementById("root")).render(
  <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <div className="flex items-center md:pl-10">
            <img className="pt-3" src="/public/Background.png" alt="Background" />
            <h1 className="mb-2 text-[#222222] font-bold text-[20px]">
              Gourmet Bistro
            </h1>
          </div>

          <input id="menu-toggle" type="checkbox" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer select-none text-3xl text-[#222222] md:hidden"
          >
            ☰
          </label>

          <nav className="order-last hidden w-full flex-col items-center gap-4 pb-2 peer-checked:flex md:order-0 md:flex md:w-auto md:flex-row md:gap-8 md:pb-0">
            <a
              href=""
              className="text-gray-700 hover:text-[#FF6B35] active:text-[#FF6B35] transition-colors"
            >
              Home
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-[#FF6B35] active:text-[#FF6B35] transition-colors"
            >
              Menu
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-[#FF6B35] active:text-[#FF6B35] transition-colors"
            >
              Our Story
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-[#FF6B35] active:text-[#FF6B35] transition-colors"
            >
              Gallery
            </a>
          </nav>

          <button className="hidden md:block px-6 py-2.5 rounded-[33554400px] bg-[#FF6B35] text-[white] font-semibold text-[16px] font-[Poppins] md:mr-8 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FF6B35]/30 active:scale-95">
            Book a Table
          </button>
        </div>
      </div>
    </header>

    <div
      style={{ backgroundImage: `url('/Container.png')` }}
      className="bg-cover mt-20 bg-center w-full h-160 pt-28 py-16 px-5 md:h-230.25 flex flex-col items-center justify-center"
    >
      <div className="flex max-w-full flex-col">
        <h1
          style={{ "--delay": "100ms" }}
          className="hero-in mb-4 w-fit bg-[#FF6B351A] text-[#FF6B35] py-1.5 px-4 rounded-[33554400px] text-[14px] font-bold leading-5"
        >
          THE ART OF DINING
        </h1>
        <p
          style={{ "--delay": "250ms" }}
          className="hero-in mb-2 font-bold text-4xl sm:text-6xl lg:text-[72px] text-[#FFFFFF] leading-tight lg:leading-22.5"
        >
          Elevated culinary <br className="hidden sm:block" />
          <span className="text-[#FF6B35]">experiences</span> for{" "}
          <br className="hidden sm:block" /> every palate.
        </p>
        <h2
          style={{ "--delay": "400ms" }}
          className="hero-in mb-8 md:mb-10.25 font-normal text-base md:text-[20px] text-[#E5E7EB] leading-7 md:leading-[32.5px]"
        >
          Discover a symphony of flavors crafted with locally{" "}
          <br className="hidden md:block" /> sourced ingredients and exceptional
          passion.
        </h2>
        <div
          style={{ "--delay": "550ms" }}
          className="hero-in flex flex-col gap-4 sm:flex-row"
        >
          <button className="flex gap-2 justify-center items-center bg-[#FF6B35] py-4 px-8 text-[#FFFFFF] rounded-2xl font-semibold leading-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FF6B35]/30 active:scale-95">
            <img src="/public/SVG.png" alt="" />
            View Menu
          </button>
          <button className="flex gap-2 justify-center items-center border border-[#FFFFFF33] bg-[#FFFFFF1A] py-4 px-8 text-[#FFFFFF] rounded-2xl font-semibold leading-6 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFFFFF33] active:scale-95">
            <img src="/public/book.png" alt="" />
            Book a Table
          </button>
        </div>
        <div
          style={{ "--delay": "700ms" }}
          className="hero-in flex flex-wrap gap-4 items-center mt-10 md:mt-12"
        >
          <img src="/public/pepole.png" alt="" />
          <p className="font-normal text-[16px] leading-6 text-[#ffffff]">
            <span className="font-bold text-[16px] leading-6 text-[#ffffff]">
              4.9-5
            </span>{" "}
            from over 2,000+ happy diners
          </p>
        </div>
      </div>
    </div>

    <div className="my-16 md:my-32 container mx-auto px-4">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-20">
        <div className="reveal reveal-left w-full max-w-142">
          <div className="group overflow-hidden rounded-4xl shadow-xl">
            <img
              className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
              src="/public/33790f3c861fa0994c4ae2f204d8b9f6c24d557c.png"
              alt=""
            />
          </div>
        </div>
        <div className="reveal reveal-right flex flex-col justify-center">
          <h1 className="mb-6 font-bold text-3xl md:text-5xl text-[#222222] leading-tight xl:leading-15">
            Crafting stories on <br className="hidden md:block" /> every plate
            since <span className="font-bold text-[#FF6B35]">2008</span>.
          </h1>
          <p className="mb-6 font-normal text-base md:text-[18px] text-[#6B7280] leading-7 md:leading-[29.25px]">
            Gourmet Bistro was born from a simple vision: to create a
            <br className="hidden xl:block" /> space where culinary excellence
            meets genuine hospitality. <br className="hidden xl:block" /> Our
            journey began in a small kitchen with big dreams, focusing{" "}
            <br className="hidden xl:block" /> on the purity of ingredients and
            the joy of shared meals.
          </p>
          <p className="mb-6 font-normal text-base md:text-[18px] text-[#6B7280] leading-7 md:leading-[29.25px]">
            Today, we continue that legacy, blending traditional{" "}
            <br className="hidden xl:block" /> techniques with modern innovation
            to bring you a menu that <br className="hidden xl:block" />{" "}
            celebrates the best of the season.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="reveal flex gap-3" style={{ "--delay": "200ms" }}>
              <div>
                <img src="/public/Overlay.svg" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-4 leading-6">Fresh Harvest</h1>
                <p className="font-normal text-[14px] leading-5">
                  Daily sourced organic <br /> ingredients.
                </p>
              </div>
            </div>
            <div className="reveal flex gap-3" style={{ "--delay": "350ms" }}>
              <div>
                <img src="/public/Overlay (1).svg" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-4 leading-6">Expert Chefs</h1>
                <p className="font-normal text-[14px] leading-5">
                  Award-winning culinary team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="my-16 md:my-32 container mx-auto px-4 flex flex-col gap-10 md:gap-16 justify-center items-center">
      <div className="reveal flex flex-col items-center gap-6">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-12 text-center">
          Visual Feast
        </h1>
        <p className="font-medium text-base md:text-[18px] leading-7 text-[#6B7280] text-center">
          A glimpse into our kitchen and the vibrant atmosphere we've created
          for <br className="hidden md:block" /> you.
        </p>
      </div>

      <div className="flex w-full flex-col xl:flex-row xl:w-auto gap-6">
        <div
          className="reveal reveal-zoom w-full xl:w-149"
          style={{ "--delay": "0ms" }}
        >
          <div className="group h-full overflow-hidden rounded-4xl">
            <img
              src="/public/8cd029524704ad463061f9cbfb9856c87f00e00f.png"
              alt=""
              className="w-full h-72 sm:h-96 xl:h-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 xl:w-auto xl:gap-13.5">
          <div
            className="reveal reveal-zoom w-full xl:w-149"
            style={{ "--delay": "150ms" }}
          >
            <div className="group overflow-hidden rounded-4xl">
              <img
                src="/public/4befab2173c93cd0f4d3202eb077c4d6712d5294.jpg"
                alt=""
                className="w-full h-48 sm:h-64 object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 md:gap-6">
            <div
              className="reveal reveal-zoom w-1/2 xl:w-71.5"
              style={{ "--delay": "300ms" }}
            >
              <div className="group overflow-hidden rounded-4xl">
                <img
                  className="w-full h-40 sm:h-64 object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                  src="/public/e64cb0ecff5f85e091652c2f6d48230f81bb6d3d.jpg"
                  alt=""
                />
              </div>
            </div>
            <div
              className="reveal reveal-zoom w-1/2 xl:w-71.5"
              style={{ "--delay": "450ms" }}
            >
              <div className="group overflow-hidden rounded-4xl">
                <img
                  className="w-full h-40 sm:h-64 object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                  src="/public/ab1b43d0004fd80976d4fb5fc50d054e4772eff6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="my-16 md:my-32 container mx-auto px-4">
      <div className="flex flex-col gap-10 md:gap-16 items-center">
        <div className="reveal flex flex-col w-full xl:w-[78%]">
          <h1 className="mb-6 text-3xl md:text-[42px] font-bold md:leading-12">
            What our guests are <br className="hidden md:block" />
            <span> saying </span>.
          </h1>
          <p className="flex flex-col text-[#6B7280] text-base md:text-[18px] font-medium leading-7">
            Real reviews from people who have experienced the magic of Gourmet{" "}
            <br className="hidden xl:block" />
            Bistro.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8 xl:w-auto xl:flex-row xl:items-stretch">
          <div
            className="reveal w-full max-w-95 xl:w-95"
            style={{ "--delay": "0ms" }}
          >
            <div className="flex h-full w-full flex-col p-6 md:p-8 border justify-center items-center border-[#E5E7EB] rounded-4xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex w-[90%] gap-1 mb-6">
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
              </div>
              <p className="mb-8 font-medium text-base md:text-[18px]">
                "The truffle burger is absolutely{" "}
                <br className="hidden xl:block" /> divine. The atmosphere is
                warm <br className="hidden xl:block" /> and the service is
                impeccable. <br className="hidden xl:block" /> Definitely our
                new favorite spot in <br className="hidden xl:block" /> the
                city."
              </p>
              <div className="flex w-[90%] gap-4">
                <div>
                  <img
                    className="w-12 rounded-[33554400px]"
                    src="/public/girl.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[16px] leading-6 font-[Poppins]">
                    Sarah Jenkins
                  </h1>
                  <p className="font-medium text-[14px] text-[#6B7280] leading-5">
                    Food Critic
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal w-full max-w-95 xl:w-95"
            style={{ "--delay": "150ms" }}
          >
            <div className="flex h-full w-full flex-col p-6 md:p-8 border justify-center items-center text-[#F8FAFC] bg-[#222222] border-[#E5E7EB] rounded-4xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex w-[90%] gap-1 mb-6">
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
              </div>
              <p className="mb-8 font-medium text-base md:text-[18px]">
                "An incredible dining experience.{" "}
                <br className="hidden xl:block" /> The attention to detail in
                every dish <br className="hidden xl:block" /> is remarkable. The
                wine pairing <br className="hidden xl:block" /> was perfect."
              </p>
              <div className="flex w-[90%] gap-4">
                <div>
                  <img
                    className="w-12 rounded-[33554400px]"
                    src="/public/man1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[16px] leading-6 font-[Poppins]">
                    Michael Ross
                  </h1>
                  <p className="font-medium text-[14px] text-[#6B7280] leading-5">
                    Gourmet Traveler
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal w-full max-w-95 xl:w-95"
            style={{ "--delay": "300ms" }}
          >
            <div className="flex h-full w-full flex-col p-6 md:p-8 border justify-center items-center border-[#E5E7EB] rounded-4xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex w-[90%] gap-1 mb-6">
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
                <img src="/public/start.png" alt="" />
              </div>
              <p className="mb-8 font-medium text-base md:text-[18px]">
                "Perfect for special occasions. We{" "}
                <br className="hidden xl:block" /> celebrated our anniversary
                here <br className="hidden xl:block" /> and the staff went above
                and <br className="hidden xl:block" /> beyond to make it
                special."
              </p>
              <div className="flex w-[90%] gap-4">
                <div>
                  <img
                    className="w-12 rounded-[33554400px]"
                    src="/public/girl3.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[16px] leading-6 font-[Poppins]">
                    Elena Gomez
                  </h1>
                  <p className="font-medium text-[14px] text-[#6B7280] leading-5">
                    Local Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="my-16 md:my-32 container mx-auto px-4 flex justify-center items-center">
      <div className="flex w-full flex-col xl:flex-row justify-center items-center gap-10 xl:gap-24">
        <div className="reveal reveal-left flex w-full flex-col gap-8 xl:w-auto">
          <h1 className="font-[Poppins] font-bold text-2xl md:text-[32px] text-[#222222] md:leading-12">
            Ready to experience it <br className="hidden md:block" /> yourself?
          </h1>

          <p className="font-medium text-base md:text-[18px] text-[#6B7280] leading-7">
            Book your table online in seconds. For parties larger than 10,
            <br className="hidden xl:block" /> please contact us directly via
            phone.
          </p>

          <div className="flex gap-4">
            <div>
              <img src="/public/phone.svg" alt="" />
            </div>
            <div>
              <p className="font-medium text-[14px] leading-5 font-[Poppins] text-[#6B7280]">
                Call Us
              </p>
              <h1 className="font-bold text-[18px] font-[Poppins] leading-7 text-[#222222]">
                +1 (555) 000-1234
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <img src="/public/location.svg" alt="" />
            </div>
            <div>
              <p className="font-medium text-[14px] leading-5 font-[Poppins] text-[#6B7280]">
                Visit Us
              </p>
              <h1 className="font-bold text-[18px] font-[Poppins] leading-7 text-[#222222]">
                123 Culinary Ave, Food District
              </h1>
            </div>
          </div>
        </div>

        <div className="reveal reveal-right mx-auto w-full max-w-150 rounded-[40px] border border-gray-200 bg-white p-5 sm:p-8 font-[Poppins] shadow-sm">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8F9FB] px-6 py-4 text-base text-[#222222] placeholder:text-gray-400 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8F9FB] px-6 py-4 text-base text-[#222222] placeholder:text-gray-400 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  id="date"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8F9FB] px-4 py-4 text-base text-[#222222] outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                  htmlFor="time"
                >
                  Time
                </label>
                <select
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8F9FB] px-6 py-4 text-base text-[#222222] outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                  id="time"
                  defaultValue="7:00 PM"
                >
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                >
                  Guests
                </label>
                <select
                  id="guests"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8F9FB] px-6 py-4 text-base text-[#222222] outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                  defaultValue="2 People"
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-semibold text-[#222222]"
              >
                Special Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Any allergies or special requests?"
                className="w-full resize-none rounded-2xl border border-gray-200 bg-[#F8F9FB] px-6 py-4 text-base text-[#222222] placeholder:text-gray-400 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
              />
            </div>

            <button className="w-full rounded-2xl bg-[#FF6B35] py-5 text-base font-bold text-white shadow-lg shadow-[#FF6B35]/30 transition hover:-translate-y-0.5 hover:bg-[#f25d26] active:scale-[0.99]">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>

    <footer className="bg-[#222222] font-[Poppins]">
      <div className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="reveal" style={{ "--delay": "0ms" }}>
            <div className="flex items-center gap-2">
              <img
                src="/public/Background.png"
                alt="دا اللوجو الجميل بتاعنا "
                className="h-12 w-12"
              />
              <h3 className="mb-2 text-lg font-bold text-white">
                Gourmet Bistro
              </h3>
            </div>
            <p className="mt-6 max-w-55 text-sm leading-relaxed text-gray-500">
              Bringing the art of dining to your table since 2008. Quality
              ingredients, exceptional service.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <img
                  alt=" دا بقا الانستاااااااااا"
                  src="/public/Link - Instagram.svg"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="#"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src="/public/Link - Facebook.svg"
                  alt="دا فيس يا صديقي"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="#"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src="/public/Link - Twitter.svg"
                  alt=" دا توتر ياسطا"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>

          <div className="reveal" style={{ "--delay": "100ms" }}>
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <ul className="mt-6 flex flex-col gap-4 text-sm text-gray-500">
              <li>
                <a href="#" className="transition-colors hover:text-[#FF6B35]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#FF6B35]">
                  Digital Menu
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#FF6B35]">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#FF6B35]">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div className="reveal" style={{ "--delay": "200ms" }}>
            <h4 className="text-base font-bold text-white">Opening Hours</h4>
            <ul className="mt-6 flex max-w-52.5 flex-col gap-4 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500">Mon - Thu</span>
                <span className="text-white">12:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Fri - Sat</span>
                <span className="text-white">12:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Sunday</span>
                <span className="text-white">11:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div className="reveal" style={{ "--delay": "300ms" }}>
            <h4 className="text-base font-bold text-white">Newsletter</h4>
            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Get the latest recipes and event updates.
            </p>
            <form className="mt-4 flex items-center gap-3">
              <input
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#2D2D2D] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#FF6B35]"
                type="email"
              />
              <button
                type="submit"
                className="shrink-0 transition duration-300 hover:scale-110 active:scale-95"
              >
                <img
                  alt=""
                  src="/public/Button - Subscribe.svg"
                  className="h-10 w-10"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-gray-500 sm:flex-row">
          <p>© 2024 Gourmet Bistro. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>,
);

setTimeout(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}, 100);