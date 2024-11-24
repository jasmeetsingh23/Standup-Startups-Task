// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import GetInTouch from "./pages/GetInTouch";

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow mt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           <Route path="/get-in-touch" element={<GetInTouch />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import WhyChooseUs from "./pages/WhyChooseUs";
import GetInTouch from "./pages/GetInTouch";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-r from-gray-100 to-gray-300 text-black min-h-screen pt-20">
        {/* Adding pt-20 ensures there's spacing below the header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
