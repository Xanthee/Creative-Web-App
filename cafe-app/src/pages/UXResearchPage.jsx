import { Link } from "react-router-dom";
import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import EmpathyMap from "../assets/EmpathyMap.png";
import UserPersona from "../assets/UserPersona.png";
import UseByPost from "../assets/UseByPost.png";

export default function UXResearchPage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] mt-20 overflow-x-hidden mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.h1
        className="font-thin font-josefin text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 mt-6 sm:mt-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        UX & UI RESEARCH
      </motion.h1>

      {/* Case Study Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full mb-8 sm:mb-12">
        <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md min-w-0 flex items-center justify-center">
          <img
            src={UseByPost}
            alt="Use-By Case Study"
            className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md min-w-0">
          <h2 className="font-thin font-josefin text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            CASE STUDY: USE-BY
          </h2>
          <p className="text-sm sm:text-base mb-2">
            This was a group project where we designed Use-By, a mobile app to
            help students reduce food waste and save money by tracking expiry
            dates and sharing items in shared households.
          </p>
          <p className="text-sm sm:text-base mb-4 sm:mb-6">
            For this case study, I was able to do the business summary, goals,
            market research, user personas, empathy maps, and competitor
            analysis.
          </p>
          <button
            className="py-2 px-4 sm:px-6 w-full sm:w-auto bg-[#331C20] text-[#EEDEE0] rounded text-sm sm:text-base"
            onClick={() => window.open("/BusinessPlanUseBy.pdf", "_blank")}
          >
            Read the Business Plan
          </button>
        </div>
      </div>

      {/* Research Goals Section */}
      <div className="w-full max-w-full bg-[#331C20]/70 rounded-xl mb-8 sm:mb-12 text-white shadow-md p-4 sm:p-6 lg:p-8">
        <h2 className="font-thin font-josefin text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          RESEARCH GOALS
        </h2>
        <p className="text-sm sm:text-base mb-2">
          When designing Use-By, our team wanted to ensure the app solved real
          problems for students living in shared households. My role was to lead
          the UX research process, framing questions that would guide our design
          decisions and validate our assumptions.
        </p>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          The key research goals were:
        </p>

        {/* Numbered goals */}
        <p className="font-bold text-sm sm:text-base">1. Understand food management behaviors</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base">
          - Explore how students currently shop, store, and share food within
          shared accommodations.
        </p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Identify the common pain points that contribute to food waste.
        </p>

        <p className="font-bold text-sm sm:text-base">2. Identify financial and lifestyle challenges</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base">
          - Investigate how food waste impacts student budgets and day-to-day
          routines.
        </p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Understand the role of sustainability and cost-saving in their
          decision-making.
        </p>

        <p className="font-bold text-sm sm:text-base">3. Explore desired app features</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Discover which features (such as expiry notifications, recipe
          recommendations, food-sharing tools) would be most valuable and
          engaging for students.
        </p>

        <p className="font-bold text-sm sm:text-base">4. Evaluate competitor apps</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Analyze existing solutions like NoWaste, Fridgely, and Yuka to
          highlight strengths, weaknesses, and gaps in the current market.
        </p>

        <p className="font-bold text-sm sm:text-base">5. Inform the Use-By feature set</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Translate research insights into actionable design priorities,
          ensuring that our app directly addressed the real needs of our target
          audience.
        </p>
      </div>

      {/* Methods Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full mb-8 sm:mb-12">
        <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md min-w-0">
          <h2 className="font-thin font-josefin text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            METHODS USED
          </h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6">
            To ensure our design decisions were grounded in evidence, we used a
            combination of qualitative and quantitative research methods:
          </p>

          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base list-disc list-inside">
            <li>
              <span className="font-semibold">User Surveys</span> – Gathered
              data from students on food management habits. This revealed that
              28% frequently waste food before use and 84% wanted food-sharing
              features.
            </li>
            <li>
              <span className="font-semibold">Empathy Map</span> – Mapped out
              what students say, think, feel, and do around food waste, helping
              us empathize with their frustrations in shared kitchens.
            </li>
            <li>
              <span className="font-semibold">User Persona</span> – Defined a
              representative student profile (budget-conscious,
              sustainability-driven, living in shared accommodation) to guide
              design priorities.
            </li>
            <li>
              <span className="font-semibold">Competitor Analysis</span> –
              Studied apps like NoWaste, Fridgely, CookPad, and Yuka. We
              discovered gaps such as lack of food-sharing features, which
              informed our “Up for Grabs” functionality.
            </li>
            <li>
              <span className="font-semibold">User Journey Mapping</span> –
              Outlined the current experience of buying, storing, and wasting
              food vs. the improved journey with Use-By, highlighting
              opportunities for intervention.
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="flex flex-col space-y-4 sm:space-y-6 min-w-0">
          <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={EmpathyMap}
              alt="Empathy Map"
              className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain rounded-xl"
            />
          </div>
          <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={UserPersona}
              alt="User Persona"
              className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="w-full max-w-full bg-[#331C20]/70 rounded-xl mb-8 sm:mb-12 text-white shadow-md p-4 sm:p-6 lg:p-8">
        <h2 className="font-thin font-josefin text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          KEY FINDINGS
        </h2>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          From our research, we identified several important insights that shaped
          the development of Use-By:
        </p>

        <p className="font-bold text-sm sm:text-base">Food waste is a common issue among students.</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - 28% of respondents reported food going out of date before being used
          on a frequent basis, and a further 56% said this happened occasionally.
          This confirmed the scale of the problem we set out to address.
        </p>

        <p className="font-bold text-sm sm:text-base">Students want recipe support.</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Over half (56%) of respondents said they often look for recipes
          based on the ingredients they already have. This insight directly
          supported our plan to include recipe recommendations in the app.
        </p>

        <p className="font-bold text-sm sm:text-base">Sharing is a priority in shared households.</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - 84% of respondents said they would like the ability to share items
          with their flatmates. This led us to design the “up for grabs”
          feature, which allows users to pass on items before they expire.
        </p>

        <p className="font-bold text-sm sm:text-base">Competitors lack certain features.</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - While other food management apps provide expiry notifications and
          barcode scanning, they generally do not combine this with recipe
          suggestions or food sharing between housemates. This gave us a clear
          opportunity to differentiate Use-By in the market.
        </p>

        <p className="font-bold text-sm sm:text-base">Environmental awareness influences behavior.</p>
        <p className="indent-4 sm:indent-8 text-sm sm:text-base mb-4">
          - Many students expressed interest in reducing their environmental
          impact, which supported the inclusion of sustainability messaging
          within the app and future marketing campaigns.
        </p>
      </div>
    </div>
  );
}