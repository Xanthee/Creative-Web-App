import { Link } from "react-router-dom";
import React from 'react';
import "../index.css";
import { motion } from "framer-motion";
import EmpathyMap from '../assets/EmpathyMap.png';
import UserPersona from '../assets/UserPersona.png';
import UseByPost from '../assets/UsebyPost.png';

export default function UXResearchPage() {
    return (
        <div className="h-auto w-full md:w-[90%] mt-[10vh] mx-auto flex flex-col items-center justify-center">
            <motion.h1
                className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-12 mt-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                UX & UI RESEARCH
            </motion.h1> 
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
                    <img
                      src={UseByPost}
                      alt="User Persona"
                      className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-xl"
                    />
                </div>
                
                <div className="flex flex-col justify-center p-6 h-auto bg-white rounded-lg shadow-md">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">CASE STUDY: USE-BY</h2>
                    <p className="text-lg mb-2">
                        This was a group project where we designed Use-By, a mobile app to help students reduce food waste and save money by tracking expiry dates and sharing items in shared households.
                    </p>
                    <p className="text-lg mb-6">
                        For this case study, I was able to do the business summary, goals, market research, user personas, empathy maps and competitor analysis.
                    </p>
                    <button
                        className="py-2 w-48 bg-[#331C20] text-[#EEDEE0] rounded"
                        onClick={() => window.open("/BusinessPlanUseBy.pdf", "_blank")}
                    >
                        Read the Business Plan
                    </button>
                </div>
            </div>

            
            <div className="w-full h-full bg-[#331C20]/70 rounded-xl mb-12 text-white rounded-lg shadow-md p-6">
                <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">RESEARCH GOALS</h2>
                <p className="text-lg mb-2">
                    When designing Use-By, our team wanted to ensure the app solved real problems for students living in shared households. My role was to lead the UX research process, framing questions that would guide our design decisions and validate our assumptions.
                </p>
                <p className="text-lg mb-6">The key research goals were:</p>

                <p className="font-bold">1. Understand food management behaviors</p>
                <p className="indent-12">- Explore how students currently shop, store, and share food within shared accommodations.</p>
                <p className="indent-12 mb-4">- Identify the common pain points that contribute to food waste.</p>
                
                <p className="font-bold">2. Identify financial and lifestyle challenges</p>
                <p className="indent-12">- Investigate how food waste impacts student budgets and day to day routines.</p>
                <p className="indent-12 mb-4">- Understand the role of sustainability and cost-saving in their decision-making.</p>

                <p className="font-bold">3. Explore desired app features</p>
                <p className="indent-12 mb-4">- Discover which features (such as, expiry notifications, recipe recommendations, food-sharing tools) would be most valuable and engaging for students.</p>
               
                <p className="font-bold">4. Evaluate competitor apps</p>
                <p className="indent-12 mb-4">- Analyse existing solutions like NoWaste, Fridgely, and Yuka to highlight strengths, weaknesses, and gaps in the current market.</p>                

                <p className="font-bold">5. Inform the Use-By feature set</p>
                <p className="indent-12 mb-4">- Translate research insights into actionable design priorities, ensuring that our app directly addressed the real needs of our target audience.</p> 
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                
                <div className="flex flex-col justify-center p-6 h-auto bg-white rounded-lg shadow-md">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">METHODS USEDS</h2>
                    <p className="text-lg mb-6">
                        To ensure our design decisions were grounded in evidence, we used a combination of qualitative and quantitative research methods:
                    </p>

                    <p className="mb-3">1. User Surveys – Gathered data from students on food management habits. This revealed that 28% frequently waste food before use and 84% wanted food-sharing features.</p>
                    <p className="mb-3">2. Empathy Map – Mapped out what students say, think, feel, and do around food waste, helping us empathize with their frustrations in shared kitchens.</p>
                    <p className="mb-3">3. User Persona – Defined a representative student profile (budget-conscious, sustainability-driven, living in shared accommodation) to guide design priorities.</p>
                    <p className="mb-3">4. Competitor Analysis – Studied apps like NoWaste, Fridgely, CookPad, and Yuka. We discovered gaps such as lack of food-sharing features, which informed our “Up for Grabs” functionality.</p>
                    <p className="mb-3">5. User Journey Mapping – Outlined the current experience of buying, storing, and wasting food vs. the improved journey with Use-By, highlighting opportunities for intervention.</p>

                </div>

                <div className="flex flex-col space-y-4 sm:space-y-6">
                    <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
                        <img
                          src={EmpathyMap}
                          alt="Empathy Map"
                          className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-xl"
                        />
                      </div>
                        <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
                        <img
                          src={UserPersona}
                          alt="User Persona"
                          className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-xl"
                        />
                    </div>
                </div>
            </div>

                        
            <div className="w-full h-full bg-[#331C20]/70 rounded-xl mb-12 text-white rounded-lg shadow-md p-6">
                <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">KEY FINDINGS</h2>
                <p className="text-lg mb-6">From our research we identified several important insights that shaped the development of Use-By:</p>

                <p className="font-bold">Food waste is a common issue among students.</p>
                <p className="indent-12 mb-4">- 28% of respondents reported food going out of date before being used on a frequent basis, and a further 56% said this happened occasionally. This confirmed the scale of the problem we set out to address.</p>
                
                <p className="font-bold">Students want recipe support.</p>
                <p className="indent-12 mb-4">- Over half (56%) of respondents said they often look for recipes based on the ingredients they already have. This insight directly supported our plan to include recipe recommendations in the app.</p>

                <p className="font-bold">Sharing is a priority in shared households.</p>
                <p className="indent-12 mb-4">- 84% of respondents said they would like the ability to share items with their flatmates. This led us to design the “up for grabs” feature, which allows users to pass on items before they expire.</p>
               
                <p className="font-bold">Competitors lack certain features.</p>
                <p className="indent-12 mb-4">- While other food management apps provide expiry notifications and barcode scanning, they generally do not combine this with recipe suggestions or food sharing between housemates. This gave us a clear opportunity to differentiate Use-By in the market.</p>                

                <p className="font-bold">Environmental awareness influences behaviour.</p>
                <p className="indent-12 mb-4">- Many students expressed interest in reducing their environmental impact, which supported the inclusion of sustainability messaging within the app and future marketing campaigns.</p> 
            </div>

        </div>
    );
}
