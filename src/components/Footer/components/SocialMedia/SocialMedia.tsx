import SocialIcon from "../SocialIcon/SocialIcon";
import { socialMediaData } from "../../data/socialMedia";

export const SocialMedia = () => {
    const socials = socialMediaData;

  return (
    <>
      <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">Urmărește-ne</h4>
      <div className="mt-2 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 p-2 rounded-lg border border-indigo-100/50 shadow-inner">
        <p className="text-xs text-gray-500 mb-2">Fii la curent cu noutățile noastre</p>
        <div className="flex flex-wrap gap-2">
          {socials.map((social, idx) => (
            <SocialIcon key={idx} social={social} />
          ))}
        </div>
        <div className="mt-2 text-center">
          <span className="text-[10px] text-gray-400 italic">Alătură-te comunității noastre</span>
        </div>
      </div>
    </>
  );
};